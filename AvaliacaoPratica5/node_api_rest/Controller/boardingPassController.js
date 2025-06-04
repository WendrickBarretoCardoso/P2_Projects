const { execSQLQuery } = require("../Config/db");

exports.getAllBoardingPasses = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM boarding_pass");
    res.json(results);
}

exports.getgetBoardingPassById = async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await execSQLQuery("SELECT * FROM boarding_pass WHERE boarding_pass_id = " + id);
    res.json(results);
}