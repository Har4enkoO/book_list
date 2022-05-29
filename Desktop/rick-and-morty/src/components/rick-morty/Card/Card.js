import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

const Card = () => {
  const { id } = useParams();

  const [fetchedData, setFetchedData] = useState([]);

  const { name, location, origin, gender, image, status, species } =
    fetchedData;

  const statusStyle =
    status === "Dead"
      ? "bg-danger"
      : status === "Alive"
      ? "bg-success"
      : "bg-secondary";

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, [id]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        <div className={`badge ${statusStyle} fs-5`}>{status}</div>
        <div>
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div>
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div>
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div>
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
