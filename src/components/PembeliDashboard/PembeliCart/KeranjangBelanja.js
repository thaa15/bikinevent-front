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
  NoteInput,
  NoteButton,
} from "./Styled";
import { CheckBoks } from "../../SearchContent/Style/ProdukSearchStyled";
import { clientCartContext, loginContext } from "../../../context";
import { pembeliService } from "../../../services/Pembeli";

const KeranjangBelanjaPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [prices, setPrices] = useState("0");
  const { clientCart, setClientCart } = useContext(clientCartContext);
  const { loginInfo } = useContext(loginContext);
  const [cartData, setCartData] = useState([]);
  const [notes, setNotes] = useState([]);
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

  console.log(clientCart);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <PembeliHeaderWithStep
            title="Keranjang Belanja"
            subtitle="Keperluan yang anda butuhkan."
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
                  <BoxContentCart>
                    {cartData.map((item, idx) => {
                      return (
                        <>
                          <DivRow>
                            <CheckBoks
                              type="checkbox"
                              value={item.harga}
                              onClick={(e) => {
                                let arrWithArr = clientCart.product;
                                if (e.target.checked) {
                                  setPrices(
                                    `${
                                      parseInt(prices) +
                                      parseInt(e.target.value)
                                    }`
                                  );
                                  arrWithArr.push(item.id);
                                } else {
                                  setPrices(
                                    `${
                                      parseInt(prices) -
                                      parseInt(e.target.value)
                                    }`
                                  );
                                  let index = arrWithArr.indexOf(item.id);
                                  if (index !== -1) {
                                    arrWithArr.splice(index, 1);
                                  }
                                }
                                setClientCart({
                                  ...clientCart,
                                  product: arrWithArr,
                                });
                              }}
                            />
                            <DivRowContent needs>
                              <ImageCart src={item.foto_produk[0].url} />
                              <div>
                                <p>{item.nama}</p>
                                <h6>
                                  Rp
                                  {parseInt(item.harga).toLocaleString("id-ID")}
                                </h6>
                                <NoteInput
                                  type="text"
                                  placeholder="Tanggal, waktu, lokasi dan lainnya"
                                  onChange={(e) => {
                                    let array = clientCart.notes;
                                    array[idx] = e.target.value;
                                    setClientCart({
                                      ...clientCart,
                                      notes: array,
                                    });
                                  }}
                                />
                                <NoteButton>Simpan</NoteButton>
                              </div>
                              <PartTrashButtons>
                                <TrashButton>
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
                      setClientCart({ ...clientCart, price: prices });
                      AuthClinformation.inclinfo(() => {
                        props.history.push("/client-purchase/information");
                      });
                    }}
                  >
                    Lanjutkan Pembelian
                  </MulaiBelanja>
                </PurchasePrice>
              </PurchaseContentApart>
            )}
          </GlobalTemplate>
        </>
      )}
    </>
  );
};

export default KeranjangBelanjaPage;
