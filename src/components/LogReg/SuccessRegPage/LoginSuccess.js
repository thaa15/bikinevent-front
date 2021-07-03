import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { SucRegBg, SucRegBox, SucRegWrited, GoHome } from "./SuccessRegStyled";
import sucregcheck from "../../../images/sucregcheck.png";
import LoadingPage from "../../../templates/Loading";
import axios from "axios";

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
      console.log(response);
      return response;
    };
    postNewUser();
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 900);
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
            <GoHome
              onClick={() => {
                props.history.push("/");
              }}
            >
              Kembali ke Beranda
            </GoHome>
          </SucRegBox>
        </SucRegBg>
      )}
    </>
  );
};

export default LoginSuccess;
