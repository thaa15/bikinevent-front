import React from "react";
import {
    SucRegBg,
    SucRegBox,
    SucRegWrited,
    GoHome
} from "./SuccessRegStyled";
import sucregcheck from "../../../images/sucregcheck.png"

const SuccessReg = () => {
    return(
        <SucRegBg>
            <SucRegBox>
                <img src={sucregcheck} alt="success" style={{margin:"12px auto"}}/>
                <SucRegWrited>Pendaftaran Terkirim!</SucRegWrited>
                <SucRegWrited message>Kami akan memverifikasi data anda dan memberikan
                status pendaftaran anda melalui email.</SucRegWrited>
                <GoHome to="/">Kembali ke Beranda</GoHome>
            </SucRegBox>
        </SucRegBg>
    )
};

export default SuccessReg;