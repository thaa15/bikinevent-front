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
} from "./RegisterStyled";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import upfil from "../../../images/uploadfile.png";
import { authService } from "../../../services/Auth";

const Vendorregs = () => {
  const [visible, setVisible] = useState(true);
  const [typepw, setTypepw] = useState("");
  const dropRef = useRef();
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    username: "",
    password: "",
    phone_number: "",
    informasi_vendor: {
      NIK: 0,
      tempat_tanggal_lahir: "",
      jenis_kelamin: "",
      vendor_name: "",
      alamat_lengkap: "",
      nama_bank: "",
      kota_kabupaten: "",
      nomor_hp: "",
      nama_rekening: "",
      no_rekening: 0,
      kode_pos: 0,
      deskripsi: "",
      foto_wajah: null,
      foto_ktp: null,
      foto_buku_tabungan: null,
      foto_toko: null,
    },
    role: "609d0be1b3f24575108f0a88",
  });
  const [error, setError] = useState([]);

  const onDrop = (files) => {
    const [uploadedFile] = files;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRef.current.style.border = "2px dashed #e9ebeb";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "1px dashed #007BFF";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "1px dashed #1d6dc2";
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
    <form encType="multipart/form-data">
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
        name="name"
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
            informasi_vendor: { NIK: e.target.value },
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
            informasi_vendor: { tempat_tanggal_lahir: e.target.value },
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
            checked
            onClick={() => {
              setFormData({
                ...formData,
                informasi_vendor: { jenis_kelamin: "pria" },
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
                informasi_vendor: { jenis_kelamin: "wanita" },
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
            informasi_vendor: { vendor_name: e.target.value },
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
            informasi_vendor: { alamat_lengkap: e.target.value },
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
                informasi_vendor: { kota_kabupaten: e.target.value },
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
                informasi_vendor: { kode_pos: e.target.value },
              });
            }}
          />
          <br />
        </div>
      </InputCityApart>

      <LoginLabel for="num">No HP (Terhubung WA)</LoginLabel>
      <br />
      <LoginInput
        type="number"
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
            informasi_vendor: { no_rekening: e.target.value },
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
            informasi_vendor: { nama_bank: e.target.value },
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
            informasi_vendor: { nama_rekening: e.target.value },
          });
        }}
      />
      <br />

      <LoginLabel for="wajah">Upload Foto Wajah</LoginLabel>
      <br />
      <UploadFile>
        <Dropzone
          onDrop={onDrop}
          onDragEnter={() => updateBorder("over")}
          onDragLeave={() => updateBorder("leave")}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
              <input {...getInputProps()} required />
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
            </div>
          )}
        </Dropzone>
      </UploadFile>

      <LoginLabel for="ktp">Upload Foto KTP</LoginLabel>
      <br />
      <UploadFile>
        <Dropzone
          onDrop={onDrop}
          onDragEnter={() => updateBorder("over")}
          onDragLeave={() => updateBorder("leave")}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
              <input {...getInputProps()} required />
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
            </div>
          )}
        </Dropzone>
      </UploadFile>

      <LoginLabel for="buktab">Upload Foto Buku Tabungan</LoginLabel>
      <br />
      <UploadFile>
        <Dropzone
          onDrop={onDrop}
          onDragEnter={() => updateBorder("over")}
          onDragLeave={() => updateBorder("leave")}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
              <input {...getInputProps()} required />
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
            </div>
          )}
        </Dropzone>
      </UploadFile>

      <LoginLabel for="fotok">Upload Foto Toko</LoginLabel>
      <br />
      <UploadFile>
        <Dropzone
          onDrop={onDrop}
          onDragEnter={() => updateBorder("over")}
          onDragLeave={() => updateBorder("leave")}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
              <input {...getInputProps()} required />
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
            </div>
          )}
        </Dropzone>
      </UploadFile>

      <CheckBoxInput>
        <input type="checkbox" required style={{ marginRight: "4px" }} />
        Saya setuju dengan <TermanConds>Syarat dan Ketentuan</TermanConds>
      </CheckBoxInput>

      <Buttonslog type="submit">
        <Buttons>Daftar</Buttons>
      </Buttonslog>
    </form>
  );
};
export default Vendorregs;
