import React, { useState, useEffect } from "react";
import {
  LoginBg,
  LoginBox,
  LoginTittle,
  LoginInput,
  LogApart,
  IconBg,
  LoginLabel,
  RadioButton,
  HaveAccount,
  HaveAccountLink,
  Buttonslog,
  Buttons,
  Liner,
  OrLine,
  Buttonsgoogle,
  GooglePlus,
  ForgotPass,
  BgForgot,
} from "./LoginStyled";
import LoadingPage from "../../../templates/Loading";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import line from "../../../images/line.png";
import { authService } from "../../../services/Auth";
import {
  PopBgSuccess,
  BgSuccess,
  PopUpBg,
  Succesicon,
  Failedicon,
  ContentPopUp,
} from "../../../templates/GlobalTemplate";
import sucregcheck from "../../../images/sucregcheck.png";
import {
  SucRegWrited,
  GoHome,
  SucRegBox,
  SucRegBg,
} from "../SuccessRegPage/SuccessRegStyled";
import {
  ChangePwBg,
  TitleApart,
  DivButton,
  DivisionTitle,
  TitleChangepw,
} from "../../VendorDashboard/VendorProfil/VendorProfileStyled";
import {
  InputModif,
  LabelVendorProduk,
} from "../../VendorDashboard/VendorProduk/VendorProdukStyled";
import axios from "axios";

