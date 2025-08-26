"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { execSQLQuery } = require("../Config/db");
const jwt = require("jsonwebtoken");
exports.doLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { login_email, password } = req.body;
    try {
        const result = yield execSQLQuery(`SELECT id, login_email, password, user_type FROM sys_user WHERE login_email='${login_email}'`);
        if (result.length === 0) {
            console.log("não encontrado");
        }
        const user = result[0];
        if (login_email === user.login_email && password === user.password) {
            const token = jwt.sign({ userId: user.id, user_type: user.user_type }, process.env.JWT_SECRET, { expiresIn: 3600 });
            return res.status(200).json({ message: "Login realizado com sucesso", auth: true, token });
        }
        else {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }
    }
    catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
});
//# sourceMappingURL=loginController.js.map