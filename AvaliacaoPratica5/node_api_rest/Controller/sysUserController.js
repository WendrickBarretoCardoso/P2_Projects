const { execSQLQuery } = require("../Config/db");

exports.getAllSysUsers = async (req, res) => {
    const results = await execSQLQuery("SELECT * FROM sys_user");
    res.json(results);
}

exports.getSysUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await execSQLQuery("SELECT * FROM sys_user WHERE id = " + id);
    res.json(results);
}

exports.createSysUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, login_email, password, user_type } = req.body;
        await execSQLQuery(`INSERT INTO sys_user (name,login_email,password,user_type) 
            VALUES ('${name}','${login_email}','${password}','${user_type}')`);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
}

exports.updateSysUser = async (req, res) => {
    try {
        console.log(req.body);
        const id = parseInt(req.params.id);
        const { name, login_email, password, user_type } = req.body;
        await execSQLQuery(`UPDATE sys_user SET name='${name}', login_email='${login_email}', password='${password}', user_type='${user_type}' 
            WHERE id=${id}`);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
}

exports.deleteSysUser = async (req, res) => {
    try {
        console.log(req.body);
        const id = parseInt(req.params.id);
        await execSQLQuery(`DELETE sys_user WHERE id=${id}`)
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
}