import React from "react";
import {
    TitleTampilan
} from "../../../templates/Tampilan/TampilanStyled";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";
import{
    TampilanWritedContent,
    TampilanWritedWidth,
    GridTempTampilan,
    BoxImageTampilan
} from "./TampilanProdukStyled"

const TampilanProduk = ({dataxact}) =>{
    return(
        <GlobalTemplate>
            {dataxact.map((item,idx)=>{
                return(
                    <div style={{width:"100%"}}>
                    <TitleTampilan>Deskripsi Produk</TitleTampilan>
                    <TampilanWritedWidth>
                    <TampilanWritedContent>{item.descprod}</TampilanWritedContent>
                    </TampilanWritedWidth>
                    <TitleTampilan>Foto Produk</TitleTampilan>
                    <GridTempTampilan>
                        {item.fotoproduk.map((data,idx)=>(
                            <BoxImageTampilan img={data} key={idx}/>
                        ))}
                    </GridTempTampilan>
                    <TitleTampilan>Penilaian Vendor</TitleTampilan>
                    </div>
                )
            })}
        </GlobalTemplate>
    )
}

export default TampilanProduk;