import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import { TitleVendorKeu } from "../VendorKeuangan/VendorKeuanganStyled";
import {
    LabelVendorProduk,
    InputModif,
} from "../VendorProduk/VendorProdukStyled";
import {
    Buttons,
    Buttonslog
} from "../../LogReg/LoginPage/LoginStyled";
import {
    UploadFile,
    FotoUploadApart,
    PlusImage,
    TitleProfileVendor,
    FileViewStyle,
    ExpUploadPhoto
} from "./VendorProfileStyled"

const NewPortofolioForm = () => {
    const dropRefFoto1 = useRef();
    const [previewFoto1, setPreviewFoto1] = useState("");
    const [isPreviewFoto1, setIsPreviewFoto1] = useState(false);
    const dropRefFoto2 = useRef();
    const [previewFoto2, setPreviewFoto2] = useState("");
    const [isPreviewFoto2, setIsPreviewFoto2] = useState(false);

    const onDropFoto1 = (files) => {
        const [uploadedFile] = files;

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewFoto1(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewFoto1(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
        dropRefFoto1.current.style.border = "2px dashed #e9ebeb";
    };

    const onDropFoto2 = (files) => {
        const [uploadedFile] = files;

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewFoto2(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewFoto2(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
        dropRefFoto2.current.style.border = "2px dashed #e9ebeb";
    };
    return (
        <>
            <TitleVendorKeu>Tambah Portofolio Baru</TitleVendorKeu>
            <form>
                <LabelVendorProduk>Nama Event</LabelVendorProduk>
                <InputModif
                    type="text"
                    required
                    name="event_name" />

                <LabelVendorProduk>Foto Event</LabelVendorProduk>
                <FotoUploadApart>
                    <div style={{ flexDirection: "column", marginRight: "13px" }}>
                        <UploadFile>
                            <Dropzone onDrop={onDropFoto1}>
                                {({ getRootProps, getInputProps }) => (
                                    <FileViewStyle {...getRootProps({ className: "drop-zone" })} ref={dropRefFoto1}>
                                        <input {...getInputProps()} name="foto_Foto1" />
                                        {previewFoto1 ? (
                                            isPreviewFoto1 ? (
                                                <img className="preview-image" src={previewFoto1} alt="Preview" width="100%" height="100%" />
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
                        <ExpUploadPhoto>Foto 1</ExpUploadPhoto>
                    </div>
                    <div style={{ flexDirection: "column" }}>
                        <UploadFile>
                            <Dropzone onDrop={onDropFoto2}>
                                {({ getRootProps, getInputProps }) => (
                                    <FileViewStyle {...getRootProps({ className: "drop-zone" })} ref={dropRefFoto2}>
                                        <input {...getInputProps()} name="foto_Foto2" />
                                        {previewFoto2 ? (
                                            isPreviewFoto2 ? (
                                                <img className="preview-image" src={previewFoto2} alt="Preview" width="100%" height="100%" />
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
                        <ExpUploadPhoto>Foto 2</ExpUploadPhoto>
                    </div>
                </FotoUploadApart>

                <Buttonslog type="submit">
                    <Buttons>Tampilkan</Buttons>
                </Buttonslog>
            </form>
        </>
    )
}

export default NewPortofolioForm;