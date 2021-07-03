import React, { useState } from "react";
import {
    SucRegBg,
    SucRegBox,
    SucRegWrited,
    GoHome
} from "./SuccessRegStyled";
import sucregcheck from "../../../images/sucregcheck.png";
import LoadingPage from "../../../templates/Loading"

const LoginSuccess = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 900)
    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <SucRegBg>
                    <SucRegBox>
                        <img src={sucregcheck} alt="success" style={{ margin: "12px auto" }} />
                        <SucRegWrited>Login Berhasil</SucRegWrited>
                        <GoHome
                            onClick={() => {
                                props.history.push("/");
                            }}>Kembali ke Beranda</GoHome>
                    </SucRegBox>
                </SucRegBg>
            )}
        </>
    )
};

export default LoginSuccess;