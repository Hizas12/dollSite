import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, registerUser } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isAuth = useSelector(checkIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setPassword("");
      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onSubmit={(e) => e.preventDefault()} className="container_login">
      <div className="login__wrapper">
        <form action="">
          <h1 className="log">Регистрация</h1>
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
            Зарегистрироваться
          </button>
          <div className="register-link">
            <p>
              Есть аккаунта? <Link to="/login">Вход</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
