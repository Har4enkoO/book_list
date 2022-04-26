import React from "react";

import map from "../../assets/images/map.svg";
import location from "../../assets/images/location.svg";
import phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/mail.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import viber from "../../assets/images/viber.svg";
import messenger from "../../assets/images/messenger.svg";
import telegram from "../../assets/images/telegram.svg";


import styles from "./formContacts.module.scss";

export const FormContacts = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        We are always in touch and will be happy to resolve any of your
        questions.
      </p>
      <div className={styles.form_container}>
        <img className={styles.map} src={map} alt="map" />
        <img className={styles.location} src={location} alt="location" />
        <div className={styles.form_heading}> Contact us </div>
        <form className={styles.form_inputs}>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="text" placeholder="Phone" />
          <input className={styles.input} type="text" placeholder="Email" />
          <textarea
            className={styles.input_message}
            name="answer"
            placeholder="Message"
            rows="6"
          />
          <button className={styles.send_button}>Send</button>
          <p className={styles.privacy_policy}> Privacy policy </p>
        </form>
      </div>
      <div className={styles.contacts_container}>
        <hr className={styles.line} />
        <div className={styles.contacts}>
          <div className={styles.contact_phone}>
            <div className={styles.contact_heading}> Phone </div>
            <p className={styles.contact_text}>
              <img src={phone} alt="phone" />
              <span>+34 965020784</span>
            </p>
          </div>
          <div className={styles.contact_office}>
            <div className={styles.contact_heading}> Office in Spain </div>
            <p className={styles.contact_text}>
              Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB, first
              floor, 03189 - Orihuela Costa (Alicante), Spain
            </p>
          </div>
          <div className={styles.contact_mail}>
            <div className={styles.contact_heading}> E-mail </div>
            <p className={styles.contact_text}>
              <img src={mail} alt="mail" />
              <span>sales@wtgspain.com</span>
            </p>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.messangers_wrapper}>
          <div className={styles.heading}>We are online</div>
          <div className={styles.messangers}>
            <div className={styles.messanger}>
              <img src={whatsapp} alt="whatsapp" />
              <span> WhatsApp </span>
            </div>
            <div className={styles.messanger}>
              <img src={viber} alt="viber" />
              <span> Viber </span>
            </div>
            <div className={styles.messanger}>
              <img src={messenger} alt="messenger" />
              <span> Messenger </span>
            </div>
            <div className={styles.messanger}>
              <img src={telegram} alt="telegram" />
              <span> Telegram </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
