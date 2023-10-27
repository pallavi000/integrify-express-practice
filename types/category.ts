import { z } from "zod";
import { CategorySchema } from "../models/category";

export type Category = z.infer<typeof CategorySchema>;

export type categoryWithId = Category & { id: number };
