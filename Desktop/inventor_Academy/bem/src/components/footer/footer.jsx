import React from "react";

import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <nav className="footer__menu__navigation">
          <ul className="footer__menu__ul">
            <li className="footer__menu__li">
              <div>PREISE</div>
            </li>
            <li className="footer__menu__li">
              <div>REFERENZEN</div>
            </li>
            <li className="footer__menu__li">
              <div>KONTAKT</div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__box__adress">
        <div className="footer__box__contact">
          <div className="footer__box__contact__opacity">
            <a href="Psotsrt">Psotsrt, 45, 44890</a>
            <a href="mailto:hello@tratata.de">hello@tratata.de</a>
            <a href="tel:+0403803344">040380-33-44</a>
          </div>
        </div>
        <div className="footer__box__form">
          <h2>SCHREIBEN SIE UNS!</h2>
          <form action="">
            <input
              className="footer__box__input__firma footer__placeholder"
              type="text"
              placeholder="Firma/Organisation"
            />
            <br />
            <div className="footer__box__email__telefon">
              <input
                className="footer__box__input footer__placeholder"
                type="text"
                placeholder="E-mail"
              />
              <input
                className="footer__box__input footer__placeholder"
                type="text"
                placeholder="Telefon"
              />
            </div>
            <br />
            <textarea
              className="footer__placeholder"
              name="textinput"
              id=""
              cols="30"
              rows="10"
              placeholder="Was ist Ihr Anliegen?"
            ></textarea>
            <br />
            <button>SENDEN</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p>2019 Cenius Web Agentur.Alle Rchte vorbehalten</p>
      </div>
    </footer>
  );
};
