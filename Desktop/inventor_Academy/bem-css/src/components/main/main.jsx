import React from "react";

import { Card } from "../card/card";

import "./style.css";

export const Main = () => {
  return (
    <main className="main">
      <section className="main__title__picture">
        <div className="main__title__picture__opacity"></div>
      </section>
      <div className="main__title">
        <div className="main__title__background"></div>
        <div>
          <h1>Referenzen</h1>
          <p>
            Von unseren Designern gestaltet, von unseren Entwicklern
            programmiert, von rnserem Team realisiert - in enger Abstimmung mit
            dem Kunden. Zum Festpreis.
          </p>
        </div>
      </div>
      <section className="main__section">
        <div className="main__picture">
          <img src={require("../../assets/main1.png")} alt="img" />
          <h2 className="main__picture__title">Webdesing Agentur</h2>
        </div>
        <Card />
      </section>
      <section className="main__section">
        <Card />
        <div className="main__picture__right">
          <img src={require("../../assets/main2.png")} alt="img" />
          <h2 className="main__picture__title">Webdesing Agentur</h2>
        </div>
      </section>
      <section className="main__section">
        <div className="main__picture">
          <img src={require("../../assets/main3.png")} alt="img" />
          <h2 className="main__picture__title">Webdesing Agentur</h2>
        </div>
        <Card />
      </section>
      <section className="main__section">
        <Card />
        <div className="main__picture__right">
          <img src={require("../../assets/main4.png")} alt="img" />
          <h2 className="main__picture__title">Webdesing Agentur</h2>
        </div>
      </section>
    </main>
  );
};
