import React from "react";

import logo from "../../assets/images/logo.svg";
import phone from "../../assets/images/footerPhone.svg";
import mail from "../../assets/images/FooterEmail.svg";
import geolocation from "../../assets/images/geolocation.svg";
import star from "../../assets/images/Star.svg";
import facebook from "../../assets/images/facebook.svg";
import insta from "../../assets/images/instagram.svg";
import link from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/youtube.svg";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <p className={styles.footer_heading}>THE BESTREAL ESTATE IN SPAIN</p>
      <hr className={styles.line} />
      <div className={styles.footer_menu}>
        <div className={styles.footer_item}>All cities</div>
        <div className={styles.footer_item}>Blog</div>
        <div className={styles.footer_item}>Video</div>
        <div className={styles.footer_item}>Contacts</div>
      </div>
      <div className={styles.footer_info}>
        <div className={styles.contacts_info}>
          <div className={styles.info_heading}>Contacts: </div>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <img src={phone} alt="phone" />
              <span> +34 (965) 020 - 784 </span>
            </div>
            <div className={styles.contact}>
              <img src={mail} alt="mail" />
              <span> sales@wtgspain.com </span>
            </div>
            <div className={styles.contact}>
              <img src={geolocation} alt="geolocation" />
              <span>
                Centro Comercial «Playa Flamenca» C/ Niagara, 63 Local 60/PB,
                first floor, 03189 - Orihuela Costa (Alicante), Spain
              </span>
            </div>
          </div>
        </div>
        <div className={styles.type}>
          <div className={styles.info_heading}>Type: </div>
          <div className={styles.type_nav}>
            <div>Appartaments</div>
            <div>Penthousses</div>
            <div>Townhouses</div>
            <div>Commercial</div>
            <div>Bungalows</div>
            <div>Duplexes</div>
            <div>Villas</div>
          </div>
        </div>
        <div className={styles.follow}>
          <div className={styles.info_heading}> Follow us: </div>
          <ul className={styles.list_follow}>
            <li>
              <img src={facebook} alt="facebook" />
              <span> Facebook</span>
            </li>
            <li>
              <img src={youtube} alt="youtube" />
              <span>YouTube</span>
            </li>
            <li>
              <img src={link} alt="linkedin" />
              <span> Linkedin </span>
            </li>
            <li>
              <img src={insta} alt="instagram" />
              <span> Instagram </span>
            </li>
          </ul>
          <div className={styles.subscribe}>
            <span>Subscribe to new objects</span>
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="Your email"
          />
          <input className={styles.submit} type="submit" value="Subscribe" />
        </div>
        <div className={styles.reating}>
          <span className={styles.reating14}>Reating 4.9/5: </span>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <span className={styles.reating12}>820 votes </span>
        </div>
      </div>
      <a href="#"></a>
      <p className={styles.copyright}>
        The company "WTG Spain" specializes in the investment and sale of real
        estate in Spain, and the provision of legal and consulting services. All
        rights reserved. "WTG Spain" - The Best Real Estate in Spain. ©
        Copyright 2007 - 2020.
      </p>
    </div>
  );
};
