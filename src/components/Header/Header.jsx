import logo from "../../assets/logo-header.png";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import "./Header.css";

import { useState } from "react";

const Header = () => {
  const [hambClass, setHambClass] = useState("hambField");
  const [popupClass, setPopupClass] = useState("popup");
  const [isClicked, setClicked] = useState(false);

  const hambHandler = () => {
    if (!isClicked) {
      setPopupClass("popup open");
      setHambClass("hambField active");
    } else {
      setPopupClass("popup");
      setHambClass("hambField");
    }
    setClicked(!isClicked);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbarWrap">
            <a href="#" className="logoWrap">
              <img src={logo} alt="Logo" />
              <span className="logo">Minty</span>
            </a>
            <ul className="menu">
              <li>
                <a href="#advantages" className="menuLink">
                  Чому ми
                </a>
              </li>
              <li>
                <a href="#services" className="menuLink">
                  Наші послуги
                </a>
              </li>
              <li>
                <a href="#howWeWork" className="menuLink">
                  Як ми працюємо
                </a>
              </li>
              <li>
                <a href="#workInclude" className="menuLink">
                  У роботу входить
                </a>
              </li>
              <li>
                <a href="#equipment" className="menuLink">
                  Обладнання
                </a>
              </li>
              <li>
                <a href="#" className="menuLink">
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="contacts">
              <li>
                <a href="#">
                  <img src={instagram} alt="Instagram" width="21" height="21" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={telegram} alt="Telegram" width="21" height="21" />
                </a>
              </li>
              <li>
                <a href="tel:+380679843298" className="contactsPhone">
                  +380 (67) 984 32 98
                </a>
              </li>
            </ul>
            <div className={popupClass} id="popup"></div>
            <div className="hamb" onClick={hambHandler}>
              <div className={hambClass} id="hamb">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
