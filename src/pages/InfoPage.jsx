import React from "react";
import img from "./../img/info.jpg";
import img1 from "./../img/info1.jpg";

const InfoPage = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="info">
          <h1 className="title_1">Об авторе</h1>
          <p className="course-details__desk">
            Евгения Мелях, известная вам как Вассабика, - профессиональный
            художник. Окончила художественную школу при академии имени
            Строганова. Образование: ВГИК, специальность художник-постановщик
            игрового кинематографа, мастерская Петра Пашкевича и Александра
            Попова. Замужем, воспитывает четырёх детей.
          </p>
          <div className="img_info">
            <img src={img} alt="" />
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="info_draw">
          <h2 className="title_2">Учимся рисовать и фотографировать кукол</h2>
          <p className="course-details__desk">
            В школе VSBDolls вы можете пройти очное или онлайн обучение. По всем
            вопросам индивидуального и группового очного обучения вы можете
            написать мне на почту: vassabika.info@gmail.com Мои новые работы и
            новости школы VSBDolls в группе
            <a target="_blank" rel="noreferrer" href="https://vk.com/vsbdolls">
              ВКонтакте
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default InfoPage;
