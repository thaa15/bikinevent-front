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
} from "./LoginStyled";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import GoogleLogin from "react-google-login";
import line from "../../../images/line.png";
import { authService } from "../../../services/Auth";

const LoginPage = () => {
  const [visible, setVisible] = useState(true);
  const [typepw, setTypepw] = useState("");
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [role, setRole] = useState("pembeli");
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
      return setError("Invalid Email or Password");
    });
    if (response) {
      const userData = response.data;
      if (userData) {
        if (userData.user.role._id == pembeliId && role == "pembeli") {
          //Nanti push ke halaman lainnya disini ya (Pembeli)
          return response;
        }
        if (userData.user.role._id != pembeliId && role == "pembeli") {
          return setError(
            "Akun dengan email ini tidak terdaftar sebagai pembeli"
          );
        }
        if (userData.user.role._id != pembeliId && role == "vendor") {
          //Nanti push ke halaman lainnya disini ya (Vendor)
          return response;
        }
        if (userData.user.role._id == pembeliId && role == "vendor") {
          return setError(
            "Akun dengan email ini tidak terdaftar sebagai vendor"
          );
        }
      }
    }
  };

  useEffect(() => {
    toggle();
    console.log(role);
  }, []);

  return (
    <LoginBg>
      <LoginBox>
        <LoginTittle>Log In</LoginTittle>
        {error}
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

          <LoginLabel for="password">Password</LoginLabel>
          <br />
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
                <BsFillEyeFill onClick={toggle} style={{ color: "#909DAA" }} />
              </IconBg>
            )}
          </LogApart>

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
                checked
                onClick={() => setRole("pembeli")}
              />
              <LoginLabel for="pembeli">Pembeli</LoginLabel>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RadioButton
                type="radio"
                value="vendor"
                name="type"
                onClick={() => {
                  setRole("vendor");
                }}
              />
              <LoginLabel for="vendor">Vendor</LoginLabel>
            </div>
          </div>

          <HaveAccount>
            Belum memiliki akun?
            <HaveAccountLink to="/register">Daftar Sekarang</HaveAccountLink>
          </HaveAccount>

          <Buttonslog type="submit">
            <Buttons>Masuk</Buttons>
          </Buttonslog>
        </form>

        <Liner img={line}>
          <OrLine>atau</OrLine>
        </Liner>

        {/*<Buttonsgoogle>
                    <AiFillGooglePlusCircle style={{color: "white", fontSize:"20px", marginRight:"5px"}}/>
                    Google
                </Buttonsgoogle>*/}
        <GoogleLogin
          clientId={null}
          buttonText="Login"
          onSuccess={null}
          onFailure={null}
          cookiePolicy={"single_host_origin"}
          disabledStyle={{
            width: "100%",
            display: "flex",
            alignSelf: "center",
            background: "white",
            alignItems: "center",
            borderRadius: "10px",
            justifyContent: "center",
            cursor: "pointer",
          }}
        />
      </LoginBox>
    </LoginBg>
  );
};
export default LoginPage;
