import { z } from "zod";
import { ProductSchema } from "../models/product";

export type TProductSchema = z.infer<typeof ProductSchema>;

export type TProduct = TProductSchema & { id: number };
