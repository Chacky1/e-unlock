"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Course } from "@/lib/api/learning/schema/course.schema";
import Button from "@/components/ui/button";

import styles from "./course.module.css";

interface ProfileCourseProps {
  course: Course;
}

const ProfileCourse = ({ course }: ProfileCourseProps) => {
  const router = useRouter();

  let firstLessonId: number = 0;
  if (course.sections && course.sections.length > 0) {
    firstLessonId = course.sections[0].lessons ? course.sections[0].lessons[0].id : 0;
  }

  if (firstLessonId === 0) {
    return toast.error(`🚨 Le cours ${course.name} ne s'est pas chargé correctement`, {
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

  const onClickCourse = () => {
    router.push(`/courses/${course.slug}/${firstLessonId}`);
  };

  return (
    <div className={styles.course}>
      <div className={styles.course__image}>
        <Image
          src={course.image}
          alt={course.name}
          width={300}
          height={200}
        />
      </div>
      <div className={styles.course__description}>
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <Button
          variant="secondary"
          style={{ color: "#fff" }}
          onClick={onClickCourse}
        >
          Accéder au cours
        </Button>
      </div>
    </div>
  );
};

export default ProfileCourse;
