import React from "react";
import "../css/StarshipDetail.css";

function StarshipDetail({ data }) {
  return (
    <div>
      <h2 className="detail-title">{data.name}</h2>
      <p>
        <strong>Model:</strong> {data.model}
      </p>
      <p>
        <strong>Manufacturer:</strong> {data.manufacturer}
      </p>
      <p>
        <strong>Cost in Credits:</strong> {data.cost_in_credits}
      </p>
      <p>
        <strong>Length:</strong> {data.length} meters
      </p>
      <p>
        <strong>Max Speed:</strong> {data.max_atmosphering_speed} km/h
      </p>
      <p>
        <strong>Crew:</strong> {data.crew}
      </p>
      <p>
        <strong>Passengers:</strong> {data.passengers}
      </p>
      <p>
        <strong>Cargo Capacity:</strong> {data.cargo_capacity} kg
      </p>
      <p>
        <strong>Consumables:</strong> {data.consumables}
      </p>
      <p>
        <strong>Hyperdrive Rating:</strong> {data.hyperdrive_rating}
      </p>
      <p>
        <strong>Starship Class:</strong> {data.starship_class}
      </p>

      <h3>Pilots</h3>
      <ul>
        {data?.pilots?.length > 0 ? (
          data.pilots.map((pilotUrl, index) => <li key={index}>{pilotUrl.split("/").slice(-2, -1)[0]}</li>)
        ) : (
          <li>No pilots found</li>
        )}
      </ul>

      <h3>Films</h3>
      <ul>
        {data?.films?.length > 0 ? (
          data.films.map((filmUrl, index) => <li key={index}>{filmUrl.split("/").slice(-2, -1)[0]}</li>)
        ) : (
          <li>No films found</li>
        )}
      </ul>
    </div>
  );
}

export default StarshipDetail;
