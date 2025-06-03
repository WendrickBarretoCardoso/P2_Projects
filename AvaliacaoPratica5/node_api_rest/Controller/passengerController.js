const { execSQLQuery } = require("../db");

exports.getAllPassengers = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM passenger");
    res.json(results);
};