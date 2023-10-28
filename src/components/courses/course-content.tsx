import { toast } from "react-toastify";
import fetchLessonById from "@/actions/fetch-lesson-by-id";

type CourseContentProps = {
  lessonId: number;
};

const CourseContent = async ({ lessonId }: CourseContentProps) => {
  const lesson = await fetchLessonById(lessonId);

  if (!lesson) {
    return toast.error("🚨 La leçon ne s'est pas chargée correctement", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div>
      <video src={lesson.videoUrl} controls />
      <div>{lesson.textContent}</div>
    </div>
  );
};

export default CourseContent;
