class AuthSucReg {
    constructor() {
        this.autsucreg = false;
    }

    insucreg(cb) {
        this.autsucreg = true;
        cb();
    }

    outsucreg(cb) {
        this.autsucreg = false;
        cb();
    }

    isAutsucreg() {
        return this.autsucreg;
    }
}

class AuthLogin {
    constructor() {
        this.user = localStorage.getItem('token');
        this.vendor = null;
    }

    userLogin(user, cb) {
        this.user = user;
        cb();
    }

    vendorLogin(vendor, cb) {
        this.vendor = vendor;
        cb();
    }

    userLogout(cb) {
        this.user = null;
        cb();
    }

    vendorLogout(cb) {
        this.vendor = null;
        cb();
    }

    isUserAuth() {
        return this.user;
    }
    isVendorAuth() {
        return this.vendor;
    }
}

const AuthLogins = new AuthLogin();
const AuthSucRegs = new AuthSucReg()

export {AuthSucRegs,AuthLogins}