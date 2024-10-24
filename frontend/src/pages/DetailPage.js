import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/DetailPage.css";
import CharacterDetail from "../components/CharacterDetail";
import StarshipDetail from "../components/StarshipDetail";
import PlanetDetail from "../components/PlanetDetail";

const DetailPage = () => {
  const { type, id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/${type}/${Number(id)}/`);

        if (response.data) {
          setData(response.data);
        } else {
          setError("Aucun résultat trouvé.");
        }
      } catch (err) {
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, id]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let DetailComponent;
  if (type === "people") {
    DetailComponent = CharacterDetail;
  } else if (type === "starships") {
    DetailComponent = StarshipDetail;
  } else if (type === "planets") {
    DetailComponent = PlanetDetail;
  } else {
    DetailComponent = null;
  }

  return (
    <div className="detail-page">
      <h1>Détails de {data?.name}</h1>
      <div className="detail-content">
        <div className="detail-card">
          <h2>{data?.name}</h2>
          {DetailComponent ? <DetailComponent data={data} /> : <p>Unsupported type</p>}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
