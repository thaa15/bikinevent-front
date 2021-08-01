import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { PesananPembeliHeaderWithStep } from "../../../../templates/HeaderSmall/PembeliHeader";
import LoadingPage from "../../../../templates/Loading";
import { Redirect } from "react-router";
import { DivButton } from "../../../VendorDashboard/VendorProfil/VendorProfileStyled";
import { Shopping } from "../../PembeliCart/Styled";
import {
  GlobalTemplate,
  PopUpBg,
  ContentPopUp,
} from "../../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../../datas/vendordata";
import { ChatShop } from "../../../../templates/Tampilan/TampilanStyled";
import sucregcheck from "../../../../images/sucregcheck.png";
import ReactStars from "react-rating-stars-component";
import {
  SucRegBox,
  SucRegWrited,
  GoHome,
} from "../../../LogReg/SuccessRegPage/SuccessRegStyled";
import {
  BoxRowDetailed,
  ImageDetailed,
  ButtonBottoms,
  ButtonBottomss,
  LabelDetailTrack,
  ContentDetailTrack,
  ReviewBg,
  BoxRowReview,
  SubtitleReview,
  ImageReview,
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";
import { InputModifArea } from "../../../VendorDashboard/VendorProduk/VendorProdukStyled";
import { orderService } from "../../../../services/OrderHistory";
import { loginContext } from "../../../../context";
import { productService } from "../../../../services/Product";
import { vendorService } from "../../../../services/Vendor";
import { roomService } from "../../../../services/Room";
const PesananSelesaiPage = ({ match }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState({
    rate: false,
    dons: false,
  });
  const [orderData, setOrderData] = useState();
  const { loginInfo } = useContext(loginContext);
  const [date, setDate] = useState();
  const [rating, setRating] = useState([]);
  const [ulasan, setUlasan] = useState([]);
  const [openRate, setOpenRate] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await orderService.getOrderById(
        match.params.id,
        loginInfo.token
      );
      const data = response.data;
      setOrderData(data);
      const format = new Intl.DateTimeFormat("id", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const date = new Date(data.createdAt);
      const dateFormatted = format.format(date);
      setDate(dateFormatted);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const submitReview = async (
    e,
    prodId,
    prevRating,
    prodPenilaian,
    totalRating
  ) => {
    e.preventDefault();
    let tempPenilaian = prodPenilaian;
    tempPenilaian.push({
      user: loginInfo.userId,
      rating: rating,
      komentar: ulasan,
    });
    let body = {
      penilaian: tempPenilaian,
      rating: (prevRating * totalRating + rating) / (totalRating + 1),
    };
    console.log(body);
    const response = await productService.editProductById(
      prodId,
      loginInfo.token,
      body
    );
    return response;
  };

  const contactVendor = async (vendorId) => {
    const response = await roomService.getUserRoom(
      loginInfo.userId,
      loginInfo.token
    );
    const dataRoomUser = response.data;
    const responseVendor = await vendorService.getVendorById(vendorId);
    const dataVendor = responseVendor.data;
    const resRoomVendor = await roomService.getVendorRoom(
      dataVendor.user.id,
      loginInfo.token
    );
    const dataRoom = resRoomVendor.data;
    if (
      dataRoom.filter((room) =>
        dataRoomUser.some((roomUser) => roomUser.id === room.id)
      ).length > 0
    ) {
      return history.push("/client-chat");
    } else {
      let body = {
        userId: loginInfo.userId,
        vendorId: dataVendor.user.id,
      };
      const makeRoom = await roomService.postRoom(loginInfo.token, body);
      return history.push("/client-chat");
    }
  };
  return (
    <>
      {!AuthCliTrack.isAutclitrack() ? (
        <Redirect to="/track-order/records" />
      ) : (
        <>
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
              <PesananPembeliHeaderWithStep
                title="Detail Pesanan"
                subtitle="Ketahui dan lacak status pesanan anda."
                act="selesai"
              />
              {orderData.produks.map((prod, ids) => {
                console.log(orderData.produks)
                return (
                  <GlobalTemplate top>
                    <BoxRowDetailed>
                      <ImageDetailed src={prod.foto_produk[0].url} />
                      <div style={{ rowGap: "5px" }}>
                        <p>{prod.nama}</p>
                        <h6>
                          Rp{parseInt(prod.harga).toLocaleString("id-ID")}
                        </h6>
                        <ButtonBottoms
                          call
                          onClick={() => contactVendor(prod.vendor.id)}
                        >
                          <ChatShop />
                          Hubungi Vendor
                        </ButtonBottoms>
                      </div>
                    </BoxRowDetailed>
                    <LabelDetailTrack>Nomor Invoice</LabelDetailTrack>
                    <ContentDetailTrack invoice>
                      {orderData.kode_invoice}
                    </ContentDetailTrack>
                    <LabelDetailTrack>Nama Vendor</LabelDetailTrack>
                    <ContentDetailTrack invoice>
                      {prod.vendor.nama_vendor}
                    </ContentDetailTrack>
                    <LabelDetailTrack>Tanggal Pesanan</LabelDetailTrack>
                    <ContentDetailTrack>{date}</ContentDetailTrack>
                    <LabelDetailTrack>Status</LabelDetailTrack>
                    <ContentDetailTrack status>
                      Pesanan Selesai
                    </ContentDetailTrack>
                    <BoxRowDetailed>
                      <ButtonBottoms
                        need
                        onClick={() => {
                          setVisible({ ...visible, rate: true });
                          setOpenRate(ids);
                        }}
                      >
                        Berikan Penilaian
                      </ButtonBottoms>
                      {visible.rate ? (
                        <>
                          {orderData.produks.map((prod, idx) => {
                            return (
                              <>
                                {idx === openRate && (
                                  <>
                                    <PopUpBg review key={idx}>
                                      <ContentPopUp>
                                        <ReviewBg should={openRate === idx}>
                                          <BoxRowReview>
                                            <ImageReview
                                              src={prod.foto_produk[0].url}
                                            />
                                            <div
                                              style={{
                                                rowGap: "15px",
                                                flex: "1",
                                                display: "flex",
                                                flexDirection: "column",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  columnGap: "3px",
                                                  display: "flex",
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                }}
                                              >
                                                <Shopping />
                                                <SubtitleReview>
                                                  {prod.vendor.nama_vendor}
                                                </SubtitleReview>
                                              </div>
                                              <p>{prod.nama}</p>
                                              <div>
                                                <SubtitleReview>
                                                  Penilaian
                                                </SubtitleReview>
                                                <div
                                                  style={{ marginTop: "-15px" }}
                                                />
                                                <ReactStars
                                                  count={5}
                                                  size={40}
                                                  isHalf={true}
                                                  activeColor="#ffd700"
                                                  onChange={(e) => {
                                                    setRating(e);
                                                  }}
                                                />
                                              </div>
                                              <div>
                                                <SubtitleReview>
                                                  Ulasan
                                                </SubtitleReview>
                                                <InputModifArea
                                                  rows="5"
                                                  required
                                                  name="description"
                                                  onChange={(e) => {
                                                    setUlasan(e.target.value);
                                                  }}
                                                />
                                              </div>
                                              <ButtonBottomss
                                                need
                                                onClick={(e) => {
                                                  setVisible({
                                                    dons: true,
                                                    rate: false,
                                                  });
                                                  submitReview(
                                                    e,
                                                    prod._id,
                                                    prod.rating,
                                                    prod.penilaian,
                                                    prod.penilaian.length
                                                  );
                                                }}
                                              >
                                                Kirim
                                              </ButtonBottomss>
                                            </div>
                                          </BoxRowReview>
                                          <div
                                            style={{ marginLeft: "auto" }}
                                            onClick={() => {
                                              setVisible({
                                                ...visible,
                                                rate: false,
                                              });
                                            }}
                                          >
                                            <DivButton review>X</DivButton>
                                          </div>
                                        </ReviewBg>
                                      </ContentPopUp>
                                    </PopUpBg>
                                  </>
                                )}
                              </>
                            );
                          })}
                        </>
                      ) : visible.dons ? (
                        <>
                          <PopUpBg need>
                            <ContentPopUp>
                              <SucRegBox>
                                <img
                                  src={sucregcheck}
                                  alt="success"
                                  style={{ margin: "12px auto" }}
                                />
                                <SucRegWrited>Penilaian Terkirim!</SucRegWrited>
                                <SucRegWrited message>
                                  Terima kasih sudah membantu kami berkembang
                                  dengan mengirimkan penilaian pelayanan kami
                                </SucRegWrited>
                                <GoHome
                                  onClick={() => {
                                    history.push("/");
                                  }}
                                >
                                  Kembali ke Beranda
                                </GoHome>
                              </SucRegBox>
                            </ContentPopUp>
                          </PopUpBg>
                        </>
                      ) : (
                        <></>
                      )}
                      <ButtonBottoms call need>
                        Ajukan Pengaduan
                      </ButtonBottoms>
                    </BoxRowDetailed>
                  </GlobalTemplate>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
};

export default PesananSelesaiPage;
