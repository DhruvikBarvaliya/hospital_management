const { jwt_key } = require("../Config/Config");
const jwt = require("jsonwebtoken");

function authorize(roles = []) {
  return [
    async (req, res, next) => {
      try {
        if (typeof roles === "string") {
          roles = [roles];
        }

        let token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, jwt_key);
        const { role } = decodedToken;

        if (roles.length && !roles.includes(role)) {
          return res.status(401).json({
            status: 401,
            code: "E_PERMISSION_DENIED",
            data: null,
            message: "Permission denied",
          });
        }

        next();
      } catch (err) {
        if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
          return res.status(401).json({
            status: 401,
            code: "E_TOKEN_ERROR",
            message: "JWT Token is expired or invalid",
          });
        } else {
          return res.status(500).json({
            status: false,
            message: "Server Error",
            error: err.message || err.toString(),
          });
        }
      }
    },
  ];
}
module.exports = authorize;
