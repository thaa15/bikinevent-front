import React from "react";
import { 
    OtherVendash,
    PesananIcon,
    ChatIcon,
    ProfilIcon,
    KeuanganIcon,
    ProdukIcon
} from "./VendorDashboardStyled";
import { Otwrit } from "../Blog/BlogRoute/BlogRouteStyled";

const DashboardSite = ({typeVendash}) => {
    return (
        <>
            <OtherVendash>
                <Otwrit aktif={"chat" === typeVendash} to="/vendor-chat">
                    <ChatIcon/>Chat
                </Otwrit>
                <Otwrit aktif={"pesanan" === typeVendash} to="/vendor-pesanan">
                    <PesananIcon/>Pesanan
                </Otwrit>
                <Otwrit aktif={"produk" === typeVendash} to="/vendor-produk">
                    <ProdukIcon/>Produk
                </Otwrit>
                <Otwrit aktif={"keuangan" === typeVendash} to="/vendor-keuangan">
                    <KeuanganIcon/>Keuangan
                </Otwrit>
                <Otwrit aktif={"profil" === typeVendash} to="/vendor-profil">
                    <ProfilIcon/>Profil
                </Otwrit>
            </OtherVendash>
        </>
    )
}

export default DashboardSite;