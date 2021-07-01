import React, { useState, useRef, useContext, useEffect } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash, TempVendash } from "../VendorDashboardStyled";
import NewPortofolioForm from "./NewPortofolioForm";
import Dropzone from "react-dropzone";
import {
  InputModifArea,
  InputMCQ,
  Options,
} from "../VendorProduk/VendorProdukStyled";
import { Buttons, Buttonslog } from "../../LogReg/LoginPage/LoginStyled";
import {
  TitleProfileVendor,
  ContentProfile,
  GridContent,
  UbahPwLink,
  UploadFile,
  PlusImage,
  FileViewStyle,
  PortofolioBox,
  ButtonPart,
  Button,
} from "./VendorProfileStyled";
import {
  PortofolioTitle,
  PortofolioImage,
  PartOfImage,
} from "../../../templates/Tampilan/TampilanStyled";
import { portfolioService } from "../../../services/Portfolio";
import { loginContext } from "../../../context";
import { vendorService } from "../../../services/Vendor";
import { PopBgSuccess, BgSuccess, Succesicon } from "../../../templates/GlobalTemplate";

const displayPw = (pw) => {
  let str1 = "";
  let n = pw.length;
  let i = 0;
  while (i < n) {
    str1 = str1.concat("*");
    i++;
  }
  return str1;
};

const VendorProfileContent = ({
  vendor_name,
  owner,
  email,
  phone_number,
  password,
  portofolio,
  description,
  location,
  vendorId,
}) => {
  const [pw, setPw] = useState("");
  const dropRefProfile = useRef();
  const [previewProfile, setPreviewProfile] = useState("");
  const [isPreviewProfile, setIsPreviewProfile] = useState(false);
  const [portofolios, setPortofolios] = useState(false);
  const { vendorlog } = useContext(loginContext);
  const [descriptions, setDescriptions] = useState("");
  const [loginUser, setLoginUser] = useState(false);
  const [locations, setLocations] = useState("");
  setTimeout(() => {
    setPw(displayPw(password));
  }, 10);

  useEffect(() => {
    setDescriptions(description);
    if (location != null) {
      setLocations(location);
    } else {
      setLocations("Pilih Kota");
    }
  }, [description, location]);

  const onDropProfile = (files) => {
    const [uploadedFile] = files;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewProfile(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewProfile(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefProfile.current.style.border = "2px dashed #e9ebeb";
  };

  const deletePortfolio = async (portfolioId) => {
    const response = await portfolioService.deletePortfolioById(
      portfolioId,
      vendorlog
    );
    return response;
  };

  const submitEdit = async () => {
    const body = {
      deskripsi: descriptions,
      location: locations,
    };
    setLoginUser(true);
    console.log(body);
    const response = await vendorService.editVendorById(
      vendorId,
      vendorlog,
      body
    );
    setTimeout(() => {
      setLoginUser(false);
      window.location.reload();
    }, 1500);
    return response;
  };

  return (
    <GlobalTemplate>
      <TempVendash>
        <DashboardSite typeVendash="profile" />
        <MainVendash>
          {portofolios ? (
            <NewPortofolioForm portofolio={portofolio} />
          ) : (
            <>
              {/*Kayaknya bakal form, nanti taro sini <form> nya */}
              <GridContent>
                <div>
                  <TitleProfileVendor>Nama Vendor</TitleProfileVendor>
                  <ContentProfile>{vendor_name}</ContentProfile>
                </div>
                <div>
                  <TitleProfileVendor>Nama Pemilik</TitleProfileVendor>
                  <ContentProfile>{owner}</ContentProfile>
                </div>
              </GridContent>

              <TitleProfileVendor>Deskripsi</TitleProfileVendor>
              <InputModifArea
                rows="5"
                required
                name="description"
                value={descriptions}
                onChange={(e) => {
                  setDescriptions(e.target.value);
                }}
              />

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
                    <UbahPwLink>Ubah</UbahPwLink>
                  </div>
                </div>
              </GridContent>

              <TitleProfileVendor>Lokasi</TitleProfileVendor>
              <InputMCQ
                name="lokasi"
                value={locations}
                onChange={(e) => {
                  setLocations(e.target.value);
                }}
              >
                <Options non>Pilih Kota</Options>
                <Options value="Jakarta">Jakarta</Options>
                <Options value="Bandung">Bandung</Options>
                <Options value="Semarang">Semarang</Options>
                <Options value="Depok">Depok</Options>
                <Options value="Bekasi">Bekasi</Options>
                <Options value="Tangerang">Tangerang</Options>
              </InputMCQ>
              <br />
              <br />

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

              <TitleProfileVendor>Portofolio</TitleProfileVendor>
              {portofolio.map((item, idx) => {
                return (
                  <PortofolioBox key={idx}>
                    <PortofolioTitle>{item.nama}</PortofolioTitle>
                    <PartOfImage>
                      {item.foto_portfolio.slice(0, 2).map((foto) => {
                        return <PortofolioImage src={foto.url} />;
                      })}
                    </PartOfImage>
                    <ButtonPart>
                      <Button>Ubah</Button>
                      <Button
                        delete
                        onClick={() => {
                          deletePortfolio(item._id);
                        }}
                      >
                        Hapus
                      </Button>
                    </ButtonPart>
                  </PortofolioBox>
                );
              })}

              <UploadFile onClick={() => setPortofolios(true)}>
                <PlusImage>+</PlusImage>
              </UploadFile>
              <Buttonslog>
                <Buttons onClick={submitEdit}>Simpan</Buttons>
              </Buttonslog>
              {loginUser ? (
                <PopBgSuccess>
                  <BgSuccess aktif={loginUser === true} right>
                    <Succesicon />
                    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
                      <b>SUCCESS</b>
                      Data Berhasil Disimpan!
                    </div>
                  </BgSuccess>
                </PopBgSuccess>
              ) : (<></>)}
            </>
          )}
        </MainVendash>
      </TempVendash>
    </GlobalTemplate>
  );
};

export default VendorProfileContent;
