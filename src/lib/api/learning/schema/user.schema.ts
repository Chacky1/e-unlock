import { z } from "zod";
import { CourseSchema } from "./course.schema";

export const UserSchema = z.object({
    id: z.number(),
    code: z.string(),
    email: z.string().email(),
    courses: z.array(CourseSchema)
});

export type User = z.infer<typeof UserSchema>;