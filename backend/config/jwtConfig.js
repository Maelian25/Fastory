require("dotenv").config();

exports.jwtConfig = {
  keys: process.env.SECRET_KEY,
  verify: {
    aud: false,
    iss: false,
    sub: false,
    nbf: true,
    exp: true,
    maxAgeSec: 14400, // 4 heures
    timeSkewSec: 15,
  },
  validate: (artifacts, request, h) => {
    return {
      isValid: true,
      credentials: { user: artifacts.decoded.payload.user },
    };
  },
};
