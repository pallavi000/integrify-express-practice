import { z } from "zod";

import { UserSchema } from "../models/user";

export type TUserSchema = z.infer<typeof UserSchema>;

export type TUser = TUserSchema & { id: number };
