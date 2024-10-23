import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import img from "./doll.png";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы");
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <img src={img} alt="" className="doll" />
            <strong>VSB</strong>Dolls
          </NavLink>
          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="courses"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Курсы
              </NavLink>
            </li>
            <li className="nav-list__item">
              <a href="#contacts" className="nav-list__link">
                Контакты
              </a>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="info"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Об авторе
              </NavLink>
            </li>
            {isAuth ? (
              <button onClick={logoutHandler} className="btn-login">
                <Link className="login">Выйти</Link>
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="btn-login">Войти</button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
