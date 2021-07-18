import React, { useState, useRef, useEffect } from "react";
import Dropzone from "react-dropzone";
import {
  GlobalTemplate,
  PopBgSuccess,
  BgSuccess,
  Succesicon,
  PopUpBg,
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
    let body = {
      foto_profil: response.data[0],
    };
    const responseProfil = await authService.editUser(
      info.userId,
      info.token,
      body
    );
    console.log(responseProfil);
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
        {client_information.length === 0 ? (
          <BoxNotEntry>Tidak Terdapat Informasi Pembeli!</BoxNotEntry>
        ) : (
          <GridInformasi>
            {client_information.map((item, idx) => {
              return (
                <BoxClientInformation key={idx}>
                  <ContentInformation>
                    <TitleName>{item.title_name}</TitleName>
                    <InformationContent>{item.number}</InformationContent>
                    <InformationContent>{item.address}</InformationContent>
                  </ContentInformation>

                  <PartTrashButton>
                    <TrashButton>
                      <TrashsIcon />
                    </TrashButton>
                  </PartTrashButton>
                </BoxClientInformation>
              );
            })}
          </GridInformasi>
        )}

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
      </ProfilMax>
    </GlobalTemplate>
  );
};

export default PembeliProfilContent;
