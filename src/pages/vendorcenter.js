import React, { useContext, useEffect, useState } from "react";
import { VendorHeader } from "../templates/HeaderSmall/VendorHeader";
import LoadingPage from "../templates/Loading";
import {
  PesananVendor,
  KeuanganVendor,
  ProfileVendor,
} from "../datas/vendordata";
import VendorChatContent from "../components/VendorDashboard/VendorChat";
import VendorPesananContent from "../components/VendorDashboard/VendorPesanan";
import VendorProdukContent from "../components/VendorDashboard/VendorProduk";
import VendorKeuanganContent from "../components/VendorDashboard/VendorKeuangan";
import VendorProfilContent from "../components/VendorDashboard/VendorProfil";
import { authService } from "../services/Auth";
import { loginContext } from "../context";
import { productService } from "../services/Product";
import { vendorService } from "../services/Vendor";

export const VendorChat = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <VendorHeader />
          <VendorChatContent />
        </>
      )}
    </>
  );
};

export const VendorPesanan = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <VendorHeader />
          <VendorPesananContent data={PesananVendor} />
        </>
      )}
    </>
  );
};

export const VendorProduk = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const { vendorlog } = useContext(loginContext);
  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await authService.getDetails(vendorlog);
      const userData = userResponse.data;
      const vendorResponse = await vendorService.getVendorById(userData.vendor);
      const vendorData = vendorResponse.data;
      setProductData(vendorData.produks);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <VendorHeader />
          <VendorProdukContent data={productData} />
        </>
      )}
    </>
  );
};

export const VendorKeuangan = () => {
  const [isLoading, setIsLoading] = useState(true);

  //Ini nanti lu ganti jadi GET apa gitu yg sama sama nama yg ditarik
  const data = KeuanganVendor.filter((dats) => dats.name === "Ernia");
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <VendorHeader />
          {/*Ini karena dapet Array, sabi ganti*/}
          {data.map((item, idx) => (
            <VendorKeuanganContent
              key={idx}
              balance_released={item.balance_release}
              seller_balance={item.seller_price}
              account_number={item.account_number}
              bank={item.bank}
              account_name={item.name}
              income_history={item.income_history}
              balance_withdrawal={item.balance_withdrawal}
            />
          ))}
        </>
      )}
    </>
  );
};

export const VendorProfil = () => {
  const [isLoading, setIsLoading] = useState(true);

  //ganti GET
  const data = ProfileVendor.filter((dats) => dats.name === "Ernia");
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <VendorHeader />
          {data.map((item, idx) => (
            <VendorProfilContent
              key={idx}
              vendor_name={item.vendor_name}
              owner={item.name}
              email={item.email}
              phone_number={item.phone_number}
              password={item.password}
              portofolio={item.portofolio}
            />
          ))}
        </>
      )}
    </>
  );
};
