import React,{useState} from "react";
import {
    SucRegBg,
    SucRegBox,
    SucRegWrited,
    GoHome
} from "./SuccessRegStyled";
import {AuthSucRegs} from "../../../AllAuth";
import sucregcheck from "../../../images/sucregcheck.png";
import LoadingPage from "../../../templates/Loading"

const SuccessReg = (props) => {
    const [isLoading,setIsLoading] = useState(true);

    setTimeout(()=>{
        setIsLoading(false);
    },900)
    return (
        <>
        {isLoading ? (
            <LoadingPage/>
        ) : (
            <SucRegBg>
                <SucRegBox>
                    <img src={sucregcheck} alt="success" style={{ margin: "12px auto" }} />
                    <SucRegWrited>Pendaftaran Terkirim!</SucRegWrited>
                    <SucRegWrited message>Kami akan memverifikasi data anda dan memberikan
                    status pendaftaran anda melalui email.
                        </SucRegWrited>
                    <GoHome
                        onClick={()=>{
                            AuthSucRegs.outsucreg(()=>{
                                props.history.push("/");
                            })
                        }}>Kembali ke Beranda</GoHome>
                </SucRegBox>
            </SucRegBg>
        )}
        </>
    )
};

export default SuccessReg;