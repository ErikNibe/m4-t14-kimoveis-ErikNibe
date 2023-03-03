import { z } from "zod";
import { createScheduleSchema } from "../schemas/schedules.schemas";


type iCreateSchedule = z.infer<typeof createScheduleSchema>;

export {
    iCreateSchedule
};