const { execSQLQuery } = require("../Config/db");

exports.getAllAircrafts = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM aircraft");
    res.json(results);
}