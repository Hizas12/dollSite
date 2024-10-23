import React from "react";
import { courses } from "../helpers/coursesList";
import Course from "../components/courses/Course";


const CoursesPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1" id="course">
          Курсы
        </h2>
        <ul className="courses">
          {courses.map((course, index) => {
            return (
              <Course
                key={index}
                title={course.title}
                img={course.img}
                cost={course.cost}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default CoursesPage;
