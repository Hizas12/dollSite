import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { courses } from "../helpers/coursesList";
import { Link } from "react-router-dom";
import { checkIsAuth } from "../redux/features/auth/authSlice";

const CoursePage = () => {
  const isAuth = useSelector(checkIsAuth);
  const { id } = useParams();
  const course = courses[id];

  return (
    <main className="section">
      <div className="container">
        <div className="course-details">
          <h1 className="title-1">{course.title}</h1>

          <img className="course-details__img" src={course.imgBig} alt="" />

          <div className="course-details__desk">{course.description}</div>
          {isAuth && (
            <Link to="/pay" className="btn">
              Приобрести
            </Link>
          )}

          <p></p>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
