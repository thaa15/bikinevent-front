import React, { useState, useContext, useEffect } from "react";
import HeaderSmall from "../../templates/HeaderSmall";
import { searchContext } from "../../context";
import VendorSearch from "./VendorSearch";
import { GlobalTemplate } from "../../templates/GlobalTemplate";
import { Link } from "react-router-dom";
import {
  MainSearch,
  TempSearch,
  OtherSearch,
} from "./Style/SearchContentStyle";
import {
  TopHeader,
  Bag,
  TitlePage,
  DivApart,
  ButtonChange,
  Line,
  ShopVendor,
  Urutan,
  InputMCQKat,
  GridTempProduk,
  FilterNav,
  FilterBox,
  Sett,
  TitleAside,
  BoxAside,
  LabelSearch,
  LabelCheck,
  CheckBoks,
  CheckFlex,
  InputModif,
  ButtonsSearch,
  ResetButton,
  ApartAside,
  FilterAside,
  ButtonCanclled,
  UrutanTemp,
} from "./Style/ProdukSearchStyled";
import {
  DivPrice,
  PriceLabel,
  Options,
} from "../VendorDashboard/VendorProduk/VendorProdukStyled";
import { BoxHarga } from "../../templates/Box";
import LoadingPage from "../../templates/Loading";
import { Kategories } from "../../datas/vendordata";
import { productService } from "../../services/Product";
import { BoxNotEntry } from "../VendorDashboard/VendorPesanan/VendorPesananStyle";
import { ImLocation2 } from "react-icons/im";
import { IoLogoDropbox } from "react-icons/io";

