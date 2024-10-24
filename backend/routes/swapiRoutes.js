const swapiController = require("../controllers/swapiController");

module.exports = [
  {
    method: "GET",
    path: "/search",
    handler: swapiController.search,
  },
  {
    method: "GET",
    path: "/detail",
    handler: swapiController.detail,
  },
];
