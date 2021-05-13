import React,{useState,useEffect} from "react";
import {
    LoginBg,
    LoginBox,
    LoginInput,
    LogApart,
    IconBg,
    LoginLabel,
    RadioButton,
    HaveAccountLink,
    Buttonslog,
    Buttons
} from "../LoginPage/LoginStyled";
import {
    RegisterTittle,
    HaveAccount,
    Welcomed
} from "./RegisterStyled"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";

const RegisterPage = () =>{
    const [visible,setVisible] = useState(true);
    const [typepw, setTypepw] = useState("");
    const [checkreg, setCheckreg] = useState(true);

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
                <RegisterTittle>Daftar Sebagai</RegisterTittle>
                <HaveAccount>
                        Sudah memiliki akun?
                    <HaveAccountLink to="/login">Log In</HaveAccountLink>
                </HaveAccount>
                <form>

                    {/*Gambarnya blm dapet jadi ini aja dulu ya:D*/}
                    <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        width:"60%",
                        margin:"15px auto 0"
                        }}>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <RadioButton 
                            type="radio" 
                            value="pembeli" 
                            name="type"
                            onClick={()=>{setCheckreg(true)}}
                            checked 
                            />
                            <LoginLabel for="pembeli">Pembeli</LoginLabel>
                        </div>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <RadioButton 
                            type="radio" 
                            value="vendor" 
                            name="type"
                            onClick={()=>{setCheckreg(false)}}
                            />
                            <LoginLabel for="vendor">Vendor</LoginLabel>
                        </div>
                    </div>

                    <Welcomed>
                    Selamat Datang! <br/> Mohon lengkapi data di bawah untuk daftar
                    </Welcomed>

                    {checkreg ? (
                        <>
                        <LoginLabel for="name">Nama Lengkap</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="name"/><br/>
    
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
    
                        <LoginLabel for="num">No HP (Terhubung WA)</LoginLabel><br/>
                        <LoginInput
                            type="number"
                            required
                            name="num"/><br/>
                        <LoginLabel>
                        <input type="checkbox"/>
                         Saya setuju dengan <a href="https://www.google.com">Syarat dan Ketentuan</a>
                        </LoginLabel>
                        </>
                    ) : (
                        <>
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

                        <LoginLabel for="name">Nama Lengkap</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="name"/><br/>
                
                        <LoginLabel for="nik">NIK</LoginLabel><br/>
                        <LoginInput
                            type="number"
                            required
                            name="nik"/><br/>
                        
                        <LoginLabel for="birth">Tempat, Tanggal Lahir</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="birth"/><br/>
                        
                        <LoginLabel>
                        <input type="checkbox"/>
                         Saya setuju dengan <a href="https://www.google.com">Syarat dan Ketentuan</a>
                        </LoginLabel>
                        </>
                    )}
                    
                    <Buttonslog type="submit">
                        <Buttons>
                            Daftar
                        </Buttons>
                    </Buttonslog>
                </form>
            </LoginBox>
        </LoginBg>
    )
}
export default RegisterPage;