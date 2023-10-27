import { z } from "zod";
import { CategorySchema } from "../models/category";

export type TCategorySchema = z.infer<typeof CategorySchema>;

export type TCategory = TCategorySchema & { id: number };
