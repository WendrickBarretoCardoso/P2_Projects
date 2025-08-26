const sql = require('mssql');

// Conectar e Reconectar no BDD
async function getConnection() {
    await sql.connect(config);
}
getConnection();

// Realizar Querys no Banco pra nãp ficar repetindo
async function execSQLQuery(sqlQry) {
    const request = new sql.Request();  
    const { recordset } = await request.query(sqlQry);
    return recordset;
}

module.exports = {
    execSQLQuery

}
