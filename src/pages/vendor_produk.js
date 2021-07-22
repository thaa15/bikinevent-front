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
import grey from "../images/grey.png"

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
          <ShowAtTopProduk
            id={productData.id}
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
          <PenilaianVendor
            fotovendor={productData.vendor.foto_profil.url}
            vendor={productData.vendor}
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
  const [vendorData, setVendorData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [totalRating, setTotalRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await vendorService.getVendorById(match.params.vendor);
      const data = response.data;
      await setVendorData(data);
      const calculateTotalRating = () => {
        let tempTotal = 0;
        data.comments.forEach((comment) => {
          tempTotal += comment.rating;
        });
        setTotalRating(tempTotal / data.comments.length);
      };

      if (data.comments.length !== 0) { calculateTotalRating(); }
      setIsLoading(false);
    };
    fetchData();
  }, [match.params.vendor]);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <ShowAtTopVendor
            fotovendor={vendorData.foto_profil.url}
            vendor={vendorData.nama_vendor}
            ratingvendor={totalRating}
            ulasanvendor={vendorData.comments.length}
          />
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
