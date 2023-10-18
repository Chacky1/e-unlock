import Image from "next/image";

import { Course } from "@/lib/api/learning/schema/course.schema";

import styles from "./course.module.css";

interface ProfileCourseProps {
    course: Course;
}

const ProfileCourse = ({ course }: ProfileCourseProps) => {
    return (
        <div className={styles.course}>
            <div className={styles.course__image}>
                <Image
                    src={course.image}
                    alt={course.name}
                    width={300}
                    height={200}
                    layout="responsive"
                />
            </div>
            <div className={styles.course__description}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <p>{course.price}</p>
            </div>
        </div>
    );
}

export default ProfileCourse;