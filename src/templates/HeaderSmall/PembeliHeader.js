import React, { useContext } from "react";
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
import { clientCartContext, searchContext } from "../../context";

export const PembeliHeaderWithStep = ({
    title,
    subtitle,
    path,
    buttonTitle,
    act
}) => {
    const history = useHistory();
    const { clientCart, setClientCart } = useContext(clientCartContext);
    return (
        <HeaderBgPembeli step>
            <GlobalTemplate>
                <TitleHeader>{title}</TitleHeader>
                <PartSubTitle>
                    <SubTitle>{subtitle}</SubTitle>
                    <ButtonPart>
                        <BackHome
                            onClick={() => {
                                if (path === "/client-purchase/cart") {
                                    AuthClinformation.outclinfo(() => {
                                        history.push(path);
                                    })
                                    setClientCart({
                                        ...clientCart,
                                        price: "",
                                        payment_method: null,
                                        clientInfo: null,
                                        product: [],
                                        statusDp: false,
                                        notes: [],
                                        vendor: [],
                                    });
                                } else if (path === "/client-purchase/information") {
                                    AuthCliPay.outclipay(() => {
                                        history.push(path);
                                    })
                                    setClientCart({
                                        ...clientCart,
                                        payment_method: null,
                                        clientInfo: null,
                                        statusDp: false,
                                    });
                                } else if (path === "/client-purchase/payment") {
                                    AuthCliCheck.outclicheck(() => {
                                        history.push(path);
                                    })
                                    setClientCart({
                                        ...clientCart,
                                        payment_method: null,
                                        statusDp: false,
                                    });
                                }
                            }}
                            to={path}>
                            &lt; {buttonTitle}
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
                            setClientCart({
                                ...clientCart,
                                price: "",
                                payment_method: null,
                                clientInfo: null,
                                product: [],
                                statusDp: false,
                                notes: [],
                                vendor: [],
                            });
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
                                setClientCart({
                                    ...clientCart,
                                    payment_method: null,
                                    clientInfo: null,
                                    statusDp: false,
                                });
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
                                setClientCart({
                                    ...clientCart,
                                    payment_method: null,
                                    statusDp: false,
                                });
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

export const PesananPembeliHeader = ({
    title,
    subtitle,
    path,
    buttonTitle
}) => {
    return (
        <HeaderBgPembeli step>
            <GlobalTemplate>
                <TitleHeader>{title}</TitleHeader>
                <PartSubTitle>
                    <SubTitle>{subtitle}</SubTitle>
                    <ButtonPart>
                        <BackHome to={path}>
                            &lt; {buttonTitle}
                        </BackHome>
                    </ButtonPart>
                </PartSubTitle>
            </GlobalTemplate>
        </HeaderBgPembeli>
    )
};

export const PesananPembeliHeaderWithStep = ({
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
                        <BackHome to="/track-order/records">
                            &lt; Kembali Lacak Pesanan
                        </BackHome>
                    </ButtonPart>
                </PartSubTitle>
                <StepBg>
                    <StepWrited aktif={act === "menunggu"} track>
                        <span>1</span>Menunggu Pembayaran
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>

                    <StepWrited aktif={act === "konfirmasi"} track>
                        <span>2</span>Mengonfirmasi Pembayaran
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>

                    <StepWrited
                        aktif={act === "pelaksanaan"}
                        track
                    >
                        <span>3</span>Pelaksanaan
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>

                    <StepWrited
                        aktif={act === "selesai"}
                        track
                    >
                        <span>4</span>Selesai
                    </StepWrited>
                </StepBg>
            </GlobalTemplate>
        </HeaderBgPembeli>
    )
};