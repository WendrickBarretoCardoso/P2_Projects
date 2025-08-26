const { execSQLQuery } = require("../Config/db");

exports.getAllSysUsers = async (req: any, res: { json: (arg0: any) => void; }) => {
    const results = await execSQLQuery("SELECT * FROM sys_user");
    res.json(results);
}

exports.getSysUserById = async (req: { params: { id: number; }; }, res: { json: (arg0: any) => void; }) => {
    const id = req.params.id;
    const results = await execSQLQuery("SELECT * FROM sys_user WHERE id = " + id);
    res.json(results);
}

exports.createSysUser = async (req: { body: { name: string; login_email: string; password: string; user_type: any; }; }, res: { sendStatus: (arg0: number) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
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

exports.updateSysUser = async (req: { body: { name: string; login_email: string; password: string; user_type: any; }; params: { id: number; }; }, res: { sendStatus: (arg0: number) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
    try {
        console.log(req.body);
        const id = req.params.id;
        const { name, login_email, password, user_type } = req.body;
        await execSQLQuery(`UPDATE sys_user SET name='${name}', login_email='${login_email}', password='${password}', user_type='${user_type}' 
            WHERE id=${id}`);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
}

exports.deleteSysUser = async (req: { body: any; params: { id: number; }; }, res: { sendStatus: (arg0: number) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
    try {
        console.log(req.body);
        const id = req.params.id;
        await execSQLQuery(`DELETE sys_user WHERE id=${id}`)
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno' });
    }
}