const SearchContent = () => {
  const { searched, setSearched } = useContext(searchContext);
  const [checkSubcath, setCheckSubcath] = useState([-1, -1]);
  const [produk, setProduk] = useState(true);
  const [checkliststable, setCheckliststable] = useState([false, false, false, false, false, false]);
  const [active, setActive] = useState(false);
  const [getFilter, setGetFilter] = useState(searched.filter)
  const [productData, setProductData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  console.log(getFilter);

  const filterHandler = (e) => {
    e.preventDefault();
    setSearched({ ...searched, filter: getFilter });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await productService.getAllProduct();
      const data = response.data;
      setProductData(data);
      setSearched({ ...searched, loading: false });
    };
    fetchData();
    const filterData = (data) => {
      let filterTemp = data.filter((item) => {
        if (
          item.nama.toLowerCase().includes(searched.searchFill.toLowerCase())
        ) {
          return item;
        }
      });
      setFiltered(filterTemp);
    };
    filterData(productData);
  }, [searched.loading]);

  const Pilihan = [
    "Paling Sesuai",
    "Terbaru",
    "Harga Tertinggi",
    "Harga Terendah",
  ];
  const Location = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];
  return (
    <>
      {searched.loading ? (
        <LoadingPage />
      ) : (
        <>
          <HeaderSmall
            text="Hasil Pencarian "
            searche={`"${searched.searchFill}"`}
          />
          {produk ? (
            <GlobalTemplate>
              <TempSearch>
                {/*SIDE BAR */}
                <OtherSearch aktif={active}>
                  <ApartAside>
                    <FilterAside>
                      <TitleAside>Filter</TitleAside>
                    </FilterAside>
                    <FilterAside
                      button
                      onClick={() => {
                        setActive(false);
                      }}
                    >
                      <ButtonCanclled>X</ButtonCanclled>
                    </FilterAside>
                  </ApartAside>
                  <BoxAside>
                    {/*FORM FILTER SIDE BAR*/}
                    <form onSubmit={filterHandler}>
                      <LabelSearch>Lokasi</LabelSearch>
                      {Location.map((data, idx) => {
                        return (
                          <CheckFlex key={idx}>
                            <CheckBoks
                              type="checkbox"
                              id={data}
                              name="location"
                              value={data}
                              onClick={(e) => {
                                let arrWithObject = [];
                                let arrWithArr = [...getFilter.location];
                                if (e.target.checked) {
                                  arrWithObject.push(e.target.value)
                                  arrWithArr.push(arrWithObject)
                                } else arrWithArr.splice(arrWithArr.findIndex((elemen) => elemen == e.target.value), 1);

                                setGetFilter({ ...getFilter, location: arrWithArr })
                              }}
                            />
                            <LabelCheck for={data}>{data}</LabelCheck>
                          </CheckFlex>
                        );
                      })}
                      <div style={{ marginBottom: "15px" }} />

                      <LabelSearch>Harga</LabelSearch>
                      <DivPrice>
                        <PriceLabel>Rp</PriceLabel>
                        <InputModif
                          harga
                          type="number"
                          placeholder="Harga Minimum"
                          name="priceMin"
                          onChange={(e) => {
                            setGetFilter({ ...getFilter, hargaMin: e.target.value })
                          }}
                        />
                      </DivPrice>
                      <div style={{ marginBottom: "5px" }} />
                      <DivPrice>
                        <PriceLabel>Rp</PriceLabel>
                        <InputModif
                          harga
                          type="number"
                          placeholder="Harga Maksimum"
                          name="priceMaks"
                          onChange={(e) => {
                            setGetFilter({ ...getFilter, hargaMax: e.target.value })
                          }}
                        />
                      </DivPrice>
                      <div style={{ marginBottom: "15px" }} />

                      <LabelSearch>Rating</LabelSearch>
                      <CheckFlex>
                        <CheckBoks
                          type="checkbox"
                          id="Three Up"
                          name="rating"
                          value="3 ke atas"
                          onChange={(e) => {
                            if (e.target.checked) setGetFilter({ ...getFilter, rating: e.target.value })
                            else setGetFilter({ ...getFilter, rating: "" });
                          }}
                        />
                        <LabelCheck for="Three Up">3 ke atas</LabelCheck>
                      </CheckFlex>
                      <div style={{ marginBottom: "15px" }} />

                      <LabelSearch>Kategori</LabelSearch>
                      {Kategories.map((data, ids) => {
                        return (
                          <>
                            <CheckFlex key={ids}>
                              <CheckBoks
                                type="checkbox"
                                id={ids}
                                name="kategori"
                                value={data.cath}
                                onClick={(e) => {
                                  let arrWithObject = data.subcath;
                                  let arrWithArr = [...getFilter.kategori];
                                  if (e.target.checked) {
                                    arrWithArr.push(arrWithObject);
                                    setCheckliststable(old => [...old.slice(0, ids), true, ...old.slice(ids + 1, checkliststable.length + 1)])
                                  } else if (!e.target.checked) {
                                    arrWithArr.splice(arrWithArr.findIndex((elemen) => elemen === data.subcath), 1);
                                    setCheckliststable(old => [...old.slice(0, ids), false, ...old.slice(ids + 1, checkliststable.length + 1)])
                                  };
                                  setGetFilter({ ...getFilter, kategori: arrWithArr })
                                }}
                              />
                              <LabelCheck for={data.cath}>
                                {data.cath}
                              </LabelCheck>
                            </CheckFlex>
                            {data.subcath.map((item, idx) => {
                              return (
                                <CheckFlex key={idx}>
                                  <CheckBoks
                                    type="checkbox"
                                    id={item}
                                    name={ids}
                                    value={item}
                                    onClick={(e) => {
                                      let arrWithObjects = [];
                                      let arrWithArr = [...getFilter.kategori];
                                      if (e.target.checked) {
                                        arrWithObjects.push(e.target.value)
                                        arrWithArr.push(arrWithObjects)
                                        setCheckSubcath([idx, ids])
                                      } else if (checkliststable[ids] === false) {
                                        arrWithArr.splice(arrWithArr.findIndex((elemen) => elemen == e.target.value), 1)
                                        setCheckSubcath([-1, -1])
                                      };

                                      setGetFilter({ ...getFilter, kategori: arrWithArr })
                                    }}
                                    checked={checkliststable[ids] || (checkSubcath[0] === idx && checkSubcath[1] === ids)}
                                    sub
                                  />
                                  <LabelCheck for={item}>{item}</LabelCheck>
                                </CheckFlex>
                              );
                            })}
                          </>
                        );
                      })}
                      <ButtonsSearch type="submit">
                        Gunakan Filter
                      </ButtonsSearch>
                      <ResetButton type="reset" value="Reset" />
                    </form>
                  </BoxAside>
                </OtherSearch>

                {/*MAIN CONTENT*/}
                <MainSearch>
                  <TopHeader>
                    <DivApart>
                      <ButtonChange
                        onClick={() => {
                          setProduk(true);
                          setSearched({ ...searched, loading: true });
                        }}
                        aktif
                      >
                        <Bag aktif />
                        <TitlePage aktif>Produk</TitlePage>
                      </ButtonChange>

                      <Line />

                      <ButtonChange
                        onClick={() => {
                          setProduk(false);
                          setSearched({ ...searched, loading: true });
                        }}
                      >
                        <ShopVendor />
                        <TitlePage>Vendor</TitlePage>
                      </ButtonChange>
                    </DivApart>
                    <DivApart urutan>
                      <UrutanTemp>
                        <InputMCQKat name="kategori">
                          {Pilihan.map((data, idx) => (
                            <Options value={data} key={idx}>
                              {data}
                            </Options>
                          ))}
                        </InputMCQKat>
                        <br />
                        <Urutan>Urutkan</Urutan>
                      </UrutanTemp>
                      <FilterNav>
                        <FilterBox
                          onClick={() => {
                            setActive(true);
                          }}
                        >
                          <Sett /> Filter
                        </FilterBox>
                      </FilterNav>
                    </DivApart>
                  </TopHeader>
                  {filtered.length === 0 ? (
                    <BoxNotEntry>
                      "{searched.searchFill}" Tidak Ditemukan!
                    </BoxNotEntry>
                  ) : (
                    <GridTempProduk>
                      {filtered.map((data, idx) => {
                        return (
                          <Link
                            onClick={() =>
                              setSearched({ ...searched, loading: true })
                            }
                            to={`/detailed-product/${data.id}`}
                            style={{
                              height: "fit-content",
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                          >
                            <BoxHarga
                              key={idx}
                              image={data.foto_produk[0].url}
                              city={data.lokasi}
                              judul={data.nama}
                              harga={data.harga}
                              rate={data.rating}
                              review={data.penilaian.length}
                            />
                          </Link>
                        );
                      })}
                    </GridTempProduk>
                  )}
                </MainSearch>
              </TempSearch>
            </GlobalTemplate>
          ) : (
            <>
              {/*BUAT VENDOR*/}
              <VendorSearch vendor={setProduk} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchContent;
