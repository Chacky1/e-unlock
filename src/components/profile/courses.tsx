import { Course } from "@/lib/api/learning/schema/course.schema";

import ProfileCourse from "./course";
import styles from "./courses.module.css";

interface ProfileCoursesProps {
    courses: Course[];
}

const ProfileCourses = ({ courses }: ProfileCoursesProps) => {
    return (
        <div className={styles.courses}>
            {courses.map((course) => (
                <ProfileCourse key={course.id} course={course} />
            ))}
        </div>
    );
}

export default ProfileCourses;