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
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/detail", {
          params: { id: Number(id), type },
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data) {
          setData(response.data.data);
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
  }, [type, id, token]);

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
        <div className="detail-card">{DetailComponent ? <DetailComponent data={data} /> : <p>Unsupported type</p>}</div>
      </div>
    </div>
  );
};

export default DetailPage;
