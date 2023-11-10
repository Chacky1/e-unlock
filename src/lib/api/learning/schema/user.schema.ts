import { z } from "zod";
import { CourseSchema } from "./course.schema";

export const UserSchema = z.object({
    id: z.number(),
    code: z.string(),
    email: z.string().email(),
    firstName: z.string().min(1).max(255),
    lastName: z.string().min(1).max(255),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    deletedAt: z.string().datetime().optional().nullable(),
    courses: z.array(CourseSchema).optional(),
});

export type User = z.infer<typeof UserSchema>;