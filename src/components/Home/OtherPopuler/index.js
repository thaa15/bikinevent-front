import React from "react";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";
import {TitleHome,ApartView,LinkTitle} from "../HomeGlobal";
import {
    PopulerGrid
} from "../Populer/PopulerStyled";
import {PopulerData} from "../../../datas/populerdata";
import {BoxHarga} from "../../../templates/Box";

const OtherPopuler = () => {
    return(
        <>
        <GlobalTemplate>
            <ApartView>
                <TitleHome>Populer di 'Perlengkapan'</TitleHome>
                <TitleHome view>
                    <LinkTitle to="/">Lihat Semua</LinkTitle>
                </TitleHome>
            </ApartView>
            <PopulerGrid>
                {PopulerData.slice(0,5).map((data,idx)=>(
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
        <GlobalTemplate>
            <ApartView>
                <TitleHome>Populer di 'Catering'</TitleHome>
                <TitleHome view>
                    <LinkTitle to="/catering">Lihat Semua</LinkTitle>
                </TitleHome>
            </ApartView>
            <PopulerGrid>
                {PopulerData.slice(0,5).map((data,idx)=>(
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
        </>
    )
}
export default OtherPopuler;