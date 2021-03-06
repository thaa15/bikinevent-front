import React, { useContext, useEffect, useState } from "react";
import { VendorHeader } from "../templates/HeaderSmall/VendorHeader";
import LoadingPage from "../templates/Loading";
import VendorChatContent from "../components/VendorDashboard/VendorChat";
import VendorPesananContent from "../components/VendorDashboard/VendorPesanan";
import VendorProdukContent from "../components/VendorDashboard/VendorProduk";
import VendorKeuanganContent from "../components/VendorDashboard/VendorKeuangan";
import VendorProfilContent from "../components/VendorDashboard/VendorProfil";
import { authService } from "../services/Auth";
import { loginContext } from "../context";
import { vendorService } from "../services/Vendor";
import { decryptData } from "../Crypted";

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
  const [pesanan, setPesanan] = useState();
  let mkLocalData = localStorage.getItem("mk");
  const salt = "6d090796-ecdf-11ea-adc1-0242ac120003";
  const originalData = decryptData(mkLocalData, salt);
  useEffect(() => {
    const fetchData = async () => {
      const vendorResponse = await vendorService.getVendorById(
        originalData.vendorId
      );
      const vendorData = vendorResponse.data;
      setPesanan(vendorData);
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
          <VendorPesananContent data={pesanan.order_histories} />
        </>
      )}
    </>
  );
};

export const VendorProduk = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const { loginInfo } = useContext(loginContext);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await authService.getDetails(loginInfo.token);
      const userData = userResponse.data;
      const vendorResponse = await vendorService.getVendorById(userData.vendor);
      const vendorData = vendorResponse.data;
      setProductData(vendorData.produks);
      setIsLoading(false);
    };
    fetchData();
  }, [loginInfo.token]);
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
  const [vendorData, setVendorData] = useState();

  let mkLocalData = localStorage.getItem("mk");
  const salt = "6d090796-ecdf-11ea-adc1-0242ac120003";
  const originalData = decryptData(mkLocalData, salt);
  useEffect(() => {
    const fetchData = async () => {
      const vendorResponse = await vendorService.getVendorById(
        originalData.vendorId
      );
      const vendorData = vendorResponse.data;
      setVendorData(vendorData);
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
          <VendorKeuanganContent
            vendorId={vendorData.id}
            balance_released={vendorData.keuangan.sudah_dilepas}
            to_be_released={vendorData.keuangan.akan_dilepas}
            seller_balance={vendorData.keuangan.saldo_penjual}
            account_number={vendorData.no_rekening}
            bank={vendorData.nama_bank}
            account_name={vendorData.nama_rekening}
            income_history={vendorData.order_histories}
            balance_withdrawal={vendorData.order_penarikans}
          />
        </>
      )}
    </>
  );
};

export const VendorProfil = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profilData, setProfilData] = useState();

  let mkLocalData = localStorage.getItem("mk");
  const salt = "6d090796-ecdf-11ea-adc1-0242ac120003";
  const originalData = decryptData(mkLocalData, salt);
  useEffect(() => {
    const fetchData = async () => {
      const response = await vendorService.getVendorById(originalData.vendorId);
      const data = response.data;
      setProfilData(data);
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
          <VendorProfilContent
            vendor_name={profilData.nama_vendor}
            owner={profilData.user.nama_lengkap}
            email={profilData.user.email}
            phone_number={profilData.user.phone_number}
            password=""
            portofolio={profilData.portfolios}
            description={profilData.deskripsi}
            location={profilData.location}
            vendorId={originalData.vendorId}
          />
        </>
      )}
    </>
  );
};
