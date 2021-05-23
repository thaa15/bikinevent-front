import React from "react";
import {
    TitleTampilan
} from "../../../templates/Tampilan/TampilanStyled";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import {
    TampilanWritedContent,
    TampilanWritedWidth,
    GridTempTampilan,
    BoxImageTampilan
} from "./TampilanProdukStyled"

const TampilanProduk = ({ descprod, fotoproduk }) => {
    return (
        <GlobalTemplate>
            <div style={{ width: "100%" }}>
                <TitleTampilan>Deskripsi Produk</TitleTampilan>
                <TampilanWritedWidth>
                    <TampilanWritedContent>{descprod}</TampilanWritedContent>
                </TampilanWritedWidth>
                <TitleTampilan>Foto Produk</TitleTampilan>
                <GridTempTampilan>
                    {fotoproduk.map((data, idx) => (
                        <BoxImageTampilan img={data} key={idx} />
                    ))}
                </GridTempTampilan>
                <TitleTampilan>Penilaian Vendor</TitleTampilan>
            </div>
        </GlobalTemplate>
    )
}

export default TampilanProduk;