import { toast } from "react-toastify";
import fetchLessonById from "@/actions/fetch-lesson-by-id";

import styles from "./course-content.module.css";

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
    <div className={styles.lesson}>
      <video src={lesson.videoUrl} controls className={styles["lesson__video"]}/>
    </div>
  );
};

export default CourseContent;
