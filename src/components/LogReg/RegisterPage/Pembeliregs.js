import React, { useState, useEffect, useContext } from "react";
import {
  LoginInput,
  LogApart,
  IconBg,
  LoginLabel,
  Buttonslog,
  Buttons,
} from "../LoginPage/LoginStyled";
import { withRouter } from "react-router-dom";
import {
  CheckBoxInput,
  TermanConds,
  CondTermBg,
  CondTermTitle,
  CondTermContent,
} from "./RegisterStyled";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { authService } from "../../../services/Auth";
import {
  PopBgSuccess,
  PopUpBg,
  BgSuccess,
  Succesicon,
  ContentPopUp,
} from "../../../templates/GlobalTemplate";
import { pembeliService } from "../../../services/Pembeli";
import { loginContext } from "../../../context";

const Pembeliregs = (props) => {
  const [visible, setVisible] = useState(true);
  const [typepw, setTypepw] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [condTerm, setCondTerm] = useState(false);
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    username: "",
    password: "",
    phone_number: "",
    role: "609d0717322f2d5510e1a0a7",
  });
  const [error, setError] = useState([]);

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
    setAccountCreated(true);
    const { username, email, password, nama_lengkap, role, phone_number } =
      formData;
    const body = {
      username,
      email,
      password,
      nama_lengkap,
      phone_number,
      role,
    };
    const response = await authService.register(body);
    console.log(response);
    const data = response.data;
    if (data) {
      const bodyPembeli = {
        user: data.user._id,
      };
      const pembeliRes = await pembeliService.postPembeli(
        data.jwt,
        bodyPembeli
      );
    }
    setTimeout(() => {
      setAccountCreated(false);
      props.history.push("/login");
    }, 700);
    return response;
  };

  useEffect(() => {
    toggle();
  }, []);

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <p style={{ color: "red" }}>{error}</p>
        <br />
        <LoginLabel for="name">Nama Lengkap</LoginLabel>
        <br />
        <LoginInput
          type="text"
          required
          name="nama_lengkap"
          onChange={(e) =>
            setFormData({ ...formData, nama_lengkap: e.target.value })
          }
        />
        <br />
        <LoginLabel for="username">Username</LoginLabel>
        <br />
        <LoginInput
          type="text"
          required
          name="username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <br />

        <LoginLabel for="email">E-mail</LoginLabel>
        <br />
        <LoginInput
          type="email"
          required
          name="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />

        <LoginLabel for="password">Password</LoginLabel>
        <br />
        <LogApart>
          <LoginInput
            type={typepw}
            required
            pattern=".{6,}"
            title="Enam atau lebih karakter"
            name="password"
            pw
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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

        <LoginLabel for="num">No HP (Terhubung WA)</LoginLabel>
        <br />
        <LoginInput
          type="number"
          required
          name="phone_number"
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
        />
        <br />

        <CheckBoxInput>
          <input type="checkbox" required style={{ marginRight: "4px" }} />
          <div
            style={{ width: "100%" }}
            onClick={() => {
              setCondTerm(true);
            }}
          >
            Saya setuju dengan <TermanConds>Syarat dan Ketentuan</TermanConds>
          </div>
        </CheckBoxInput>

        <Buttonslog type="submit">
          <Buttons>Daftar</Buttons>
        </Buttonslog>
        {accountCreated ? (
          <PopBgSuccess>
            <BgSuccess aktif={accountCreated === true} right>
              <Succesicon />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <b>SUCCESS</b>
                Akun Berhasil Dibuat
              </div>
            </BgSuccess>
          </PopBgSuccess>
        ) : (
          <></>
        )}
      </form>
      <>
        {condTerm ? (
          <PopUpBg need>
            <ContentPopUp>
              <CondTermBg>
                <CondTermTitle>Syarat dan Ketentuan</CondTermTitle>
                <CondTermContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                </CondTermContent>
                <Buttonslog
                  onClick={() => {
                    setCondTerm(false);
                  }}
                >
                  <Buttons>Tutup</Buttons>
                </Buttonslog>
              </CondTermBg>
            </ContentPopUp>
          </PopUpBg>
        ) : (
          <></>
        )}
      </>
    </>
  );
};
export default withRouter(Pembeliregs);
