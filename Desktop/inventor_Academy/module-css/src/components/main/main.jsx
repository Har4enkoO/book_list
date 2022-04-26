import React from "react";

import pageStyle from "../../assets/images/pageStyle.svg";
import mainImage from "../../assets/images/mainImage.svg";

import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div className={styles.container}>
      <img className={styles.page_style} src={pageStyle} alt="pageStyle" />
      <div className={styles.main_text}>
        <div className={styles.line}></div>
        <div className={styles.name}>WTG SPAIN</div>
        <div className={styles.main_question}>
          Do you need <span>some help</span>?
        </div>
        <p className={styles.text}>
          Contact us right now and our team will do everything to help you.
        </p>
        <button className={styles.contuct_us}>Contact us</button>
      </div>
      <img className={styles.main_image} src={mainImage} alt="mainImage" />
    </div>
  );
};
