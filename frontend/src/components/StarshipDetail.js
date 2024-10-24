import React from "react";
import "../css/StarshipDetail.css";

function StarshipDetail({ data }) {
  return (
    <div>
      <h2 className="detail-title">{data.name}</h2>
      <p>
        <strong>Modèle:</strong> {data.model}
      </p>
      <p>
        <strong>Manufacturier:</strong> {data.manufacturer}
      </p>
      <p>
        <strong>Cout:</strong> {data.cost_in_credits}
      </p>
      <p>
        <strong>Longueur:</strong> {data.length} meters
      </p>
      <p>
        <strong>Vitesse max:</strong> {data.max_atmosphering_speed} km/h
      </p>
      <p>
        <strong>Equipage:</strong> {data.crew}
      </p>
      <p>
        <strong>Passagers:</strong> {data.passengers}
      </p>
      <p>
        <strong>Capacité:</strong> {data.cargo_capacity} kg
      </p>
      <p>
        <strong>Consommables:</strong> {data.consumables}
      </p>
      <p>
        <strong>Rating:</strong> {data.hyperdrive_rating}
      </p>
      <p>
        <strong>Classe de bolide:</strong> {data.starship_class}
      </p>

      <h3>Pilotes</h3>
      <ul>
        {data?.pilots?.length > 0 ? (
          data.pilots.map((pilotUrl, index) => <li key={index}>{pilotUrl.split("/").slice(-2, -1)[0]}</li>)
        ) : (
          <li>Aucun pilote trouvé</li>
        )}
      </ul>

      <h3>Films</h3>
      <ul>
        {data?.films?.length > 0 ? (
          data.films.map((filmUrl, index) => <li key={index}>{filmUrl.split("/").slice(-2, -1)[0]}</li>)
        ) : (
          <li>Aucun film trouvé</li>
        )}
      </ul>
    </div>
  );
}

export default StarshipDetail;
