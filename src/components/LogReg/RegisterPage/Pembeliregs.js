import React, { useState, useEffect } from "react";
import {
  LoginInput,
  LogApart,
  IconBg,
  LoginLabel,
  Buttonslog,
  Buttons,
} from "../LoginPage/LoginStyled";
import { withRouter } from "react-router-dom";
import { CheckBoxInput, TermanConds } from "./RegisterStyled";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { authService } from "../../../services/Auth";
import {
  PopBgSuccess,
  BgSuccess,
  Succesicon,
} from "../../../templates/GlobalTemplate";

const Pembeliregs = (props) => {
  const [visible, setVisible] = useState(true);
  const [typepw, setTypepw] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

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
    setAccountCreated(true)
    const response = await authService.register(formData).catch((err) => {
      return setError(err.response.data.data[0].messages[0].message);
    });
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
    <form onSubmit={submitHandler}>
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
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
            <BsFillEyeSlashFill onClick={toggle} style={{ color: "#909DAA" }} />
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
        <div style={{ width: "100%" }}>
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
            <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
              <b>SUCCESS</b>
              Akun Berhasil Dibuat
            </div>
          </BgSuccess>
        </PopBgSuccess>
      ) : (<></>)}
    </form>
  );
};
export default withRouter(Pembeliregs);
