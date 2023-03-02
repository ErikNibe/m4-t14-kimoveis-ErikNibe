import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import RealEstate from "./realEstate.enity";
import User from "./user.entity";

@Entity("schedules_users_properties")
class Schedule {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "date" })
    date: string

    @Column({ type: "time" })
    hour: string

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User
};

export default Schedule;