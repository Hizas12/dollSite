import "./styles/main.css";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./redux/features/auth/authSlice.js";
import AddCoursePage from "./pages/AddCoursePage.jsx";
import Pay from "./pages/Pay.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe);
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/createCourse" element={<AddCoursePage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="course/:id" element={<CoursePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="pay" element={<Pay />} />
      </Routes>
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
