import React from "react";

import { TextCard } from "../textCard/textCard";
import { PictureCard } from "../pictureCard/pictureCard";

import "./style.css";

export const Main = () => {
  return (
    <main className="main">
      <section className="main__title__picture">
        <div className="main__title__picture__opacity"></div>
      </section>
      <div className="main__title">
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
        <PictureCard styles="main__picture" picture="main1" />
        <TextCard />
      </section>
      <section className="main__section">
        <TextCard />
        <PictureCard styles="main__picture__right" picture="main2" />
      </section>
      <section className="main__section">
        <PictureCard styles="main__picture" picture="main3" />
        <TextCard />
      </section>
      <section className="main__section">
        <TextCard />
        <PictureCard styles="main__picture__right" picture="main4" />
      </section>
    </main>
  );
};
