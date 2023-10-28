import z from "zod";

export const OrderSchema = z.object({
    id: z.number(),
    userId: z.number(),
    courseId: z.number(),
    status: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

export type Order = z.infer<typeof OrderSchema>;