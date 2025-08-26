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
exports.getAllSysUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield execSQLQuery("SELECT * FROM sys_user");
    res.json(results);
});
exports.getSysUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const results = yield execSQLQuery("SELECT * FROM sys_user WHERE id = " + id);
    res.json(results);
});
exports.createSysUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { name, login_email, password, user_type } = req.body;
        yield execSQLQuery(`INSERT INTO sys_user (name,login_email,password,user_type) 
            VALUES ('${name}','${login_email}','${password}','${user_type}')`);
        res.sendStatus(200);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
});
exports.updateSysUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const id = req.params.id;
        const { name, login_email, password, user_type } = req.body;
        yield execSQLQuery(`UPDATE sys_user SET name='${name}', login_email='${login_email}', password='${password}', user_type='${user_type}' 
            WHERE id=${id}`);
        res.sendStatus(200);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
});
exports.deleteSysUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const id = req.params.id;
        yield execSQLQuery(`DELETE sys_user WHERE id=${id}`);
        res.sendStatus(204);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
});
//# sourceMappingURL=sysUserController.js.map