import React, { useState, useRef, useContext, createRef } from "react";
import Dropzone from "react-dropzone";
import { TitleStats } from "../VendorPesanan/VendorPesananStyle";
import { Buttonslog, Buttons } from "../../LogReg/LoginPage/LoginStyled";
import axios from "axios";
import { loginContext } from "../../../context";
import { AnimationPortofolio } from "../VendorProfil/VendorProfileStyled";
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
  ExpTags,
  RemoveTag,
  BoxTags,
  ContentTags,
} from "./VendorProdukStyled";
import { GridButton } from "../VendorPesanan/VendorPesananStyle";
import {
  PlusImage,
  TitleProfileVendor,
  FileViewStyle,
  ExpUploadPhoto,
} from "../VendorProfil/VendorProfileStyled";
import {
  PopBgSuccess,
  BgSuccess,
  Succesicon,
  Failedicon
} from "../../../templates/GlobalTemplate";
import { Kategories } from "../../../datas/vendordata";

const VendorProdukForm = () => {
  var tagInput = createRef();
  const dropRef = useRef();
  const [previewFoto, setPreviewFoto] = useState([]);
  const [isPreviewFoto, setIsPreviewFoto] = useState([]);
  const [newArrPhotos, setNewArrPhotos] = useState([]);
  const [successave, setsuccessave] = useState({
    wrong: false,
    right: false
  });
  const [idxFoto, setIdxFoto] = useState(0);
  const [showSubCath, setShowSubCath] = useState(false);
  const [tester, setTester] = useState("");
  const { loginInfo } = useContext(loginContext);
  const [tags, setTags] = useState([]);
  const vendor_id = loginInfo.vendorId;
  const [formData, setFormData] = useState({
    nama: "",
    lokasi: "",
    foto_produk: [],
    deskripsi_produk: "",
    harga: 0,
    category: "",
    isArchived: true,
    vendor: vendor_id,
  });

  const ket = [
    "Foto Utama",
    "Foto 1",
    "Foto 2",
    "Foto 3",
    "Foto 4",
    "Foto 5",
    "Foto 6",
    "Foto 7",
  ];

  const keyTagsHandler = (e) => {
    const values = e.target.value;
    if (e.key === "Enter" && values) {
      if (tags.find((tag) => tag.toLowerCase() === values.toLowerCase())) {
        return;
      }
      setTags((old) => [...old, values]);
      tagInput.value = null;
    }
  };

  const removeTags = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const submitHandler = async (e, archive) => {
    e.preventDefault();
    const {
      nama,
      lokasi,
      foto_produk,
      deskripsi_produk,
      harga,
      category,
      subcategory,
      vendor,
    } = formData;
    let tagBody = [];
    for (let i = 0; i < tags.length; i++) {
      tagBody.push({
        tag_name: tags[i],
      });
    }
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
        subcategory,
        isArchived: archive,
        tag: tagBody,
      })
    );
    for (let i = 0; i < formData.foto_produk.length; i++) {
      productData.append(
        `files.foto_produk`,
        foto_produk[i],
        foto_produk[i].name
      );
    }
    const productRes = await axios.post(
      "https://bikinevent.id/api/produks",
      productData,
      {
        headers: {
          Authorization: `Bearer ${loginInfo.token}`,
        },
      }
    ).then(() => {
      setsuccessave({ ...successave, right: true });
      setTimeout(() => {
        setsuccessave({ ...successave, right: false });
        window.location.reload();
      }, 900);
    }).catch(() => {
      setsuccessave({ ...successave, wrong: true });
      setTimeout(() => {
        setsuccessave({ ...successave, wrong: false });
      }, 2000);
    })

  };

  const onDropFoto = (files) => {
    const [uploadedFile] = files;

    let newArr = [...formData.foto_produk];
    newArr[idxFoto] = files[0]

    console.log(newArr)

    setFormData({ ...formData, foto_produk: newArr });

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
      <div style={{ flexDirection: "column" }}>
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
    <AnimationPortofolio>
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
          required
          value={formData.category}
          onChange={(e) => {
            if (e.target.value !== "Pilih Kategori") {
              setShowSubCath(true);
              setFormData({ ...formData, category: e.target.value });
              setTester("");
            }
          }}
        >
          <Options non>Pilih Kategori</Options>
          {Kategories.map((data, idx) => {
            return (
              <Options value={data.cath} key={idx}>
                {data.cath}
              </Options>
            );
          })}
        </InputMCQ>
        <br />

        {showSubCath ? (
          <>
            <LabelVendorProduk>Sub-kategori</LabelVendorProduk>
            <InputMCQ
              name="sub-kategori"
              required
              value={tester}
              onChange={(e) => {
                if (e.target.value !== "Pilih Sub-Kategori") {
                  setTester(e.target.value);
                  setFormData({ ...formData, subcategory: e.target.value });
                }
              }}
            >
              <Options non>Pilih Sub-Kategori</Options>
              {Kategories.filter(
                (elemen) => elemen.cath === formData.category
              ).map((data) => {
                return (
                  <>
                    {data.subcath.map((item, idx) => {
                      return (
                        <Options value={item} key={idx}>
                          {item}
                        </Options>
                      );
                    })}
                  </>
                );
              })}
            </InputMCQ>
            <br />
          </>
        ) : (
          <></>
        )}

        <LabelVendorProduk>Lokasi</LabelVendorProduk>
        <InputMCQ
          name="lokasi"
          required
          value={formData.lokasi}
          onChange={(e) => {
            setFormData({ ...formData, lokasi: e.target.value });
          }}
        >
          <Options non>Pilih Kota</Options>
          <Options value="Jakarta">Jakarta</Options>
          <Options value="Bogor">Bogor</Options>
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
            type="text"
            required
            name="price"
            value={(formData.harga)}
            onChange={(e) => {
              let regexp = /^[0-9\b]+$/
              if (e.target.value === '' || regexp.test(e.target.value)) {
                setFormData({ ...formData, harga: e.target.value });
              }
            }}
          />
        </DivPrice>
        <br />

        <LabelVendorProduk>Foto Produk</LabelVendorProduk>
        <FotoUploadApartProduct>
          {ket.map((data, idx) => renderPhotos(data, idx))}
        </FotoUploadApartProduct>

        <LabelVendorProduk>Tags</LabelVendorProduk>
        <InputModif
          type="text"
          required
          name="description"
          onKeyDown={keyTagsHandler}
          ref={(c) => {
            tagInput = c;
          }}
        />
        <ContentTags>
          {tags.map((item, idx) => {
            return (
              <BoxTags>
                <ExpTags key={idx}>{item}</ExpTags>
                <RemoveTag type="button" onClick={() => removeTags(idx)}>
                  x
                </RemoveTag>
              </BoxTags>
            );
          })}
        </ContentTags>

        <GridButton>
          <Buttonslog type="button" onClick={(e) => submitHandler(e, false)}>
            <Buttons>Tampilkan</Buttons>
          </Buttonslog>
          <ButtonsArsip type="button" onClick={(e) => submitHandler(e, true)}>
            <Buttons>Arsipkan</Buttons>
          </ButtonsArsip>
        </GridButton>

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
                Data Produk Belum Lengkap!
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
      </form>
    </AnimationPortofolio>
  );
};

export default VendorProdukForm;
