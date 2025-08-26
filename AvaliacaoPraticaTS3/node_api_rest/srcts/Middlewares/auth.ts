const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET

function verifyJWTRegular(req: { headers: { [x: string]: any; }; userId: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { auth: boolean; message: string; }): any; new(): any; }; }; }, next: () => void) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (err: any, decoded: { userId: any; }) => {
        if (err) return res.status(401).json({ auth: false, message: "Token inválido." });
        req.userId = decoded.userId;
        next();
    });
}

function verifyJWTAdmin(req: { headers: { [x: string]: any; }; userId: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; auth?: boolean; }): any; new(): any; }; }; }, next: () => void) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (err: any, decoded: { user_type: string; userId: any; }) => {
        if (decoded.user_type !== "admin") {
            return res.status(403).json({ message: "Acesso negado: somente administradores" });
        }
        if (err) return res.status(401).json({ auth: false, message: "Token inválido." });
        req.userId = decoded.userId;
        next();
    });
}

module.exports = { verifyJWTRegular, verifyJWTAdmin };