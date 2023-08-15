import { clientApiLearning } from "@/lib/api/learning/client";

const fetchUser = (userCode: string) => {
    const user = clientApiLearning.fetchUser(userCode);
    
    return user;
};

export default fetchUser;
