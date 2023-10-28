import { z } from "zod";
import { LessonSchema } from "./lesson.schema";

export const SectionSchema = z.object({
    id: z.number(),
    name: z.string().min(1).max(255),
    description: z.string(),
    active: z.boolean(),
    courseId: z.number(),
    courseOrder: z.number(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    publishedAt: z.string().datetime().optional().nullable(),
    lessons: z.array(LessonSchema).optional(),
});

export type Section = z.infer<typeof SectionSchema>;