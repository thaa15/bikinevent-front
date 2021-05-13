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
    BlogExpHome
} from "./BoxStyled";
import EllipsisText from "react-ellipsis-text";

const BoxHarga = ({image,city,judul,harga,rate,review}) =>{
    return(
        <>
        <BoxedPrice>
            <BoxImage img={image}/>
            <BoxExp>{city}</BoxExp>
            <BoxExp titlee>{judul}</BoxExp>
            <Price>Rp{harga}</Price>
            <BoxExp><Star/>{rate} / 5.0 ({review} Ulasan)</BoxExp>
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
                <EllipsisText text={titlee} length={"70"} />
            </BlogExpHome>
            <BlogExpHome>
                <EllipsisText text={desc} length={"150"} />
            </BlogExpHome>
        </BlogBoxHome>
    )
}

export {BoxHarga, KategoriBox, BlogHomeBox};