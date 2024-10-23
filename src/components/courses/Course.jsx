import { NavLink } from "react-router-dom";

import "./style.css";
import React from "react";

const Course = ({ title, img, cost, index }) => {
  return (
    <NavLink className="all" to={`/course/${index}`}>
      <li className="course">
        <img src={img} alt="Course" className="course__img" />
        <p className="course__title">{title}</p>
        <p className="course__cost">{cost}</p>
      </li>
    </NavLink>
  );
};

export default Course;
