import React from "react";

import "./style.css";

export const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <div>GENIUS</div>
        </div>
        <div className="header__menu">
          <nav className="header__menu__list">
            <ul className="header__menu__list__ul">
              <li className="header__menu__list__li">PREISE</li>
              <li className="header__menu__list__li">REFERENZEN</li>
              <li className="header__menu__list__li">KONTAKT</li>
            </ul>
          </nav>
          <div className="header__language__dropdown">
            <button className="header__language__dropdown__btn">EN</button>
            <div className="header__language__dropdown__list">
              <div> UA</div>
              <div> UA</div>
              <div> UA</div>
            </div>
          </div>
        </div>
    </header>
  );
};
