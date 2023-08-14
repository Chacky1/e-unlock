import { clientApiLearning } from "@/lib/client-api-learning";

const fetchUser = (userCode: string) => {
    const user = clientApiLearning.fetchUser(userCode);
    
    return user;
};

export default fetchUser;
