import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoadingPage from "../../../templates/Loading";
import { PembeliHeaderWithStep } from "../../../templates/HeaderSmall/PembeliHeader";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../datas/vendordata";
import {
    AuthClinformation,
    AuthCliPay,
    AuthCliCheck,
    AuthCliSuccess
} from "../../../AllAuth";
import { TitleName, InformationContent } from "../PembeliProfil/PembeliProfil";
import { getImageBank } from "./PembayaranPembeli";
import {
    MulaiBelanja,
    PurchaseContentApart,
    PurchaseContent,
    PurchasePrice,
    PriceTotal,
    BoxContentCart,
    DivRow,
    DivRowContent,
    ImageCart,
    Shopping,
    InformationContents,
    BankImage,
    EmailConfirm
} from "./Styled";
import { clientCartContext } from "../../../context";

const PemeriksaanBelanjaPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [actButton, setActButton] = useState("");
    const { clientCart, setClientCart } = useContext(clientCartContext);

    const data = ProfilePembeli.filter((dats) => dats.name === "Ernia Watson");
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])
    return (
        <>
            {!AuthCliCheck.isAutclicheck() ? (
                <>
                    <Redirect to="/client-purchase/cart" />
                </>
            ) : (
                <>
                    {isLoading ? (
                        <LoadingPage />
                    ) : (
                        <>
                            <PembeliHeaderWithStep
                                title="Pemeriksaan"
                                subtitle="Periksa kembali mengenai semua info pembelian anda."
                                path="/client-purchase/payment"
                                buttonTitle="Kembali ke Pembayaran"
                                act="pemeriksaan" />

                            <GlobalTemplate>
                                <PurchaseContentApart>
                                    <PurchaseContent>
                                        {data.map((item) => {
                                            return (
                                                <>
                                                    <BoxContentCart>
                                                        <DivRowContent>
                                                            <h6>Keranjang Belanja</h6>
                                                        </DivRowContent>
                                                        {item.order.map((dats) => {
                                                            return (
                                                                <>
                                                                    {dats.items.map((orderan, idx) => {
                                                                        return (
                                                                            <>
                                                                                <DivRow key={idx}>
                                                                                    <DivRowContent>
                                                                                        <ImageCart src={orderan.image} />
                                                                                        <div>
                                                                                            <DivRowContent top>
                                                                                                <DivRowContent need
                                                                                                titlee>
                                                                                                    <Shopping />
                                                                                                    <p
                                                                                                        style={{
                                                                                                            fontSize: "14px",
                                                                                                            lineHeight: "21px",
                                                                                                            color: "#909DAA"
                                                                                                        }}
                                                                                                    >{dats.vendor_name}</p>
                                                                                                </DivRowContent>
                                                                                            </DivRowContent>
                                                                                            <p>{orderan.judul}</p>
                                                                                            <h6>Rp{parseInt(orderan.price).toLocaleString("id-ID")}</h6>
                                                                                        </div>
                                                                                    </DivRowContent>
                                                                                </DivRow>
                                                                                <div style={{ borderBottom: "1px solid #E0E0E0", width: "100%", marginBottom: "10px" }} />
                                                                            </>
                                                                        )
                                                                    })}
                                                                </>
                                                            )
                                                        })}
                                                    </BoxContentCart>

                                                    <BoxContentCart>
                                                        <DivRowContent>
                                                            <h6>Informasi Pembeli</h6>
                                                        </DivRowContent>
                                                        {item.client_information.map((info, idx) => {
                                                            if (idx === clientCart.clientInfo) {
                                                                return (
                                                                    <DivRow key={idx}>
                                                                        <DivRowContent>
                                                                            <div>
                                                                                <TitleName check>
                                                                                    {info.title_name}
                                                                                </TitleName>
                                                                                <InformationContent check>
                                                                                    {info.number}
                                                                                </InformationContent>
                                                                                <InformationContent check>
                                                                                    {info.address}
                                                                                </InformationContent>
                                                                            </div>
                                                                        </DivRowContent>
                                                                    </DivRow>
                                                                )
                                                            }
                                                        })}
                                                    </BoxContentCart>

                                                    <BoxContentCart>
                                                        <DivRowContent>
                                                            <h6>Pembayaran</h6>
                                                        </DivRowContent>
                                                        {item.payment
                                                            .filter(el => el.bank.toUpperCase() === clientCart.bank)
                                                            .map((dats, idx) => {
                                                                return (
                                                                    <>
                                                                        <DivRow key={idx}>
                                                                            <DivRowContent>
                                                                                <div>
                                                                                    <BankImage src={getImageBank(dats.bank)} />
                                                                                    <InformationContents>
                                                                                        {dats.bank.toUpperCase()} {dats.account} an {dats.name}
                                                                                    </InformationContents>
                                                                                    <EmailConfirm>
                                                                                        Down Payment (DP) nominal terdapat di tagihan. Tagihan pembayaran akan dikirim melalui email
                                                                                        <span>{item.email}</span>
                                                                                    </EmailConfirm>
                                                                                </div>
                                                                            </DivRowContent>
                                                                        </DivRow>
                                                                    </>
                                                                )
                                                            })}
                                                    </BoxContentCart>
                                                </>
                                            )
                                        })}
                                    </PurchaseContent>

                                    <PurchasePrice>
                                        <h5>Ringkasan Belanja</h5>
                                        <PriceTotal>
                                            <p>Total Harga</p>
                                            <h6>Rp{parseInt(clientCart.price).toLocaleString("id-ID")}</h6>
                                        </PriceTotal>
                                        <MulaiBelanja need
                                            onClick={() => {
                                                setClientCart({ ...clientCart, bank: actButton })
                                                AuthCliSuccess.incliSuccess(() => {
                                                    props.history.push("/client-purchase/success-cart");
                                                });
                                                AuthClinformation.outclinfo(() => {
                                                    props.history.push("/client-purchase/success-cart");
                                                })
                                                AuthCliPay.outclipay(() => {
                                                    props.history.push("/client-purchase/success-cart");
                                                })
                                                AuthCliCheck.outclicheck(() => {
                                                    props.history.push("/client-purchase/success-cart");
                                                })
                                            }}>
                                            Lanjutkan Pembelian
                                        </MulaiBelanja>
                                    </PurchasePrice>

                                </PurchaseContentApart>
                            </GlobalTemplate>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default PemeriksaanBelanjaPage;