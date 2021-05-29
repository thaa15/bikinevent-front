import React from "react";
import { TitleStats } from "../VendorPesanan/VendorPesananStyle";
import {
    LabelVendorProduk,
    InputModif,
    InputModifArea,
    InputMCQ
} from "./VendorProdukStyled";

const VendorProdukForm = () =>{
    return(
        <>
        <TitleStats>Tambah Produk Baru</TitleStats>
        <form>
            <LabelVendorProduk awal>Nama Produk</LabelVendorProduk><br/>
            <InputModif
             type="text"
             required
             name="nama"/>

             <LabelVendorProduk>Deskripsi</LabelVendorProduk><br/>
             <InputModifArea
             rows="8"
             required
             name="description"/>

             <LabelVendorProduk>Kategori</LabelVendorProduk><br/>
             <InputMCQ name="kategori">
                 <option value="perlengkapan">Perlengkapan</option>
                 <option value="venue">Venue</option>
                 <option value="talent">Talent</option>
                 <option value="jasa">Jasa</option>
                 <option value="catering">Catering</option>
                 <option value="dekorasi">Dekorasi</option>
             </InputMCQ>
            <br/>
             <LabelVendorProduk>Lokasi</LabelVendorProduk><br/>
             <InputMCQ name="lokasi">
                 <option value="jakarta">Jakarta</option>
                 <option value="bandung">Bandung</option>
                 <option value="semarang">Semarang</option>
                 <option value="depok">Depok</option>
                 <option value="bekasi">Bekasi</option>
                 <option value="tangerang">Tangerang</option>
             </InputMCQ>
        </form>
        </>
    )
}

export default VendorProdukForm;