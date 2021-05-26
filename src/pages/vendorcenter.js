import React,{useState} from "react";
import {VendorHeader} from "../templates/HeaderSmall/VendorHeader";
import LoadingPage from "../templates/Loading";
import {PesananVendor} from "../datas/vendordata";
import VendorChatContent from "../components/VendorDashboard/VendorChat";
import VendorPesananContent from "../components/VendorDashboard/VendorPesanan";
import VendorProdukContent from "../components/VendorDashboard/VendorProduk";
import VendorKeuanganContent from "../components/VendorDashboard/VendorKeuangan";
import VendorProfilContent from "../components/VendorDashboard/VendorProfil";

export const VendorChat = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>) : (
                <>
                    <VendorHeader />
                    <VendorChatContent/>
                </>
            )}
        </>
    )
}

export const VendorPesanan = () => {
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
                    <VendorHeader />
                    <VendorPesananContent data={PesananVendor}/>
                </>
            )}
        </>
    )
}

export const VendorProduk = () => {
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
                    <VendorHeader />
                    <VendorProdukContent/>
                </>
            )}
        </>
    )
}

export const VendorKeuangan = () => {
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
                    <VendorHeader />
                    <VendorKeuanganContent/>
                </>
            )}
        </>
    )
}

export const VendorProfil = () => {
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
                    <VendorHeader />
                    <VendorProfilContent/>
                </>
            )}
        </>
    )
}