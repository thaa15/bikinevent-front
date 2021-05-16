import React from "react";
import HeaderSmall from "../templates/HeaderSmall";
import LegalLayanContent from "../components/LegalAndLayanan";
import {
    FAQData,
    AboutUsData,
    PanduanData,
    PrivasiData,
    RefundData
} from "../datas/legaldata"

const FAQ = () => {
    return(
        <>
        <HeaderSmall text="Layanan Pelanggan dan Legal"/>
        <LegalLayanContent type="faq" data={FAQData}/>
        </>
    )
}

const TentangKami = () => {
    return(
        <>
        <HeaderSmall text="Layanan Pelanggan dan Legal"/>
        <LegalLayanContent type="tentang" data={AboutUsData}/>
        </>
    )
}

const Panduan = () => {
    return(
        <>
        <HeaderSmall text="Layanan Pelanggan dan Legal"/>
        <LegalLayanContent type="panduan" data={PanduanData}/>
        </>
    )
}

const Privasi = () => {
    return(
        <>
        <HeaderSmall text="Layanan Pelanggan dan Legal"/>
        <LegalLayanContent type="privasi" data={PrivasiData}/>
        </>
    )
}

const Refund = () => {
    return(
        <>
        <HeaderSmall text="Layanan Pelanggan dan Legal"/>
        <LegalLayanContent type="refund" data={RefundData}/>
        </>
    )
}

export {
    FAQ,
    TentangKami,
    Panduan,
    Privasi,
    Refund
};