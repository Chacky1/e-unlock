import clientApiLearning from "@/lib/api/learning/client";

const fetchResourcesByLesson = async (lessonId: number) => {
  const resources = await clientApiLearning.fetchResourcesByLessonId(lessonId);

  return resources;
};

export default fetchResourcesByLesson;
