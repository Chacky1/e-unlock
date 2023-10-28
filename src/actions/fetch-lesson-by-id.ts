import clientApiLearning from "@/lib/api/learning/client";
import { Lesson } from "@/lib/api/learning/schema/lesson.schema";

const fetchLessonById = async (lessonId: number): Promise<Lesson | null> => {
  const lesson = await clientApiLearning.fetchLessonById(lessonId);

  return lesson;
};

export default fetchLessonById;
