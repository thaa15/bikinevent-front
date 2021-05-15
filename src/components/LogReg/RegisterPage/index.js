import React, { useState} from "react";
import {
    LoginBg,
    LoginBox,
    HaveAccountLink,
} from "../LoginPage/LoginStyled";
import {
    RegisterTittle,
    HaveAccount,
    TypeChoose,
    Welcomed,
    TypeImage,
    TypeApart,
    TypeSigned,
    Typebg,
    IconCheck,
} from "./RegisterStyled"
import { FaCheckCircle } from "react-icons/fa";
import pembelireg from "../../../images/pembelireg.png";
import vendorreg from "../../../images/vendorreg.png";
import Pembeliregs from "./Pembeliregs";
import Vendorregs from "./Vendorregs"

const RegisterPage = () => {
    const [checkreg, setCheckreg] = useState(true);

    return (
        <LoginBg>
            <LoginBox>
                <RegisterTittle>Daftar Sebagai</RegisterTittle>
                <HaveAccount>
                    Sudah memiliki akun?
                    <HaveAccountLink to="/login">Log In</HaveAccountLink>
                </HaveAccount>
                <TypeChoose>
                    <TypeApart onClick={() => { setCheckreg(true) }}
                        aktif={checkreg === true}>
                        <Typebg aktif={checkreg === true}>
                            <TypeImage src={pembelireg}>
                                <TypeSigned>
                                    Pembeli
                                    <IconCheck aktif={checkreg === true}>
                                        <FaCheckCircle style={{
                                            color: "#219653",
                                            fontSize: "40px",
                                            background: "white",
                                            borderRadius: "100%"
                                        }} />
                                    </IconCheck>
                                </TypeSigned>
                            </TypeImage>
                        </Typebg>
                    </TypeApart>
                    <TypeApart onClick={() => { setCheckreg(false) }}
                        aktif={checkreg === false}>
                        <Typebg aktif={checkreg === false}>
                            <TypeImage src={vendorreg}>
                                <TypeSigned>
                                    Vendor
                                    <IconCheck aktif={checkreg === false}>
                                        <FaCheckCircle style={{
                                            color: "#219653",
                                            fontSize: "40px",
                                            background: "white",
                                            borderRadius: "100%"
                                        }} />
                                    </IconCheck>
                                </TypeSigned>
                            </TypeImage>
                        </Typebg>
                    </TypeApart>
                </TypeChoose>

                <Welcomed>
                    Selamat Datang! <br /> Mohon lengkapi data di bawah untuk daftar
                </Welcomed>
                {checkreg ? (
                    <Pembeliregs />
                ) : (
                    <Vendorregs />
                )}
            </LoginBox>
        </LoginBg>
    )
}
export default RegisterPage;