import React from "react";
import "../css/CharacterDetail.css";

function CharacterDetail({ data }) {
  return (
    <div>
      <h2 className="detail-title">{data?.name}</h2>
      <ul className="detail-list">
        <li>
          <strong>Année de naissance:</strong> {data?.birth_year || "Unknown"}
        </li>
        <li>
          <strong>Couleur des yeux:</strong> {data?.eye_color}
        </li>
        <li>
          <strong>Genre:</strong> {data?.gender}
        </li>
        <li>
          <strong>Couleur de cheveux:</strong> {data?.hair_color}
        </li>
        <li>
          <strong>Taille:</strong> {data?.height} cm
        </li>
        <li>
          <strong>Poids:</strong> {data?.mass} kg
        </li>
        <li>
          <strong>Couleur de peau:</strong> {data?.skin_color}
        </li>
        <li>
          <strong>Homeworld:</strong>{" "}
          <a href={data?.homeworld} target="_blank" rel="noopener noreferrer">
            Voir planète
          </a>
        </li>
        <li>
          <strong>Films:</strong>{" "}
          {data?.films?.length > 0 ? (
            <ul>
              {data.films.map((film, index) => (
                <li key={index}>
                  <a href={film} target="_blank" rel="noopener noreferrer">
                    Voir Film {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            "None"
          )}
        </li>
        <li>
          <strong>Fusée:</strong> {data?.starships?.length > 0 ? data.starships.join(", ") : "None"}
        </li>
        <li>
          <strong>Véhicule:</strong> {data?.vehicles?.length > 0 ? data.vehicles.join(", ") : "None"}
        </li>
      </ul>
    </div>
  );
}

export default CharacterDetail;
