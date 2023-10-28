import { z } from "zod";
import { SectionSchema } from "./section.schema";

export const CourseSchema = z.object({
    id: z.number(),
    name: z.string().min(1).max(255),
    slug: z.string().min(1).max(255),
    description: z.string(),
    active: z.boolean(),
    issue: z.string(),
    solution: z.string(),
    price: z.number(),
    categoryId: z.number(),
    image: z.string().url(),
    video: z.string().url(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    publishedAt: z.string().datetime().optional().nullable(),
    sections: z.array(SectionSchema).optional(),
});

export type Course = z.infer<typeof CourseSchema>;