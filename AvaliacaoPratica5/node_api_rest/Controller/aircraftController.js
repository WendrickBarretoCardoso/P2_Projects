const { execSQLQuery } = require("../db");

exports.getAllAircrafts = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM aircraft");
    res.json(results);
}