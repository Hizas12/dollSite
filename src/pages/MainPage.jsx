import React from "react";
import Header from "../components/header/Header";
// import Slider from "../components/slider/Slider";
import Gallery from "../components/gallery/Gallery";

const MainPage = () => {
  // const reviews = [
  //   { name: "Иван", text: "Отличный сервис!" },
  //   { name: "Мария", text: "Очень доволен покупкой!" },
  //   { name: "Алексей", text: "Рекомендую всем!" },
  // ];

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-1">
            Программа онлайн обучения в творческой студии VSBDolls
          </h2>
          <p className = "course-details__desk">
            Программа онлайн обучения состоит из базовых тренингов или
            видео-курсов с общим названием{" "}
            <strong>«Создание образа куклы»</strong> на примере разных кукол
            разных производителей и <strong>мастер-классов</strong> на темы,
            которые при росписи вызывают наибольшее количество вопросов у
            художников: брови, губы, руки, веснушки и другие.{" "}
          </p>
          {/* <h3 className="title-1">Отзывы клиентов</h3>
          <Slider reviews={reviews} /> */}
        </div>
        <div className="section">
          <div className="gallery">
            <h3 className="title-3">
              Примеры созданных кукол в творческой студии{" "}
              <strong>VSBDolls</strong>
            </h3>
            <Gallery />
          </div>
        </div>
        <h4 className="title-1">
            Внимание! Приобрести курсы можно только после регистрации!
          </h4>
      </main>
    </>
  );
};

export default MainPage;
