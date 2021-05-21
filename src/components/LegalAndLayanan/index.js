import React from "react";
import { GlobalTemplate } from "../../templates/GlobalTemplate";
import LegalTemp from "./LegalTemp";
import { MainLegal, LegalWritedContent,TempLegal } from "./LegalTempStyled"

const LegalLayanContent = ({ data, type }) => {
    return (
        <GlobalTemplate>
            <TempLegal>
                <LegalTemp typeLegal={type} />
                <MainLegal>
                    {data.map((item, idx) => {
                        return (
                            <>
                                <LegalWritedContent title key={idx}>{item.title}</LegalWritedContent>
                                <LegalWritedContent>{item.desc}</LegalWritedContent>
                            </>
                        )
                    })}
                </MainLegal>
            </TempLegal>
        </GlobalTemplate>
    )
}

export default LegalLayanContent;