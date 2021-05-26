import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash, TempVendash } from "../VendorDashboardStyled";
import {
    TitleStats,
    BoxPesanan,
    BoxPesananContent,
    ImagePesanan,
    JudulHarga,
    SubJudul,
    SubJudulContent,
    BoxNotEntry
} from "./VendorPesananStyle"

const VendorPesananContent = ({ data }) => {
    const pesanan = data.filter(stat => stat.status === "memesan");
    const ended = data.filter(stat => stat.status === "selesai");
    return (
        <GlobalTemplate>
            <TempVendash>
                <DashboardSite typeVendash="pesanan" />
                <MainVendash>
                    <TitleStats>Sedang Berjalan</TitleStats>
                    {pesanan.length === 0 ? (
                        <BoxNotEntry>Tidak Ada Pesanan</BoxNotEntry>
                    ) : (
                        <>
                            {pesanan.map((item, idx) => {
                                return (
                                    <BoxPesanan key={idx}>
                                        <BoxPesananContent image>
                                            <ImagePesanan src={item.image} />
                                        </BoxPesananContent>
                                        <BoxPesananContent>
                                            <JudulHarga judul>{item.judul}</JudulHarga>
                                            <JudulHarga>Rp{item.harga}</JudulHarga>
                                            <SubJudul>Nomor Invoice</SubJudul>
                                            <SubJudulContent>{item.invoice}</SubJudulContent>
                                            <SubJudul>Nama Pembeli</SubJudul>
                                            <SubJudulContent>{item.pembeli}</SubJudulContent>
                                            <SubJudul>Tanggal Pesanan</SubJudul>
                                            <SubJudulContent tanggal>{item.tanggalpesan}</SubJudulContent>
                                            <SubJudul>Status</SubJudul>
                                            <SubJudulContent tanggal status>Menunggu Pembayaran</SubJudulContent>
                                        </BoxPesananContent>
                                    </BoxPesanan>
                                )
                            })}
                        </>
                    )}
                    <TitleStats selesai>Selesai</TitleStats>
                    {ended.length === 0 ? (
                        <BoxNotEntry>Belum Ada Pesanan Selesai</BoxNotEntry>
                    ) : (
                        <>
                            {ended.map((item, idx) => {
                                return (
                                    <BoxPesanan key={idx}>
                                        <BoxPesananContent image>
                                            <ImagePesanan src={item.image} />
                                        </BoxPesananContent>
                                        <BoxPesananContent>
                                            <JudulHarga judul>{item.judul}</JudulHarga>
                                            <JudulHarga>Rp{item.harga}</JudulHarga>
                                            <SubJudul>Nomor Invoice</SubJudul>
                                            <SubJudulContent>{item.invoice}</SubJudulContent>
                                            <SubJudul>Nama Pembeli</SubJudul>
                                            <SubJudulContent>{item.pembeli}</SubJudulContent>
                                            <SubJudul>Tanggal Pesanan</SubJudul>
                                            <SubJudulContent tanggal>{item.tanggalpesan}</SubJudulContent>
                                            <SubJudul>Status</SubJudul>
                                            <SubJudulContent tanggal status>Selesai</SubJudulContent>
                                        </BoxPesananContent>
                                    </BoxPesanan>
                                )
                            })}
                        </>
                    )}
                </MainVendash>
            </TempVendash>
        </GlobalTemplate>
    )
}

export default VendorPesananContent;