import React, { useState, useEffect, useContext } from "react";
import LoadingPage from "../../../templates/Loading";
import bni from "../../../images/bni.png";
import bri from "../../../images/bri.png";
import mandiri from "../../../images/mandiri.png";
import bca from "../../../images/bca.png";
import ovo from "../../../images/ovo.png";
import gopay from "../../../images/gopay.png";
import { Redirect } from "react-router-dom"
import { PembeliHeaderWithStep } from "../../../templates/HeaderSmall/PembeliHeader";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../datas/vendordata";
import { clientCartContext } from "../../../context";
import { AuthCliPay,AuthCliCheck } from "../../../AllAuth";
import {
    MulaiBelanja,
    PurchaseContentApart,
    PurchaseContent,
    PurchasePrice,
    PriceTotal,
    Title,
    PaymentContentGrid,
    BankRow,
    DivRowContent,
    InformationContents,
    BankImage,
    EmailConfirm
} from "./Styled";
import { CheckBoks } from "../../SearchContent/Style/ProdukSearchStyled";
import { 
    CheckBoxInput,
    TermanConds,
    CondTermBg,
    CondTermTitle,
    CondTermContent
} from "../../LogReg/RegisterPage/RegisterStyled";
import { Buttons,Buttonslog } from "../../LogReg/LoginPage/LoginStyled";
import {
    PopUpBg,
    ContentPopUp
} from "../../../templates/GlobalTemplate";
import { BoxNotEntry } from "../../VendorDashboard/VendorPesanan/VendorPesananStyle";

export const getImageBank = (item) => {
    const bankArrImage = [bni, bri, mandiri, bca, ovo, gopay];
    const bankArr = ["BNI", "BRI", "MANDIRI", "BCA", "OVO", "GOPAY"]
    for (let i = 0; i < 6; i++) {
        if (bankArr[i] === item.toUpperCase())
            return bankArrImage[i]
    }
}

const PembayaranPembeliPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [actButton, setActButton] = useState("");
    const [idxButton, setIdxButton] = useState(0);
    const [condTerm, setCondTerm] = useState(false);
    const { clientCart, setClientCart } = useContext(clientCartContext);

    //Cuma mainin data sabi ganti
    const data = ProfilePembeli.filter((dats) => dats.name === "Ernia Watson");
    const banks = data.map(el => el.payment.filter(elmen => elmen.type === "bank"));
    const wallet = data.map(el => el.payment.filter(elmen => elmen.type === "wallet"));
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])

    return (
        <>
            {!AuthCliPay.isAutclipay() ? (
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
                                title="Pembayaran"
                                subtitle="Tahapan pembayaran akan dilakukan konfirmasi manual melalui email."
                                path="/client-purchase/information"
                                buttonTitle="Kembali ke Informasi Pembeli"
                                act="pembayaran" />

                            <GlobalTemplate>

                                <PurchaseContentApart>
                                    <PurchaseContent>
                                        <Title top>Transfer Bank</Title>
                                        <PaymentContentGrid>
                                            {banks[0].map((item, idx) => {
                                                return (
                                                    <BankRow
                                                        key={idx}
                                                        aktif={idx === idxButton}
                                                        onClick={() => {
                                                            setIdxButton(idx)
                                                            setActButton(item.bank.toUpperCase())
                                                        }}
                                                    >
                                                        <CheckBoks
                                                            type="radio"
                                                            value={item.bank}
                                                            name="payment"

                                                            checked={idx === idxButton}
                                                        />
                                                        <DivRowContent>
                                                            <div>
                                                                <BankImage
                                                                    nonact={idx !== idxButton}
                                                                    src={getImageBank(item.bank)} />
                                                                <InformationContents nonact={idx !== idxButton}>
                                                                    {item.bank.toUpperCase()} {item.account} an {item.name}
                                                                </InformationContents>
                                                            </div>
                                                        </DivRowContent>
                                                    </BankRow>
                                                )
                                            })}
                                        </PaymentContentGrid>
                                        <Title>E-Wallet</Title>
                                        <PaymentContentGrid>
                                            {wallet[0].map((item, idx) => {
                                                return (
                                                    <BankRow
                                                        key={idx}
                                                        aktif={(idx + banks[0].length) === idxButton}
                                                        onClick={() => {
                                                            setIdxButton((idx + banks[0].length))
                                                            setActButton(item.bank.toUpperCase())
                                                        }}
                                                    >
                                                        <CheckBoks
                                                            type="radio"
                                                            value={item.bank}
                                                            name="payment"
                                                            checked={(idx + banks[0].length) === idxButton}
                                                        />
                                                        <DivRowContent>
                                                            <div>
                                                                <BankImage
                                                                    nonact={(idx + banks[0].length) !== idxButton}
                                                                    src={getImageBank(item.bank)} />
                                                                <InformationContents nonact={(idx + banks[0].length) !== idxButton}>
                                                                    {item.bank.toUpperCase()} {item.account} an {item.name}
                                                                </InformationContents>
                                                            </div>
                                                        </DivRowContent>
                                                    </BankRow>
                                                )
                                            })}
                                        </PaymentContentGrid>
                                        <CheckBoxInput>
                                            <input type="checkbox" required style={{ marginRight: "4px" }} />
                                            <div style={{ width: "100%" }} onClick={() => { setCondTerm(true) }}>
                                                Gunakan sistem DP <TermanConds>Syarat dan Ketentuan</TermanConds>
                                            </div>
                                        </CheckBoxInput>
                                        <EmailConfirm>
                                            Tagihan pembayaran akan dikirim melalui email 
                                            <span>{data.map(el=>{return el.email})}</span>
                                        </EmailConfirm>
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
                                                AuthCliCheck.inclicheck(() => {
                                                    props.history.push("/client-purchase/check");
                                                });
                                            }}>
                                            Lanjutkan Pembelian
                                        </MulaiBelanja>
                                    </PurchasePrice>

                                </PurchaseContentApart>
                            </GlobalTemplate>
                            <>
                                {condTerm ? (
                                    <PopUpBg need>
                                        <ContentPopUp>
                                            <CondTermBg>
                                                <CondTermTitle>Syarat dan Ketentuan</CondTermTitle>
                                                <CondTermContent>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    <br />
                                                    <br />
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    <br />
                                                    <br />
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    <br />
                                                </CondTermContent>
                                                <Buttonslog onClick={() => { setCondTerm(false) }}>
                                                    <Buttons>Tutup</Buttons>
                                                </Buttonslog>
                                            </CondTermBg>
                                        </ContentPopUp>
                                    </PopUpBg>
                                ) : (<></>)}
                            </>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default PembayaranPembeliPage;