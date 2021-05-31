import React from "react";
import { TitleStats } from "../VendorPesanan/VendorPesananStyle";
import {
    LabelVendorProduk,
    InputModif,
    InputModifArea,
    InputMCQ,
    Options,
    PriceLabel
} from "./VendorProdukStyled";

const VendorProdukForm = () => {
    return (
        <>
            <TitleStats>Tambah Produk Baru</TitleStats>
            <form>
                <LabelVendorProduk awal>Nama Produk</LabelVendorProduk>
                <InputModif
                    type="text"
                    required
                    name="nama" />

                <LabelVendorProduk>Deskripsi</LabelVendorProduk>
                <InputModifArea
                    rows="8"
                    required
                    name="description" />

                <LabelVendorProduk>Kategori</LabelVendorProduk>
                <InputMCQ name="kategori">
                    <Options non>Pilih Kategori</Options>
                    <Options value="perlengkapan">Perlengkapan</Options>
                    <Options value="venue">Venue</Options>
                    <Options value="talent">Talent</Options>
                    <Options value="jasa">Jasa</Options>
                    <Options value="catering">Catering</Options>
                    <Options value="dekorasi">Dekorasi</Options>
                </InputMCQ>
                <br />
                <LabelVendorProduk>Lokasi</LabelVendorProduk>
                <InputMCQ name="lokasi">
                    <Options non>Pilih Kota</Options>
                    <Options value="jakarta">Jakarta</Options>
                    <Options value="bandung">Bandung</Options>
                    <Options value="semarang">Semarang</Options>
                    <Options value="depok">Depok</Options>
                    <Options value="bekasi">Bekasi</Options>
                    <Options value="tangerang">Tangerang</Options>
                </InputMCQ>
                <br/>
                <LabelVendorProduk>Harga</LabelVendorProduk>
                <PriceLabel>Rp</PriceLabel>
                <InputModif
                    harga
                    type="number"
                    required
                    name="price" />
                <LabelVendorProduk>Foto Produk</LabelVendorProduk>
                <LabelVendorProduk>Tags</LabelVendorProduk>
                <InputModifArea
                    rows="4"
                    required
                    name="description" />
            </form>
        </>
    )
}

export default VendorProdukForm;