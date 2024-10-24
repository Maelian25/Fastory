const authController = require("../controllers/authController");

module.exports = [
  {
    method: "POST",
    path: "/login",
    options: {
      auth: false,
    },
    handler: authController.login,
  },
];
