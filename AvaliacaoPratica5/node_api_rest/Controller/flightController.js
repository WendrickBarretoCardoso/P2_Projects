const { execSQLQuery } = require("../Config/db");

exports.getAllFlights = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM flight");
    res.json(results);
}

exports.getFlightById = async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await execSQLQuery("SELECT * FROM flight WHERE flight_id = " + id);
    res.json(results);
}