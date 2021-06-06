import React, { useEffect, useState } from "react";
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
  BoxExpVendor,
  PortofolioBox,
  PortofolioTitle,
  PortofolioImage,
  PartOfImage,
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
          <GetApart>
            <BoxExpVendor titlee>
              <Shopping />
              {vendor}
            </BoxExpVendor>
            <BoxExpVendor>
              <Star />
              {ratingvendor} / 5.0 ({ulasanvendor} Ulasan)
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
                {rating} / 5.0 ({ulasan} Ulasan)
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
  );
};

const PortofolioVendor = ({ portofoliotitle, foto1, foto2 }) => {
  return (
    <PortofolioBox>
      <PortofolioTitle>{portofoliotitle}</PortofolioTitle>
      <PartOfImage>
        <PortofolioImage src={foto1} />
        <PortofolioImage src={foto2} />
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
