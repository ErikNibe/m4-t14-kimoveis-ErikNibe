import { z } from "zod";


const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
});

const scheduleSchema = createScheduleSchema.extend({
    id: z.number()
}).omit({realEstateId: true});

const listSchedulesSchema = scheduleSchema.array();

export {
    createScheduleSchema,
    listSchedulesSchema
};