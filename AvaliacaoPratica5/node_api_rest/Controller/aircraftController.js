const { execSQLQuery } = require("../Config/db");

exports.getAllAircrafts = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM aircraft");
    res.json(results);
}

exports.getAircraftsById = async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await execSQLQuery("SELECT * FROM aircraft WHERE aircraft_id = " + id);
    res.json(results);
}