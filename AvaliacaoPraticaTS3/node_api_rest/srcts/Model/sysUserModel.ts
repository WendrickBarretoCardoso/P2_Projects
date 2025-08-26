class SysUsers {
    id: number;
    name: string;
    login_email: string;
    password: string;
    user_type: string;
    constructor(id: number, name: string, login_email: string, password: string, user_type: string) {
        this.id = id;
        this.name = name;
        this.login_email = login_email;
        this.password = password;
        this.user_type = user_type;
    }
}

module.exports = SysUsers;