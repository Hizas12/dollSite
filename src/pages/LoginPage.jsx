import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, loginUser } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      toast(status);
      if (isAuth) navigate("/");
    }
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onSubmit={(e) => e.preventDefault()} className="container_login">
      <div className="login__wrapper">
        <form action="">
          <h1 className="log">Вход</h1>
          <div className="input-box">
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn-reg" onClick={handleSubmit}>
            Войти
          </button>
          <div className="register-link">
            <p>
              Нет аккаунта?
              <Link to="/register">Регистрация</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
