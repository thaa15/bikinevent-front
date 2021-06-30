import React, { useState, useRef, useContext } from "react";
import Dropzone from "react-dropzone";
import { TitleStats } from "../VendorPesanan/VendorPesananStyle";
import { Buttonslog, Buttons } from "../../LogReg/LoginPage/LoginStyled";
import axios from "axios";
import { loginContext } from "../../../context";
import {
  LabelVendorProduk,
  InputModif,
  InputModifArea,
  InputMCQ,
  Options,
  PriceLabel,
  FotoUploadApartProduct,
  UploadFile,
  DivPrice,
  ButtonsArsip,
} from "./VendorProdukStyled";
import { GridButton } from "../VendorPesanan/VendorPesananStyle";
import {
  PlusImage,
  TitleProfileVendor,
  FileViewStyle,
  ExpUploadPhoto,
} from "../VendorProfil/VendorProfileStyled";

const VendorProdukForm = () => {
  const dropRef = useRef();
  const [previewFoto, setPreviewFoto] = useState([]);
  const [isPreviewFoto, setIsPreviewFoto] = useState([]);
  const [idxFoto, setIdxFoto] = useState(0);
  const { vendorlog } = useContext(loginContext);
  const vendor_id = localStorage.getItem("vendor_id");
  const [formData, setFormData] = useState({
    nama: "",
    lokasi: "",
    foto_produk: null,
    deskripsi_produk: "",
    harga: 0,
    category: "",
    isArchived: true,
    vendor: vendor_id,
  });
  console.log(formData);

  const ket = ["Foto Utama", "Foto 1", "Foto 2", "Foto 3", "Foto 4", "Foto 5", "Foto 6", "Foto 7"];
  const submitHandler = async (e, archive) => {
    e.preventDefault();
    const {
      nama,
      lokasi,
      foto_produk,
      deskripsi_produk,
      harga,
      category,
      vendor,
    } = formData;
    const productData = new FormData();
    productData.append(
      "data",
      JSON.stringify({
        nama,
        lokasi,
        deskripsi_produk,
        harga,
        vendor,
        category,
        isArchived: archive,
      })
    );
    productData.append("files.foto_produk", foto_produk, foto_produk.name);
    const productRes = await axios.post(
      "https://staging-bikinevent.herokuapp.com/produks",
      productData,
      {
        headers: {
          Authorization: `Bearer ${vendorlog}`,
        },
      }
    );
    return productRes;
  };

  const onDropFoto = (files) => {
    const [uploadedFile] = files;
    let arr2 = [...previewFoto];
    let arr3 = [...isPreviewFoto];
    //setFormData({ ...formData, foto_produk: files[0] });
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewFoto(oldArray =>
        [
          ...oldArray.slice(0, idxFoto),
          fileReader.result,
          ...oldArray.slice(idxFoto + 1, previewFoto.length + 1)
        ]);
    };
    fileReader.readAsDataURL(uploadedFile);
    //arr3.splice(idxFoto+1,0,uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/))
    setIsPreviewFoto(oldArray =>
      [
        ...oldArray.slice(0, idxFoto),
        uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/),
        ...oldArray.slice(idxFoto + 1, isPreviewFoto.length + 1)
      ]);
  };
  console.log(previewFoto);
  console.log(idxFoto)
  const renderPhotos = (np, id) => {
    let arr = previewFoto
    return (
      <div style={{ flexDirection: "column" }}>
        <UploadFile onClick={() => { setIdxFoto(id) }}>
          <Dropzone
            onDrop={onDropFoto}
            onDragEnter={() => { setIdxFoto(id) }}
          >
            {({ getRootProps, getInputProps }) => (
              <FileViewStyle
                {...getRootProps({ className: "drop-zone" })}
              >
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
                      ) : (<PlusImage>+</PlusImage>)}
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
    )
  }
  return (
    <>
      <TitleStats>Tambah Produk Baru</TitleStats>
      <form>
        <LabelVendorProduk awal>Nama Produk</LabelVendorProduk>
        <InputModif
          type="text"
          required
          name="nama"
          onChange={(e) => {
            setFormData({ ...formData, nama: e.target.value });
          }}
        />

        <LabelVendorProduk>Deskripsi</LabelVendorProduk>
        <InputModifArea
          rows="8"
          required
          name="description"
          onChange={(e) => {
            setFormData({ ...formData, deskripsi_produk: e.target.value });
          }}
        />

        <LabelVendorProduk>Kategori</LabelVendorProduk>
        <InputMCQ
          name="kategori"
          value={formData.category}
          onChange={(e) => {
            setFormData({ ...formData, category: e.target.value });
          }}
        >
          <Options non>Pilih Kategori</Options>
          <Options value="Perlengkapan">Perlengkapan</Options>
          <Options value="Venue">Venue</Options>
          <Options value="Talent">Talent</Options>
          <Options value="Jasa">Jasa</Options>
          <Options value="Catering">Catering</Options>
          <Options value="Dekorasi">Dekorasi</Options>
        </InputMCQ>
        <br />

        <LabelVendorProduk>Lokasi</LabelVendorProduk>
        <InputMCQ
          name="lokasi"
          value={formData.lokasi}
          onChange={(e) => {
            setFormData({ ...formData, lokasi: e.target.value });
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

        <LabelVendorProduk>Harga</LabelVendorProduk>
        <DivPrice>
          <PriceLabel>Rp</PriceLabel>
          <InputModif
            harga
            type="number"
            required
            name="price"
            onChange={(e) => {
              setFormData({ ...formData, harga: e.target.value });
            }}
          />
        </DivPrice>
        <br />

        <LabelVendorProduk>Foto Produk</LabelVendorProduk>
        <FotoUploadApartProduct>
          {ket.map((data, idx) => (
            renderPhotos(data, idx)
          ))}
        </FotoUploadApartProduct>

        <LabelVendorProduk>Tags</LabelVendorProduk>
        <InputModifArea rows="4" required name="description" />

        <GridButton>
          <Buttonslog onClick={(e) => submitHandler(e, false)}>
            <Buttons>Tampilkan</Buttons>
          </Buttonslog>
          <ButtonsArsip onClick={(e) => submitHandler(e, true)}>
            <Buttons>Arsipkan</Buttons>
          </ButtonsArsip>
        </GridButton>
      </form>
    </>
  );
};

export default VendorProdukForm;
