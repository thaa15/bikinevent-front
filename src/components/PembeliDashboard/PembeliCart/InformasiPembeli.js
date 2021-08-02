import React, { useState, useEffect, useContext } from "react";
import LoadingPage from "../../../templates/Loading";
import { Redirect } from "react-router-dom";
import { PembeliHeaderWithStep } from "../../../templates/HeaderSmall/PembeliHeader";
import {
  GlobalTemplate,
  PopBgSuccess,
  BgSuccess,
  Failedicon,
} from "../../../templates/GlobalTemplate";
import { AuthClinformation, AuthCliPay } from "../../../AllAuth";
import { TitleName, InformationContent } from "../PembeliProfil/PembeliProfil";
import { InputCityApart } from "../../LogReg/RegisterPage/RegisterStyled";
import { LoginLabel, LoginInput } from "../../LogReg/LoginPage/LoginStyled";
import { clientCartContext, loginContext } from "../../../context";
import { BoxNotEntry } from "../../VendorDashboard/VendorPesanan/VendorPesananStyle";
import { CheckBoxInput } from "../../LogReg/RegisterPage/RegisterStyled";
import {
  MulaiBelanja,
  PurchaseContentApart,
  PurchaseContent,
  PurchasePrice,
  PriceTotal,
  DivRow,
  DivRowContent,
  ButtonAddInformation,
} from "./Styled";
import { CheckBoks } from "../../SearchContent/Style/ProdukSearchStyled";
import { pembeliService } from "../../../services/Pembeli";

const InformasiPembeliPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [actButton, setActButton] = useState(0);
  const [addNewInfo, setAddNewInfo] = useState(false);
  const [failed, setFailed] = useState(false);
  const { clientCart, setClientCart } = useContext(clientCartContext);
  const { loginInfo } = useContext(loginContext);
  const [pembeliData, setPembeliData] = useState([]);
  const [saveNew, setSaveNew] = useState(false);
  const [error, setError] = useState();
  const [newData, setNewData] = useState({
    nama_pembeli: null,
    email: null,
    no_hp_pembeli: null,
    alamat_pembeli: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await pembeliService.getPembeliById(
        loginInfo.pembeliId,
        loginInfo.token
      );
      const data = response.data;
      setPembeliData(data.informasi_pembeli);
    };
    fetchData();
    setIsLoading(false);
  }, []);
  console.log(clientCart);

  const submitAddInformasi = async () => {
    console.log(Object.values(newData).some((data) => data == null));
    if (saveNew === true) {
      if (Object.values(newData).some((data) => data != null)) {
        let body = {
          informasi_pembeli: pembeliData,
        };
        body.informasi_pembeli.push(newData);
        const response = await pembeliService.editPembeliById(
          loginInfo.pembeliId,
          loginInfo.token,
          body
        );
        return setClientCart({ ...clientCart, clientInfo: newData });
      }
      return setError("Please Fill All Field");
    }
    return setClientCart({ ...clientCart, clientInfo: newData });
  };

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
                title="Informasi Pembeli"
                subtitle="Isi form dibawah ini dengan informasi secara lengkap."
                path="/client-purchase/cart"
                buttonTitle="Kembali ke Keranjang"
                act="informasi"
              />
              <GlobalTemplate>
                <PurchaseContentApart>
                  <PurchaseContent>
                    {pembeliData.length === 0 ? (
                      <BoxNotEntry>
                        Belum Memiliki Informasi Pembeli!
                      </BoxNotEntry>
                    ) : (
                      <>
                        {pembeliData.map((dats, idx) => {
                          return (
                            <>
                              <DivRow key={idx}>
                                <CheckBoks
                                  type="radio"
                                  value={idx}
                                  name="information"
                                  onChange={() => {
                                    setActButton(idx);
                                  }}
                                  checked={idx === actButton}
                                />
                                <DivRowContent>
                                  <div>
                                    <TitleName nonact={idx !== actButton}>
                                      {dats.nama_pembeli}
                                    </TitleName>
                                    <InformationContent
                                      nonact={idx !== actButton}
                                    >
                                      {dats.no_hp_pembeli}
                                    </InformationContent>
                                    <InformationContent
                                      nonact={idx !== actButton}
                                    >
                                      {dats.alamat_pembeli}
                                    </InformationContent>
                                  </div>
                                </DivRowContent>
                              </DivRow>
                            </>
                          );
                        })}
                      </>
                    )}
                    <>
                      {addNewInfo ? (
                        <>
                          <ButtonAddInformation
                            onClick={() => setAddNewInfo(false)}
                          >
                            - Batal Tambah
                          </ButtonAddInformation>

                          <h6
                            style={{
                              margin: "40px 0 15px",
                              fontSize: "18px",
                              color: "#212b36",
                            }}
                          >
                            Informasi Pembeli Baru
                          </h6>

                          <form>
                            <LoginLabel for="address">Nama Lengkap</LoginLabel>
                            <LoginInput
                              type="text"
                              required
                              name="name"
                              onChange={(e) => {
                                setNewData({
                                  ...newData,
                                  nama_pembeli: e.target.value,
                                });
                              }}
                            />

                            <InputCityApart>
                              <div style={{ flexBasis: "50%" }}>
                                <LoginLabel for="city">E-mail</LoginLabel>
                                <br />
                                <LoginInput
                                  type="email"
                                  required
                                  name="email"
                                  onChange={(e) => {
                                    setNewData({
                                      ...newData,
                                      email: e.target.value,
                                    });
                                  }}
                                />
                                <br />
                              </div>
                              <div style={{ flexBasis: "48%" }}>
                                <LoginLabel for="pos">Nomor HP</LoginLabel>
                                <br />
                                <LoginInput
                                  type="text"
                                  required
                                  autocomplete="off"
                                  name="telephone"
                                  value={newData.no_hp_pembeli}
                                  onChange={(e) => {
                                    let regexp = /^[0-9\b]+$/;
                                    if (
                                      e.target.value === "" ||
                                      regexp.test(e.target.value)
                                    ) {
                                      setNewData({
                                        ...newData,
                                        no_hp_pembeli: e.target.value,
                                      });
                                    }
                                  }}
                                />
                                <br />
                              </div>
                            </InputCityApart>

                            <LoginLabel for="address">
                              Alamat Tempat Tinggal
                            </LoginLabel>
                            <LoginInput
                              type="text"
                              required
                              name="address"
                              onChange={(e) => {
                                setNewData({
                                  ...newData,
                                  alamat_pembeli: e.target.value,
                                });
                              }}
                            />
                            <CheckBoxInput>
                              <input
                                type="checkbox"
                                required
                                style={{ marginRight: "4px" }}
                                onChange={() => setSaveNew(!saveNew)}
                              />
                              <div style={{ width: "100%" }}>
                                Simpan data pembeli baru
                              </div>
                            </CheckBoxInput>
                            <MulaiBelanja
                              need
                              onClick={() => {
                                submitAddInformasi();
                                AuthCliPay.inclipay(() => {
                                  props.history.push(
                                    "/client-purchase/payment"
                                  );
                                });
                              }}
                            >
                              Lanjutkan Pembelian
                            </MulaiBelanja>
                          </form>
                        </>
                      ) : (
                        <ButtonAddInformation
                          onClick={() => setAddNewInfo(true)}
                        >
                          + Tambah Pembeli Baru
                        </ButtonAddInformation>
                      )}
                    </>
                  </PurchaseContent>

                  <PurchasePrice>
                    <h5>Ringkasan Belanja</h5>
                    <PriceTotal>
                      <p>Total Harga</p>
                      <h6>
                        Rp
                        {parseInt(clientCart.price).toLocaleString("id-ID")}
                      </h6>
                    </PriceTotal>
                    <MulaiBelanja
                      need
                      onClick={() => {
                        if (pembeliData[actButton] === undefined) {
                          setFailed(true);
                          setTimeout(() => {
                            setFailed(false);
                          }, 1500);
                        } else {
                          setClientCart({
                            ...clientCart,
                            clientInfo: pembeliData[actButton],
                          });
                          AuthCliPay.inclipay(() => {
                            props.history.push("/client-purchase/payment");
                          });
                        }
                      }}
                    >
                      Lanjutkan Pembelian
                    </MulaiBelanja>
                    {failed ? (
                      <PopBgSuccess>
                        <BgSuccess aktif={failed === true}>
                          <Failedicon />
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "column",
                            }}
                          >
                            <b>FAILED</b>
                            Harus Memilih Satu Informasi
                          </div>
                        </BgSuccess>
                      </PopBgSuccess>
                    ) : (
                      <></>
                    )}
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

export default InformasiPembeliPage;
