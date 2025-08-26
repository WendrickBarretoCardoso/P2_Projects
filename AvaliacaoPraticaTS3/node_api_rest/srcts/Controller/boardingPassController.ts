const { execSQLQuery } = require("../Config/db");

exports.getAllBoardingPasses = async (req: any, res: { json: (arg0: any) => void; }) => {
    const results = await execSQLQuery("SELECT * FROM boarding_pass");
    res.json(results);
}

exports.getgetBoardingPassById = async (req: { params: { id: number; }; }, res: { json: (arg0: any) => void; }) => {
    const id = req.params.id;
    const results = await execSQLQuery("SELECT * FROM boarding_pass WHERE boarding_pass_id = " + id);
    res.json(results);
}