import React from "react";

import styles from "./panel.module.scss";

import email from "../../assets/images/panelEmail.svg";
import phoneNumber from "../../assets/images/PanelPhone.svg";
import whatsapp from "../../assets/images/panelWhatsapp.svg";
import likes from "../../assets/images/likes.svg";
import language from "../../assets/images/language.svg";

export const Panel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <img src={email} alt="email" />
          <span> sales@wtgspain.com </span>
        </div>
        <div className={styles.contact}>
          <img src={phoneNumber} alt="phoneNumber" />
          <span>+34965020784</span>
        </div>
        <div className={styles.contact}>
          <img src={whatsapp} alt="whatsappNumber" />
          <span> WhatsApp </span>
        </div>
      </div>
      <div className={styles.social}>
        <img src={likes} alt="likes" />
        <div className={styles.likesCount}>50</div>
        <img src={language} alt="language" />
      </div>
    </div>
  );
};
