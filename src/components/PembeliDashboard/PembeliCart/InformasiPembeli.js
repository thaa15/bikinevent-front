import React, { useState, useEffect } from "react";
import LoadingPage from "../../../templates/Loading";
import { Redirect } from "react-router-dom"
import { PembeliHeaderWithStep } from "../../../templates/HeaderSmall/PembeliHeader";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../datas/vendordata";
import { AuthClinformation } from "../../../AllAuth";
import { TitleName, InformationContent } from "../PembeliProfil/PembeliProfil";
import { InputCityApart } from "../../LogReg/RegisterPage/RegisterStyled";
import { LoginLabel, LoginInput } from "../../LogReg/LoginPage/LoginStyled";
import {
    MulaiBelanja,
    PurchaseContentApart,
    PurchaseContent,
    PurchasePrice,
    PriceTotal,
    DivRow,
    DivRowContent,
    ButtonAddInformation
} from "./Styled";
import { CheckBoks } from "../../SearchContent/Style/ProdukSearchStyled";

const InformasiPembeliPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [prices, setPrices] = useState("0");
    const [actButton, setActButton] = useState(0);
    const [addNewInfo, setAddNewInfo] = useState(false)

    const data = ProfilePembeli.filter((dats) => dats.name === "Ernia Watson");
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])

    return (
        <>
            {!AuthClinformation.isAutclinfo() ? (
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
                                title="Keranjang Belanja"
                                subtitle="Keperluan yang anda butuhkan."
                                act="informasi" />
                            {data.map((item, idx) => {
                                return (
                                    <GlobalTemplate>

                                        <PurchaseContentApart key={idx}>
                                            <PurchaseContent>
                                                {item.client_information.map((dats, idx) => {
                                                    return (
                                                        <>
                                                            <DivRow key={idx}>
                                                                <CheckBoks
                                                                    type="radio"
                                                                    value={idx}
                                                                    name="information"
                                                                    onClick={() => {
                                                                        setActButton(idx)
                                                                    }}
                                                                    checked={idx === actButton}
                                                                />
                                                                <DivRowContent>
                                                                    <div>
                                                                        <TitleName nonact={idx !== actButton}>
                                                                            {dats.title_name}
                                                                        </TitleName>
                                                                        <InformationContent nonact={idx !== actButton}>
                                                                            {dats.number}
                                                                        </InformationContent>
                                                                        <InformationContent nonact={idx !== actButton}>
                                                                            {dats.address}
                                                                        </InformationContent>
                                                                    </div>
                                                                </DivRowContent>
                                                            </DivRow>
                                                        </>
                                                    )
                                                })}
                                                <>
                                                    {addNewInfo ? (
                                                        <>
                                                            <ButtonAddInformation
                                                                onClick={() => setAddNewInfo(false)}>
                                                                - Batal Tambah
                                                            </ButtonAddInformation>

                                                            <h6 style={{margin:"40px 0 15px",fontSize:"18px",color:"#212b36"}}>
                                                                Informasi Pembeli Baru
                                                            </h6>

                                                            <form>
                                                                <LoginLabel for="address">Nama Lengkap</LoginLabel>
                                                                <LoginInput
                                                                    type="text"
                                                                    required
                                                                    name="name"
                                                                />

                                                                <InputCityApart>
                                                                    <div style={{ flexBasis: "50%" }}>
                                                                        <LoginLabel for="city">E-mail</LoginLabel>
                                                                        <br />
                                                                        <LoginInput
                                                                            type="email"
                                                                            required
                                                                            name="email"
                                                                        />
                                                                        <br />
                                                                    </div>
                                                                    <div style={{ flexBasis: "48%" }}>
                                                                        <LoginLabel for="pos">Nomor HP</LoginLabel>
                                                                        <br />
                                                                        <LoginInput
                                                                            type="number"
                                                                            required
                                                                            name="telephone"
                                                                        />
                                                                        <br />
                                                                    </div>
                                                                </InputCityApart>

                                                                <LoginLabel for="address">Alamat Tempat Tinggal</LoginLabel>
                                                                <LoginInput
                                                                    type="text"
                                                                    required
                                                                    name="address"
                                                                />
                                                                <MulaiBelanja need>
                                                                    Lanjutkan Pembelian
                                                                </MulaiBelanja>
                                                            </form>
                                                        </>
                                                    ) : (
                                                        <ButtonAddInformation
                                                            onClick={() => setAddNewInfo(true)}>
                                                            + Tambah Pembeli Baru
                                                        </ButtonAddInformation>
                                                    )}
                                                </>
                                            </PurchaseContent>

                                            <PurchasePrice>
                                                <h5>Ringkasan Belanja</h5>
                                                <PriceTotal>
                                                    <p>Total Harga</p>
                                                    <h6>Rp{parseInt(prices).toLocaleString("id-ID")}</h6>
                                                </PriceTotal>
                                                <MulaiBelanja need>
                                                    Lanjutkan Pembelian
                                                </MulaiBelanja>
                                            </PurchasePrice>

                                        </PurchaseContentApart>
                                    </GlobalTemplate>
                                )
                            })}
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default InformasiPembeliPage;