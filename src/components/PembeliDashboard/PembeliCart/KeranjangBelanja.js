import React, { useState, useEffect, useContext } from "react";
import LoadingPage from "../../../templates/Loading";
import fotoNoEntry from "../../../images/fotoNoEntry.png";
import { PembeliHeaderWithStep } from "../../../templates/HeaderSmall/PembeliHeader";
import {
  GlobalTemplate,
  PopBgSuccess,
  BgSuccess,
  Failedicon,
} from "../../../templates/GlobalTemplate";
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
  NoteInput
} from "./Styled";
import { CheckBoks } from "../../SearchContent/Style/ProdukSearchStyled";
import { clientCartContext, loginContext } from "../../../context";
import { pembeliService } from "../../../services/Pembeli";
import CheckBox from "./CheckBox";

const KeranjangBelanjaPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [prices, setPrices] = useState("0");
  const [tempVendorName, setTempVendorName] = useState([]);
  const [failed, setFailed] = useState(false);
  const { clientCart, setClientCart } = useContext(clientCartContext);
  const { loginInfo } = useContext(loginContext);
  const [cartData, setCartData] = useState([]);
  const [checks,setChecks] = useState([]);

  useEffect(() => {
    if (loginInfo.pembeliId != "null" && loginInfo.token != "null") {
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
      setClientCart({ ...clientCart, notif: cartData.length });
      setTempVendorName([
        cartData
          .sort((a, b) =>
            a.vendor.nama_vendor.localeCompare(b.vendor.nama_vendor)
          )
          .filter((a, id) => id == 0)
          .map((item) => item.vendor.nama_vendor)
          .toString(),
      ]);

      for (let i = 1; i < cartData.length; i++) {
        if (
          cartData
            .sort((a, b) =>
              a.vendor.nama_vendor.localeCompare(b.vendor.nama_vendor)
            )
            .filter((a, id) => id == i)
            .map((item) => item.vendor.nama_vendor)
            .toString() !==
          cartData
            .sort((a, b) =>
              a.vendor.nama_vendor.localeCompare(b.vendor.nama_vendor)
            )
            .filter((a, id) => id == i - 1)
            .map((item) => item.vendor.nama_vendor)
            .toString()
        ) {
          setTempVendorName((old) => [
            ...old,
            cartData
              .filter((a, id) => id == i)
              .map((item) => item.vendor.nama_vendor)
              .toString(),
          ]);
        }
      }
    } else {
      setIsLoading(true)
    }
  }, [cartData.length]);

  const findedIndex = (n) => {
    let index = 0;
    for (let i = 0; i < n; i++) {
      index += cartData.filter(
        (el) => el.vendor.nama_vendor === tempVendorName[i]
      ).length;
    }
    return index;
  };

  const deleteCart = async (id) => {
    let tempCart = cartData.map((cart) => cart.id);
    let index = tempCart.indexOf(id);
    if (index !== -1) {
      tempCart.splice(index, 1);
    }
    let body = {
      cart: tempCart,
    };
    const response = await pembeliService.editPembeliById(
      loginInfo.pembeliId,
      loginInfo.token,
      body
    );
    window.location.reload();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <PembeliHeaderWithStep
            title="Keranjang Belanja"
            subtitle="Keperluan yang anda butuhkan."
            path="/"
            buttonTitle="Kembali ke Berbelanja"
            act="keranjang"
          />
          <GlobalTemplate>
            {cartData.length === 0 ? (
              <BgNoEntry>
                <NoEntryContent>
                  <ImageNoEntry src={fotoNoEntry} alt="No Entry" />
                  <h4 style={{ fontSize: "18px", color: "#212B36" }}>
                    Keranjang-mu Kosong!
                  </h4>
                  <p style={{ fontSize: "14px", color: "#909DAA" }}>
                    Cari keperluan acara dan masukan ke keranjang untuk
                    melanjutkan proses pembelian!
                  </p>
                  <MulaiBelanja to="/">Mulai Belanja</MulaiBelanja>
                </NoEntryContent>
              </BgNoEntry>
            ) : (
              <PurchaseContentApart>
                <PurchaseContent>
                  {tempVendorName.map((item, ids) => {
                    return (
                      <BoxContentCart>
                        <DivRow>
                          <DivRowContent top>
                            <DivRowContent need>
                              <Shopping />
                              <h6>{item}</h6>
                            </DivRowContent>
                            <LinkChat>Hubungi Vendor</LinkChat>
                          </DivRowContent>
                        </DivRow>
                        {cartData
                          .filter(
                            (el) =>
                              el.vendor.nama_vendor === tempVendorName[ids]
                          )
                          .map((items, idx) => {
                            return (
                              <>
                                <DivRow>
                                  <label>
                                    <CheckBox
                                      value={items.harga}
                                      onClick={(e) => {
                                        let arrWithArr = clientCart.product;
                                        let arrVendor = clientCart.vendor;
                                        let chck = checks;
                                        if (e.target.checked) {
                                          setPrices(
                                            `${parseInt(prices) +
                                            parseInt(e.target.value)
                                            }`
                                          );
                                          arrWithArr.push(items.id);
                                          chck[(findedIndex(ids)+idx)] = true
                                          if (
                                            arrVendor.every((ven) => {
                                              return ven !== items.vendor.id;
                                            })
                                          ) {
                                            arrVendor.push(items.vendor.id);
                                          }
                                        } else {
                                          setPrices(
                                            `${parseInt(prices) -
                                            parseInt(e.target.value)
                                            }`
                                          );
                                          chck[(findedIndex(ids)+idx)] = false;
                                          let index = arrWithArr.indexOf(
                                            items.id
                                          );
                                          let indexV = arrVendor.indexOf(
                                            items.vendor.id
                                          );
                                          if (index !== -1) {
                                            arrWithArr.splice(index, 1);
                                          }
                                          if (indexV !== -1) {
                                            arrVendor.splice(indexV, 1);
                                          }
                                        }
                                        setChecks(chck)
                                        setClientCart({
                                          ...clientCart,
                                          product: arrWithArr,
                                          vendor: arrVendor,
                                        });
                                      }}
                                      checked={checks[(findedIndex(ids)+idx)]}
                                    />
                                  </label>
                                  <DivRowContent content>
                                    <ImageCart src={items.foto_produk[0].url} />
                                    <div>
                                      <p>{items.nama}</p>
                                      <h6>
                                        Rp
                                        {parseInt(items.harga).toLocaleString(
                                          "id-ID"
                                        )}
                                      </h6>
                                      <NoteInput
                                        type="text"
                                        placeholder="Tanggal, waktu, lokasi dan lainnya"
                                        onChange={(e) => {
                                          let array = clientCart.notes;
                                          let indx = findedIndex(ids);

                                          array[indx + idx] = e.target.value;
                                          setClientCart({
                                            ...clientCart,
                                            notes: array,
                                          });
                                        }}
                                      />
                                      {/*<NoteButton>Simpan</NoteButton>*/}
                                    </div>
                                    <PartTrashButtons>
                                      <TrashButton
                                        onClick={() => {
                                          deleteCart(items.id);
                                        }}
                                      >
                                        <TrashsIcon need />
                                      </TrashButton>
                                    </PartTrashButtons>
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
                      </BoxContentCart>
                    );
                  })}
                </PurchaseContent>

                <PurchasePrice>
                  <h5>Ringkasan Belanja</h5>
                  <PriceTotal>
                    <p>Total Harga</p>
                    <h6>Rp{parseInt(prices).toLocaleString("id-ID")}</h6>
                  </PriceTotal>
                  <MulaiBelanja
                    need
                    onClick={() => {
                      if (
                        clientCart.product.length === 0 ||
                        parseInt(prices) == 0
                      ) {
                        setFailed(true);
                        setTimeout(() => {
                          setFailed(false);
                        }, 1500);
                      } else {
                        setClientCart({ ...clientCart, price: prices });
                        AuthClinformation.inclinfo(() => {
                          props.history.push("/client-purchase/information");
                        });
                      }
                    }}
                  >
                    Lanjutkan Pembelian
                  </MulaiBelanja>
                </PurchasePrice>
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
                        Harus Memilih Minimal Satu Barang
                      </div>
                    </BgSuccess>
                  </PopBgSuccess>
                ) : (
                  <></>
                )}
              </PurchaseContentApart>
            )}
          </GlobalTemplate>
        </>
      )}
    </>
  );
};

export default KeranjangBelanjaPage;
