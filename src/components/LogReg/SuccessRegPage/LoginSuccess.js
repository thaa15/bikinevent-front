import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { SucRegBg, SucRegBox, SucRegWrited, GoHome } from "./SuccessRegStyled";
import sucregcheck from "../../../images/sucregcheck.png";
import LoadingPage from "../../../templates/Loading";
import axios from "axios";
import { pembeliService } from "../../../services/Pembeli";

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
              localStorage.setItem("token", jwt);
              localStorage.setItem("nama", user.username);
              localStorage.setItem("userId", user.id);
              localStorage.setItem("pembeliId", res.data._id);
              localStorage.setItem("role", "pembeli");
            });
          setTimeout(() => {
            window.location.reload();
            window.location.href = "/google-register";
          }, 100);
        }
      } else {
        localStorage.setItem("token", jwt);
        localStorage.setItem("nama", user.username);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("pembeliId", user.pembeli._id);
        localStorage.setItem("role", "pembeli");
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