const LoginPage = (props) => {
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [typepw, setTypepw] = useState("");
  const [visibles, setVisibles] = useState({
    rate: false,
    dons: false,
  });
  const [loginUser, setLoginUser] = useState({
    right: false,
    wrong: false,
  });
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [role, setRole] = useState("pembeli");
  const [pembelibutton, setPembelibutton] = useState(true);
  const [vendorbutton, setVendorbutton] = useState(false);
  const [error, setError] = useState("");
  const pembeliId = "609d0717322f2d5510e1a0a7";
  const toggle = () => {
    setVisible(!visible);
    if (visible === false) {
      setTypepw("text");
    } else {
      setTypepw("password");
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await authService.login(formData).catch((err) => {
      setLoginUser({ ...loginUser, wrong: true });
      setTimeout(() => {
        setLoginUser({ ...loginUser, wrong: false });
      }, 2000);
      return setError("Invalid Email or Password");
    });
    if (response) {
      const userData = response.data;
      if (userData) {
        if (userData.user.role._id == pembeliId && role == "pembeli") {
          //Nanti push ke halaman lainnya disini ya (Pembeli)
          localStorage.setItem("userId", userData.user.id);
          localStorage.setItem("token", userData.jwt);
          localStorage.setItem("nama", userData.user.nama_lengkap);
          if (userData.user.pembeli) {
            localStorage.setItem("pembeliId", userData.user.pembeli.id);
          }
          localStorage.setItem("role", "pembeli");
          setLoginUser({ ...loginUser, right: true });
          setTimeout(() => {
            setLoginUser({ ...loginUser, right: false });
            window.location.reload();
            window.location.href = "/";
          }, 1000);
          return response;
        }
        if (userData.user.role._id != pembeliId && role == "pembeli") {
          setLoginUser({ ...loginUser, wrong: true });
          setTimeout(() => {
            setLoginUser({ ...loginUser, wrong: false });
          }, 2000);
          return setError(
            "Akun dengan email ini tidak terdaftar sebagai pembeli"
          );
        }
        if (userData.user.role._id != pembeliId && role == "vendor") {
          if (userData.user.vendor.verified == false) {
            setLoginUser({ ...loginUser, wrong: true });
            setTimeout(() => {
              setLoginUser({ ...loginUser, wrong: false });
            }, 2000);
            return setError("Vendor is not Verified");
          }
          localStorage.setItem("token", userData.jwt);
          localStorage.setItem("nama", userData.user.nama_lengkap);
          localStorage.setItem("vendor_id", userData.user.vendor._id);
          localStorage.setItem("userId", userData.user.id);
          localStorage.setItem("role", "vendor");
          setLoginUser({ ...loginUser, right: true });
          setTimeout(() => {
            setLoginUser({ ...loginUser, right: false });
            window.location.reload();
            window.location.href = "/vendor-chat";
          }, 1000);
          return response;
        }
        if (userData.user.role._id == pembeliId && role == "vendor") {
          setLoginUser({ ...loginUser, wrong: true });
          setTimeout(() => {
            setLoginUser({ ...loginUser, wrong: false });
          }, 2000);
          return setError(
            "Akun dengan email ini tidak terdaftar sebagai vendor"
          );
        }
      }
    }
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  useEffect(() => {
    toggle();
  }, []);

  // const forgetPassword = async () => {
  //   const response = await axios.post("http://:1337/auth/forgot-password", {
  //     email: "jonathan.sendiko@gmail.com",
  //   });
  //   console.log(response);
  // };
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <LoginBg>
          <LoginBox>
            <LoginTittle>Log In</LoginTittle>
            <form onSubmit={submitHandler}>
              <LoginLabel for="email">E-mail</LoginLabel>
              <br />
              <LoginInput
                type="email"
                required
                name="email"
                onChange={(e) => {
                  setFormData({ ...formData, identifier: e.target.value });
                }}
              />
              <br />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <LoginLabel for="password">Password</LoginLabel>
                <ForgotPass
                  onClick={() => {
                    setVisibles({ dons: false, rate: true });
                  }}
                >
                  Lupa Password
                </ForgotPass>
              </div>
              <LogApart>
                <LoginInput
                  type={typepw}
                  required
                  name="password"
                  pw
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
                {visible ? (
                  <IconBg>
                    <BsFillEyeSlashFill
                      onClick={toggle}
                      style={{ color: "#909DAA" }}
                    />
                  </IconBg>
                ) : (
                  <IconBg>
                    <BsFillEyeFill
                      onClick={toggle}
                      style={{ color: "#909DAA" }}
                    />
                  </IconBg>
                )}
              </LogApart>

              {visibles.rate ? (
                <>
                  <PopUpBg>
                    <ContentPopUp>
                      <BgForgot>
                        <TitleApart>
                          <DivisionTitle>
                            <TitleChangepw>Lupa Password</TitleChangepw>
                          </DivisionTitle>
                          <DivisionTitle
                            button
                            onClick={() => {
                              setVisibles({ dons: false, rate: false });
                            }}
                          >
                            <DivButton>X</DivButton>
                          </DivisionTitle>
                        </TitleApart>
                        <LabelVendorProduk awal>
                          Email Pengguna
                        </LabelVendorProduk>
                        <InputModif
                          type="email"
                          required
                          pattern=".{6,}"
                          title="Enam atau lebih karakter"
                          name="pwlama"
                        />
                        <LabelVendorProduk>Jenis Akun</LabelVendorProduk>
                        <p>{role}</p>

                        <Buttonslog
                          onClick={() => {
                            setVisibles({ dons: true, rate: false });
                          }}
                        >
                          <Buttons>Selanjutnya</Buttons>
                        </Buttonslog>
                      </BgForgot>
                    </ContentPopUp>
                  </PopUpBg>
                </>
              ) : visibles.dons ? (
                <>
                  <PopUpBg>
                    <ContentPopUp>
                      <SucRegBox>
                        <img
                          src={sucregcheck}
                          alt="success"
                          style={{ margin: "12px auto" }}
                        />
                        <SucRegWrited>
                          Permintaan Ubah Password Berhasil
                        </SucRegWrited>
                        <SucRegWrited message>
                          Klik link pada email anda untuk mengubah password
                        </SucRegWrited>
                        <GoHome
                          onClick={() => {
                            setVisibles({ dons: false, rate: false });
                          }}
                        >
                          Tutup
                        </GoHome>
                      </SucRegBox>
                    </ContentPopUp>
                  </PopUpBg>
                </>
              ) : (
                <></>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "60%",
                  margin: "15px auto 0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RadioButton
                    type="radio"
                    value="pembeli"
                    name="type"
                    checked={pembelibutton}
                    onClick={() => {
                      setRole("pembeli");
                      setVendorbutton(false);
                      setPembelibutton(true);
                    }}
                  />
                  <LoginLabel for="pembeli">Pembeli</LoginLabel>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RadioButton
                    type="radio"
                    value="vendor"
                    name="type"
                    checked={vendorbutton}
                    onClick={() => {
                      setRole("vendor");
                      setVendorbutton(true);
                      setPembelibutton(false);
                    }}
                  />
                  <LoginLabel for="vendor">Vendor</LoginLabel>
                </div>
              </div>
              <HaveAccount>
                Belum memiliki akun?
                <HaveAccountLink to="/register">
                  Daftar Sekarang
                </HaveAccountLink>
              </HaveAccount>

              <Buttonslog type="submit">
                <Buttons>Masuk</Buttons>
              </Buttonslog>
            </form>

            <>
              {role === "pembeli" ? (
                <>
                  <Liner img={line}>
                    <OrLine>atau</OrLine>
                  </Liner>

                  <Buttonsgoogle href="https://bikinevent.id/api/connect/google">
                    <GooglePlus />
                    Google
                  </Buttonsgoogle>
                </>
              ) : (
                <></>
              )}
            </>

            {loginUser.wrong ? (
              <PopBgSuccess>
                <BgSuccess aktif={loginUser.wrong === true}>
                  <Failedicon />
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <b>FAILED</b>
                    {error}
                  </div>
                </BgSuccess>
              </PopBgSuccess>
            ) : loginUser.right ? (
              <PopBgSuccess>
                <BgSuccess aktif={loginUser.right === true} right>
                  <Succesicon />
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <b>SUCCESS</b>
                    Anda Berhasil Login!
                  </div>
                </BgSuccess>
              </PopBgSuccess>
            ) : (
              <></>
            )}
          </LoginBox>
        </LoginBg>
      )}
    </>
  );
};
export default LoginPage;
