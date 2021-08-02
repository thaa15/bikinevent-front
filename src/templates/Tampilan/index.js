import React, { useState, useEffect, useContext } from "react";
import {
  GlobalTemplate,
  PopUpBg,
  ContentPopUp,
  ButtonCloser,
  ButtonClosePopUp,
  AngleLeft,
  AngleRight,
  ContentDrop,
  PopBgSuccess,
  BgSuccess,
  Failedicon,
  Succesicon,
} from "../GlobalTemplate";
import { Imagees } from "../../components/TampilanProdukVendor/TampilanProduk/TampilanProdukStyled";
import {
  BgTop,
  ShowedObj,
  ImageProduk,
  BoxExp,
  Price,
  Star,
  Shopping,
  ButtonBottom,
  ChatShop,
  CartShop,
  VendorPhoto,
  GetApart,
  GetButBot,
  TampilanComments,
  VendorCommentsPhoto,
  TampilanCommentsVendor,
  TampilanApart,
  CommentsPart,
  CommentProfile,
  UserPhoto,
  UserName,
  UserComment,
  UserRate,
  StarUserRate,
  Shop,
  BoxExpVendor,
  PortofolioBox,
  PortofolioTitle,
  PortofolioImage,
  PartOfImage,
} from "./TampilanStyled";
import { BoxNotEntry } from "../../components/VendorDashboard/VendorPesanan/VendorPesananStyle";
import { clientCartContext, loginContext } from "../../context";
import { pembeliService } from "../../services/Pembeli";
import { roomService } from "../../services/Room";
import { vendorService } from "../../services/Vendor";
import { useHistory } from "react-router-dom";
const ShowAtTopProduk = ({
  id,
  image,
  kota,
  judul,
  vendor,
  rating,
  ulasan,
  harga,
  vendorId,
}) => {
  const [prices, setPrices] = useState(harga.toLocaleString("id-ID"));
  const [rates, setRates] = useState(rating);
  const [handles, setHandles] = useState(false);
  const { loginInfo, setLoginInfo } = useContext(loginContext);
  const [successAdd, setSuccessAdd] = useState({
    right: false,
    wrong: false,
  });
  const { clientCart, setClientCart } = useContext(clientCartContext);
  const history = useHistory();
  const addToCart = async () => {
    if (loginInfo.role === "pembeli") {
      let body = null;
      const response = await pembeliService.getPembeliById(
        loginInfo.pembeliId,
        loginInfo.token
      );
      const dataPembeli = response.data;
      let newCart = dataPembeli.cart;
      if (newCart.filter((item) => item.id.includes(id)).length < 1) {
        newCart.push(id);
        body = {
          cart: newCart,
        };
        setSuccessAdd({ ...successAdd, right: true });
        setTimeout(() => {
          setSuccessAdd(false);
        }, 1200);
        setClientCart({ ...clientCart, notif: newCart.length });
        const putResponse = await pembeliService.editPembeliById(
          loginInfo.pembeliId,
          loginInfo.token,
          body
        );
        return putResponse;
      } else {
        setSuccessAdd({ ...successAdd, wrong: true });
        setTimeout(() => {
          setSuccessAdd(false);
        }, 1500);
      }
    }
  };

  const contactVendor = async () => {
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
    console.log(
      dataRoom.filter((room) =>
        dataRoomUser.some((roomUser) => roomUser.id === room.id)
      ).length
    );
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

  useEffect(() => {
    if (rating === undefined) setRates(0);
    else setRates(rating);
    if (prices.length > 11) setHandles(true);
  }, [clientCart.notif]);
  return (
    <BgTop prod>
      <GlobalTemplate need>
        <ShowedObj prod>
          <ImageProduk img={image} />
          <GetApart>
            <BoxExp>{kota}</BoxExp>
            <BoxExp titlee>{judul}</BoxExp>
            <BoxExp>
              <Shopping />
              {vendor}
            </BoxExp>
            <BoxExp>
              <Star />
              {rates} / 5.0 ({ulasan} Ulasan)
            </BoxExp>
            <Price handle={handles}>Rp{prices}</Price>
            <GetButBot>
              <div>
                <ButtonBottom onClick={addToCart}>
                  <CartShop />
                  Masukkan Keranjang
                </ButtonBottom>
                <ButtonBottom call onClick={contactVendor}>
                  <ChatShop />
                  Hubungi Vendor
                </ButtonBottom>
              </div>
            </GetButBot>
          </GetApart>
        </ShowedObj>
        {successAdd.wrong ? (
          <PopBgSuccess>
            <BgSuccess aktif={successAdd.wrong === true}>
              <Failedicon />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <b>FAILED</b>
                Gagal Menambahkan, Barang sudah di keranjang!
              </div>
            </BgSuccess>
          </PopBgSuccess>
        ) : successAdd.right ? (
          <PopBgSuccess>
            <BgSuccess aktif={successAdd.right === true} right>
              <Succesicon />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <b>SUCCESS</b>
                Berhasil Menambahkan
              </div>
            </BgSuccess>
          </PopBgSuccess>
        ) : (
          <></>
        )}
      </GlobalTemplate>
    </BgTop>
  );
};

const ShowAtTopVendor = ({
  fotovendor,
  vendor,
  ratingvendor,
  ulasanvendor,
}) => {
  const [rates, setRates] = useState(ratingvendor);

  useEffect(() => {
    if (rates === undefined) setRates(0);
    else setRates(ratingvendor);
  }, []);
  return (
    <BgTop>
      <GlobalTemplate need>
        <ShowedObj>
          <VendorPhoto img={fotovendor} />
          <GetApart>
            <BoxExpVendor titlee>
              <Shopping />
              {vendor}
            </BoxExpVendor>
            <BoxExpVendor>
              <Star />
              {rates} / 5.0 ({ulasanvendor} Ulasan)
            </BoxExpVendor>
            <ButtonBottom call>
              <ChatShop />
              Hubungi Vendor
            </ButtonBottom>
          </GetApart>
        </ShowedObj>
      </GlobalTemplate>
    </BgTop>
  );
};

const PenilaianVendor = ({ fotovendor, vendor, rating, ulasan, comments }) => {
  const [rates, setRates] = useState(rating);

  useEffect(() => {
    if (rates === undefined || rates === 0) setRates(0);
    else setRates(rating);
  }, []);
  return (
    <GlobalTemplate>
      <TampilanComments>
        <VendorCommentsPhoto>
          <TampilanCommentsVendor>
            <VendorPhoto img={fotovendor} inComment />
            <TampilanApart>
              <BoxExp titlee>
                <Shopping />
                {vendor.nama_vendor}
              </BoxExp>
              <BoxExp>
                <Star />
                {rates} / 5.0 ({ulasan} Ulasan)
              </BoxExp>
            </TampilanApart>
          </TampilanCommentsVendor>
          <TampilanCommentsVendor button>
            <TampilanApart>
              <ButtonBottom need to={`/vendor/${vendor._id}`}>
                <Shop />
                Kunjungi Vendor
              </ButtonBottom>
              <ButtonBottom call>
                <ChatShop />
                Hubungi Vendor
              </ButtonBottom>
            </TampilanApart>
          </TampilanCommentsVendor>
        </VendorCommentsPhoto>
        {comments.length === 0 ? (
          <BoxNotEntry>Belum Terdapat Penilaian!</BoxNotEntry>
        ) : (
          <>
            {comments.map((data, idx) => {
              return (
                <CommentsPart key={idx}>
                  <CommentProfile profile>
                    <>
                    {typeof data.user.foto_profil === "undefined" ||
                    data.user.foto_profil == null ? (
                      <UserPhoto />
                    ) : (
                      <UserPhoto img={data.user.foto_profil.url} />
                    )}
                    </>
                    {data.user.nama_lengkap == null ? (
                      <UserName>Unknown</UserName>
                    ) : (
                      <UserName>{data.user.nama_lengkap}</UserName>
                    )}
                  </CommentProfile>
                  <CommentProfile>
                    <UserComment>{data.komentar}</UserComment>
                    <UserRate>
                      <StarUserRate />
                      {data.rating} / 5.0
                    </UserRate>
                  </CommentProfile>
                </CommentsPart>
              );
            })}
          </>
        )}
      </TampilanComments>
    </GlobalTemplate>
  );
};

const PenilaianVendorVendor = ({ comments }) => {
  return (
    <>
      {comments.length === 0 ? (
        <BoxNotEntry>Belum Terdapat Penilaian!</BoxNotEntry>
      ) : (
        <TampilanComments>
          {comments.map((data, idx) => {
            return (
              <CommentsPart key={idx}>
                <CommentProfile profile>
                  <UserPhoto img={data.user.foto_profil.url} />
                  <UserName>{data.user.username}</UserName>
                </CommentProfile>
                <CommentProfile>
                  <UserComment>{data.komentar}</UserComment>
                  <UserRate>
                    <StarUserRate />
                    {data.rating} / 5.0
                  </UserRate>
                </CommentProfile>
              </CommentsPart>
            );
          })}
        </TampilanComments>
      )}
    </>
  );
};

const PortofolioVendor = ({ portofoliotitle, foto1, foto2 }) => {
  const [fotos, setFotos] = useState([foto1, foto2]);
  const [clicked, setClicked] = useState(true);
  const [current, setCurrent] = useState(0);

  const carouseleft = () => {
    setCurrent(current === 2 - 1 ? 0 : current + 1);
  };
  const carouseright = () => {
    setCurrent(current === 0 ? 2 - 1 : current - 1);
  };

  return (
    <PortofolioBox>
      <PortofolioTitle>{portofoliotitle}</PortofolioTitle>
      <PartOfImage>
        {fotos.map((item, idx) => {
          return (
            <>
              <>
                <PortofolioImage
                  src={item}
                  key={idx}
                  onClick={() => {
                    setClicked(false);
                    setCurrent(idx);
                  }}
                />
              </>
              {clicked ? (
                <></>
              ) : (
                <>
                  <PopUpBg need>
                    <ButtonClosePopUp
                      onClick={() => {
                        setClicked(true);
                      }}
                    >
                      <ButtonCloser />
                    </ButtonClosePopUp>
                    <ContentPopUp>
                      <AngleLeft role="button" onClick={carouseright} />
                      <AngleRight role="button" onClick={carouseleft} />
                      <ContentDrop played={idx === current} key={idx}>
                        {idx === current && <Imagees src={item} />}
                      </ContentDrop>
                    </ContentPopUp>
                  </PopUpBg>
                </>
              )}
            </>
          );
        })}
      </PartOfImage>
    </PortofolioBox>
  );
};

export {
  ShowAtTopProduk,
  ShowAtTopVendor,
  PenilaianVendor,
  PenilaianVendorVendor,
  PortofolioVendor,
};
