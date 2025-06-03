require("dotenv").config();

//Conectar no bdd
const port = process.env.PORT;
const config = {
  user: 'Wendrick',
  password: 'Wendrick123',
  server: 'LAPTOP-9KO5IIE2', // ou IP, exemplo: '127.0.0.1'
  port: 1433,           // precisa estar habilitada
  database: 'demo_flight',
  options: {
    encrypt: false, // ou true se estiver usando SSL
    trustServerCertificate: true // importante se estiver com problema de certificado
  }
};

const sql = require('mssql');

// Chamando express como função
const express = require("express");
const app = express();

app.use(express.json);

// Conectar e Reconectar no BDD
let connection = null;
async function getConnection() {
    if(connection) {
        return connection;
    }
    await sql.connect(config);
    return connection;
}

// Realizar Querys no Banco pra nãp ficar repetindo
async function execSQLQuery(sqlQry) {
    await getConnection();
    const request = new sql.Request();
    const { recordset } = await request.query(sqlQry);
    return recordset;
}

app.post("/sysUser", async (req, res) => {
    const sysUsers = new sysUsers();
    sysUsers.id = input.question("Digite o id do User: ");
    sysUsers.name = input.question("Digite o nome do User: ");
    sysUsers.login = input.question("Digite o email de login do User: ")
    sysUsers.password = input.question("Digite a senha para login do User: ")
    let queijo = parseInt(input.question("Digite 1 para usuário admin e 2 para usuário regular: "));
    if (queijo === 1) {
        sysUsers.userType = 'admin';
    } else if (queijo === 2) {
        sysUsers.userType = 'regular';
    } else {
        console.log("Como a informação dita foi errada, o usuário criado estára inativo.")
        sysUsers.userType = 'inativo';
    }
    await execSQLQuery(`INSERT INTO sys_users(id, name, login_email, password, user_type) values (${sysUsers.id}, ${sysUsers.name}, ${sysUsers.login}, ${sysUsers.password}, ${sysUsers.userType})`)
    res.sendStatus(201);
})

app.use("/sysUser/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await execSQLQuery("SELECT * FROM sys_user WHERE id = " + id);
    res.json(results);
}) 

// Retornar todos os sysUsers
app.use("/sysUser", async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM sys_user");
    res.json(results);
}) 

// First Page
app.use("/", (req, res) => {
    res.json("Hello World!");
})

app.listen(port, () => {
    console.log("API está rodando");
});