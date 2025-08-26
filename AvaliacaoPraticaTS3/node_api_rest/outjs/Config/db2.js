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
// Arquivo para mostrar como guardei as informações
const config = {
    user: '********',
    password: '**********',
    server: '*************',
    port: 1433,
    database: 'demo_flight',
    options: {
        encrypt: false, // ou true se estiver usando SSL
        trustServerCertificate: true // importante se estiver com problema de certificado
    }
};
const sql = require('mssql');
// Conectar e Reconectar no BDD
function getConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sql.connect(config);
    });
}
getConnection();
// Realizar Querys no Banco pra nãp ficar repetindo
function execSQLQuery(sqlQry) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = new sql.Request();
        const { recordset } = yield request.query(sqlQry);
        return recordset;
    });
}
module.exports = {
    execSQLQuery
};
//# sourceMappingURL=db2.js.map