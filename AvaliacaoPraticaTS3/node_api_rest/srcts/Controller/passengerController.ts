const { execSQLQuery } = require("../Config/db");

exports.getAllPassengers = async (req: any, res: { json: (arg0: any) => void; }) => {
    const results = await execSQLQuery("SELECT * FROM passenger");
    res.json(results);
};

exports.getPassengerById = async (req: { params: { id: number; }; }, res: { json: (arg0: any) => void; }) => {
    const id = req.params.id;
    const results = await execSQLQuery("SELECT * FROM passenger WHERE passenger_id = " + id);
    res.json(results);
}