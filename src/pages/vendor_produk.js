import React, { useState, useEffect } from "react";
import LoadingPage from "../templates/Loading";
import {
  ShowAtTopProduk,
  ShowAtTopVendor,
  PenilaianVendor,
} from "../templates/Tampilan";
import TampilanProduk from "../components/TampilanProdukVendor/TampilanProduk";
import { productService } from "../services/Product";
import TampilanVendor from "../components/TampilanProdukVendor/TampilanVendor";
import { vendorService } from "../services/Vendor";
import grey from "../images/grey.png";
import { GlobalTemplate } from "../templates/GlobalTemplate";
import { ChatNotOpen } from "../components/VendorDashboard/VendorChat/VendorChatStyled";
import {
  NoEntryContent,
  ImageNoEntry,
} from "../components/PembeliDashboard/PembeliCart/Styled";
import nochat from "../images/nochat.png";

const TampilanProdukPage = ({ match }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await productService.getProductById(match.params.id);
      const data = response.data;
      await setProductData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [match.params.id]);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          {productData.id == null || productData.vendor == null ? (
            <GlobalTemplate>
              <ChatNotOpen>
                <NoEntryContent>
                  <ImageNoEntry src={nochat} alt="No Entry" />
                  <h4 style={{ fontSize: "18px", color: "#212B36" }}>
                    Produk Tidak Ditemukan
                  </h4>
                  <p style={{ fontSize: "14px", color: "#909DAA" }}>
                    Vendor tidak menjual produk ini / Pihak kami melakukan
                    tindakan pada vendor pada produk ini
                  </p>
                </NoEntryContent>
              </ChatNotOpen>
            </GlobalTemplate>
          ) : (
            <>
              <ShowAtTopProduk
                id={productData.id}
                chatId={productData.vendor.user}
                vendorId={productData.vendor.id}
                image={productData.foto_produk[0].url}
                kota={productData.lokasi}
                judul={productData.nama}
                vendor={productData.vendor.nama_vendor}
                rating={productData.rating}
                ulasan={productData.penilaian.length}
                harga={productData.harga}
              />
              <TampilanProduk
                descprod={productData.deskripsi_produk}
                fotoproduk={productData.foto_produk}
                lengths={productData.foto_produk.length}
              />
              <>
                {typeof productData.vendor.foto_profil === "undefined" ||
                productData.vendor.foto_profil == null ? (
                  <PenilaianVendor
                    fotovendor={grey}
                    vendor={productData.vendor}
                    rating={productData.rating}
                    ulasan={productData.penilaian.length}
                    comments={productData.penilaian}
                  />
                ) : (
                  <PenilaianVendor
                    fotovendor={productData.vendor.foto_profil.url}
                    vendor={productData.vendor}
                    rating={productData.rating}
                    ulasan={productData.penilaian.length}
                    comments={productData.penilaian}
                  />
                )}
              </>
            </>
          )}
        </>
      )}
    </>
  );
};

const TampilanVendorPage = ({ match }) => {
  const [vendorData, setVendorData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [totalRating, setTotalRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await vendorService.getVendorById(match.params.vendor);
      const data = response.data;
      let totalUlasan = 0;
      await setVendorData(data);
      const calculateTotalRating = () => {
        let tempTotal = 0;
        data.produks.forEach((prod) => {
          prod.penilaian.forEach((ulasan) => {
            tempTotal += ulasan.rating;
            totalUlasan += 1;
          });
        });
        setTotalRating((tempTotal / totalUlasan).toFixed(2));
      };
      calculateTotalRating();
      setIsLoading(false);
    };
    fetchData();
  }, [match.params.vendor]);
  console.log(totalRating);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          {typeof vendorData.foto_profil === "undefined" ||
          vendorData.foto_profil.url == null ? (
            <ShowAtTopVendor
              fotovendor={grey}
              vendor={vendorData.nama_vendor}
              ratingvendor={totalRating}
              ulasanvendor={vendorData.comments.length}
            />
          ) : (
            <ShowAtTopVendor
              fotovendor={vendorData.foto_profil.url}
              vendor={vendorData.nama_vendor}
              ratingvendor={totalRating}
              ulasanvendor={vendorData.comments.length}
            />
          )}

          <TampilanVendor
            descvendor={vendorData.deskripsi}
            produkvendor={vendorData.produks}
            comments={vendorData.comments}
            portofolio={vendorData.portfolios}
          />
        </>
      )}
    </>
  );
};

export { TampilanProdukPage, TampilanVendorPage };
