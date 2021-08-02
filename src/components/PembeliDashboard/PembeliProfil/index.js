import React, { useState, useRef, useContext } from "react";
import Dropzone from "react-dropzone";
import {
  GlobalTemplate,
  PopBgSuccess,
  BgSuccess,
  Succesicon,
  PopUpBg,
  Failedicon,
} from "../../../templates/GlobalTemplate";
import { BoxNotEntry } from "../../VendorDashboard/VendorPesanan/VendorPesananStyle";
import { Buttons, Buttonslog } from "../../LogReg/LoginPage/LoginStyled";
import {
  GridContent,
  TitleProfileVendor,
  ContentProfile,
  UbahPwLink,
  ChangePwBg,
  TitleApart,
  DivisionTitle,
  TitleChangepw,
  DivButton,
  UploadFile,
  FileViewStyle,
  PlusImage,
} from "../../VendorDashboard/VendorProfil/VendorProfileStyled";
import {
  InputModif,
  LabelVendorProduk,
} from "../../VendorDashboard/VendorProduk/VendorProdukStyled";
import {
  ProfilMax,
  GridInformasi,
  BoxClientInformation,
  ContentInformation,
  TrashButton,
  TitleName,
  InformationContent,
  TrashsIcon,
  PartTrashButton,
} from "./PembeliProfil";
import { authService } from "../../../services/Auth";
import axios from "axios";
import { ButtonAddInformation } from "../PembeliCart/Styled";
import { LoginLabel, LoginInput } from "../../LogReg/LoginPage/LoginStyled";
import { InputCityApart } from "../../LogReg/RegisterPage/RegisterStyled";
import { pembeliService } from "../../../services/Pembeli";
import { loginContext } from "../../../context";

