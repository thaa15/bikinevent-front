class AuthSucReg{
    constructor(){
        this.autsucreg = false;
    }

    insucreg(cb){
        this.autsucreg = true;
        cb();
    }

    outsucreg(cb){
        this.autsucreg = false;
        cb();
    }
    
    isAutsucreg(){
        return this.autsucreg;
    }
}

export default new AuthSucReg()