import React, { useState, useEffect, useRef } from "react";
import Dropzone from "react-dropzone";
import {
  LoginInput,
  LogApart,
  IconBg,
  LoginLabel,
  Buttonslog,
  Buttons,
  RadioButton,
} from "../LoginPage/LoginStyled";
import {
  CheckBoxInput,
  TermanConds,
  InputCityApart,
  UploadFile,
  FileViewStyle,
} from "./RegisterStyled";
import { withRouter } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import upfil from "../../../images/uploadfile.png";
import { authService } from "../../../services/Auth";
import axios from "axios";
import { AuthSucRegs } from "../../../AllAuth";

const Vendorregs = (props) => {
  const [visible, setVisible] = useState(true);
  const [typepw, setTypepw] = useState("");
  const dropRef = useRef();
  const dropRefWajah = useRef();
  const dropRefKTP = useRef();
  const dropRefTab = useRef();
  const [previewWajah, setPreviewWajah] = useState("");
  const [previewKTP, setPreviewKTP] = useState("");
  const [previewTab, setPreviewTab] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewWajahAv, setIsPreviewWajahAv] = useState(false);
  const [isPreviewKTPAv, setIsPreviewKTPAv] = useState(false);
  const [isPreviewTabAv, setIsPreviewTabAv] = useState(false);
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    username: "",
    password: "",
    phone_number: "",
    NIK: 0,
    tempat_tanggal_lahir: "",
    jenis_kelamin: "",
    nama_vendor: "",
    alamat_lengkap: "",
    nama_bank: "",
    kota_kabupaten: "",
    nomor_hp: "",
    nama_rekening: "",
    no_rekening: 0,
    kode_pos: 0,
    foto_wajah: null,
    foto_ktp: null,
    foto_buku_tabungan: null,
    foto_toko: null,
    role: "609d0be1b3f24575108f0a88",
  });
  const [error, setError] = useState([]);

  const onDropWajah = (files) => {
    const [uploadedFile] = files;
    setFormData({ ...formData, foto_wajah: files[0] });

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewWajah(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewWajahAv(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefWajah.current.style.border = "2px dashed #e9ebeb";
  };

  const onDropKTP = (files) => {
    const [uploadedFile] = files;
    setFormData({
      ...formData,
      foto_ktp: files[0],
    });

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewKTP(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewKTPAv(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefKTP.current.style.border = "2px dashed #e9ebeb";
  };

  const onDropTab = (files) => {
    const [uploadedFile] = files;
    setFormData({
      ...formData,
      foto_buku_tabungan: files[0],
    });

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewTab(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewTabAv(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefTab.current.style.border = "2px dashed #e9ebeb";
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFormData({ ...formData, foto_toko: files[0] });
    console.log(formData);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRef.current.style.border = "2px dashed #e9ebeb";
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const {
      nama_lengkap,
      email,
      username,
      password,
      phone_number,
      role,
      NIK,
      tempat_tanggal_lahir,
      jenis_kelamin,
      nama_vendor,
      alamat_lengkap,
      nama_bank,
      kota_kabupaten,
      nama_rekening,
      no_rekening,
      kode_pos,
      foto_wajah,
      foto_ktp,
      foto_buku_tabungan,
      foto_toko,
    } = formData;
    const user = await axios
      .post("https://staging-bikinevent.herokuapp.com/auth/local/register", {
        username,
        email,
        password,
        phone_number,
        nama_lengkap,
        role,
      })
      .catch((err) => {
        return setError("Username atau Email telah didaftarkan");
      });
    if (user) {
      const userData = user.data;
      const vendorData = new FormData();
      vendorData.append(
        "data",
        JSON.stringify({
          user: userData.user._id,
          NIK,
          tempat_tanggal_lahir,
          jenis_kelamin,
          nama_vendor,
          alamat_lengkap,
          nama_bank,
          kota_kabupaten,
          nama_rekening,
          no_rekening,
          kode_pos,
        })
      );
      vendorData.append("files.foto_toko", foto_toko, foto_toko.name);
      vendorData.append("files.foto_wajah", foto_wajah, foto_wajah.name);
      vendorData.append("files.foto_ktp", foto_ktp, foto_ktp.name);
      vendorData.append(
        "files.foto_buku_tabungan",
        foto_buku_tabungan,
        foto_buku_tabungan.name
      );
      const vendorRes = await axios.post(
        "https://staging-bikinevent.herokuapp.com/vendors",
        vendorData,
        {
          headers: {
            Authorization: `Bearer ${userData.jwt}`,
          },
        }
      );
      AuthSucRegs.insucreg(() => {
        props.history.push("/successreg");
      });
      return vendorRes;
    }
  };

  const toggle = () => {
    setVisible(!visible);
    if (visible === false) {
      setTypepw("text");
    } else {
      setTypepw("password");
    }
  };

  useEffect(() => {
    toggle();
  }, []);
  return (
    <form encType="multipart/form-data" onSubmit={submitHandler}>
      <LoginLabel for="username">Username</LoginLabel>
      <br />
      <LoginInput
        type="text"
        required
        name="username"
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <br />
      <LoginLabel for="email">E-mail</LoginLabel>
      <br />
      <LoginInput
        type="email"
        required
        name="email"
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
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
            <BsFillEyeSlashFill onClick={toggle} style={{ color: "#909DAA" }} />
          </IconBg>
        ) : (
          <IconBg>
            <BsFillEyeFill onClick={toggle} style={{ color: "#909DAA" }} />
          </IconBg>
        )}
      </LogApart>

      <LoginLabel for="name">Nama Lengkap</LoginLabel>
      <br />
      <LoginInput
        type="text"
        required
        name="nama_lengkap"
        onChange={(e) => {
          setFormData({ ...formData, nama_lengkap: e.target.value });
        }}
      />
      <br />

      <LoginLabel for="nik">NIK</LoginLabel>
      <br />
      <LoginInput
        type="number"
        required
        name="nik"
        onChange={(e) => {
          setFormData({
            ...formData,
            NIK: e.target.value,
          });
        }}
      />
      <br />

      <LoginLabel for="birth">Tempat, Tanggal Lahir</LoginLabel>
      <br />
      <LoginInput
        type="text"
        required
        name="birth"
        onChange={(e) => {
          setFormData({
            ...formData,
            tempat_tanggal_lahir: e.target.value,
          });
        }}
      />
      <br />

      <LoginLabel for="gend">Jenis Kelamin</LoginLabel>
      <br />
      <div style={{ display: "flex", margin: "5px auto 15px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioButton
            type="radio"
            value="pria"
            name="gender"
            onClick={() => {
              setFormData({
                ...formData,
                jenis_kelamin: "pria",
              });
            }}
          />
          <LoginLabel for="pria">Pria</LoginLabel>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", margin: "0 10px" }}
        >
          <RadioButton
            type="radio"
            value="wanita"
            name="gender"
            onClick={() =>
              setFormData({
                ...formData,
                jenis_kelamin: "wanita",
              })
            }
          />
          <LoginLabel for="wanita">Wanita</LoginLabel>
        </div>
      </div>

      <LoginLabel for="nameven">Nama Vendor (Tidak Bisa Diubah)</LoginLabel>
      <br />
      <LoginInput
        type="text"
        required
        name="nameven"
        onChange={(e) => {
          setFormData({
            ...formData,
            nama_vendor: e.target.value,
          });
        }}
      />
      <br />

      <LoginLabel for="address">Alamat Lengkap</LoginLabel>
      <br />
      <LoginInput
        type="text"
        required
        name="address"
        onChange={(e) => {
          setFormData({
            ...formData,
            alamat_lengkap: e.target.value,
          });
        }}
      />
      <br />

      <InputCityApart>
        <div style={{ flexBasis: "58%" }}>
          <LoginLabel for="city">Kota/Kabupaten</LoginLabel>
          <br />
          <LoginInput
            type="text"
            required
            name="city"
            onChange={(e) => {
              setFormData({
                ...formData,
                kota_kabupaten: e.target.value,
              });
            }}
          />
          <br />
        </div>
        <div style={{ flexBasis: "40%" }}>
          <LoginLabel for="pos">Kode Pos</LoginLabel>
          <br />
          <LoginInput
            type="number"
            required
            name="pos"
            onChange={(e) => {
              setFormData({
                ...formData,
                kode_pos: e.target.value,
              });
            }}
          />
          <br />
        </div>
      </InputCityApart>

      <LoginLabel for="num">No HP (Terhubung WA)</LoginLabel>
      <br />
      <LoginInput
        type="tel"
        required
        name="num"
        onChange={(e) => {
          setFormData({
            ...formData,
            phone_number: e.target.value,
          });
        }}
      />
      <br />

      <LoginLabel for="rek">Nomor Rekening</LoginLabel>
      <br />
      <LoginInput
        type="number"
        required
        name="rek"
        onChange={(e) => {
          setFormData({
            ...formData,
            no_rekening: e.target.value,
          });
        }}
      />
      <br />

      <LoginLabel for="bank">Nama Bank</LoginLabel>
      <br />
      <LoginInput
        type="text"
        required
        name="bank"
        onChange={(e) => {
          setFormData({
            ...formData,
            nama_bank: e.target.value,
          });
        }}
      />
      <br />

      <LoginLabel for="rekan">Rekening Atas Nama</LoginLabel>
      <br />
      <LoginInput
        type="text"
        required
        name="rekan"
        onChange={(e) => {
          setFormData({
            ...formData,
            nama_rekening: e.target.value,
          });
        }}
      />
      <br />

      <LoginLabel for="wajah">Upload Foto Wajah</LoginLabel>
      <br />
      <UploadFile>
        <Dropzone onDrop={onDropWajah}>
          {({ getRootProps, getInputProps }) => (
            <FileViewStyle
              {...getRootProps({ className: "drop-zone" })}
              ref={dropRefWajah}
            >
              <input {...getInputProps()} name="foto_wajah" />
              {previewWajah ? (
                isPreviewWajahAv ? (
                  <div className="image-preview">
                    <img
                      className="preview-image"
                      src={previewWajah}
                      alt="Preview"
                      width="60%"
                    />
                  </div>
                ) : (
                  <div className="preview-message">
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <img className="preview-message" src={upfil} alt="Preview" />
              )}
            </FileViewStyle>
          )}
        </Dropzone>
      </UploadFile>

      <LoginLabel for="ktp">Upload Foto KTP</LoginLabel>
      <br />
      <UploadFile>
        <Dropzone onDrop={onDropKTP}>
          {({ getRootProps, getInputProps }) => (
            <FileViewStyle
              {...getRootProps({ className: "drop-zone" })}
              ref={dropRefKTP}
            >
              <input {...getInputProps()} name="foto_ktp" />
              {previewKTP ? (
                isPreviewKTPAv ? (
                  <div className="image-preview">
                    <img
                      className="preview-image"
                      src={previewKTP}
                      alt="Preview"
                      width="60%"
                    />
                  </div>
                ) : (
                  <div className="preview-message">
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <img className="preview-message" src={upfil} alt="Preview" />
              )}
            </FileViewStyle>
          )}
        </Dropzone>
      </UploadFile>

      <LoginLabel for="buktab">Upload Foto Buku Tabungan</LoginLabel>
      <br />
      <UploadFile>
        <Dropzone onDrop={onDropTab}>
          {({ getRootProps, getInputProps }) => (
            <FileViewStyle
              {...getRootProps({ className: "drop-zone" })}
              ref={dropRefTab}
            >
              <input {...getInputProps()} name="foto_tabungan" />
              {previewTab ? (
                isPreviewTabAv ? (
                  <div className="image-preview">
                    <img
                      className="preview-image"
                      src={previewTab}
                      alt="Preview"
                      width="60%"
                    />
                  </div>
                ) : (
                  <div className="preview-message">
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <img className="preview-message" src={upfil} alt="Preview" />
              )}
            </FileViewStyle>
          )}
        </Dropzone>
      </UploadFile>

      <LoginLabel for="fotok">Upload Foto Toko</LoginLabel>
      <br />
      <UploadFile>
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <FileViewStyle
              {...getRootProps({ className: "drop-zone" })}
              ref={dropRef}
            >
              <input {...getInputProps()} name="foto_toko" />
              {previewSrc ? (
                isPreviewAvailable ? (
                  <div className="image-preview">
                    <img
                      className="preview-image"
                      src={previewSrc}
                      alt="Preview"
                      width="60%"
                    />
                  </div>
                ) : (
                  <div className="preview-message">
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <img className="preview-message" src={upfil} alt="Preview" />
              )}
            </FileViewStyle>
          )}
        </Dropzone>
      </UploadFile>

      <CheckBoxInput>
        <input type="checkbox" style={{ marginRight: "4px" }} />
        <div style={{ width: "100%" }}>
          Saya setuju dengan <TermanConds>Syarat dan Ketentuan</TermanConds>
        </div>
      </CheckBoxInput>

      <Buttonslog
        type="submit"
        disabled={!(previewWajah && previewKTP && previewTab && previewSrc)}
        allowed={!(previewWajah && previewKTP && previewTab && previewSrc)}
      >
        <Buttons>Daftar</Buttons>
      </Buttonslog>
      {formData ? (
        <span style={{ color: "#ff0000", fontSize: "12px" }}>
          Data belum lengkap!
        </span>
      ) : (
        <span></span>
      )}
    </form>
  );
};
export default withRouter(Vendorregs);
