import React from "react";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";
import {TitleHome} from "../HomeGlobal";
import {Link} from "react-router-dom";
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
                .map((data,idx)=>{
                    return(
                    <Link to={`/detailed-product/${data.id}`}
                    style={{height:"fit-content",cursor:"pointer",textDecoration:"none"}}>
                        <BoxHarga
                            key = {idx}
                            image = {data.image}
                            city = {data.kota}
                            judul = {data.judul}
                            harga = {data.harga}
                            rate = {data.rating}
                            review = {data.ulasan}
                        />
                    </Link>
                    )
                })}
            </PopulerGrid>
        </GlobalTemplate>
    )
}
export default Populer;