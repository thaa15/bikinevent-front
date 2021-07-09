import React, { useState, useEffect } from "react";
import { PesananPembeliHeaderWithStep } from "../../../../templates/HeaderSmall/PembeliHeader";
import LoadingPage from "../../../../templates/Loading";
import { Redirect } from "react-router";
import { GlobalTemplate } from "../../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../../datas/vendordata";
import { ButtonBottom, ChatShop } from "../../../../templates/Tampilan/TampilanStyled";
import { BoxNotEntry } from "../../../VendorDashboard/VendorPesanan/VendorPesananStyle";
import {
    BoxRowDetailed,
    ImageDetailed,
    ButtonBottoms,
    LabelDetailTrack,
    ContentDetailTrack,
    EmailWrited
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";

const PelaksanaanPesananPage = ({ match }) => {
    const [isLoading, setIsLoading] = useState(true);

    const data = ProfilePembeli.filter((dats) => dats.name === "Ernia Watson");
    const matching = data.map(el => el.orderRecords.filter(elmen => { return (elmen.id === match.params.id) }));
    const dataUsed = matching[0][0]

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, []);

    return (
        <>
            {!AuthCliTrack.isAutclitrack() ? (
                <Redirect to="/track-order/records" />
            ) : (
                <>
                    {isLoading ? (
                        <LoadingPage />
                    ) : (
                        <>
                            <PesananPembeliHeaderWithStep
                                title="Detail Pesanan"
                                subtitle="Ketahui dan lacak status pesanan anda."
                                act="pelaksanaan"
                            />
                            <GlobalTemplate top>
                                <BoxRowDetailed>
                                    <ImageDetailed src={dataUsed.image} />
                                    <div style={{ rowGap: "5px" }}>
                                        <p>{dataUsed.judul}</p>
                                        <h6>Rp{parseInt(dataUsed.price).toLocaleString("id-ID")}</h6>
                                        <ButtonBottoms call>
                                            <ChatShop />
                                            Hubungi Vendor
                                        </ButtonBottoms>
                                    </div>
                                </BoxRowDetailed>

                                <LabelDetailTrack>Nomor Invoice</LabelDetailTrack>
                                <ContentDetailTrack invoice>{dataUsed.invoice}</ContentDetailTrack>
                                <LabelDetailTrack>Nama Vendor</LabelDetailTrack>
                                <ContentDetailTrack invoice>{dataUsed.vendor_name}</ContentDetailTrack>
                                <LabelDetailTrack>Tanggal Pesanan</LabelDetailTrack>
                                <ContentDetailTrack>{dataUsed.created}</ContentDetailTrack>
                                <LabelDetailTrack>Status</LabelDetailTrack>
                                <ContentDetailTrack status>Pelaksanaan Pesanan (Baru DP 1)</ContentDetailTrack>

                                <BoxRowDetailed>
                                    <ButtonBottoms need>
                                        Hubungi Vendor via WhatsApp
                                    </ButtonBottoms>
                                    <ButtonBottoms call need>
                                        Pesanan Selesai
                                    </ButtonBottoms>
                                </BoxRowDetailed>

                            </GlobalTemplate>
                        </>
                    )}
                </>
            )}
        </>
    )

}

export default PelaksanaanPesananPage;