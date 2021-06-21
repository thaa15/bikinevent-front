import React from "react";
import { Link } from "react-router-dom";
import { TitleTampilan } from "../../../templates/Tampilan/TampilanStyled";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import {
  TampilanWritedContent,
  TampilanWritedWidth,
} from "../TampilanProduk/TampilanProdukStyled";
import { BoxHarga } from "../../../templates/Box";
import {
  GridVendorTampilan,
  GridVendorPortofolio,
} from "./TampilanVendorStyled";
import {
  PenilaianVendorVendor,
  PortofolioVendor,
} from "../../../templates/Tampilan";

const TampilanVendor = ({ descvendor, produkvendor, comments, portofolio }) => {
  return (
    <GlobalTemplate>
      <div style={{ width: "100%" }}>
        <TitleTampilan>Deskripsi Vendor</TitleTampilan>
        <TampilanWritedWidth>
          <TampilanWritedContent>{descvendor}</TampilanWritedContent>
        </TampilanWritedWidth>
        <TitleTampilan>Produk</TitleTampilan>
        <GridVendorTampilan>
          {produkvendor.map((data, idx) => {
            return (
              <Link
                to={`/detailed-product/${data.id}`}
                style={{
                  height: "fit-content",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <BoxHarga
                  key={idx}
                  image={data.foto_produk[0].url}
                  city={data.lokasi}
                  judul={data.nama}
                  harga={data.harga}
                  rate={data.rating}
                  review={data.penilaian.length}
                />
              </Link>
            );
          })}
        </GridVendorTampilan>
        <TitleTampilan>Penilaian Vendor</TitleTampilan>
        <PenilaianVendorVendor comments={comments} />
        <TitleTampilan>Portofolio Vendor</TitleTampilan>
        <GridVendorPortofolio>
          {portofolio.map((data, idx) => (
            <PortofolioVendor
              key={idx}
              portofoliotitle={data.nama}
              foto1={data.foto_portfolio[0].url}
              foto2={data.foto_portfolio[1].url}
            />
          ))}
        </GridVendorPortofolio>
      </div>
    </GlobalTemplate>
  );
};

export default TampilanVendor;
