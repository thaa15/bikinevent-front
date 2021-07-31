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
import { vendorService } from "../../services/Vendor";

const SearchContent = () => {
  const { searched, setSearched } = useContext(searchContext);
  const [checkSubcath, setCheckSubcath] = useState([
    [false, false, false, false, false, false, false, false],
    [false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false],
  ]);
  const [produk, setProduk] = useState(true);
  const [checkliststable, setCheckliststable] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [active, setActive] = useState(false);
  const [getFilter, setGetFilter] = useState(searched.filter);
  const [getRangeFilter, setGetRangeFilter] = useState(searched.rangeFilter);
  const [productData, setProductData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchedVendor, setSearchedVendor] = useState([]);
  const [stableLocation, setStableLocation] = useState(false);

  const filterHandler = (e) => {
    e.preventDefault();
    setSearched({
      ...searched,
      filter: getFilter,
      rangeFilter: getRangeFilter,
    });
    setActive(false);
  };

  useEffect(() => {
    //fetch and filter product
    const fetchData = async () => {
      const response = await productService.getAllProduct();
      const data = response.data;
      setProductData(data);
      setSearched({ ...searched, loading: false });
    };
    fetchData();

    if (searched.fromFilter == false) {
      const filterData = (data) => {
        let filterTemp = data.filter((item) => {
          if (
            item.nama.toLowerCase().includes(searched.searchFill.toLowerCase())
          ) {
            return item;
          }
        });
        setSearchedProduct(filterTemp);
        setFilteredProduct(filterTemp);
      };
      setGetFilter({
        subcategory: [],
        lokasi: [],
      });
      filterData(productData);
    } else {
      setGetFilter(searched.filter);
      setCheckliststable([false, false, false, false, false, false]);

      const filterFrom = (data) => {
        const filterKeys = Object.keys(data);
        let tempProds = productData;

        if (Object.values(data).some((arr) => arr.length > 0)) {
          tempProds = productData.filter((product) => {
            return filterKeys.some((key) => {
              if (Array.isArray(product[key])) {
                return product[key].some((keyVal) => {
                  data[key].includes(keyVal);
                });
              }
              return data[key].some((item) => item.includes(product[key]));
            });
          });
        }
        setFilteredProduct(tempProds);
        setSearchedProduct(tempProds);
      };
      filterFrom(searched.filter);
    }
    //fetch and filter vendor
    const fetchVendors = async () => {
      const response = await vendorService.getAllVendor();
      const data = response.data;
      setVendorData(data);
    };
    fetchVendors();
    const filterVendor = (data) => {
      let filterTemp = data.filter((item) => {
        if (
          item.nama_vendor
            .toLowerCase()
            .includes(searched.searchFill.toLowerCase())
        ) {
          return item;
        }
      });
      setSearchedVendor(filterTemp);
    };
    filterVendor(vendorData);
  }, [searched.loading]);

  const Pilihan = [
    "Paling Sesuai",
    "Terbaru",
    "Harga Tertinggi",
    "Harga Terendah",
  ];
  const Location = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];

  const useFilterHandler = () => {
    const filterKeys = Object.keys(getFilter);
    let tempProds = searchedProduct;
    if (Object.values(getFilter).some((arr) => arr.length > 0)) {
      if (searched.fromFilter === true && stableLocation === false) {
        tempProds = searchedProduct.filter((product) => {
          return filterKeys.some((key) => {
            if (Array.isArray(product["lokasi"])) {
              return product["lokasi"].some((keyVal) => {
                getFilter["lokasi"].includes(keyVal);
              });
            }

            return getFilter["lokasi"].some((item) =>
              item.includes(product["lokasi"])
            );
          });
        });
      } else if (searched.fromFilter === false || stableLocation === true) {
        tempProds = searchedProduct.filter((product) => {
          return filterKeys.some((key) => {
            if (Array.isArray(product[key])) {
              return product[key].some((keyVal) => {
                getFilter[key].includes(keyVal);
              });
            }

            return getFilter[key].some((item) => item.includes(product[key]));
          });
        });
      }
      setStableLocation(false);
    }
    if (getRangeFilter.hargaMin !== "" && getRangeFilter.hargaMax !== "") {
      tempProds = tempProds.filter((product) => {
        return (
          parseInt(product.harga) > parseInt(getRangeFilter.hargaMin) &&
          parseInt(product.harga) < parseInt(getRangeFilter.hargaMax)
        );
      });
    }
    if (getRangeFilter.rating !== "") {
      tempProds = tempProds.filter((product) => {
        return product.rating > 3;
      });
    }
    setFilteredProduct(tempProds);
  };

  const checkHandler = (row, state, idx) => {
    const arrRow = [8, 4, 6, 9, 5, 3];
    let newArrs = [...checkSubcath];
    newArrs[row][idx] = state;
    setCheckSubcath(newArrs);
  };

  // sort products
  const sortProducts = (category) => {
    let filtered = [];
    if (category === "Paling Sesuai") {
      filtered = searchedProduct;
    } else if (category === "Terbaru") {
      filtered = searchedProduct.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    } else if (category === "Harga Tertinggi") {
      filtered = searchedProduct.sort((a, b) => {
        return parseInt(b.harga) - parseInt(a.harga);
      });
    } else {
      filtered = searchedProduct.sort((a, b) => {
        return parseInt(a.harga) - parseInt(b.harga);
      });
    }
    console.log(filtered);
    setFilteredProduct(filtered);
  };
  console.log("prod", filteredProduct);

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
                                let arrWithArr = [...getFilter.lokasi];
                                if (e.target.checked) {
                                  arrWithObject.push(e.target.value);
                                  arrWithArr.push(arrWithObject);
                                } else
                                  arrWithArr.splice(
                                    arrWithArr.findIndex(
                                      (elemen) => elemen == e.target.value
                                    ),
                                    1
                                  );

                                setGetFilter({
                                  ...getFilter,
                                  lokasi: arrWithArr,
                                });
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
                          autocomplete="off"
                          type="text"
                          placeholder="Harga Minimum"
                          name="priceMin"
                          lang="id"
                          value={getRangeFilter.hargaMin}
                          onChange={(e) => {
                            let regexp = /^[0-9\b]+$/;
                            if (
                              e.target.value === "" ||
                              regexp.test(e.target.value)
                            ) {
                              setGetRangeFilter({
                                ...getRangeFilter,
                                hargaMin: e.target.value,
                              });
                            }
                          }}
                        />
                      </DivPrice>
                      <div style={{ marginBottom: "5px" }} />
                      <DivPrice>
                        <PriceLabel>Rp</PriceLabel>
                        <InputModif
                          harga
                          type="text"
                          lang="id"
                          autocomplete="off"
                          placeholder="Harga Maksimum"
                          name="priceMaks"
                          value={getRangeFilter.hargaMax}
                          onChange={(e) => {
                            let regexp = /^[0-9\b]+$/;
                            if (
                              e.target.value === "" ||
                              regexp.test(e.target.value)
                            ) {
                              setGetRangeFilter({
                                ...getRangeFilter,
                                hargaMax: e.target.value,
                              });
                            }
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
                            if (e.target.checked)
                              setGetRangeFilter({
                                ...getRangeFilter,
                                rating: e.target.value,
                              });
                            else
                              setGetRangeFilter({
                                ...getRangeFilter,
                                rating: "",
                              });
                          }}
                        />
                        <LabelCheck for="Three Up">3 ke atas</LabelCheck>
                      </CheckFlex>
                      <div style={{ marginBottom: "15px" }} />

                      {searched.fromFilter ? (
                        <></>
                      ) : (
                        <>
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
                                      let arrWithArr = [
                                        ...getFilter.subcategory,
                                      ];
                                      if (e.target.checked) {
                                        arrWithArr.push(arrWithObject);
                                        setCheckliststable((old) => [
                                          ...old.slice(0, ids),
                                          true,
                                          ...old.slice(
                                            ids + 1,
                                            checkliststable.length + 1
                                          ),
                                        ]);
                                      } else if (!e.target.checked) {
                                        arrWithArr.splice(
                                          arrWithArr.findIndex(
                                            (elemen) => elemen === data.subcath
                                          ),
                                          1
                                        );
                                        setCheckliststable((old) => [
                                          ...old.slice(0, ids),
                                          false,
                                          ...old.slice(
                                            ids + 1,
                                            checkliststable.length + 1
                                          ),
                                        ]);
                                      }
                                      setGetFilter({
                                        ...getFilter,
                                        subcategory: arrWithArr,
                                      });
                                    }}
                                    checked={checkliststable[ids]}
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
                                          let arrWithArr = [
                                            ...getFilter.subcategory,
                                          ];
                                          if (e.target.checked) {
                                            checkHandler(ids, true, idx);
                                            arrWithObjects.push(e.target.value);
                                            arrWithArr.push(arrWithObjects);
                                          } else if (
                                            checkliststable[ids] === false
                                          ) {
                                            checkHandler(ids, false, idx);
                                            arrWithArr.splice(
                                              arrWithArr.findIndex(
                                                (elemen) =>
                                                  elemen == e.target.value
                                              ),
                                              1
                                            );
                                          }

                                          setGetFilter({
                                            ...getFilter,
                                            subcategory: arrWithArr,
                                          });
                                        }}
                                        checked={
                                          checkliststable[ids] ||
                                          checkSubcath[ids][idx]
                                        }
                                        sub
                                      />
                                      <LabelCheck for={item}>{item}</LabelCheck>
                                    </CheckFlex>
                                  );
                                })}
                              </>
                            );
                          })}
                        </>
                      )}
                      <ButtonsSearch type="submit" onClick={useFilterHandler}>
                        Gunakan Filter
                      </ButtonsSearch>
                      <ResetButton
                        type="reset"
                        value="Reset"
                        onClick={() => {
                          if (searched.fromFilter) {
                            setGetFilter({
                              ...getFilter,
                              lokasi: [],
                            });
                          } else {
                            setGetFilter({
                              subcategory: [],
                              lokasi: [],
                            });
                          }
                          setStableLocation(true);

                          setGetRangeFilter({
                            hargaMin: "",
                            hargaMax: "",
                            rating: "",
                          });

                          setSearched({
                            ...searched,
                            filter: getFilter,
                            rangeFilter: getRangeFilter,
                          });

                          setCheckliststable([
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                          ]);

                          setCheckSubcath([
                            [
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                            ],
                            [false, false, false, false],
                            [false, false, false, false, false, false],
                            [
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                            ],
                            [false, false, false, false, false],
                            [false, false, false],
                          ]);
                        }}
                      />
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
                          setGetFilter({
                            subcategory: [],
                            lokasi: [],
                          });

                          setGetRangeFilter({
                            hargaMin: "",
                            hargaMax: "",
                            rating: "",
                          });

                          setSearched({
                            ...searched,
                            filter: getFilter,
                            rangeFilter: getRangeFilter,
                          });
                        }}
                      >
                        <ShopVendor />
                        <TitlePage>Vendor</TitlePage>
                      </ButtonChange>
                    </DivApart>
                    <DivApart urutan>
                      <UrutanTemp>
                        <InputMCQKat
                          name="kategori"
                          onChange={(e) => {
                            sortProducts(e.target.value);
                          }}
                        >
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
                  {filteredProduct.length === 0 ? (
                    <BoxNotEntry>
                      "{searched.searchFill}" Tidak Ditemukan Pada Pencarian
                      Produk!
                    </BoxNotEntry>
                  ) : (
                    <GridTempProduk>
                      {filteredProduct.map((data, idx) => {
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
              <VendorSearch
                vendor={setProduk}
                datas={searchedVendor}
                searchResult={searched.searchFill}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchContent;
