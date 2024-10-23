import "./style.css";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Добро пожаловать в творческую студию<em> VSBDolls</em>
          </strong>
          (VassabikaDolls) Евгении Мелях
        </h1>
      </div>
    </header>
  );
};

export default Header;
