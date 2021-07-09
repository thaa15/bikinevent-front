import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { PesananPembeliHeaderWithStep } from "../../../../templates/HeaderSmall/PembeliHeader";
import LoadingPage from "../../../../templates/Loading";
import { Redirect } from "react-router";
import { DivButton } from "../../../VendorDashboard/VendorProfil/VendorProfileStyled";
import { Shopping } from "../../PembeliCart/Styled";
import {
    GlobalTemplate,
    PopUpBg,
    ContentPopUp,
} from "../../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../../datas/vendordata";
import { ChatShop } from "../../../../templates/Tampilan/TampilanStyled";
import sucregcheck from "../../../../images/sucregcheck.png";
import ReactStars from "react-rating-stars-component";
import {
    SucRegBox,
    SucRegWrited,
    GoHome
} from "../../../LogReg/SuccessRegPage/SuccessRegStyled";
import {
    BoxRowDetailed,
    ImageDetailed,
    ButtonBottoms,
    ButtonBottomss,
    LabelDetailTrack,
    ContentDetailTrack,
    ReviewBg,
    BoxRowReview,
    SubtitleReview,
    ImageReview
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";
import { InputModifArea } from "../../../VendorDashboard/VendorProduk/VendorProdukStyled";

const PesananSelesaiPage = ({ match }) => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = useState({
        rate: false,
        dons: false
    });

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
                                act="selesai"
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
                                <ContentDetailTrack status>Pesanan Selesai</ContentDetailTrack>

                                <BoxRowDetailed>
                                    <ButtonBottoms need onClick={() => setVisible({ ...visible, rate: true })}>
                                        Berikan Penilaian
                                    </ButtonBottoms>
                                    <ButtonBottoms call need>
                                        Ajukan Pengaduan
                                    </ButtonBottoms>
                                </BoxRowDetailed>
                            </GlobalTemplate>
                            {visible.rate ? (
                                <>
                                    <PopUpBg review>
                                        <ContentPopUp>
                                            <ReviewBg>
                                                <BoxRowReview>
                                                    <ImageReview src={dataUsed.image} />
                                                    <div style={{ rowGap: "15px", flex: "1", display: "flex", flexDirection: "column" }}>
                                                        <div style={{ columnGap: "3px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                            <Shopping />
                                                            <SubtitleReview>{dataUsed.vendor_name}</SubtitleReview>
                                                        </div>
                                                        <p>{dataUsed.judul}</p>
                                                        <div>
                                                            <SubtitleReview>Penilaian</SubtitleReview>
                                                            <div style={{ marginTop: "-15px" }} />
                                                            <ReactStars
                                                                count={5}
                                                                size={40}
                                                                activeColor="#ffd700"
                                                            />
                                                        </div>
                                                        <div>
                                                            <SubtitleReview>Ulasan</SubtitleReview>
                                                            <InputModifArea
                                                                rows="5"
                                                                required
                                                                name="description"
                                                            />
                                                        </div>
                                                        <ButtonBottomss need onClick={() => { setVisible({ dons: true, rate: false }) }}>
                                                            Kirim
                                                        </ButtonBottomss>
                                                    </div>

                                                </BoxRowReview>
                                                <div style={{ marginLeft: "auto" }} onClick={() => { setVisible({ ...visible, rate: false }) }}>
                                                    <DivButton review>
                                                        X
                                                    </DivButton>
                                                </div>
                                            </ReviewBg>
                                        </ContentPopUp>
                                    </PopUpBg>
                                </>
                            ) : visible.dons ? (
                                <>
                                    <PopUpBg review>
                                        <ContentPopUp>
                                            <SucRegBox>
                                                <img src={sucregcheck} alt="success" style={{ margin: "12px auto" }} />
                                                <SucRegWrited>Penilaian Terkirim!</SucRegWrited>
                                                <SucRegWrited message>Terima kasih sudah membantu kami berkembang dengan mengirimkan penilaian pelayanan kami</SucRegWrited>
                                                <GoHome
                                                    onClick={() => {
                                                        history.push("/");
                                                    }}>Kembali ke Beranda</GoHome>
                                            </SucRegBox>
                                        </ContentPopUp>
                                    </PopUpBg>
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </>
            )}
        </>
    )

}

export default PesananSelesaiPage;