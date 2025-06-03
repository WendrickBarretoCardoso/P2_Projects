class SysUsers {
    constructor(id, name, login_email, password, user_type) {
        this.id = id;
        this.name = name;
        this.login_email = login_email;
        this.password = password;
        this.user_type = user_type;
    }
}

module.exports = SysUsers;