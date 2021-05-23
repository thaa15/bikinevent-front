import React from "react";
import {Link} from "react-router-dom";
import {
    TitleTampilan
} from "../../../templates/Tampilan/TampilanStyled";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import {
    TampilanWritedContent,
    TampilanWritedWidth,
} from "../TampilanProduk/TampilanProdukStyled";
import {BoxHarga} from "../../../templates/Box";
import {GridVendorTampilan,GridVendorPortofolio} from "./TampilanVendorStyled";
import {PenilaianVendorVendor,PortofolioVendor} from "../../../templates/Tampilan"

const TampilanVendor = ({ descvendor, produkvendor,comments,portofolio }) => {
    return (
        <GlobalTemplate>
            <div style={{ width: "100%" }}>
                <TitleTampilan>Deskripsi Vendor</TitleTampilan>
                <TampilanWritedWidth>
                    <TampilanWritedContent>{descvendor}</TampilanWritedContent>
                </TampilanWritedWidth>
                <TitleTampilan>Produk</TitleTampilan>
                <GridVendorTampilan>
                    {produkvendor.map((data, idx) => {
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
                </GridVendorTampilan>
                <TitleTampilan>Penilaian Vendor</TitleTampilan>
                <PenilaianVendorVendor comments={comments}/>
                <TitleTampilan>Portofolio Vendor</TitleTampilan>
                <GridVendorPortofolio>
                    {portofolio.map((data,idx)=>(
                        <PortofolioVendor
                        key={idx}
                        portofoliotitle={data.portofoliotitle}
                        foto1={data.foto1}
                        foto2={data.foto2}/>
                    ))}
                </GridVendorPortofolio>
            </div>
        </GlobalTemplate>
    )
}

export default TampilanVendor;