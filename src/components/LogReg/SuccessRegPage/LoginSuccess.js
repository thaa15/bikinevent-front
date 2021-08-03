import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { SucRegBg, SucRegBox, SucRegWrited, GoHome } from "./SuccessRegStyled";
import sucregcheck from "../../../images/sucregcheck.png";
import LoadingPage from "../../../templates/Loading";
import axios from "axios";
import { pembeliService } from "../../../services/Pembeli";
import { encryptData } from "../../../Crypted";

const LoginSuccess = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useLocation();

  useEffect(() => {
    const postNewUser = async () => {
      const response = await axios.get(
        `https://bikinevent.id/api/auth/google/callback${search}`
      );
      const data = response.data;
      const { jwt, user } = data;
      console.log(data);
      if (typeof user.pembeli === "undefined" || user.pembeli == null) {
        if (data) {
          const bodyPembeli = {
            user: user._id,
          };
          const pembeliRes = await pembeliService
            .postPembeli(data.jwt, bodyPembeli)
            .then((res) => {
              const originalData = {
                userId: user.id,
                token: jwt,
                nama: user.username,
                pembeliId: res.data._id,
                role: 'pembeli'
              }
              const salt = '6d090796-ecdf-11ea-adc1-0242ac120003';
              const encryptedData = encryptData(originalData, salt);
              localStorage.setItem('mk', encryptedData);
            });
          setTimeout(() => {
            window.location.reload();
            window.location.href = "/google-register";
          }, 100);
        }
      } else {
        const originalData = {
          userId: user.id,
          token: jwt,
          nama: user.username,
          pembeliId: user.pembeli._id,
          role: 'pembeli'
        }
        const salt = '6d090796-ecdf-11ea-adc1-0242ac120003';
        const encryptedData = encryptData(originalData, salt);
        localStorage.setItem('mk', encryptedData);

        setIsLoading(false);
        setTimeout(() => {
          window.location.reload();
          window.location.href = "/";
        }, 100);
        return response;
      }
    };
    postNewUser();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <SucRegBg>
          <SucRegBox>
            <img
              src={sucregcheck}
              alt="success"
              style={{ margin: "12px auto" }}
            />
            <SucRegWrited>Login Berhasil</SucRegWrited>
            <GoHome>Kembali ke Beranda</GoHome>
          </SucRegBox>
        </SucRegBg>
      )}
    </>
  );
};

export default LoginSuccess;
