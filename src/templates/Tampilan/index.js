import React from "react";
import { GlobalTemplate } from "../GlobalTemplate"
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
    StarUserRate
} from "./TampilanStyled";

const ShowAtTopProduk = ({ dataexact }) => {
    return (
        <BgTop prod>
            <GlobalTemplate need>
                <ShowedObj prod>
                    {dataexact.map((item,idx)=>{
                        return(
                            <>
                            <ImageProduk img={item.image} />
                            <GetApart key={idx}>
                                <BoxExp>{item.kota}</BoxExp>
                                <BoxExp titlee>{item.judul}</BoxExp>
                                <BoxExp><Shopping />{item.vendor}</BoxExp>
                                <BoxExp><Star />{item.rating} / 5.0 ({item.ulasan} Ulasan)</BoxExp>
                                <Price>Rp{item.harga}</Price>
                                <GetButBot>
                                    <div>
                                        <ButtonBottom>
                                            <CartShop />Masukkan Keranjang
                                        </ButtonBottom>
                                        <ButtonBottom call>
                                            <ChatShop />Hubungi Vendor
                                        </ButtonBottom>
                                    </div>
                                </GetButBot>
                            </GetApart>
                            </>
                        )
                    })}
                </ShowedObj>
            </GlobalTemplate>
        </BgTop>
    )
}

const ShowAtTopVendor = ({image,vendor,rate,review}) => {
    return (
        <BgTop>
            <GlobalTemplate need>
                <ShowedObj>
                    <VendorPhoto img={image} />
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
                        <BoxExp><Shopping />{vendor}</BoxExp>
                        <BoxExp><Star />{rate} / 5.0 ({review} Ulasan)</BoxExp>
                        <ButtonBottom call>
                            <ChatShop />Hubungi Vendor
                        </ButtonBottom>
                    </div>
                </ShowedObj>
            </GlobalTemplate>
        </BgTop>
    )
}

const PenilaianVendor = ({dataexact}) =>{
    return(
        <GlobalTemplate>
            {dataexact.map((item,idx)=>{
                return(
                    <TampilanComments key={idx}>
                        <VendorCommentsPhoto>
                            <TampilanCommentsVendor>
                                <VendorPhoto img={item.fotovendor} inComment/>
                                <TampilanApart>
                                    <BoxExp titlee><Shopping />{item.vendor}</BoxExp>
                                    <BoxExp><Star />{item.rating} / 5.0 ({item.ulasan} Ulasan)</BoxExp>             
                                </TampilanApart>
                            </TampilanCommentsVendor>
                            <TampilanCommentsVendor button>
                                <TampilanApart>
                                    <ButtonBottom need>
                                        <CartShop />Masukkan Keranjang
                                    </ButtonBottom>
                                    <ButtonBottom call>
                                        <ChatShop />Hubungi Vendor
                                    </ButtonBottom>
                                </TampilanApart>
                            </TampilanCommentsVendor>
                        </VendorCommentsPhoto>
                            {item.comments.map((data,idx)=>{
                                return(
                                    <CommentsPart key={idx}>
                                        <CommentProfile profile>
                                            <UserPhoto img={data.userprofile}/>
                                            <UserName>{data.username}</UserName>
                                        </CommentProfile>
                                        <CommentProfile>
                                            <UserComment>{data.komentar}</UserComment>
                                            <UserRate><StarUserRate/>{data.rate} / 5.0</UserRate>
                                        </CommentProfile>
                                    </CommentsPart>
                                )
                            })}
                    </TampilanComments>
                )
            })}
        </GlobalTemplate>
    )
}

export { ShowAtTopProduk, ShowAtTopVendor, PenilaianVendor };