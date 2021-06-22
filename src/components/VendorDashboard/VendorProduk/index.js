import React, { useState, useEffect } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { TitleStats } from "../VendorPesanan/VendorPesananStyle";
import { MainVendash, TempVendash } from "../VendorDashboardStyled";
import { BoxNotEntry } from "../VendorPesanan/VendorPesananStyle";
import VendorProdukForm from "./VendorProdukForm";
import {
  ButtonAddProduct,
  ButtonAddProdTitl,
  GridProduct,
} from "./VendorProdukStyled";
import { BoxVendorProduct } from "../../../templates/Box";

const VendorProdukContent = ({ data }) => {
  const [addproduk, setAddproduk] = useState(true);
  const arsip = data.filter((stat) => stat.isArchived === true);
  const show = data.filter((stat) => stat.isArchived === false);
  console.log(show);

  return (
    <>
      <GlobalTemplate>
        <TempVendash>
          <DashboardSite typeVendash="produk" />
          <MainVendash>
            {addproduk ? (
              <>
                <TitleStats>Produk Live</TitleStats>
                <ButtonAddProduct>
                  <ButtonAddProdTitl
                    onClick={() => {
                      setAddproduk(false);
                    }}
                  >
                    + Tambah Produk Baru
                  </ButtonAddProdTitl>
                </ButtonAddProduct>
                {show.length === 0 ? (
                  <BoxNotEntry>Tidak Ada Produk yang Ditampilkan</BoxNotEntry>
                ) : (
                  <GridProduct>
                    {show.map((item, idx) => (
                      <BoxVendorProduct
                        key={idx}
                        id={item._id}
                        image={item.foto_produk[0].url}
                        harga={item.harga}
                        judul={item.nama}
                        statss="Arsipkan"
                      />
                    ))}
                  </GridProduct>
                )}
                <TitleStats selesai>Diarsipkan</TitleStats>
                {arsip.length === 0 ? (
                  <BoxNotEntry>Tidak Ada Produk yang Ditampilkan</BoxNotEntry>
                ) : (
                  <GridProduct>
                    {arsip.map((item, idx) => (
                      <BoxVendorProduct
                        key={idx}
                        id={item._id}
                        image={item.foto_produk[0].url}
                        harga={item.harga}
                        judul={item.nama}
                        statss="Tampilkan"
                      />
                    ))}
                  </GridProduct>
                )}
              </>
            ) : (
              <VendorProdukForm />
            )}
          </MainVendash>
        </TempVendash>
      </GlobalTemplate>
    </>
  );
};

export default VendorProdukContent;
