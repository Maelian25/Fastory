const axios = require("axios");

exports.search = async (request, h) => {
  const { query, type } = request.query;

  try {
    const response = await axios.get(`https://swapi.dev/api/${type}/`, {
      params: { search: query },
    });

    return { results: response.data.results };
  } catch (error) {
    return h.response({ message: "Erreur lors de la récupération des données de SWAPI" }).code(500);
  }
};
