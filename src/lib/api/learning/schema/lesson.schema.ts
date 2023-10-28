import { z } from "zod";

export const LessonSchema = z.object({
    id: z.number(),
    name: z.string().min(1).max(255),
    textContent: z.string(),
    sectionId: z.number(),
    sectionOrder: z.number(),
    videoUrl: z.string().url(),
    active: z.boolean(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    publishedAt: z.string().datetime().optional().nullable(),
});

export type Lesson = z.infer<typeof LessonSchema>;