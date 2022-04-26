import React from "react";

import "./style.css";

export const PictureCard = ({ styles, picture }) => {
  return (
    <div className={styles}>
      <img src={require(`../../assets/${picture}.png`)} alt="img" />
      <h2 className="main__picture__title">Webdesing Agentur</h2>
    </div>
  );
};
