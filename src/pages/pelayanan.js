import React, { useState } from "react";
import HeaderSmall from "../templates/HeaderSmall";
import LegalLayanContent from "../components/LegalAndLayanan";
import LoadingPage from "../templates/Loading";
import {
    FAQData,
    AboutUsData,
    PanduanData,
    PrivasiData,
    RefundData
} from "../datas/legaldata";


const FAQ = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1500)
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>) : (
                <>
                    <HeaderSmall text="Layanan Pelanggan dan Legal" />
                    <LegalLayanContent type="faq" data={FAQData} />
                </>
            )}
        </>
    )
}

const TentangKami = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1500)
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>) : (
                <>
                    <HeaderSmall text="Layanan Pelanggan dan Legal" />
                    <LegalLayanContent type="tentang" data={AboutUsData} />
                </>)}
        </>
    )
}

const Panduan = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1500)
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>) : (
                <>
                    <HeaderSmall text="Layanan Pelanggan dan Legal" />
                    <LegalLayanContent type="panduan" data={PanduanData} />
                </>)}
        </>
    )
}

const Privasi = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1500)
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>) : (
                <>
                    <HeaderSmall text="Layanan Pelanggan dan Legal" />
                    <LegalLayanContent type="privasi" data={PrivasiData} />
                </>)}
        </>
    )
}

const Refund = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1500)
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>) : (
                <>
                    <HeaderSmall text="Layanan Pelanggan dan Legal" />
                    <LegalLayanContent type="refund" data={RefundData} />
                </>)}
        </>
    )
}

const Syarat = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1500)
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>) : (
                <>
                    <HeaderSmall text="Layanan Pelanggan dan Legal" />
                    <LegalLayanContent type="syarat" data={RefundData} />
                </>)}
        </>
    )
}

export {
    FAQ,
    TentangKami,
    Panduan,
    Privasi,
    Refund,
    Syarat
};