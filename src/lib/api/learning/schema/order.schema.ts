import z from "zod";

export enum OrderStatus {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    CANCELLED = "CANCELLED",
}

export const OrderSchema = z.object({
    id: z.number(),
    userId: z.number(),
    courseId: z.number(),
    status: z.enum([OrderStatus.PENDING, OrderStatus.SUCCESS, OrderStatus.CANCELLED]),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

export type Order = z.infer<typeof OrderSchema>;