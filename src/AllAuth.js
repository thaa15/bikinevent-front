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

class AuthClientInformation {
    constructor() {
        this.autclinfo = false;
    }

    inclinfo(cb) {
        this.autclinfo = true;
        cb();
    }

    outclinfo(cb) {
        this.autclinfo = false;
        cb();
    }

    isAutclinfo() {
        return this.autclinfo;
    }
}

const AuthSucRegs = new AuthSucReg();
const AuthClinformation = new AuthClientInformation();

export {AuthSucRegs,AuthClinformation}