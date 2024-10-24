import React from "react";
import "../css/PlanetDetail.css";

function PlanetDetail({ data }) {
  return (
    <div>
      <h2 className="detail-title">{data.name}</h2>
      <p>
        <strong>Climat:</strong> {data.climate}
      </p>
      <p>
        <strong>Dimaètre:</strong> {data.diameter} km
      </p>
      <p>
        <strong>Gravité:</strong> {data.gravity}
      </p>
      <p>
        <strong>Période orbitale:</strong> {data.orbital_period} days
      </p>
      <p>
        <strong>Population:</strong> {data.population}
      </p>
      <p>
        <strong>Période de rotation:</strong> {data.rotation_period} hours
      </p>
      <p>
        <strong>Eau à la surface:</strong> {data.surface_water}%
      </p>
      <p>
        <strong>Terrain:</strong> {data.terrain}
      </p>

      <h3>Residents</h3>
      <ul>
        {data?.residents?.length > 0 ? (
          data.residents.map((residentUrl, index) => (
            <li key={index}>
              <a href={`/detail/${residentUrl.split("/")[4]}/${residentUrl.split("/")[5]}`}>
                {residentUrl.split("/").slice(-2, -1)[0]}
              </a>
            </li>
          ))
        ) : (
          <li>No residents found</li>
        )}
      </ul>

      <h3>Films</h3>
      <ul>
        {data?.films?.length > 0 ? (
          data.films.map((filmUrl, index) => <li key={index}>{filmUrl.split("/").slice(-2, -1)[0]}</li>)
        ) : (
          <li>Aucun films trouvé</li>
        )}
      </ul>
    </div>
  );
}

export default PlanetDetail;
