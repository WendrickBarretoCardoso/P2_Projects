const { execSQLQuery } = require("../Config/db");
const jwt = require("jsonwebtoken");


exports.doLogin = async (req: { body: { login_email: string; password: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; auth?: boolean; token?: any; }): void; new(): any; }; }; }) => {
    const { login_email, password } = req.body;
    try { 
        const result = await execSQLQuery(`SELECT id, login_email, password, user_type FROM sys_user WHERE login_email='${login_email}'`)
        if (result.length === 0) {
            console.log("não encontrado")
        }
        const user = result [0]
        if (login_email === user.login_email && password === user.password) {
            const token = jwt.sign({userId: user.id, user_type: user.user_type}, process.env.JWT_SECRET, {expiresIn: 3600})
            return res.status(200).json({ message: "Login realizado com sucesso",  auth: true, token});
        } else {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }
    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
}