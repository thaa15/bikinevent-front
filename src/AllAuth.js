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

class AuthClientPayment {
    constructor() {
        this.autclipay = false;
    }

    inclipay(cb) {
        this.autclipay = true;
        cb();
    }

    outclipay(cb) {
        this.autclpay = false;
        cb();
    }

    isAutclipay() {
        return this.autclipay;
    }
}

class AuthClientCheck {
    constructor() {
        this.autclicheck = false;
    }

    inclicheck(cb) {
        this.autclicheck = true;
        cb();
    }

    outclicheck(cb) {
        this.autclcheck = false;
        cb();
    }

    isAutclicheck() {
        return this.autclicheck;
    }
}

class AuthClientSuccess {
    constructor() {
        this.autcliSuccess = false;
    }

    incliSuccess(cb) {
        this.autcliSuccess = true;
        cb();
    }

    outcliSuccess(cb) {
        this.autclSuccess = false;
        cb();
    }

    isAutcliSuccess() {
        return this.autcliSuccess;
    }
}

const AuthSucRegs = new AuthSucReg();
const AuthClinformation = new AuthClientInformation();
const AuthCliPay = new AuthClientPayment();
const AuthCliCheck = new AuthClientCheck();
const AuthCliSuccess = new AuthClientSuccess();

export {
    AuthSucRegs,
    AuthClinformation,
    AuthCliPay,
    AuthCliCheck,
    AuthCliSuccess
}