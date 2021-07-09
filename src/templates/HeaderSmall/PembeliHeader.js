import React from "react";
import { GlobalTemplate } from "../GlobalTemplate";
import { useHistory } from "react-router";
import {
    HeaderBgPembeli,
    TitleHeader,
    PartSubTitle,
    SubTitle,
    ButtonPart,
    BackHome,
    StepBg,
    StepWrited,
    Arrow
} from "./HeaderSmallStyled";
import {
    AuthClinformation,
    AuthCliPay,
    AuthCliCheck,
} from "../../AllAuth";

export const PembeliHeaderWithStep = ({
        title,
        subtitle,
        act
    }) => {
        const history = useHistory()
    return (
        <HeaderBgPembeli step>
            <GlobalTemplate>
                <TitleHeader>{title}</TitleHeader>
                <PartSubTitle>
                    <SubTitle>{subtitle}</SubTitle>
                    <ButtonPart>
                        <BackHome to="/">
                            &lt; Kembali Berbelanja
                        </BackHome>
                    </ButtonPart>
                </PartSubTitle>
                <StepBg>
                    <StepWrited
                        aktif={act === "keranjang"}
                        onClick={() => {
                            history.push("/client-purchase/cart");
                            AuthClinformation.outclinfo(() => {
                                history.push("/client-purchase/cart");
                            })
                            AuthCliPay.outclipay(() => {
                                history.push("/client-purchase/cart");
                            })
                            AuthCliCheck.outclicheck(() => {
                                history.push("/client-purchase/cart");
                            })
                        }}
                    >
                        <span>1</span>Keranjang
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>

                    <StepWrited
                        aktif={act === "informasi"}
                        onClick={() => {
                            if (AuthClinformation.isAutclinfo() || AuthCliPay.isAutclipay() || AuthCliCheck.isAutclicheck()) {
                                AuthCliPay.outclipay(() => {
                                    history.push("/client-purchase/information");
                                })
                                AuthCliCheck.outclicheck(() => {
                                    history.push("/client-purchase/information");
                                })
                            }
                        }}>
                        <span>2</span>Informasi Pembeli
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>

                    <StepWrited
                        aktif={act === "pembayaran"}
                        onClick={() => {
                            if (AuthCliPay.isAutclipay() || AuthCliCheck.isAutclicheck()) {
                                AuthCliCheck.outclicheck(() => {
                                    history.push("/client-purchase/payment");
                                })
                            }
                        }}
                    >
                        <span>3</span>Pembayaran
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>

                    <StepWrited
                        aktif={act === "pemeriksaan"}
                        onClick={() => {
                            if (AuthCliCheck.isAutclicheck()) {
                                history.push("/client-purchase/check");
                            }
                        }}
                    >
                        <span>4</span>Pemeriksaan
                    </StepWrited>
                </StepBg>
            </GlobalTemplate>
        </HeaderBgPembeli>
    )
};