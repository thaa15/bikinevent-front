import React from "react";
import { OtherLegal } from "./LegalTempStyled";
import { Otwrit } from "../Blog/BlogRoute/BlogRouteStyled";

const LegalTemp = ({typeLegal}) => {
    return (
        <>
            <OtherLegal>
                <Otwrit aktif={"faq" === typeLegal} to="/faq">
                    FAQ
                </Otwrit>
                <Otwrit aktif={"tentang" === typeLegal} to="/tentangkami">
                    Tentang Kami
                </Otwrit>
                <Otwrit aktif={"panduan" === typeLegal} to="/panduan">
                    Panduan Pemesanan
                </Otwrit>
                <Otwrit aktif={"syarat" === typeLegal} to="/syarat">
                    Syarat Dan Ketentuan
                </Otwrit>
                <Otwrit aktif={"privasi" === typeLegal} to="/privasi">
                    Kebijakan Privasi
                </Otwrit>
                <Otwrit aktif={"refund" === typeLegal} to="/refund">
                    Kebijakan Refund
                </Otwrit>
            </OtherLegal>
        </>
    )
}

export default LegalTemp;