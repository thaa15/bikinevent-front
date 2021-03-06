import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  ButtonDelete,
  Trash,
} from "./BoxStyled";
import EllipsisText from "react-ellipsis-text";
import { productService } from "../../services/Product";
import { loginContext } from "../../context";
import {
  PopBgSuccess,
  BgSuccess,
  Succesicon,
} from "../../templates/GlobalTemplate";
import { Kategories } from "../../datas/vendordata";
import { searchContext } from "../../context";

const BoxHarga = ({ image, city, judul, harga, rate, review }) => {
  const [rates, setRates] = useState(rate);
  const [handles, setHandles] = useState(false);

  useEffect(() => {
    if (rates === undefined) setRates(0);
    else setRates(rate);

    if (harga.length > 11) setHandles(true);
  }, [rate]);
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
            <Price handle={handles}>Rp{parseInt(harga).toLocaleString("id-ID")}</Price>
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
  const [prices, setPrices] = useState(harga.toLocaleString("id-ID"));
  const [handles, setHandles] = useState(false);
  const [loginUser, setLoginUser] = useState({
    tampil: false,
    hapus: false
  });

  useEffect(() => {
    if (prices.length > 11) setHandles(true);
  }, []);

  const changeHandler = async () => {
    setLoginUser({ ...loginUser, tampil: true });
    if (statss === "Arsipkan") {
      const body = {
        isArchived: true,
      };
      const response = await productService.editProductById(
        id,
        loginInfo.token,
        body
      );
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
      setLoginUser({ ...loginUser, tampil: false });
      window.location.reload();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
  };

  const deleteProduct = async () => {
    setLoginUser({ ...loginUser, hapus: true });
    const response = await productService.deleteProductById(
      id,
      loginInfo.token
    );
    const data = response.data;
    setTimeout(() => {
      setLoginUser({ ...loginUser, hapus: false });
      window.location.reload();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
    return response;
  };

  return (
    <>
      <BoxedVendor>
        <BoxImage img={image} />
        <ApartVendor ars={statss !== "Arsipkan"}>
          <div style={{ flexBasis: "60%" }}>
            <BoxExp titlee>
              <EllipsisText text={judul} length={"35"} />
            </BoxExp>
          </div>
          <Price handle={handles}>Rp{prices}</Price>
          <ApartButton>
            <a href={`/changed-product/${id}`} 
            style={{display:"block",width:"50%",textDecoration:"none"}}
            >
              <ButtonVendor ubah changed>Ubah</ButtonVendor>
            </a>
            <ButtonVendor onClick={changeHandler}>{statss}</ButtonVendor>
          </ApartButton>

          {statss !== "Arsipkan" ? (
            <ButtonDelete onClick={deleteProduct}>
              <Trash />
            </ButtonDelete>
          ) : (
            <></>
          )}
        </ApartVendor>
        {loginUser.tampil ? (
          <PopBgSuccess>
            <BgSuccess aktif={loginUser.tampil === true} right>
              <Succesicon />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <b>SUCCESS</b>
                Produk Berhasil Di"{statss}"
              </div>
            </BgSuccess>
          </PopBgSuccess>
        ) : loginUser.hapus ? (
          <PopBgSuccess>
            <BgSuccess aktif={loginUser.hapus === true} right>
              <Succesicon />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <b>SUCCESS</b>
                Produk Berhasil Dihapuskan
              </div>
            </BgSuccess>
          </PopBgSuccess>
        ) : (
          <></>
        )}
      </BoxedVendor>
    </>
  );
};


const KategoriBox = ({ imagee, desc }) => {
  let history = useHistory();
  const { searched, setSearched } = useContext(searchContext);

  return (
    <BoxKat src={imagee}
      onClick={() => {
        setSearched({
          rangeFilter: {
            hargaMin: "",
            hargaMax: "",
            rating: "",
          },
          filter: {
            lokasi: [],
            subcategory: [Kategories.find(item => item.cath === desc).subcath],
          },
          fromFilter: true,
          searchFill: `Produk Kategori ${desc}`,
          loading: true
        });

        history.push({
          pathname: "/searched",
        });
      }}
    >
      <BoxKatOpac>
        <BoxKatExp>{desc}</BoxKatExp>
      </BoxKatOpac>
    </BoxKat>
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
