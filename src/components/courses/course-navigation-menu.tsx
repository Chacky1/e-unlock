"use client";

import Link from "next/link";
import { useState } from "react";

import { Course } from "@/lib/api/learning/schema/course.schema";
import CourseContentList from "@/components/courses/course-content-list";

import styles from "./course-navigation-menu.module.css";

type CourseNavigationMenuProps = {
  course: Course;
  userCode: string;
  activeLessonId?: number;
};

const CourseNavigationMenu = ({
  course,
  userCode,
  activeLessonId,
}: CourseNavigationMenuProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleNavigationMenu = () => {
    setIsMenuOpened((isMenuOpened) => !isMenuOpened);
  };

  return (
    <>
      <button
        className={styles["course-navigation__toggle"]}
        onClick={handleNavigationMenu}
      >
        {isMenuOpened ? (
          <svg
            width="50"
            height="50"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
            />
          </svg>
        ) : (
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#1c72b8"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        )}
      </button>
      <nav
        className={`${styles["course-navigation"]} ${
          isMenuOpened ? styles["course-navigation--open"] : ""
        }`}
      >
        <Link
          href={`/profile/${userCode}`}
          className={styles["course-navigation__back"]}
        >
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 72 72"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="m46.196 16.205l-19.392 19.46l19.392 19.46"
              />
            </svg>
          </span>
          Bibliothèque
        </Link>
        <h3 className={styles["course-navigation__title"]}>{course.name}</h3>
        <CourseContentList
          course={course}
          userCode={userCode}
          activeLessonId={activeLessonId}
        />
      </nav>
    </>
  );
};

export default CourseNavigationMenu;
