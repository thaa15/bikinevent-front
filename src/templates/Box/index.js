import React from "react";
import {
    BoxedPrice,
    BoxImage,
    BoxExp,
    Price,
    Star,
    BoxKat,
    BoxKatOpac,
    BoxKatExp,
    BlogBoxHome,
    BlogBoxImage,
    BlogExpHome,
    ApartPriced,
    ButtonVendor,
    ApartButton,
    BoxedVendor,
    ApartVendor
} from "./BoxStyled";
import EllipsisText from "react-ellipsis-text";

const BoxHarga = ({image,city,judul,harga,rate,review}) =>{
    return(
        <>
        <BoxedPrice>
            <BoxImage img={image}/>
            <ApartPriced>
                <div style={{flexBasis:"60%"}}>
                    <BoxExp>{city}</BoxExp>
                    <BoxExp titlee>
                        <EllipsisText text={judul} length={"40"} />
                    </BoxExp>
                </div>
                <div style={{flexBasis:"40%"}}>
                    <Price>Rp{harga}</Price>
                    <BoxExp><Star/>{rate} / 5.0 ({review} Ulasan)</BoxExp>
                </div>
            </ApartPriced>
        </BoxedPrice>
        </>
    )
}

const BoxVendorProduct = ({image,judul,statss,harga}) =>{
    return(
        <>
        <BoxedVendor>
            <BoxImage img={image}/>
            <ApartVendor>
                <div style={{flexBasis:"60%"}}>
                    <BoxExp titlee>
                        <EllipsisText text={judul} length={"35"} />
                    </BoxExp>
                </div>
                <Price>Rp{harga}</Price>
                <ApartButton>
                    <ButtonVendor ubah>Ubah</ButtonVendor>
                    <ButtonVendor>{statss}</ButtonVendor>
                </ApartButton>
            </ApartVendor>
        </BoxedVendor>
        </>
    )
}

const KategoriBox = ({imagee,desc}) => {
    return(
        <>
        <BoxKat imge={imagee}>
            <BoxKatOpac>
                <BoxKatExp>{desc}</BoxKatExp>
            </BoxKatOpac>
        </BoxKat>
        </>
    )
}

const BlogHomeBox = ({image,titlee,desc}) => {
    return(
        <BlogBoxHome>
            <BlogBoxImage img={image}/>
            <BlogExpHome title>
                <EllipsisText text={titlee} length={"50"} />
            </BlogExpHome>
            <BlogExpHome>
                <EllipsisText text={desc} length={"150"} />
            </BlogExpHome>
        </BlogBoxHome>
    )
}

export {BoxHarga, KategoriBox, BlogHomeBox,BoxVendorProduct};