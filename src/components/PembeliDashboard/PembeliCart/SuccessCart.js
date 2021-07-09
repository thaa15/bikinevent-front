import React, { useState } from "react";
import {
    SucRegBg,
    SucRegBox,
    SucRegWrited,
    GoHome
} from "../../LogReg/SuccessRegPage/SuccessRegStyled";
import { ProfilePembeli } from "../../../datas/vendordata";
import { Redirect } from "react-router";
import { ButtonLacak, ButtonApartas, EmailConfirm } from "./Styled";
import { AuthCliSuccess } from "../../../AllAuth";
import sucregcheck from "../../../images/sucregcheck.png";
import LoadingPage from "../../../templates/Loading";

const SuccessCart = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const data = ProfilePembeli.filter((dats) => dats.name === "Ernia Watson");
    setTimeout(() => {
        setIsLoading(false);
    }, 900)
    return (
        <>
            {!AuthCliSuccess.isAutcliSuccess() ? (
                <>
                    <Redirect to="/client-purchase/cart" />
                </>
            ) : (
                <>
                    {isLoading ? (
                        <LoadingPage />
                    ) : (
                        <SucRegBg>
                            <SucRegBox>
                                <img src={sucregcheck} alt="success" style={{ margin: "12px auto" }} />
                                <SucRegWrited>Pemesanan Berhasil!</SucRegWrited>
                                <EmailConfirm need>
                                    Harap melakukan pembayaran yang tertera pada email
                                    <span>{data.map(el => { return el.email })}</span>
                                </EmailConfirm>
                                <ButtonApartas>
                                    <ButtonLacak
                                        onClick={() => {
                                            AuthCliSuccess.outcliSuccess(() => {
                                                props.history.push("/");
                                            })
                                        }}>
                                        &lt; Kembali ke beranda
                                    </ButtonLacak>
                                    <GoHome
                                        onClick={() => {
                                            AuthCliSuccess.outcliSuccess(() => {
                                                props.history.push("/");
                                            })
                                        }}>Lacak Pesanan
                                    </GoHome>
                                </ButtonApartas>
                            </SucRegBox>
                        </SucRegBg>
                    )}
                </>
            )}
        </>
    )
};

export default SuccessCart;