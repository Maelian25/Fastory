import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSwapi, setFilter } from "../redux/actions/swapiActions";
import useDebounce from "../hooks/useDebounce";
import "../css/HomePage.css";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { results, filter, loading, error } = useSelector((state) => state.swapi);
  const token = localStorage.getItem("token");

  const queryRef = useRef(query);

  useEffect(() => {
    queryRef.current = query;
  }, [query]);

  const debouncedSearch = useDebounce(() => {
    if (queryRef.current.trim() === "") {
      dispatch({ type: "CLEAR_RESULTS" });
      return;
    }

    dispatch(searchSwapi(queryRef.current, filter, token));
  }, 300);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch();
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));

    setQuery("");

    dispatch({ type: "CLEAR_RESULTS" });
  };

  return (
    <div className="homepage">
      <h1 className="homepage-title">Recherche dans SWAPI</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Rechercher..."
          className="search-input"
        />
        <select value={filter} onChange={handleFilterChange} className="filter-select">
          <option value="people">Personnages</option>
          <option value="starships">Vaisseaux</option>
          <option value="planets">Planètes</option>
        </select>
      </div>

      {loading && <p className="loading-message">Chargement...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="results-list">
        {results.map((result, index) => {
          const urlParts = result.url.split("/");
          const type = urlParts[4];
          const id = urlParts[5];

          return (
            <li key={index} className="result-item">
              <a href={`/detail/${type}/${id}`} className="result-link">
                {result.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
