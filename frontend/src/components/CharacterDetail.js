import React from "react";
import "../css/CharacterDetail.css";

function CharacterDetail({ data }) {
  return (
    <div>
      <h2 className="detail-title">{data?.name}</h2>
      <ul className="detail-list">
        <li>
          <strong>Birth Year:</strong> {data?.birth_year || "Unknown"}
        </li>
        <li>
          <strong>Eye Color:</strong> {data?.eye_color}
        </li>
        <li>
          <strong>Gender:</strong> {data?.gender}
        </li>
        <li>
          <strong>Hair Color:</strong> {data?.hair_color}
        </li>
        <li>
          <strong>Height:</strong> {data?.height} cm
        </li>
        <li>
          <strong>Mass:</strong> {data?.mass} kg
        </li>
        <li>
          <strong>Skin Color:</strong> {data?.skin_color}
        </li>
        <li>
          <strong>Homeworld:</strong>{" "}
          <a href={data?.homeworld} target="_blank" rel="noopener noreferrer">
            View Homeworld
          </a>
        </li>
        <li>
          <strong>Films:</strong>{" "}
          {data?.films.length > 0 ? (
            <ul>
              {data.films.map((film, index) => (
                <li key={index}>
                  <a href={film} target="_blank" rel="noopener noreferrer">
                    View Film {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            "None"
          )}
        </li>
        <li>
          <strong>Starships:</strong> {data?.starships.length > 0 ? data.starships.join(", ") : "None"}
        </li>
        <li>
          <strong>Vehicles:</strong> {data?.vehicles.length > 0 ? data.vehicles.join(", ") : "None"}
        </li>
      </ul>
    </div>
  );
}

export default CharacterDetail;
