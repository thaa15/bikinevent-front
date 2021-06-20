import React, { useState, useRef } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash, TempVendash } from "../VendorDashboardStyled";
import NewPortofolioForm from "./NewPortofolioForm"
import Dropzone from "react-dropzone";
import {
    InputModifArea,
    InputMCQ,
    Options,
} from "../VendorProduk/VendorProdukStyled";
import {
    Buttons,
    Buttonslog
} from "../../LogReg/LoginPage/LoginStyled"
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
    Button
} from "./VendorProfileStyled";
import {
    PortofolioTitle,
    PortofolioImage,
    PartOfImage,
} from "../../../templates/Tampilan/TampilanStyled"

const displayPw = (pw) => {
    let str1 = "";
    let n = pw.length;
    let i = 0;
    while (i < n) {
        str1 = str1.concat("*");
        i++;
    }
    return str1;
}

const VendorProfileContent = ({ vendor_name, owner, email, phone_number, password, portofolio }) => {
    const [pw, setPw] = useState("");
    const dropRefProfile = useRef();
    const [previewProfile, setPreviewProfile] = useState("");
    const [isPreviewProfile, setIsPreviewProfile] = useState(false);
    const [portofolios, setPortofolios] = useState(false);
    
    setTimeout(() => {
        setPw(displayPw(password))
    }, 10);

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
    return (
        <GlobalTemplate>
            <TempVendash>
                <DashboardSite typeVendash="profile" />
                <MainVendash>
                    {portofolios ? (
                        <NewPortofolioForm />
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
                                name="description" />

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
                                        <ContentProfile>{pw}</ContentProfile>
                                        <UbahPwLink>Ubah</UbahPwLink>
                                    </div>
                                </div>
                            </GridContent>

                            <TitleProfileVendor>Lokasi</TitleProfileVendor>
                            <InputMCQ name="lokasi">
                                <Options non>Pilih Kota</Options>
                                <Options value="jakarta">Jakarta</Options>
                                <Options value="bandung">Bandung</Options>
                                <Options value="semarang">Semarang</Options>
                                <Options value="depok">Depok</Options>
                                <Options value="bekasi">Bekasi</Options>
                                <Options value="tangerang">Tangerang</Options>
                            </InputMCQ>
                            <br /><br />

                            <TitleProfileVendor>Foto Profil</TitleProfileVendor>
                            <UploadFile>
                                <Dropzone onDrop={onDropProfile}>
                                    {({ getRootProps, getInputProps }) => (
                                        <FileViewStyle {...getRootProps({ className: "drop-zone" })} ref={dropRefProfile}>
                                            <input {...getInputProps()} name="foto_Profile" />
                                            {previewProfile ? (
                                                isPreviewProfile ? (
                                                    <img className="preview-image" src={previewProfile} alt="Preview" width="100%" height="100%" />
                                                ) : (
                                                    <TitleProfileVendor>No preview available for this file</TitleProfileVendor>
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
                                        <PortofolioTitle>{item.portofoliotitle}</PortofolioTitle>
                                        <PartOfImage>
                                            <PortofolioImage src={item.foto1} />
                                            <PortofolioImage src={item.foto2} />
                                        </PartOfImage>
                                        <ButtonPart>
                                            <Button>Ubah</Button>
                                            <Button delete>Hapus</Button>
                                        </ButtonPart>
                                    </PortofolioBox>
                                )
                            })}

                            <UploadFile onClick={(() => (setPortofolios(true)))}>
                                <PlusImage>+</PlusImage>
                            </UploadFile>

                            <Buttonslog type="submit">
                                <Buttons>Simpan</Buttons>
                            </Buttonslog>
                        </>
                    )}
                </MainVendash>
            </TempVendash>
        </GlobalTemplate>
    )
}

export default VendorProfileContent;