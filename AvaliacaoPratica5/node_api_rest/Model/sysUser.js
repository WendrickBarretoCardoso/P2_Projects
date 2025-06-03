class SysUsers {
    constructor(id, name, login, password, userType) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
        this.userType = userType;
    }
}

module.exports = SysUsers;