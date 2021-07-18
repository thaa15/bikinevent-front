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

const VendorSearch = ({ vendor, datas, searchResult }) => {
  const { searched, setSearched } = useContext(searchContext);
  const Location = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];
  const [active, setActive] = useState(false);
  const [totalRating, setTotalRating] = useState(0);
  const [getFilter, setGetFilter] = useState(searched.filter);
  const [getRangeFilter, setGetRangeFilter] = useState(searched.rangeFilter);
  const [filteredVendor, setFilteredVendor] = useState([]);
  const [searchedVendor, setSearchedVendor] = useState([]);
  let tempTotal = 0;

  useEffect(() => {
    const filterData = (data) => {
      let filterTemp = data.filter((item) => {
        if (
          item.nama_vendor.toLowerCase().includes(searched.searchFill.toLowerCase())
        ) {
          return item;
        }
      });
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
  console.log(getFilter)

  const useFilterHandler = () => {
    const filterKeys = Object.keys(getFilter);
    let tempProds = searchedVendor;

    if (Object.values(getFilter).some((arr) => arr.length > 0)) {
      tempProds = searchedVendor.filter((product) => {
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
    if (getRangeFilter.rating !== "") {
      tempProds = tempProds.filter((product) => {
        return product.rating > 3;
      });
    }
    setFilteredVendor(tempProds);
    console.log(filteredVendor)
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
                      value="Three Up"
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
                    if (data.comments.length !== 0) {
                      setTimeout(() => {
                        data.comments.forEach((comment) => {
                          tempTotal = tempTotal + comment.rating;
                        });
                        setTotalRating(tempTotal / data.comments.length);
                      }, 1);
                    }
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
                          <VendorPhotos src={data.foto_profil.url} />
                          <GetApart>
                            <BoxsExpVendor titlee>
                              <Shopping />
                              {data.nama_vendor}
                            </BoxsExpVendor>
                            <BoxsExpVendor>
                              <Star />
                              {totalRating} / 5.0 ({data.comments.length} Ulasan)
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
