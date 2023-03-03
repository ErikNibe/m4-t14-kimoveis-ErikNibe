import { z } from "zod";
import { createRealEstateSchema, listRealEstatesSchema, realEstateSchema } from "../schemas/realEstate.schemas";


type iCreateRealEstate = z.infer<typeof createRealEstateSchema>;
type iRealEstate = z.infer<typeof realEstateSchema>;
type iListRealEstate = z.infer<typeof listRealEstatesSchema>;

export {
    iCreateRealEstate,
    iRealEstate,
    iListRealEstate
};