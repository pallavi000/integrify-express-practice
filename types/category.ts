import { z } from "zod";
import { CategorySchema } from "../middlewares/categoryValidate";

export type Category = z.infer<typeof CategorySchema>;

export type categoryWithId = Category & { id: number };
