import React, { useState, useEffect, useContext } from "react";
import HeaderSmall from "../templates/HeaderSmall";
import LoadingPage from "../templates/Loading";
import PembeliProfilContent from "../components/PembeliDashboard/PembeliProfil";
import { ProfilePembeli } from "../datas/vendordata";
import { pembeliService } from "../services/Pembeli";
import { authService } from "../services/Auth";
import { loginContext } from "../context";

export const PembeliProfil = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { loginInfo } = useContext(loginContext);
  const [userData, setUserData] = useState();
  const [infoData, setInfoData] = useState();
  useEffect(() => {
    const fetchProfil = async () => {
      const response = await authService.getDetails(loginInfo.token);
      const data = response.data;
      setUserData(data);
      const responsePembeli = await pembeliService.getPembeliById(
        data.pembeli,
        loginInfo.token
      );
      const dataPembeli = responsePembeli.data;
      setInfoData(dataPembeli.informasi_pembeli);
      setIsLoading(false);
    };
    fetchProfil();
  }, []);

  console.log(infoData);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <HeaderSmall text="Pengaturan Profile" />

          <PembeliProfilContent
            owner={userData.nama_lengkap}
            email={userData.email}
            phone_number={userData.phone_number}
            client_information={infoData}
            info={loginInfo}
          />
        </>
      )}
    </>
  );
};
