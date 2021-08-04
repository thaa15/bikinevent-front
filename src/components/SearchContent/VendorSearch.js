import React, { useEffect, useContext, useState } from "react";
import { searchContext } from "../../context";
import { GlobalTemplate } from "../../templates/GlobalTemplate";
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
  GridTempVendor,
  ShowedVendor,
  VendorPhotos,
  BoxsExpVendor,
  TitleAside,
  BoxAside,
  LabelSearch,
  LabelCheck,
  CheckBoks,
  CheckFlex,
  FilterNav,
  FilterBox,
  Sett,
  ButtonsSearch,
  ResetButton,
  ApartAside,
  FilterAside,
  ButtonCanclled,
} from "./Style/ProdukSearchStyled";
import LoadingPage from "../../templates/Loading";
import {
  GetApart,
  Shopping,
  Star,
} from "../../templates/Tampilan/TampilanStyled";
import { Link } from "react-router-dom";
import { BoxNotEntry } from "../VendorDashboard/VendorPesanan/VendorPesananStyle";
import grey from "../../images/grey.png";

const VendorSearch = ({ vendor, datas, searchResult }) => {
  const { searched, setSearched } = useContext(searchContext);
  const Location = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];
  const [active, setActive] = useState(false);
  const [getFilter, setGetFilter] = useState(searched.filter);
  const [getRangeFilter, setGetRangeFilter] = useState(searched.rangeFilter);
  const [filteredVendor, setFilteredVendor] = useState([]);
  const [searchedVendor, setSearchedVendor] = useState([]);

  useEffect(() => {
    const filterData = (data) => {
      let filterTemp = data.filter((item) => {
        if (
          item.nama_vendor.toLowerCase().includes(searched.searchFill.toLowerCase())
        ) {
          return item;
        }
      });
      setSearched({ ...searched, loading: false });
      setSearchedVendor(filterTemp);
      setFilteredVendor(filterTemp);
    };
    filterData(datas);
  }, [])

  const filterHandler = (e) => {
    e.preventDefault();
    setSearched({
      ...searched,
      filter: getFilter,
      rangeFilter: getRangeFilter,
    });
    setActive(false);
  };

  const useFilterHandler = () => {
    const filterKeys = Object.keys(getFilter);
    let tempProds = searchedVendor;

    if (Object.values(getFilter).some((arr) => arr.length > 0)) {
      tempProds = searchedVendor.filter((vendor) => {
        return filterKeys.some((key) => {
          if (Array.isArray(vendor["location"])) {
            return vendor["location"].some((keyVal) => {
              getFilter[key].includes(keyVal);
            });
          }
          return getFilter[key].some((item) => item.includes(vendor["location"]));
        });
      });
    }
    if (getRangeFilter.rating !== "") {
      tempProds = tempProds.filter((vendor) => {
        let totalUlasan = 0;
        let mean = 0
        const calculateTotalRating = () => {
          let tempTotal = 0;
          vendor.produks.forEach((prod) => {
            prod.penilaian.forEach((ulasan) => {
              tempTotal += ulasan.rating;
              totalUlasan += 1;
            });
          });
          if (totalUlasan == 0) mean = 0;
          else mean = (tempTotal / totalUlasan).toFixed(2);
        }
        calculateTotalRating()
        return parseFloat(mean) > parseFloat(3);
      });
    }
    setFilteredVendor(tempProds);
  };

  return (
    <>
      {searched.loading ? (
        <LoadingPage />
      ) : (
        <GlobalTemplate>
          <TempSearch>
            {/* SIDEBAR */}
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
                {/* FORM VENDOR SIDEBAR*/}
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

                  <LabelSearch>Rating</LabelSearch>
                  <CheckFlex>
                    <CheckBoks
                      type="checkbox"
                      id="Three Up"
                      name="rating"
                      value="3 ke atas"
                      onClick={(e) => {
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

                  <ButtonsSearch
                    type="button"
                    onClick={useFilterHandler}>Gunakan Filter</ButtonsSearch>
                  <ResetButton type="reset" value="Reset"
                    onClick={() => {
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
                    }} />
                </form>
              </BoxAside>
            </OtherSearch>

            {/* MAIN VENDOR */}
            <MainSearch>
              <TopHeader>
                <DivApart>
                  <ButtonChange
                    onClick={() => {
                      vendor(true);
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
                    <Bag />
                    <TitlePage>Produk</TitlePage>
                  </ButtonChange>

                  <Line />

                  <ButtonChange
                    aktif
                    onClick={() => {
                      vendor(false);
                    }}
                  >
                    <ShopVendor aktif />
                    <TitlePage aktif>Vendor</TitlePage>
                  </ButtonChange>
                </DivApart>
                <DivApart>
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
              {filteredVendor.length === 0 ? (
                <BoxNotEntry>"{searchResult}" Tidak Ditemukan Pada Pencarian Vendor!</BoxNotEntry>
              ) : (
                <GridTempVendor>
                  {filteredVendor.map((data, idx) => {
                    let totalUlasan = 0;
                    let mean = 0
                    const calculateTotalRating = () => {
                      let tempTotal = 0;
                      data.produks.forEach((prod) => {
                        prod.penilaian.forEach((ulasan) => {
                          tempTotal += ulasan.rating;
                          totalUlasan += 1;
                        });
                      });
                      if (totalUlasan == 0) mean = 0;
                      else mean = (tempTotal / totalUlasan).toFixed(2);
                    };
                    calculateTotalRating();
                    return (
                      <Link
                        to={`/vendor/${data.id}`}
                        style={{
                          height: "fit-content",
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                      >
                        <ShowedVendor key={idx}>
                          {typeof data.foto_profil == "undefined" ||
                            data.foto_profil == null ? (
                            <VendorPhotos src={grey} />) : (
                            <VendorPhotos src={data.foto_profil.url} />)}

                          <GetApart>
                            <BoxsExpVendor titlee>
                              <Shopping />
                              {data.nama_vendor}
                            </BoxsExpVendor>
                            <BoxsExpVendor>
                              <Star />
                              {(mean)} / 5.0 ({totalUlasan} Ulasan)
                            </BoxsExpVendor>
                            <BoxsExpVendor>{data.location}</BoxsExpVendor>
                          </GetApart>
                        </ShowedVendor>
                      </Link>
                    );
                  })}
                </GridTempVendor>
              )}
            </MainSearch>
          </TempSearch>
        </GlobalTemplate>
      )}
    </>
  );
};

export default VendorSearch;
