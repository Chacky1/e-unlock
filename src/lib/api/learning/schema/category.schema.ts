import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string(),
  color: z.string().regex(/^#[0-9a-f]{6}$/i),
  image: z.string().url(),
});

export type Category = z.infer<typeof CategorySchema>;
