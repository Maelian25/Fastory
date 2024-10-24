const Jwt = require("@hapi/jwt");

const users = {
  luke: {
    username: "Luke",
    password: "DadSucks",
  },
};

exports.login = (request, h) => {
  const { username, password } = request.payload;

  if (username === users.luke.username && password === users.luke.password) {
    const token = Jwt.token.generate(
      {
        aud: "urn:audience:test",
        iss: "urn:issuer:test",
        user: username,
      },
      {
        key: process.env.SECRET_KEY,
        algorithm: "HS256",
      }
    );

    return { token };
  }

  return h.response({ message: "Nom d'utilisateur ou mot de passe incorrect" }).code(401);
};
