import React,{useState,useEffect} from "react";
import {
    LoginBg,
    LoginBox,
    LoginTittle,
    LoginInput,
    LogApart,
    IconBg,
    LoginLabel,
    RadioButton,
    HaveAccount,
    HaveAccountLink,
    Buttonslog,
    Buttons
} from "./LoginStyled";
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";

const LoginPage = () =>{
    const [visible,setVisible] = useState(true);
    const [typepw, setTypepw] = useState("");

    const toggle = () => {
        setVisible(!visible);
        if(visible === false){
            setTypepw("text");
        }else{
            setTypepw("password");
        }
    };

    useEffect(() => {
        toggle();
    }, [])
    return(
        <LoginBg>
            <LoginBox>
                <LoginTittle>Log In</LoginTittle>
                <form>
                    <LoginLabel for="email">E-mail</LoginLabel><br/>
                    <LoginInput
                    type="email"
                    required
                    name="email"/><br/>

                    <LoginLabel for="password">Password</LoginLabel><br/>
                    <LogApart>
                        <LoginInput
                        type={typepw}
                        required
                        name="password"
                        pw/>
                        {visible ? (
                            <IconBg>
                            <BsFillEyeSlashFill
                            onClick={toggle} 
                            style={{color:"#909DAA"}}/>
                            </IconBg>
                        ) : (
                            <IconBg>
                            <BsFillEyeFill 
                            onClick={toggle}
                            style={{color:"#909DAA"}}/>
                            </IconBg>
                        )}
                    </LogApart>

                    <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        width:"60%",
                        margin:"15px auto 0"
                        }}>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <RadioButton type="radio" value="pembeli" name="type" checked/>
                            <LoginLabel for="pembeli">Pembeli</LoginLabel>
                        </div>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <RadioButton type="radio" value="vendor" name="type"/>
                            <LoginLabel for="vendor">Vendor</LoginLabel>
                        </div>
                    </div>

                    <HaveAccount>
                        Belum memiliki akun?
                        <HaveAccountLink to="/register">Daftar Sekarang</HaveAccountLink>
                    </HaveAccount>

                    <Buttonslog type="submit">
                        <Buttons>
                            Masuk
                        </Buttons>
                    </Buttonslog>
                </form>
            </LoginBox>
        </LoginBg>
    )
}
export default LoginPage;