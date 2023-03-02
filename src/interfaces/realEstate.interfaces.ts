import { z } from "zod";
import { createRealEstateSchema, realEstateSchema } from "../schemas/realEstate.schemas";


type iCreateRealEstate = z.infer<typeof createRealEstateSchema>;
type iRealEstate = z.infer<typeof realEstateSchema>;

export {
    iCreateRealEstate,
    iRealEstate
};