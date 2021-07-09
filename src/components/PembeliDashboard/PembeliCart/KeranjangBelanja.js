import React, { useState, useEffect, useContext } from "react";
import LoadingPage from "../../../templates/Loading";
import fotoNoEntry from "../../../images/fotoNoEntry.png";
import { PembeliHeaderWithStep } from "../../../templates/HeaderSmall/PembeliHeader";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../datas/vendordata";
import { TrashsIcon, TrashButton } from "../PembeliProfil/PembeliProfil";
import { AuthClinformation } from "../../../AllAuth";
import {
    BgNoEntry,
    NoEntryContent,
    ImageNoEntry,
    MulaiBelanja,
    PurchaseContentApart,
    PurchaseContent,
    PurchasePrice,
    PriceTotal,
    BoxContentCart,
    DivRow,
    DivRowContent,
    ImageCart,
    PartTrashButtons,
    Shopping,
    LinkChat,
    NoteInput,
    NoteButton
} from "./Styled";
import { CheckBoks } from "../../SearchContent/Style/ProdukSearchStyled";
import { clientCartContext } from "../../../context";
import {
    PopBgSuccess,
    BgSuccess,
    Failedicon,
} from "../../../templates/GlobalTemplate";

const KeranjangBelanjaPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [prices, setPrices] = useState("0");
    const [makeSure, setMakeSure] = useState(false);
    const { clientCart, setClientCart } = useContext(clientCartContext);

    const data = ProfilePembeli.filter((dats) => dats.name === "Ernia Watson");
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])

    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
                    <PembeliHeaderWithStep
                        title="Keranjang Belanja"
                        subtitle="Keperluan yang anda butuhkan."
                        act="keranjang" />
                    {data.map((item, idx) => {
                        return (
                            <GlobalTemplate>
                                {item.order.length === 0 ?
                                    (
                                        <BgNoEntry>
                                            <NoEntryContent>
                                                <ImageNoEntry
                                                    src={fotoNoEntry}
                                                    alt="No Entry" />
                                                <h4 style={{ fontSize: "18px", color: "#212B36" }}>
                                                    Keranjang-mu Kosong!
                                                </h4>
                                                <p style={{ fontSize: "14px", color: "#909DAA" }}>
                                                    Cari keperluan acara dan masukan ke keranjang untuk melanjutkan proses pembelian!
                                                </p>
                                                <MulaiBelanja to="/">
                                                    Mulai Belanja
                                                </MulaiBelanja>
                                            </NoEntryContent>
                                        </BgNoEntry>
                                    )

                                    :

                                    (
                                        <PurchaseContentApart key={idx}>
                                            <PurchaseContent>
                                                {item.order.map((dats, idx) => {
                                                    return (
                                                        <BoxContentCart key={idx}>
                                                            <DivRow>
                                                                <CheckBoks
                                                                    type="checkbox"
                                                                />
                                                                <DivRowContent top>
                                                                    <DivRowContent need>
                                                                        <Shopping />
                                                                        <h6>{dats.vendor_name}</h6>
                                                                    </DivRowContent>
                                                                    <LinkChat >Hubungi Vendor</LinkChat>
                                                                </DivRowContent>
                                                            </DivRow>
                                                            {dats.items.map((item) => {
                                                                return (
                                                                    <>
                                                                        <DivRow>
                                                                            <CheckBoks
                                                                                type="checkbox"
                                                                                value={item.price}
                                                                                onClick={(e) => {
                                                                                    let arrWithObject = [];
                                                                                    let arrWithArr = [...clientCart.product];
                                                                                    if (e.target.checked) {
                                                                                        setPrices(`${(parseInt(prices) + parseInt(e.target.value))}`)
                                                                                        arrWithObject.push(item.judul);
                                                                                        arrWithArr.push(arrWithObject);
                                                                                    } else {
                                                                                        setPrices(`${(parseInt(prices) - parseInt(e.target.value))}`)
                                                                                        arrWithArr.splice(
                                                                                            arrWithArr.findIndex(
                                                                                                (elemen) => elemen == item.judul
                                                                                            ),
                                                                                            1
                                                                                        );
                                                                                    }
                                                                                    setClientCart({
                                                                                        ...clientCart,
                                                                                        product: arrWithArr,
                                                                                    });
                                                                                }}
                                                                            />
                                                                            <DivRowContent content>
                                                                                <ImageCart src={item.image} />
                                                                                <div>
                                                                                    <p>{item.judul}</p>
                                                                                    <h6>Rp{parseInt(item.price).toLocaleString("id-ID")}</h6>
                                                                                    <NoteInput
                                                                                        type="text"
                                                                                        placeholder="Tanggal, waktu, lokasi dan lainnya" />
                                                                                    <NoteButton>Simpan</NoteButton>
                                                                                </div>
                                                                                <PartTrashButtons>
                                                                                    <TrashButton>
                                                                                        <TrashsIcon need />
                                                                                    </TrashButton>
                                                                                </PartTrashButtons>
                                                                            </DivRowContent>
                                                                        </DivRow>
                                                                        <div style={{ borderBottom: "1px solid #E0E0E0", width: "100%", marginBottom: "10px" }} />
                                                                    </>
                                                                )
                                                            })}
                                                        </BoxContentCart>
                                                    )
                                                })}
                                            </PurchaseContent>

                                            <PurchasePrice>
                                                <h5>Ringkasan Belanja</h5>
                                                <PriceTotal>
                                                    <p>Total Harga</p>
                                                    <h6>Rp{parseInt(prices).toLocaleString("id-ID")}</h6>
                                                </PriceTotal>
                                                <MulaiBelanja need
                                                    onClick={() => {
                                                        if (prices === "0") {
                                                            setMakeSure(true);
                                                            setTimeout(() => {
                                                                setMakeSure(false)
                                                            }, 2000);
                                                        } else {
                                                            setClientCart({ ...clientCart, price: prices })
                                                            AuthClinformation.inclinfo(() => {
                                                                props.history.push("/client-purchase/information");
                                                            });
                                                        }
                                                    }}>
                                                    Lanjutkan Pembelian
                                                </MulaiBelanja>
                                            </PurchasePrice>
                                            <>
                                                {makeSure ? (
                                                    <PopBgSuccess>
                                                        <BgSuccess aktif={makeSure === true}>
                                                            <Failedicon />
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    width: "100%",
                                                                    flexDirection: "column",
                                                                }}
                                                            >
                                                                <b>FAILED</b>
                                                                Harus Memilih Minimal Satu Barang
                                                            </div>
                                                        </BgSuccess>
                                                    </PopBgSuccess>
                                                ) : (
                                                    <></>
                                                )}
                                            </>
                                        </PurchaseContentApart>
                                    )}
                            </GlobalTemplate>
                        )
                    })}
                </>
            )}
        </>
    )
}

export default KeranjangBelanjaPage;