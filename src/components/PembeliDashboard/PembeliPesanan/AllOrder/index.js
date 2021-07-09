import React, { useState, useEffect } from "react";
import { PesananPembeliHeader } from "../../../../templates/HeaderSmall/PembeliHeader";
import LoadingPage from "../../../../templates/Loading";
import { GlobalTemplate } from "../../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../../datas/vendordata";
import { BoxNotEntry } from "../../../VendorDashboard/VendorPesanan/VendorPesananStyle";
import {
    DivRowContent,
    Shopping
} from "../../PembeliCart/Styled";
import {
    PesananHome,
    BoxContentTrack,
    ButtonStatus,
    BoxManage,
    BoxManageContent,
    ImageOrder
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";

const getButtonStatus = (stats) =>{
    const defaultStatus = [
        "Menunggu\nPembayaran", 
        "Mengkonfirmasi\nPembayaran",
        "Pelaksanaan\nPesanan",
        "Pesanan\nSelesai"
    ]
    
    for(let i = 0; i < defaultStatus.length; i++){
        if(defaultStatus[i].toLowerCase().includes(stats.toLowerCase())){
            return(defaultStatus[i])
        }
    }
}

const PembeliPesananPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const data = ProfilePembeli.filter((dats) => dats.name === "Ernia Watson");
    const progress = data.map(el => el.orderRecords.filter(elmen => { return elmen.status !== "selesai" }));
    const done = data.map(el => el.orderRecords.filter(elmen => { return elmen.status === "selesai" }));

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
                    <PesananPembeliHeader
                        title="Pesanan"
                        subtitle="Pesanan anda adalah prioritas kami."
                        path="/"
                        buttonTitle="Kembali ke Beranda"
                    />
                    <GlobalTemplate top>
                        <PesananHome top>
                            Sedang Berjalan
                        </PesananHome>
                        {progress[0].length === 0 ? (
                            <BoxNotEntry>Tidak ada pesanan yang sedang berjalan!</BoxNotEntry>
                        ) : (
                            <>
                                {progress[0].map((item, idx) => {
                                    return (
                                        <BoxContentTrack key={idx}
                                        onClick={()=>{
                                            if(item.status === "menunggu"){
                                                AuthCliTrack.inclitrack(()=>{
                                                    props.history.push(`/detailed-order/waiting/${item.id}`)
                                                })
                                            }else if(item.status === "konfirmasi"){
                                                AuthCliTrack.inclitrack(()=>{
                                                    props.history.push(`/detailed-order/confirm/${item.id}`)
                                                })
                                            }else if(item.status === "pelaksanaan"){
                                                AuthCliTrack.inclitrack(()=>{
                                                    props.history.push(`/detailed-order/implement/${item.id}`)
                                                })
                                            }
                                        }}>
                                            <BoxManage>
                                                <BoxManageContent>
                                                    <ImageOrder src={item.image} />
                                                    <div>
                                                        <DivRowContent top>
                                                            <DivRowContent titlee need>
                                                                <Shopping />
                                                                <p
                                                                    style={{
                                                                        fontSize: "14px",
                                                                        lineHeight: "21px",
                                                                        color: "#909DAA"
                                                                    }}
                                                                >{item.vendor_name}</p>
                                                            </DivRowContent>
                                                        </DivRowContent>
                                                        <p>{item.judul}</p>
                                                        <h6>Rp{parseInt(item.price).toLocaleString("id-ID")}</h6>
                                                    </div>
                                                </BoxManageContent>
                                                <ButtonStatus>
                                                    {getButtonStatus(item.status)}
                                                </ButtonStatus>
                                            </BoxManage>
                                        </BoxContentTrack>
                                    )
                                })}
                            </>
                        )}
                        <PesananHome>
                            Selesai
                        </PesananHome>
                        {done[0].length === 0 ? (
                            <BoxNotEntry>Tidak ada pesanan yang selesai!</BoxNotEntry>
                        ) : (
                            <>
                                {done[0].map((item, idx) => {
                                    return (
                                        <BoxContentTrack key={idx}
                                        onClick={()=>{
                                            AuthCliTrack.inclitrack(()=>{
                                                props.history.push(`/detailed-order/done/${item.id}`)
                                            })
                                        }}>
                                            <BoxManage>
                                                <BoxManageContent>
                                                    <ImageOrder src={item.image} />
                                                    <div>
                                                        <DivRowContent top>
                                                            <DivRowContent titlee need>
                                                                <Shopping />
                                                                <p
                                                                    style={{
                                                                        fontSize: "14px",
                                                                        lineHeight: "21px",
                                                                        color: "#909DAA"
                                                                    }}
                                                                >{item.vendor_name}</p>
                                                            </DivRowContent>
                                                        </DivRowContent>
                                                        <p>{item.judul}</p>
                                                        <h6>Rp{parseInt(item.price).toLocaleString("id-ID")}</h6>
                                                    </div>
                                                </BoxManageContent>
                                                <ButtonStatus>
                                                    {getButtonStatus(item.status)}
                                                </ButtonStatus>
                                            </BoxManage>
                                        </BoxContentTrack>
                                    )
                                })}
                            </>
                        )}
                    </GlobalTemplate>
                </>
            )}
        </>
    )

}

export default PembeliPesananPage;