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