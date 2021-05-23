import React from "react";
import { GlobalTemplate } from "../GlobalTemplate";
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
} from "./TampilanStyled";

const ShowAtTopProduk = ({
  image,
  kota,
  judul,
  vendor,
  rating,
  ulasan,
  harga,
}) => {
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
              {rating} / 5.0 ({ulasan} Ulasan)
            </BoxExp>
            <Price>Rp{harga}</Price>
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
  return (
    <BgTop>
      <GlobalTemplate need>
        <ShowedObj>
          <VendorPhoto img={fotovendor} />
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <BoxExp>
              <Shopping />
              {vendor}
            </BoxExp>
            <BoxExp>
              <Star />
              {ratingvendor} / 5.0 ({ulasanvendor} Ulasan)
            </BoxExp>
            <ButtonBottom call>
              <ChatShop />
              Hubungi Vendor
            </ButtonBottom>
          </div>
        </ShowedObj>
      </GlobalTemplate>
    </BgTop>
  );
};

const PenilaianVendor = ({ fotovendor, vendor, rating, ulasan, comments }) => {
  return (
    <GlobalTemplate>
      <TampilanComments>
        <VendorCommentsPhoto>
          <TampilanCommentsVendor>
            <VendorPhoto img={fotovendor} inComment />
            <TampilanApart>
              <BoxExp titlee>
                <Shopping />
                {vendor}
              </BoxExp>
              <BoxExp>
                <Star />
                {rating} / 5.0 ({ulasan} Ulasan)
              </BoxExp>
            </TampilanApart>
          </TampilanCommentsVendor>
          <TampilanCommentsVendor button>
            <TampilanApart>
              <ButtonBottom need to={`/vendor/${vendor}`}>
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
                <UserPhoto img={data.userprofile} />
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

export { ShowAtTopProduk, ShowAtTopVendor, PenilaianVendor };
