import React, { useContext, useState,useEffect } from "react";
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
  ApartVendor,
} from "./BoxStyled";
import EllipsisText from "react-ellipsis-text";
import { productService } from "../../services/Product";
import { loginContext } from "../../context";
import { PopBgSuccess, BgSuccess, Succesicon } from "../../templates/GlobalTemplate";

const BoxHarga = ({ image, city, judul, harga, rate, review }) => {
  const [prices,setPrices] = useState(harga.toLocaleString("id-ID"));
  const [rates,setRates] = useState(rate);
  const [handles,setHandles] = useState(false);

  useEffect(() => {
    if(rates === undefined) setRates(0);
    else setRates(rate);

    if(prices.length > 11) setHandles(true);
  }, [])
  return (
    <>
      <BoxedPrice>
        <BoxImage img={image} />
        <ApartPriced>
          <div style={{ flexBasis: "60%" }}>
            <BoxExp>{city}</BoxExp>
            <BoxExp titlee>
              <EllipsisText text={judul} length={"40"} />
            </BoxExp>
          </div>
          <div style={{ flexBasis: "40%" }}>
            <Price handle = {handles}>Rp{prices}</Price>
            <BoxExp>
              <Star />
              {rates} / 5.0 ({review} Ulasan)
            </BoxExp>
          </div>
        </ApartPriced>
      </BoxedPrice>
    </>
  );
};

const BoxVendorProduct = ({ id, image, judul, statss, harga }) => {
  const { loginInfo } = useContext(loginContext);
  const [loginUser, setLoginUser] = useState(false);
  const [prices,setPrices] = useState(harga.toLocaleString("id-ID"));
  const [handles,setHandles] = useState(false);

  useEffect(() => {
    if(prices.length > 11) setHandles(true);
  }, [])

  const changeHandler = async () => {
    setLoginUser(true);
    if (statss === "Arsipkan") {
      const body = {
        isArchived: true,
      };
      const response = await productService.editProductById(
        id,
        loginInfo.token,
        body
      );
      console.log(response.data);
    } else {
      const body = {
        isArchived: false,
      };
      const response = await productService.editProductById(
        id,
        loginInfo.token,
        body
      );
    }
    setTimeout(() => {
      setLoginUser(false);
      window.location.reload();
    }, 1000);
  };
  return (
    <>
      <BoxedVendor>
        <BoxImage img={image} />
        <ApartVendor>
          <div style={{ flexBasis: "60%" }}>
            <BoxExp titlee>
              <EllipsisText text={judul} length={"35"} />
            </BoxExp>
          </div>
          <Price handle={handles}>Rp{prices}</Price>
          <ApartButton>
            <ButtonVendor ubah>Ubah</ButtonVendor>
            <ButtonVendor onClick={changeHandler}>{statss}</ButtonVendor>
          </ApartButton>
        </ApartVendor>
        {loginUser ? (
          <PopBgSuccess>
            <BgSuccess aktif={loginUser === true} right>
              <Succesicon />
              <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
                <b>SUCCESS</b>
                Produk Berhasil Di"{statss}"
              </div>
            </BgSuccess>
          </PopBgSuccess>
        ) : (<></>)}
      </BoxedVendor>
    </>
  );
};

const KategoriBox = ({ imagee, desc }) => {
  return (
    <>
      <BoxKat imge={imagee}>
        <BoxKatOpac>
          <BoxKatExp>{desc}</BoxKatExp>
        </BoxKatOpac>
      </BoxKat>
    </>
  );
};

const BlogHomeBox = ({ image, titlee, desc }) => {
  return (
    <BlogBoxHome>
      <BlogBoxImage img={image} />
      <BlogExpHome title>
        <EllipsisText text={titlee} length={"50"} />
      </BlogExpHome>
      <BlogExpHome>
        <EllipsisText text={desc} length={"150"} />
      </BlogExpHome>
    </BlogBoxHome>
  );
};

export { BoxHarga, KategoriBox, BlogHomeBox, BoxVendorProduct };
