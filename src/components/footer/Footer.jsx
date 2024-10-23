import React from "react";
import "./style.css";

import telagram from "./img/telegram.svg";
import vk from "./img/vk.svg";
import youtube from "./img/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <p id="contacts">Написать мне:</p>
              <a href="https://vk.com/vsbdolls" target="_blank" rel="noreferrer">
                <img src={vk} alt="vk" />
              </a>
              <a href="https://t.me/vassabika" target="_blank" rel="noreferrer">
                <img src={telagram} alt="telegram"  />
              </a>
              <a href="https://www.youtube.com/@VassabikaDolls" target="_blank" rel="noreferrer">
                <img src={youtube} alt="youtube"  />
              </a>
            </li>
          </ul>
          <div className="email">
            <p>Email: vassabika.info@gmail.com</p>
          </div>
          <div className="copi">
            <p>©2024, VSBDolls</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
