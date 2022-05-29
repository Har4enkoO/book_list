import { Link } from "react-router-dom";

import styles from "./Cards.module.scss";

const Cards = ({ page, results }) => {
  if (!results) {
    return (
      <div className="d-flex justify-content-center">
        "No Characters Found :/"
      </div>
    );
  } else {
    return results.map((el) => {
      const { id, image, name, status, location } = el;
      const statusStyle =
        status === "Dead"
          ? "bg-danger"
          : status === "Alive"
          ? "bg-success"
          : "bg-secondary";

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`card`}>
            <img className={`card-img-top`} src={image} alt="" />
            <div className={`card-body`}>
              <div className="card-title">{name}</div>
              <div className="card-text">Last Location</div>
              <div className="card-text">{location.name}</div>
            </div>
          </div>
          <div
            className={`${styles.badge} position-absolute badge ${statusStyle}`}
          >
            {status}
          </div>
        </Link>
      );
    });
  }
};

export default Cards;
