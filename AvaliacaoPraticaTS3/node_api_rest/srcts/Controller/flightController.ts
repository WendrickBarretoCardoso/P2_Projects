const { execSQLQuery } = require("../Config/db");

exports.getAllFlights = async (req: any, res: { json: (arg0: any) => void; }) => {
    const results = await execSQLQuery("SELECT * FROM flight");
    res.json(results);
}

exports.getFlightById = async (req: { params: { id: number; }; }, res: { json: (arg0: any) => void; }) => {
    const id = req.params.id;
    const results = await execSQLQuery("SELECT * FROM flight WHERE flight_id = " + id);
    res.json(results);
}