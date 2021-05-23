import React, { useState, useEffect } from "react";
import { PopulerData, AllVendor } from "../datas/populerdata";
import LoadingPage from "../templates/Loading";
import {
  ShowAtTopProduk,
  ShowAtTopVendor,
  PenilaianVendor,
} from "../templates/Tampilan";
import TampilanProduk from "../components/TampilanProdukVendor/TampilanProduk";
import { productService } from "../services/Product";
import TampilanVendor from "../components/TampilanProdukVendor/TampilanVendor";

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
  }, []);
  console.log(productData);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <ShowAtTopProduk
            image={productData.foto_produk.url}
            kota={productData.lokasi}
            judul={productData.nama}
            vendor={productData.vendor.nama_vendor}
            rating={productData.rating}
            ulasan={productData.penilaian.length}
            harga={productData.harga}
          />
          <TampilanProduk
            descprod={productData.deskripsi_produk}
            fotoproduk={productData.list_foto_produk}
          />
          <PenilaianVendor
            fotovendor={productData.vendor.foto_profil.url}
            vendor={productData.vendor.nama_vendor}
            rating={productData.rating}
            ulasan={productData.penilaian.length}
            comments={productData.penilaian}
          />
        </>
      )}
    </>
  );
};

const TampilanVendorPage = ({ match }) => {
  const vendor = AllVendor.filter((x) => x["vendor"] == match.params.vendor);
  const produkvendors = PopulerData.filter(
    (x) => x["vendor"] == match.params.vendor
  );
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          {vendor.map((item, idx) => {
            return (
              <>
                <ShowAtTopVendor
                  key={idx}
                  fotovendor={item.fotovendor}
                  vendor={item.vendor}
                  ratingvendor={item.ratingvendor}
                  ulasanvendor={item.ulasanvendor}
                />
                <TampilanVendor
                  descvendor={item.descvendor}
                  produkvendor={produkvendors}
                  comments={item.comments}
                  portofolio={item.portofolio}
                />
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export { TampilanProdukPage, TampilanVendorPage };
