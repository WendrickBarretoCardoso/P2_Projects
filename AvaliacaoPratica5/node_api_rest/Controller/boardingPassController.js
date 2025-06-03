const { execSQLQuery } = require("../db");

exports.getAllBoardingPasses = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM boarding_pass");
    res.json(results);
}