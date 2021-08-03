import React, { useState, useRef, useContext, createRef, useEffect } from "react";
import Dropzone from "react-dropzone";
import { TitleStats } from "../VendorPesanan/VendorPesananStyle";
import { Buttonslog, Buttons } from "../../LogReg/LoginPage/LoginStyled";
import { loginContext } from "../../../context";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { TempVendash, MainVendash } from "../VendorDashboardStyled";
import DashboardSite from "../DashboardSideVendor";
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
    ExpTags,
    RemoveTag,
    BoxTags,
    ContentTags,
} from "./VendorProdukStyled";
import { productService } from "../../../services/Product";
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

const VendorProductChangedForm = ({ match }) => {
    var tagInput = createRef();
    const dropRef = useRef();
    const [previewFoto, setPreviewFoto] = useState([]);
    const [isPreviewFoto, setIsPreviewFoto] = useState([]);
    const [successave, setsuccessave] = useState({
        wrong: false,
        right: false
    });
    const [idxFoto, setIdxFoto] = useState(0);
    const { loginInfo } = useContext(loginContext);
    const [tags, setTags] = useState([]);
    const [productData, setProductData] = useState({});
    const vendor_id = loginInfo.vendorId;

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

    useEffect(() => {
        const fetchData = async () => {
            const response = await productService.getProductById(match.params.id);
            const data = response.data;
            await setProductData(data);
        };
        fetchData();
    }, [match.params.id]);

    const onDropFoto = (files) => {
        const [uploadedFile] = files;

        let newArr = [...productData.foto_produk];
        newArr[idxFoto] = files[0]

        setProductData({ ...productData, foto_produk: newArr });

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

    console.log(productData)
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
        <GlobalTemplate>
            <TempVendash>
                <DashboardSite typeVendash="produk" />
                <MainVendash>
                    <AnimationPortofolio>
                        <TitleStats>Ubah Produk</TitleStats>
                        <form>
                            <LabelVendorProduk awal>Nama Produk</LabelVendorProduk>
                            <InputModif
                                type="text"
                                required
                                name="nama"
                                value={productData.nama}
                                onChange={(e) => {
                                    setProductData({ ...productData, nama: e.target.value });
                                }}
                            />

                            <LabelVendorProduk>Deskripsi</LabelVendorProduk>
                            <InputModifArea
                                rows="8"
                                required
                                value={productData.deskripsi_produk}
                                name="description"
                                onChange={(e) => {
                                    setProductData({ ...productData, deskripsi_produk: e.target.value });
                                }}
                            />

                            <LabelVendorProduk>Kategori</LabelVendorProduk>
                            <InputMCQ
                                name="kategori"
                                required
                                value={productData.category}
                                onChange={(e) => {
                                    if (e.target.value !== "Pilih Kategori") {
                                        setProductData({ ...productData, category: e.target.value });
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

                            <LabelVendorProduk>Sub-kategori</LabelVendorProduk>
                            <InputMCQ
                                name="sub-kategori"
                                required
                                value={productData.subcategory}
                                onChange={(e) => {
                                    if (e.target.value !== "Pilih Sub-Kategori") {
                                        setProductData({ ...productData, subcategory: e.target.value });
                                    }
                                }}
                            >
                                <Options non>Pilih Sub-Kategori</Options>
                                {Kategories.filter(
                                    (elemen) => elemen.cath === productData.category
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

                            <LabelVendorProduk>Lokasi</LabelVendorProduk>
                            <InputMCQ
                                name="lokasi"
                                required
                                value={productData.lokasi}
                                onChange={(e) => {
                                    setProductData({ ...productData, lokasi: e.target.value });
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
                                    autocomplete="off"
                                    type="text"
                                    required
                                    name="price"
                                    value={(productData.harga)}
                                    onChange={(e) => {
                                        let regexp = /^[0-9\b]+$/
                                        if (e.target.value === '' || regexp.test(e.target.value)) {
                                            setProductData({ ...productData, harga: e.target.value });
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

                            <Buttonslog type="button">
                                <Buttons>Ubah</Buttons>
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
                </MainVendash>
            </TempVendash>
        </GlobalTemplate>
    );
};

export default VendorProductChangedForm;
