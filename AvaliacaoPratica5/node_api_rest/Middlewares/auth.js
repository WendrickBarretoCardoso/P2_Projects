const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET

function verifyJWTRegular(req, res, next) {
    const token = req.headers["x-access-token"];
    console.log(validation);
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ auth: false, message: "Token inválido." });
        req.userId = decoded.userId;
        next();
    });
}

function verifyJWTAdmin(req, res, next) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (decoded.user_type !== "admin") {
            return res.status(403).json({ message: "Acesso negado: somente administradores" });
        }
        if (err) return res.status(401).json({ auth: false, message: "Token inválido." });
        req.userId = decoded.userId;
        next();
    });
}

module.exports = { verifyJWTRegular, verifyJWTAdmin };