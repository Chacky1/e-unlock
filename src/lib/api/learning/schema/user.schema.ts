import { z } from "zod";

const UserSchema = z.object({
    id: z.number(),
    code: z.string(),
    email: z.string().email(),
    courses: z.array(z.object({
        id: z.number(),
        name: z.string().min(1).max(255),
        description: z.string(),
        issue: z.string(),
        price: z.number(),
        categoryId: z.number(),
        image: z.string().url(),
        createdAt: z.string().datetime(),
        updatedAt: z.string().datetime(),
    }))
});

export default UserSchema;