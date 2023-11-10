import { toast } from "react-toastify";
import fetchLessonById from "@/actions/fetch-lesson-by-id";

import styles from "./course-content.module.css";
import fetchResourcesByLesson from "@/actions/fetch-resources-by-lesson";

type CourseContentProps = {
  lessonId: number;
};

const CourseContent = async ({ lessonId }: CourseContentProps) => {
  const lesson = await fetchLessonById(lessonId);
  const lessonResource = await fetchResourcesByLesson(lessonId);

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
      <video
        src={lesson.videoUrl}
        controls
        className={styles["lesson__video"]}
      />
      <h1 className={styles["lesson__title"]}>{lesson.name}</h1>
      <ul className={styles["lesson__resources"]}>
        {lessonResource.map((resource) => (
          <li key={resource.id} className={styles["lesson__resource"]}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              download={resource.name}
            >
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseContent;
