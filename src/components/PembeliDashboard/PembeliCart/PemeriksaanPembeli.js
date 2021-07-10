import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoadingPage from "../../../templates/Loading";
import { PembeliHeaderWithStep } from "../../../templates/HeaderSmall/PembeliHeader";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import {
  AuthClinformation,
  AuthCliPay,
  AuthCliCheck,
  AuthCliSuccess,
} from "../../../AllAuth";
import { TitleName, InformationContent } from "../PembeliProfil/PembeliProfil";
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
  EmailConfirm,
} from "./Styled";
import { clientCartContext, loginContext } from "../../../context";
import { pembeliService } from "../../../services/Pembeli";

const PemeriksaanBelanjaPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { loginInfo } = useContext(loginContext);
  const { clientCart, setClientCart } = useContext(clientCartContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await pembeliService.getPembeliById(
        loginInfo.pembeliId,
        loginInfo.token
      );
      const data = response.data;
      setCartData(data.cart);
    };
    fetchData();
    setIsLoading(false);
  }, []);
  console.log(cartData)
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
                subtitle="Periksa kembali mengenai semua info pembelian anda.."
                path="/client-purchase/payment"
                buttonTitle="Kembali ke Pembayaran"
                act="pemeriksaan"
              />
              <GlobalTemplate>
                <PurchaseContentApart>
                  <PurchaseContent>
                    <>
                      <BoxContentCart>
                        <DivRow>
                          <DivRowContent need>
                            <h6>Keranjang Belanja</h6>
                          </DivRowContent>
                        </DivRow>
                        <>
                          {cartData.map((orderan, idx) => {
                            return (
                              <>
                                <DivRow key={idx}>
                                  <DivRowContent needs>
                                    <ImageCart
                                      src={orderan.foto_produk[0].url}
                                    />
                                    <div>
                                      <DivRowContent need>
                                        <Shopping />
                                        <p>{orderan.vendor.nama_vendor}</p>
                                      </DivRowContent>
                                      <p>{orderan.nama}</p>
                                      <h6>
                                        Rp
                                        {parseInt(orderan.harga).toLocaleString(
                                          "id-ID"
                                        )}
                                      </h6>
                                    </div>
                                  </DivRowContent>
                                </DivRow>
                                <div
                                  style={{
                                    borderBottom: "1px solid #E0E0E0",
                                    width: "100%",
                                    marginBottom: "10px",
                                  }}
                                />
                              </>
                            );
                          })}
                        </>
                      </BoxContentCart>

                      <BoxContentCart>
                        <DivRow>
                          <DivRowContent need>
                            <h6>Informasi Pembeli</h6>
                          </DivRowContent>
                        </DivRow>
                        <DivRow>
                          <DivRowContent needs>
                            <div>
                              <TitleName check>
                                {clientCart.clientInfo.nama_pembeli}
                              </TitleName>
                              <InformationContent check>
                                {clientCart.clientInfo.no_hp_pembeli}
                              </InformationContent>
                              <InformationContent check>
                                {clientCart.clientInfo.alamat_pembeli}
                              </InformationContent>
                            </div>
                          </DivRowContent>
                        </DivRow>
                      </BoxContentCart>

                      <BoxContentCart>
                        <DivRow>
                          <DivRowContent need>
                            <h6>Pembayaran</h6>
                          </DivRowContent>
                        </DivRow>

                        <DivRow>
                          <DivRowContent>
                            <div>
                              <BankImage
                                src={clientCart.payment_method.image.url}
                              />
                              <InformationContents>
                                {clientCart.payment_method.nama}{" "}
                                {clientCart.payment_method.account_number} an{" "}
                                {clientCart.payment_method.account_name}
                              </InformationContents>
                              {/* <EmailConfirm>
                                Down Payment (DP) nominal terdapat di tagihan.
                                Tagihan pembayaran akan dikirim melalui email
                                <span>{item.email}</span>
                              </EmailConfirm> */}
                            </div>
                          </DivRowContent>
                        </DivRow>
                      </BoxContentCart>
                    </>
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
                        AuthCliSuccess.incliSuccess(() => {
                          props.history.push("/client-purchase/success-cart");
                        });
                      }}
                    >
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
  );
};

export default PemeriksaanBelanjaPage;
