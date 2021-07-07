import React from "react";
import { GlobalTemplate } from "../GlobalTemplate"
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
} from "./HeaderSmallStyled"

export const PembeliHeaderWithStep = ({
    title,
    subtitle,
    act
}) => {
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
                    <StepWrited aktif={act === "keranjang"}>
                        <span>1</span>Keranjang
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>

                    <StepWrited aktif={act === "informasi"}>
                        <span>2</span>Informasi Pembeli
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>

                    <StepWrited aktif={act === "pembayaran"}>
                        <span>3</span>Pembayaran
                    </StepWrited>

                    <Arrow>
                        &#8594;
                    </Arrow>
                    
                    <StepWrited aktif={act === "pemeriksaan"}>
                        <span>4</span>Pemeriksaan
                    </StepWrited>
                </StepBg>
            </GlobalTemplate>
        </HeaderBgPembeli>
    )
};