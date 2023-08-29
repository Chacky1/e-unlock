import { clientApiLearning } from "@/lib/api/learning/client";
import { User } from "@/lib/api/learning/schema/user.schema";

const fetchUser = async (userCode: string): Promise<User | null> => {
    const user = await clientApiLearning.fetchUser(userCode);
    
    return user;
};

export default fetchUser;
