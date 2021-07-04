import React, { useState, useEffect } from "react";
import {
  GlobalTemplate,
  PopUpBg,
  ContentPopUp,
  ButtonCloser,
  ButtonClosePopUp,
  AngleLeft,
  AngleRight,
  ContentDrop,
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

const ShowAtTopProduk = ({
  image,
  kota,
  judul,
  vendor,
  rating,
  ulasan,
  harga,
}) => {
  const [prices, setPrices] = useState(harga.toLocaleString("id-ID"));
  const [rates, setRates] = useState(rating);
  const [handles, setHandles] = useState(false);

  useEffect(() => {
    if (rating === undefined) setRates(0);
    else setRates(rating);

    if (prices.length > 11) setHandles(true);
  }, [])
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
                <ButtonBottom>
                  <CartShop />
                  Masukkan Keranjang
                </ButtonBottom>
                <ButtonBottom call>
                  <ChatShop />
                  Hubungi Vendor
                </ButtonBottom>
              </div>
            </GetButBot>
          </GetApart>
        </ShowedObj>
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
  }, [])
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
    if (rates === undefined) setRates(0);
    else setRates(rating);
  }, [])
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
        {comments.map((data, idx) => {
          return (
            <CommentsPart key={idx}>
              <CommentProfile profile>
                <UserPhoto img={data.user.foto_profil.url} />
                <UserName>{data.user.nama_lengkap}</UserName>
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
    </GlobalTemplate>
  );
};

const PenilaianVendorVendor = ({ comments }) => {
  return (
    <>
      {comments.length === 0 ? (
        <BoxNotEntry>
          Belum Terdapat Penilaian!
        </BoxNotEntry>
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
                <>
                </>
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
          )
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
