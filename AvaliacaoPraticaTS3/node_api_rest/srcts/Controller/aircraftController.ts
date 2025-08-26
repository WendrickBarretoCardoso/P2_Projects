const { execSQLQuery } = require("../Config/db");

exports.getAllAircrafts = async (req: any, res: { json: (arg0: any) => void; }) => {
    const results = await execSQLQuery("SELECT * FROM aircraft");
    res.json(results);
}

exports.getAircraftsById = async (req: { params: { id: number; }; }, res: { json: (arg0: any) => void; }) => {
    const id = req.params.id;
    const results = await execSQLQuery("SELECT * FROM aircraft WHERE aircraft_id = " + id);
    res.json(results);
}