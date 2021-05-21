import React from "react";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";
import {TitleHome} from "../HomeGlobal";
import {
    PopulerGrid
} from "./PopulerStyled";
import {PopulerData} from "../../../datas/populerdata";
import {BoxHarga} from "../../../templates/Box";

const Populer = () => {
    return(
        <GlobalTemplate>
            <TitleHome>
                Paling Populer
            </TitleHome>
            <PopulerGrid>
                {PopulerData
                .slice(0,10)
                .map((data,idx)=>(
                    <BoxHarga
                        key = {idx}
                        image = {data.image}
                        city = {data.kota}
                        judul = {data.judul}
                        harga = {data.harga}
                        rate = {data.rating}
                        review = {data.ulasan}
                    />
                ))}
            </PopulerGrid>
        </GlobalTemplate>
    )
}
export default Populer;