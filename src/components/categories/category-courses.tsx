import { slugify } from "@/lib/utils";
import CourseCards from "../courses/course-cards";
import styles from "./category-courses.module.css";

type CategoryCoursesProps = {
    category: any;
}

const CategoryCourses = ({ category }: CategoryCoursesProps) => {
    const slugifiedName = slugify(category.name);

    return (
        <section id={`category_${slugifiedName}`} className={styles.categoryCourses}>
            <div className={styles.categoryCourses__title}>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
            </div>
            <CourseCards categoryId={category.id} />
        </section>
    )
}

export default CategoryCourses;