import React, { useEffect, useState } from "react";
import HeaderSmall from "../templates/HeaderSmall";
import LegalLayanContent from "../components/LegalAndLayanan";
import LoadingPage from "../templates/Loading";
import { layananService } from "../services/Layanan";

const FAQ = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setFaq(data.FAQ);
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
          <HeaderSmall text="Layanan Pelanggan dan Legal" />
          <LegalLayanContent type="faq" data={faq} />
        </>
      )}
    </>
  );
};

const TentangKami = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [aboutUs, setAboutUs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setAboutUs(data.tentang_kami);
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
          <HeaderSmall text="Layanan Pelanggan dan Legal" />
          <LegalLayanContent type="tentang" data={aboutUs} />
        </>
      )}
    </>
  );
};

const Panduan = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [panduan, setPanduan] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setPanduan(data.panduan_pemesanan);
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
          <HeaderSmall text="Layanan Pelanggan dan Legal" />
          <LegalLayanContent type="panduan" data={panduan} />
        </>
      )}
    </>
  );
};

const Privasi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [privasi, setPrivasi] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setPrivasi(data.kebijakan_privasi);
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
          <HeaderSmall text="Layanan Pelanggan dan Legal" />
          <LegalLayanContent type="privasi" data={privasi} />
        </>
      )}
    </>
  );
};

const Refund = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [refund, setRefund] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setRefund(data.kebijakan_Refund);
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
          <HeaderSmall text="Layanan Pelanggan dan Legal" />
          <LegalLayanContent type="refund" data={refund} />
        </>
      )}
    </>
  );
};

const Syarat = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [syarat, setSyarat] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setSyarat(data.syarat_ketentuan);
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
          <HeaderSmall text="Layanan Pelanggan dan Legal" />
          <LegalLayanContent type="syarat" data={syarat} />
        </>
      )}
    </>
  );
};

export { FAQ, TentangKami, Panduan, Privasi, Refund, Syarat };
