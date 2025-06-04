const { execSQLQuery } = require("../Config/db");

exports.getAllPassengers = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM passenger");
    res.json(results);
};

exports.getPassengerById = async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await execSQLQuery("SELECT * FROM passenger WHERE passenger_id = " + id);
    res.json(results);
}