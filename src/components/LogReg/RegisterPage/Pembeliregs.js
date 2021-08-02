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
  ButtonCloser,
  ButtonClosePopUp,
} from "../../../templates/GlobalTemplate";
import { pembeliService } from "../../../services/Pembeli";
import { layananService } from "../../../services/Layanan";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
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
  const [syarat, setSyarat] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setSyarat(data.syarat_ketentuan);
    };
    fetchData();
  }, []);

  const toggle = () => {
    setVisible(!visible);
    if (visible === false) {
      setTypepw("text");
    } else {
      setTypepw("password");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setSyarat(data.syarat_ketentuan);
    };
    fetchData();
  }, []);

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
          autocomplete="off"
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
          autocomplete="off"
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
            autocomplete="off"
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
          type="text"
          value={formData.phone_number}
          required
          name="phone_number"
          autocomplete="off"
          onChange={(e) => {
            let regexp = /^[0-9\b]+$/;
            if (e.target.value === "" || regexp.test(e.target.value)) {
              setFormData({ ...formData, phone_number: e.target.value });
            }
          }}
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
            <ButtonClosePopUp
              onClick={() => {
                setCondTerm(false);
              }}
            >
              <ButtonCloser />
            </ButtonClosePopUp>
            <ContentPopUp>
              <CondTermBg>
                {/* <CondTermTitle>Syarat dan Ketentuan</CondTermTitle> */}

                <CondTermContent>
                  <ReactMarkdown
                    children={syarat.desc}
                    plugins={[[gfm, { singleTilde: false }]]}
                    allowDangerousHtml={true}
                  />
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
