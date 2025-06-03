const { execSQLQuery } = require("../db");

exports.getAllFlights = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM flight");
    res.json(results);
}