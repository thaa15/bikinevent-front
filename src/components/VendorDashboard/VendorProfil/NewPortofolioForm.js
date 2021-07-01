import React, { useState, useRef, useContext } from "react";
import Dropzone from "react-dropzone";
import { TitleVendorKeu } from "../VendorKeuangan/VendorKeuanganStyled";
import {
  LabelVendorProduk,
  InputModif,
} from "../VendorProduk/VendorProdukStyled";
import { Buttons, Buttonslog } from "../../LogReg/LoginPage/LoginStyled";
import {
  UploadFile,
  FotoUploadApart,
  PlusImage,
  TitleProfileVendor,
  FileViewStyle,
  ExpUploadPhoto,
} from "./VendorProfileStyled";
import { loginContext } from "../../../context";
import axios from "axios";

const NewPortofolioForm = ({ portofolio }) => {
  const [previewFoto, setPreviewFoto] = useState([]);
  const [isPreviewFoto, setIsPreviewFoto] = useState([]);
  const [idxFoto, setIdxFoto] = useState(0);
  const [namaEvent, setNamaEvent] = useState("");
  const [foto_portfolio, setFoto_Portfolio] = useState();
  const { vendorlog } = useContext(loginContext);
  const vendorId = localStorage.getItem("vendor_id");

  const ket = [
    "Foto 1",
    "Foto 2",
  ];
  const submitPortfolio = async () => {
    const portfolioData = new FormData();
    portfolioData.append(
      "data",
      JSON.stringify({
        nama: namaEvent,
        vendor: vendorId,
      })
    );
    portfolioData.append(
      "files.foto_portfolio",
      foto_portfolio,
      foto_portfolio.name
    );
    const portfolioRes = await axios.post(
      "http://localhost:1337/portfolios",
      portfolioData,
      {
        headers: {
          Authorization: `Bearer ${vendorlog}`,
        },
      }
    );
    console.log(portfolioRes);
    return portfolioRes;
  };

  const onDropFoto = (files) => {
    const [uploadedFile] = files;
    /*let newArr = [...formData.foto_produk];
    newArr.push(files[0]);
    setFormData({ ...formData, foto_produk: newArr });*/
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewFoto((oldArray) => [
        ...oldArray.slice(0, idxFoto),
        fileReader.result,
        ...oldArray.slice(idxFoto + 1, previewFoto.length + 1),
      ]);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewFoto((oldArray) => [
      ...oldArray.slice(0, idxFoto),
      uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/),
      ...oldArray.slice(idxFoto + 1, isPreviewFoto.length + 1),
    ]);
  };

  const renderPhotos = (np, id) => {
    let arr = previewFoto;
    return (
      <div style={{ flexDirection: "column",marginRight:"20px" }}>
        <UploadFile
          onClick={() => {
            setIdxFoto(id);
          }}
        >
          <Dropzone
            onDrop={onDropFoto}
            onDragEnter={() => {
              setIdxFoto(id);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <FileViewStyle {...getRootProps({ className: "drop-zone" })}>
                <input {...getInputProps()} name="foto" />
                {previewFoto.length !== 0 ? (
                  isPreviewFoto.length !== 0 ? (
                    <>
                      {id < previewFoto.length ? (
                        <img
                          className="preview-image"
                          src={arr[id]}
                          alt="Preview"
                          width="100%"
                          height="100%"
                        />
                      ) : (
                        <PlusImage>+</PlusImage>
                      )}
                    </>
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
        <ExpUploadPhoto>{np}</ExpUploadPhoto>
      </div>
    );
  };

  return (
    <>
      <TitleVendorKeu>Tambah Portofolio Baru</TitleVendorKeu>

      <LabelVendorProduk>Nama Event</LabelVendorProduk>
      <InputModif
        type="text"
        required
        name="event_name"
        onChange={(e) => setNamaEvent(e.target.value)}
      />
      <LabelVendorProduk>Foto Event</LabelVendorProduk>
      <FotoUploadApart>
        {ket.map((data, idx) => renderPhotos(data, idx))}
      </FotoUploadApart>

      <Buttonslog>
        <Buttons onClick={submitPortfolio}>Tampilkan</Buttons>
      </Buttonslog>
    </>
  );
};

export default NewPortofolioForm;
