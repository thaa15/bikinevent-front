import React, { useState, useEffect, useContext } from "react";
import LoadingPage from "../../../templates/Loading";
import { Redirect } from "react-router-dom";
import { PembeliHeaderWithStep } from "../../../templates/HeaderSmall/PembeliHeader";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../datas/vendordata";
import { clientCartContext } from "../../../context";
import { AuthCliPay, AuthCliCheck } from "../../../AllAuth";
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
  EmailConfirm,
} from "./Styled";
import { CheckBoks } from "../../SearchContent/Style/ProdukSearchStyled";
import {
  CheckBoxInput,
  TermanConds,
  CondTermBg,
  CondTermTitle,
  CondTermContent,
} from "../../LogReg/RegisterPage/RegisterStyled";
import { Buttons, Buttonslog } from "../../LogReg/LoginPage/LoginStyled";
import { 
  PopUpBg, 
  ContentPopUp,
  ButtonCloser,
  ButtonClosePopUp,
} from "../../../templates/GlobalTemplate";
import { BoxNotEntry } from "../../VendorDashboard/VendorPesanan/VendorPesananStyle";
import { paymentService } from "../../../services/Payment";
import { layananService } from "../../../services/Layanan";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const PembayaranPembeliPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [idxButton, setIdxButton] = useState(0);
  const [condTerm, setCondTerm] = useState(false);
  const { clientCart, setClientCart } = useContext(clientCartContext);
  const [paymentData, setPaymentData] = useState();
  const [dpStatus, setDpStatus] = useState(false);
  const [actButton, setActButton] = useState();

  const [syarat, setSyarat] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await layananService.getLayanan();
      const data = response.data;
      setSyarat(data.syarat_ketentuan);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await paymentService.getPayment();
      const data = response.data;
      setPaymentData(data);
      setActButton(data.bank[0]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const nextStep = async () => {
    AuthCliCheck.inclicheck(() => {
      props.history.push("/client-purchase/check");
    });
    setClientCart({
      ...clientCart,
      statusDp: dpStatus,
      payment_method: actButton,
    });
  };

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
                act="pembayaran"
              />

              <GlobalTemplate>
                <PurchaseContentApart>
                  <PurchaseContent>
                    <Title top>Transfer Bank</Title>
                    <PaymentContentGrid>
                      {paymentData.bank.map((item, idx) => {
                        return (
                          <BankRow
                            key={idx}
                            aktif={idx === idxButton}
                            onClick={() => {
                              setIdxButton(idx);
                              setActButton(item);
                            }}
                          >
                            <CheckBoks
                              type="radio"
                              value={item.nama}
                              name="payment"
                              checked={idx === idxButton}
                            />
                            <DivRowContent>
                              <div>
                                <BankImage
                                  nonact={idx !== idxButton}
                                  src={item.image.url}
                                />
                                <InformationContents nonact={idx !== idxButton}>
                                  {item.nama.toUpperCase()}{" "}
                                  {item.account_number} an {item.account_name}
                                </InformationContents>
                              </div>
                            </DivRowContent>
                          </BankRow>
                        );
                      })}
                    </PaymentContentGrid>
                    <Title>E-Wallet</Title>
                    <PaymentContentGrid>
                      {paymentData.ewallet.map((item, idx) => {
                        return (
                          <BankRow
                            key={idx}
                            aktif={idx + paymentData.bank.length === idxButton}
                            onClick={() => {
                              setIdxButton(idx + paymentData.bank.length);
                              setActButton(item);
                            }}
                          >
                            <CheckBoks
                              type="radio"
                              value={item.bank}
                              name="payment"
                              checked={
                                idx + paymentData.bank.length === idxButton
                              }
                            />
                            <DivRowContent>
                              <div>
                                <BankImage
                                  nonact={
                                    idx + paymentData.bank.length !== idxButton
                                  }
                                  src={item.image.url}
                                />
                                <InformationContents
                                  nonact={
                                    idx + paymentData.bank.length !== idxButton
                                  }
                                >
                                  {item.nama.toUpperCase()}{" "}
                                  {item.account_number} an {item.account_name}
                                </InformationContents>
                              </div>
                            </DivRowContent>
                          </BankRow>
                        );
                      })}
                    </PaymentContentGrid>
                    <CheckBoxInput>
                      <input
                        type="checkbox"
                        required
                        style={{ marginRight: "4px" }}
                        onChange={() => {
                          setDpStatus(!dpStatus);
                        }}
                      />
                      <div
                        style={{ width: "100%" }}
                        onClick={() => {
                          setCondTerm(true);
                        }}
                      >
                        Gunakan sistem pembayaran bertahap{" "}
                        <TermanConds>Syarat dan Ketentuan</TermanConds>
                      </div>
                    </CheckBoxInput>
                    {/* <EmailConfirm>
                      Tagihan pembayaran akan dikirim melalui email
                      <span>
                        
                      </span>
                    </EmailConfirm> */}
                  </PurchaseContent>

                  <PurchasePrice>
                    <h5>Ringkasan Belanja</h5>
                    <PriceTotal>
                      <p>Total Harga</p>
                      <h6>
                        Rp{parseInt(clientCart.price).toLocaleString("id-ID")}
                      </h6>
                    </PriceTotal>
                    <MulaiBelanja
                      need
                      onClick={() => {
                        nextStep();
                      }}
                    >
                      Lanjutkan Pembelian
                    </MulaiBelanja>
                  </PurchasePrice>
                </PurchaseContentApart>
              </GlobalTemplate>
              <>
                {condTerm ? (
                  <PopUpBg need>
                    <ButtonClosePopUp
                        onClick={() => {
                          setCondTerm(false);
                        }}
                      >
                        <ButtonCloser />
                      </ButtonClosePopUp>
                    <ContentPopUp>
                      <CondTermBg>
                        {/* <CondTermTitle>Syarat dan Ketentuan</CondTermTitle> */}

                        <CondTermContent>
                          <ReactMarkdown
                            children={syarat.desc}
                            plugins={[[gfm, { singleTilde: false }]]}
                            allowDangerousHtml={true}
                          />
                        </CondTermContent>

                        <Buttonslog
                          onClick={() => {
                            setCondTerm(false);
                          }}
                        >
                          <Buttons>Tutup</Buttons>
                        </Buttonslog>
                      </CondTermBg>
                    </ContentPopUp>
                  </PopUpBg>
                ) : (
                  <></>
                )}
              </>
            </>
          )}
        </>
      )}
    </>
  );
};

export default PembayaranPembeliPage;
