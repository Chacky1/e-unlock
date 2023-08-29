import { clientApiLearning } from "@/lib/api/learning/client";
import { Course } from "@/lib/api/learning/schema/course.schema";

const fetchCourseBySlug = async (courseSlug: string): Promise<Course | null> => {
    const course = await clientApiLearning.fetchCourseBySlug(courseSlug);
    
    return course;
};

export default fetchCourseBySlug;