const PembeliProfilContent = ({
  owner,
  email,
  phone_number,
  client_information,
  info,
}) => {
  const dropRefProfile = useRef();

  const [previewProfile, setPreviewProfile] = useState("");
  const [isPreviewProfile, setIsPreviewProfile] = useState(false);
  const [changePw, setChangePw] = useState(false);
  const [pwChanged, setPwChanged] = useState(false);
  const [fotoProfil, setFotoProfil] = useState();
  const [clientInf, setClientInf] = useState(client_information);
  const [successave, setsuccessave] = useState({
    wrong: false,
    right: false,
  });
  const [newData, setNewData] = useState({
    nama_pembeli: null,
    no_hp_pembeli: null,
    alamat_pembeli: null,
    email: null,
  });
  const [addNewInfo, setAddNewInfo] = useState(false);

  const onDropProfile = (files) => {
    const [uploadedFile] = files;
    setFotoProfil(files[0]);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewProfile(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewProfile(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefProfile.current.style.border = "2px dashed #e9ebeb";
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    let profilData = new FormData();
    if (fotoProfil !== undefined) {
      profilData.append("files", fotoProfil, fotoProfil.name);
      const response = await axios.post(
        `https://bikinevent.id/api/upload`,
        profilData,
        {
          headers: {
            Authorization: `Bearer ${info.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setsuccessave({ ...successave, right: true });
      setTimeout(() => {
        setsuccessave({ ...successave, right: false });
      }, 900);
      let body = {
        foto_profil: response.data[0],
      };
      const responseProfil = await authService.editUser(
        info.userId,
        info.token,
        body
      );
    } else {
      setsuccessave({ ...successave, wrong: true });
      setTimeout(() => {
        setsuccessave({ ...successave, wrong: false });
      }, 2000);
    }
  };

  const deleteInfo = async (idx) => {
    let tempInfos = clientInf;
    tempInfos.splice(idx, 1);
    let body = {
      informasi_pembeli: tempInfos,
    };
    const response = await pembeliService.editPembeliById(
      info.pembeliId,
      info.token,
      body
    );
    setClientInf(clientInf.filter((item) => item.id !== idx));
    return response;
  };

  return (
    <GlobalTemplate>
      <ProfilMax>
        <GridContent>
          <div>
            <TitleProfileVendor>Nama Lengkap</TitleProfileVendor>
            <ContentProfile>{owner}</ContentProfile>
          </div>
        </GridContent>

        <GridContent three>
          <div>
            <TitleProfileVendor>Email</TitleProfileVendor>
            <ContentProfile>{email}</ContentProfile>
          </div>
          <div>
            <TitleProfileVendor>No HP</TitleProfileVendor>
            <ContentProfile>{phone_number}</ContentProfile>
          </div>
          <div>
            <TitleProfileVendor>Password</TitleProfileVendor>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ContentProfile>******</ContentProfile>
              <UbahPwLink
                onClick={() => {
                  setChangePw(true);
                }}
              >
                Ubah
              </UbahPwLink>
            </div>
          </div>
        </GridContent>

        {/* POP UP PASSWORD */}
        <>
          {changePw ? (
            <PopUpBg need>
              <ChangePwBg>
                <TitleApart>
                  <DivisionTitle>
                    <TitleChangepw>Ubah Password</TitleChangepw>
                  </DivisionTitle>
                  <DivisionTitle
                    button
                    onClick={() => {
                      setChangePw(false);
                    }}
                  >
                    <DivButton>X</DivButton>
                  </DivisionTitle>
                </TitleApart>
                <LabelVendorProduk awal>Password Lama</LabelVendorProduk>
                <InputModif
                  type="password"
                  required
                  pattern=".{6,}"
                  title="Enam atau lebih karakter"
                  name="pwlama"
                />
                <LabelVendorProduk>Password Baru</LabelVendorProduk>
                <InputModif
                  type="password"
                  required
                  pattern=".{6,}"
                  title="Enam atau lebih karakter"
                  name="pwbaru"
                />
                <LabelVendorProduk>Ulangi Password Baru</LabelVendorProduk>
                <InputModif
                  type="password"
                  required
                  pattern=".{6,}"
                  title="Enam atau lebih karakter"
                  name="pwbaruConfirm"
                />
                <Buttonslog
                  onClick={() => {
                    setPwChanged(true);
                    setTimeout(() => {
                      setPwChanged(false);
                      window.location.reload();
                    }, 900);
                  }}
                >
                  <Buttons>Simpan</Buttons>
                </Buttonslog>
              </ChangePwBg>
            </PopUpBg>
          ) : (
            <></>
          )}
        </>

        {/* POP UP BERHASIL GANTI PASSWORD */}
        <>
          {pwChanged ? (
            <PopBgSuccess>
              <BgSuccess aktif={pwChanged === true} right>
                <Succesicon />
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <b>SUCCESS</b>
                  Password Berhasil Diubah!
                </div>
              </BgSuccess>
            </PopBgSuccess>
          ) : (
            <></>
          )}
        </>

        <TitleProfileVendor>Informasi Pembeli</TitleProfileVendor>
        {clientInf.length === 0 ? (
          <BoxNotEntry>Tidak Terdapat Informasi Pembeli!</BoxNotEntry>
        ) : (
          <GridInformasi>
            {clientInf.map((item, idx) => {
              return (
                <BoxClientInformation key={idx}>
                  <ContentInformation>
                    <TitleName>{item.nama_pembeli}</TitleName>
                    <InformationContent>
                      {item.no_hp_pembeli}
                    </InformationContent>
                    <InformationContent>{item.email}</InformationContent>
                    <InformationContent>
                      {item.alamat_pembeli}
                    </InformationContent>
                  </ContentInformation>
                  <PartTrashButton>
                    <TrashButton
                      onClick={() => {
                        deleteInfo(idx);
                      }}
                    >
                      <TrashsIcon />
                    </TrashButton>
                  </PartTrashButton>
                </BoxClientInformation>
              );
            })}
          </GridInformasi>
        )}
        <>
          {addNewInfo ? (
            <>
              <ButtonAddInformation onClick={() => setAddNewInfo(false)}>
                - Batal Tambah
              </ButtonAddInformation>

              <h6
                style={{
                  margin: "40px 0 15px",
                  fontSize: "18px",
                  color: "#212b36",
                }}
              >
                Informasi Pembeli Baru
              </h6>

              <form>
                <LoginLabel for="address">Nama Lengkap</LoginLabel>
                <LoginInput
                  type="text"
                  required
                  name="name"
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      nama_pembeli: e.target.value,
                    });
                  }}
                />

                <InputCityApart>
                  <div style={{ flexBasis: "50%" }}>
                    <LoginLabel for="city">E-mail</LoginLabel>
                    <br />
                    <LoginInput type="email" required name="email" />
                    <br />
                  </div>
                  <div style={{ flexBasis: "48%" }}>
                    <LoginLabel for="pos">Nomor HP</LoginLabel>
                    <br />
                    <LoginInput
                      type="text"
                      autocomplete="off"
                      required
                      name="telephone"
                      value={newData.no_hp_pembeli}
                      onChange={(e) => {
                        let regexp = /^[0-9\b]+$/;
                        if (
                          e.target.value === "" ||
                          regexp.test(e.target.value)
                        ) {
                          setNewData({
                            ...newData,
                            no_hp_pembeli: e.target.value,
                          });
                        }
                      }}
                    />
                    <br />
                  </div>
                </InputCityApart>

                <LoginLabel for="address">Alamat Tempat Tinggal</LoginLabel>
                <LoginInput
                  type="text"
                  required
                  name="address"
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      alamat_pembeli: e.target.value,
                    });
                  }}
                />
              </form>
            </>
          ) : (
            <ButtonAddInformation onClick={() => setAddNewInfo(true)}>
              + Tambah Pembeli Baru
            </ButtonAddInformation>
          )}
        </>

        <TitleProfileVendor>Foto Profil</TitleProfileVendor>
        <UploadFile>
          <Dropzone onDrop={onDropProfile}>
            {({ getRootProps, getInputProps }) => (
              <FileViewStyle
                {...getRootProps({ className: "drop-zone" })}
                ref={dropRefProfile}
              >
                <input {...getInputProps()} name="foto_Profile" />
                {previewProfile ? (
                  isPreviewProfile ? (
                    <img
                      className="preview-image"
                      src={previewProfile}
                      alt="Preview"
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <TitleProfileVendor>
                      No preview available for this file
                    </TitleProfileVendor>
                  )
                ) : (
                  <PlusImage>+</PlusImage>
                )}
              </FileViewStyle>
            )}
          </Dropzone>
        </UploadFile>

        <Buttonslog>
          <Buttons onClick={(e) => submitEdit(e)}>Simpan</Buttons>
        </Buttonslog>
        {successave.wrong ? (
          <PopBgSuccess>
            <BgSuccess aktif={successave.wrong === true}>
              <Failedicon />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <b>FAILED</b>
                Belum memilih foto profil!
              </div>
            </BgSuccess>
          </PopBgSuccess>
        ) : successave.right ? (
          <PopBgSuccess>
            <BgSuccess aktif={successave.right === true} right>
              <Succesicon />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <b>SUCCESS</b>
                Data Berhasil Disimpan!
              </div>
            </BgSuccess>
          </PopBgSuccess>
        ) : (
          <></>
        )}
      </ProfilMax>
    </GlobalTemplate>
  );
};

export default PembeliProfilContent;
