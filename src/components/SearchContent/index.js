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
import { PopulerData } from "../../datas/populerdata";
import { BoxHarga } from "../../templates/Box";
import LoadingPage from "../../templates/Loading";
import { Kategories } from "../../datas/vendordata";
import { productService } from "../../services/Product";

const SearchContent = () => {
  const { searched, setSearched } = useContext(searchContext);
  const [produk, setProduk] = useState(true);
  const [active, setActive] = useState(false);
  const [productData, setProductData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await productService.getAllProduct();
      const data = response.data;
      setProductData(data);
    };
    fetchData();
    const filterData = (data) => {
      let filterTemp = data.filter((item) => {
        if (item.nama.includes(searched.searchFill)) {
          return item;
        }
      });
      setFiltered(filterTemp);
    };
    filterData(productData);
    setTimeout(() => {
      setSearched({ ...searched, loading: false });
    }, 1000);
  }, [searched.loading]);
  console.log(filtered);

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
                    <form>
                      <LabelSearch>Lokasi</LabelSearch>
                      {Location.map((data, idx) => {
                        return (
                          <CheckFlex key={idx}>
                            <CheckBoks
                              type="checkbox"
                              id={data}
                              name="location"
                              value={data}
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
                        />
                      </DivPrice>
                      <div style={{ marginBottom: "15px" }} />

                      <LabelSearch>Rating</LabelSearch>
                      <CheckFlex>
                        <CheckBoks
                          type="checkbox"
                          id="Three Up"
                          name="rating"
                          value="Three Up"
                        />
                        <LabelCheck for="Three Up">3 ke atas</LabelCheck>
                      </CheckFlex>
                      <div style={{ marginBottom: "15px" }} />

                      <LabelSearch>Kategori</LabelSearch>
                      {Kategories.map((data, idx) => {
                        return (
                          <>
                            <CheckFlex key={idx}>
                              <CheckBoks
                                type="checkbox"
                                id={data.cath}
                                name="kategori"
                                value={data.cath}
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
                                    name="kategori"
                                    value={item}
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

                  <GridTempProduk>
                    {filtered.map((data, idx) => {
                      return (
                        <Link
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
