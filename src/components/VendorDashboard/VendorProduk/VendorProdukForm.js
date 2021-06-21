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
  const dropRefFoto1 = useRef();
  const [previewFoto1, setPreviewFoto1] = useState("");
  const [isPreviewFoto1, setIsPreviewFoto1] = useState(false);
  const dropRefFoto2 = useRef();
  const [previewFoto2, setPreviewFoto2] = useState("");
  const [isPreviewFoto2, setIsPreviewFoto2] = useState(false);
  const dropRefFoto3 = useRef();
  const [previewFoto3, setPreviewFoto3] = useState("");
  const [isPreviewFoto3, setIsPreviewFoto3] = useState(false);
  const dropRefFoto4 = useRef();
  const [previewFoto4, setPreviewFoto4] = useState("");
  const [isPreviewFoto4, setIsPreviewFoto4] = useState(false);
  const dropRefFoto5 = useRef();
  const [previewFoto5, setPreviewFoto5] = useState("");
  const [isPreviewFoto5, setIsPreviewFoto5] = useState(false);
  const dropRefFoto6 = useRef();
  const [previewFoto6, setPreviewFoto6] = useState("");
  const [isPreviewFoto6, setIsPreviewFoto6] = useState(false);
  const dropRefFoto7 = useRef();
  const [previewFoto7, setPreviewFoto7] = useState("");
  const [isPreviewFoto7, setIsPreviewFoto7] = useState(false);
  const dropRefFoto8 = useRef();
  const [previewFoto8, setPreviewFoto8] = useState("");
  const [isPreviewFoto8, setIsPreviewFoto8] = useState(false);
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
      isArchived,
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

  const onDropFoto1 = (files) => {
    const [uploadedFile] = files;
    setFormData({ ...formData, foto_produk: files[0] });
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

  const onDropFoto3 = (files) => {
    const [uploadedFile] = files;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewFoto3(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewFoto3(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefFoto3.current.style.border = "2px dashed #e9ebeb";
  };

  const onDropFoto4 = (files) => {
    const [uploadedFile] = files;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewFoto4(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewFoto4(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefFoto4.current.style.border = "2px dashed #e9ebeb";
  };

  const onDropFoto5 = (files) => {
    const [uploadedFile] = files;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewFoto5(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewFoto5(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefFoto5.current.style.border = "2px dashed #e9ebeb";
  };

  const onDropFoto6 = (files) => {
    const [uploadedFile] = files;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewFoto6(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewFoto6(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefFoto6.current.style.border = "2px dashed #e9ebeb";
  };

  const onDropFoto7 = (files) => {
    const [uploadedFile] = files;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewFoto7(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewFoto7(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefFoto7.current.style.border = "2px dashed #e9ebeb";
  };

  const onDropFoto8 = (files) => {
    const [uploadedFile] = files;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewFoto8(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewFoto8(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG)$/));
    dropRefFoto8.current.style.border = "2px dashed #e9ebeb";
  };

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
          <Options value="jakarta">Jakarta</Options>
          <Options value="bandung">Bandung</Options>
          <Options value="semarang">Semarang</Options>
          <Options value="depok">Depok</Options>
          <Options value="bekasi">Bekasi</Options>
          <Options value="tangerang">Tangerang</Options>
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
          <div style={{ flexDirection: "column" }}>
            <UploadFile>
              <Dropzone onDrop={onDropFoto1}>
                {({ getRootProps, getInputProps }) => (
                  <FileViewStyle
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRefFoto1}
                  >
                    <input {...getInputProps()} name="foto_Foto1" />
                    {previewFoto1 ? (
                      isPreviewFoto1 ? (
                        <img
                          className="preview-image"
                          src={previewFoto1}
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
            <ExpUploadPhoto>Foto Utama</ExpUploadPhoto>
          </div>
          <div style={{ flexDirection: "column" }}>
            <UploadFile>
              <Dropzone onDrop={onDropFoto2}>
                {({ getRootProps, getInputProps }) => (
                  <FileViewStyle
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRefFoto2}
                  >
                    <input {...getInputProps()} name="foto_Foto2" />
                    {previewFoto2 ? (
                      isPreviewFoto2 ? (
                        <img
                          className="preview-image"
                          src={previewFoto2}
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
            <ExpUploadPhoto>Foto 1</ExpUploadPhoto>
          </div>
          <div style={{ flexDirection: "column" }}>
            <UploadFile>
              <Dropzone onDrop={onDropFoto3}>
                {({ getRootProps, getInputProps }) => (
                  <FileViewStyle
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRefFoto3}
                  >
                    <input {...getInputProps()} name="foto_Foto3" />
                    {previewFoto3 ? (
                      isPreviewFoto3 ? (
                        <img
                          className="preview-image"
                          src={previewFoto3}
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
            <ExpUploadPhoto>Foto 2</ExpUploadPhoto>
          </div>
          <div style={{ flexDirection: "column" }}>
            <UploadFile>
              <Dropzone onDrop={onDropFoto4}>
                {({ getRootProps, getInputProps }) => (
                  <FileViewStyle
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRefFoto4}
                  >
                    <input {...getInputProps()} name="foto_Foto4" />
                    {previewFoto4 ? (
                      isPreviewFoto4 ? (
                        <img
                          className="preview-image"
                          src={previewFoto4}
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
            <ExpUploadPhoto>Foto 3</ExpUploadPhoto>
          </div>
          <div style={{ flexDirection: "column" }}>
            <UploadFile>
              <Dropzone onDrop={onDropFoto5}>
                {({ getRootProps, getInputProps }) => (
                  <FileViewStyle
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRefFoto5}
                  >
                    <input {...getInputProps()} name="foto_Foto5" />
                    {previewFoto5 ? (
                      isPreviewFoto5 ? (
                        <img
                          className="preview-image"
                          src={previewFoto5}
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
            <ExpUploadPhoto>Foto 4</ExpUploadPhoto>
          </div>
          <div style={{ flexDirection: "column" }}>
            <UploadFile>
              <Dropzone onDrop={onDropFoto6}>
                {({ getRootProps, getInputProps }) => (
                  <FileViewStyle
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRefFoto6}
                  >
                    <input {...getInputProps()} name="foto_Foto6" />
                    {previewFoto6 ? (
                      isPreviewFoto6 ? (
                        <img
                          className="preview-image"
                          src={previewFoto6}
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
            <ExpUploadPhoto>Foto 5</ExpUploadPhoto>
          </div>
          <div style={{ flexDirection: "column" }}>
            <UploadFile>
              <Dropzone onDrop={onDropFoto7}>
                {({ getRootProps, getInputProps }) => (
                  <FileViewStyle
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRefFoto7}
                  >
                    <input {...getInputProps()} name="foto_Foto7" />
                    {previewFoto7 ? (
                      isPreviewFoto7 ? (
                        <img
                          className="preview-image"
                          src={previewFoto7}
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
            <ExpUploadPhoto>Foto 6</ExpUploadPhoto>
          </div>
          <div style={{ flexDirection: "column" }}>
            <UploadFile>
              <Dropzone onDrop={onDropFoto8}>
                {({ getRootProps, getInputProps }) => (
                  <FileViewStyle
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRefFoto8}
                  >
                    <input {...getInputProps()} name="foto_Foto8" />
                    {previewFoto8 ? (
                      isPreviewFoto8 ? (
                        <img
                          className="preview-image"
                          src={previewFoto8}
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
            <ExpUploadPhoto>Foto 7</ExpUploadPhoto>
          </div>
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
