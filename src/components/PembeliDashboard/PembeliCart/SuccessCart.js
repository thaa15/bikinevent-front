import React, { useContext, useEffect, useState } from "react";
import {
  SucRegBg,
  SucRegBox,
  SucRegWrited,
  GoHome,
} from "../../LogReg/SuccessRegPage/SuccessRegStyled";
import { ProfilePembeli } from "../../../datas/vendordata";
import { Redirect } from "react-router";
import { ButtonLacak, ButtonApartas, EmailConfirm } from "./Styled";
import { AuthCliSuccess } from "../../../AllAuth";
import sucregcheck from "../../../images/sucregcheck.png";
import LoadingPage from "../../../templates/Loading";
import { authService } from "../../../services/Auth";
import { loginContext } from "../../../context";

const SuccessCart = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState();
  const { loginInfo } = useContext(loginContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await authService.getDetails(loginInfo.token);
      const data = response.data;
      setUserEmail(data.email);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {!AuthCliSuccess.isAutcliSuccess() ? (
        <>
          <Redirect to="/client-purchase/cart" />
        </>
      ) : (
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
                <SucRegWrited>Pemesanan Berhasil!</SucRegWrited>
                <EmailConfirm need>
                  Harap melakukan pembayaran yang tertera pada email
                  <span>{userEmail}</span>
                </EmailConfirm>
                <ButtonApartas>
                  <ButtonLacak
                    onClick={() => {
                      AuthCliSuccess.outcliSuccess(() => {
                        props.history.push("/");
                      });
                    }}
                  >
                    &lt; Kembali ke beranda
                  </ButtonLacak>
                  <GoHome
                    onClick={() => {
                      AuthCliSuccess.outcliSuccess(() => {
                        props.history.push("/track-order/records");
                      });
                    }}
                  >
                    Lacak Pesanan
                  </GoHome>
                </ButtonApartas>
              </SucRegBox>
            </SucRegBg>
          )}
        </>
      )}
    </>
  );
};

export default SuccessCart;
