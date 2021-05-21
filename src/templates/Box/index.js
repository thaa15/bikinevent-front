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
    ApartPriced
} from "./BoxStyled";
import EllipsisText from "react-ellipsis-text";

const BoxHarga = ({image,city,judul,harga,rate,review}) =>{
    return(
        <>
        <BoxedPrice>
            <BoxImage img={image}/>
            <ApartPriced>
                <div style={{flexBasis:"50%"}}>
                    <BoxExp>{city}</BoxExp>
                    <BoxExp titlee>
                        <EllipsisText text={judul} length={"40"} />
                    </BoxExp>
                </div>
                <div style={{flexBasis:"50%"}}>
                    <Price>Rp{harga}</Price>
                    <BoxExp><Star/>{rate} / 5.0 ({review} Ulasan)</BoxExp>
                </div>
            </ApartPriced>
        </BoxedPrice>
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

export {BoxHarga, KategoriBox, BlogHomeBox};