require("dotenv").config();

//Conectar no bdd
const { execSQLQuery } = require("./db");
const port = process.env.PORT;

// Chamando express como função
const express = require("express");
const app = express();
app.use(express.json()); 

// Retornar todos os GETS, INSERT, PACTH, DELETE
app.get("/aircraft", async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM aircraft");
    res.json(results);
}) 

app.get("/boardingPass", async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM boarding_pass");
    res.json(results);
})

app.get("/flight", async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM flight");
    res.json(results);
}) 

app.get("/passenger", async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM passenger");
    res.json(results);
})

app.delete("/sysUser/:id", async (req, res) => {
    try {
        console.log(req.body);
        const id = parseInt(req.params.id);
        await execSQLQuery(`DELETE sys_user WHERE id=${id}`)
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
})

app.patch("/sysUser/:id", async (req, res) => {
    try {
        console.log(req.body);
        const id = parseInt(req.params.id);
        const { name, login_email, password, user_type } = req.body;
        await execSQLQuery(`UPDATE sys_user SET name='${name}', login_email='${login_email}', password='${password}', user_type='${user_type}' 
            WHERE id=${id}`);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
})

app.post("/sysUser", async (req, res) => {
    try {
        console.log(req.body);
        const { name, login_email, password, user_type } = req.body;
        await execSQLQuery(`INSERT INTO sys_user (name,login_email,password,user_type) 
            VALUES ('${name}','${login_email}','${password}','${user_type}')`);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
})

app.get("/sysUser/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await execSQLQuery("SELECT * FROM sys_user WHERE id = " + id);
    res.json(results);
}) 

app.get("/sysUser", async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM sys_user");
    res.json(results);
}) 

// First Page
app.get("/", (req, res) => {
    res.json("Hello World!");
})

app.listen(port, () => {
    console.log("API está rodando");
});