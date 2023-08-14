import Image from 'next/image';
import Button from '@/components/ui/button';
import styles from './course-card.module.css';

type SaleCourseCardProps = {
    course: any;
};

const CourseCard = ({ course }: SaleCourseCardProps) => {
  return (
    <div className={styles.course}>
      <div className={styles.course__image}>
        <Image src={course.image} alt={course.name} width={300} height={300} />
      </div>
      <div className={styles.course__content}>
        <h3>{course.issue}</h3>
        <p>{course.description}</p>
        <Button>{course.name}</Button>
      </div>
    </div>
  );
};

export default CourseCard;
