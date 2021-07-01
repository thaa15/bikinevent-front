import React, { useEffect, useContext, useState } from "react";
import { searchContext } from "../../context";
import { GlobalTemplate } from "../../templates/GlobalTemplate";
import { MainSearch, TempSearch, OtherSearch } from "./Style/SearchContentStyle";
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
    ButtonCanclled
} from "./Style/ProdukSearchStyled";
import LoadingPage from "../../templates/Loading";
import { PopulerData } from "../../datas/populerdata";
import {
    GetApart,
    Shopping,
    Star,
} from "../../templates/Tampilan/TampilanStyled";
import { Link } from "react-router-dom";

const VendorSearch = ({ vendor }) => {
    const { searched, setSearched } = useContext(searchContext);
    const Location = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSearched({ ...searched, loading: false });
        }, 1000)
    }, [searched.loading])
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
                                <FilterAside button onClick={() => { setActive(false) }}>
                                    <ButtonCanclled>
                                        X
                                    </ButtonCanclled>
                                </FilterAside>
                            </ApartAside>
                            <BoxAside>

                                {/* FORM VENDOR SIDEBAR*/}
                                <form>
                                    <LabelSearch>Lokasi</LabelSearch>
                                    {Location.map((data, idx) => {
                                        return (
                                            <CheckFlex key={idx}>
                                                <CheckBoks type="checkbox" id={data} name="location" value={data} />
                                                <LabelCheck for={data}>{data}</LabelCheck>
                                            </CheckFlex>
                                        )
                                    })}
                                    <div style={{ marginBottom: "15px" }} />

                                    <LabelSearch>Rating</LabelSearch>
                                    <CheckFlex>
                                        <CheckBoks type="checkbox" id="Three Up" name="rating" value="Three Up" />
                                        <LabelCheck for="Three Up">3 ke atas</LabelCheck>
                                    </CheckFlex>
                                    <div style={{ marginBottom: "15px" }} />

                                    <ButtonsSearch type="submit">Gunakan Filter</ButtonsSearch>
                                    <ResetButton type="reset" value="Reset" />
                                </form>
                            </BoxAside>
                        </OtherSearch>

                        {/* MAIN VENDOR */}
                        <MainSearch>
                            <TopHeader>
                                <DivApart>
                                    <ButtonChange
                                        onClick={() => {
                                            vendor(true)
                                            setSearched({ ...searched, loading: true })
                                        }}>
                                        <Bag />
                                        <TitlePage>Produk</TitlePage>
                                    </ButtonChange>

                                    <Line />

                                    <ButtonChange aktif onClick={() => { vendor(false) }}>
                                        <ShopVendor aktif />
                                        <TitlePage aktif>Vendor</TitlePage>
                                    </ButtonChange>
                                </DivApart>
                                <DivApart>
                                    <FilterNav>
                                        <FilterBox onClick={() => { setActive(true) }}>
                                            <Sett /> Filter
                                        </FilterBox>
                                    </FilterNav>
                                </DivApart>
                            </TopHeader>

                            <GridTempVendor>
                                {PopulerData.map((data, idx) => {
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
                                                <VendorPhotos src={data.image} />
                                                <GetApart>
                                                    <BoxsExpVendor titlee>
                                                        <Shopping />
                                                        {data.vendor}
                                                    </BoxsExpVendor>
                                                    <BoxsExpVendor>
                                                        <Star />
                                                        {data.rating} / 5.0 ({data.ulasanvendor} Ulasan)
                                                    </BoxsExpVendor>
                                                    <BoxsExpVendor>
                                                        {data.kota}
                                                    </BoxsExpVendor>
                                                </GetApart>
                                            </ShowedVendor>
                                        </Link>
                                    )
                                })}
                            </GridTempVendor>

                        </MainSearch>
                    </TempSearch>
                </GlobalTemplate>

            )}
        </>
    )
};

export default VendorSearch;