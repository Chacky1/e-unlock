import z from "zod";

export const ResourceSchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  lessonId: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Resource = z.infer<typeof ResourceSchema>;
