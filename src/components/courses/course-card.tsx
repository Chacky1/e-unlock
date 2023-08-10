import Image from 'next/image';
import Button from '@/components/ui/button';
import styles from './course-card.module.css';

type CourseCardProps = {
    name: string;
    description: string;
    issue: string;
    image: string;
};

const CourseCard = ({ name, description, issue, image }: CourseCardProps) => {
  return (
    <div className={styles.course}>
      <div className={styles.course__image}>
        <Image src={image} alt={name} width={300} height={300} />
      </div>
      <div className={styles.course__content}>
        <h3>{issue}</h3>
        <p>{description}</p>
        <Button>{name}</Button>
      </div>
    </div>
  );
};

export default CourseCard;
