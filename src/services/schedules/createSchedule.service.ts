import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iCreateSchedule } from "../../interfaces/schedules.interfaces";


const createScheduleService = async (payload: iCreateSchedule, userId: number): Promise<string> => {

    const date = new Date(`${payload.date} ${payload.hour}`);

    if (date.getHours() < 8 || date.getHours() > 18) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

    if (date.getDay() === 0 || date.getDay() === 6) throw new AppError("Invalid date, work days are monday to friday", 400);

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const foundScheduleByDateAndTime: RealEstate | null = await realEstateRepository.createQueryBuilder("realEstate")
    .innerJoinAndSelect("realEstate.schedules", "schedules_users_properties")
    .where("realEstate.id = :id", {id: payload.realEstateId})
    .andWhere("schedules_users_properties.hour = :hour", {hour: payload.hour})
    .andWhere("schedules_users_properties.date = :date", {date: payload.date})
    .getOne();

    if (foundScheduleByDateAndTime) throw new AppError("Schedule to this real estate at this date and time already exists", 409);

    const foundScheduleByUser: User | null = await userRepository.createQueryBuilder("users")
    .innerJoinAndSelect("users.schedule", "schedules_users_properties")
    .where("users.id = :id", {id: userId})
    .andWhere("schedules_users_properties.hour = :hour", {hour: payload.hour})
    .andWhere("schedules_users_properties.date = :date", {date: payload.date})
    .getOne();

    if (foundScheduleByUser) throw new AppError("User schedule to this real estate at this date and time already exists", 409);

    const foundRealEstate: RealEstate | null = await realEstateRepository.findOneBy({
        id: payload.realEstateId
    });

    if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

    const foundUser: User | null = await userRepository.findOneBy({
        id: userId
    });

    const schedule = scheduleRepository.create({
        date: date,
        hour: payload.hour,
        realEstate: foundRealEstate,
        user: foundUser!
    });
    await scheduleRepository.save(schedule);

    return "Schedule created";

};

export default createScheduleService;