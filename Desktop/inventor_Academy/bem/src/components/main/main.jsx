import React from "react";

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
          <img
            src={require("../../assets/main1.png")}
            alt="Food"
          />
          <h2 className="main__picture__left main__picture__title">
            Webdesing Agentur
          </h2>
        </div>
        <article className="main__article">
          <div className="main__article__wrapper">
            <h2 className="main__article__title">Webdesing Agentur</h2>
            <p className="main__article__title__p">
              Wir sind ein wirksames Team von Programmiern und Designer und
              bieten professionelle Dienstlei stungen rund um's Thema Webdesing
              und Online-Marketing an. Seint 2006 kultivieren wir
            </p>
          </div>
        </article>
      </section>
      <section className="main__section">
        <article className="main__article">
          <div className="main__article__wrapper">
            <h2 className="main__article__title">Webdesing Agentur</h2>
            <p className="main__article__title__p">
              Wir sind ein wirksames Team von Programmiern und Designer und
              bieten professionelle Dienstlei stungen rund um's Thema Webdesing
              und Online-Marketing an. Seint 2006 kultivieren wir
            </p>
          </div>
        </article>
        <div className="main__picture__right">
          <img
            src={require("../../assets/main2.png")}
            alt="Girl"
          />
          <h2 className="main__picture__title">Webdesing Agentur</h2>
        </div>
      </section>
      <section className="main__section">
        <div className="main__picture">
          <img
            src={require("../../assets/main3.png")}
            alt="planet"
          />
          <h2 className="main__picture__title">Webdesing Agentur</h2>
        </div>
        <article className="main__article">
          <div className="main__article__wrapper">
            <h2 className="main__article__title">Webdesing Agentur</h2>
            <p className="main__article__title__p">
              Wir sind ein wirksames Team von Programmiern und Designer und
              bieten professionelle Dienstlei stungen rund um's Thema Webdesing
              und Online-Marketing an. Seint 2006 kultivieren wir
            </p>
          </div>
        </article>
      </section>
      <section className="main__section">
        <article className="main__article">
          <div className="main__article__wrapper">
            <h2 className="main__article__title">Webdesing Agentur</h2>
            <p className="main__article__title__p">
              Wir sind ein wirksames Team von Programmiern und Designer und
              bieten professionelle Dienstlei stungen rund um's Thema Webdesing
              und Online-Marketing an. Seint 2006 kultivieren wir
            </p>
          </div>
        </article>
        <div className="main__picture__right">
          <img
            src={require("../../assets/main4.png")}
            alt="Spring"
          />
          <h2 className="main__picture__title">Webdesing Agentur</h2>
        </div>
      </section>
    </main>
  );
};
