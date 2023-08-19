import Image from 'next/image';
import Button from '@/components/ui/button';
import styles from './course-card.module.css';
import { Course } from '@/lib/api/learning/schema/course.schema';

type SaleCourseCardProps = {
    course: Course;
    inactive?: boolean;
};

const CourseCard = ({ course, inactive }: SaleCourseCardProps) => {
  return (
    <div className={styles.course}>
      <div className={styles.course__image}>
        <Image src={course.image} alt={course.name} width={300} height={200} />
      </div>
      <div className={styles.course__content}>
        <h3>{course.issue}</h3>
        <p>{course.description}</p>
        <Button>{course.name}</Button>
      </div>

      {inactive && <div className={styles.course__inactive}></div>}
    </div>
  );
};

export default CourseCard;
