import React, { useState, useContext, useEffect } from "react";
import HeaderSmall from "../../templates/HeaderSmall";
import { searchContext } from "../../context";
import VendorSearch from "./VendorSearch";
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
    UrutanTemp
} from "./Style/ProdukSearchStyled";
import {
    DivPrice,
    PriceLabel,
    Options
} from "../VendorDashboard/VendorProduk/VendorProdukStyled";
import { BoxHarga } from "../../templates/Box";
import LoadingPage from "../../templates/Loading";
import { PopulerData } from "../../datas/populerdata";
import { Kategories } from "../../datas/vendordata";

const SearchContent = () => {
    const { searched, setSearched } = useContext(searchContext);
    const [produk, setProduk] = useState(true);
    const [active, setActive] = useState(false);

    const Pilihan = ["Paling Sesuai", "Terbaru", "Harga Tertinggi", "Harga Terendah"];
    const Location = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];

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
                                        <FilterAside button onClick={() => { setActive(false) }}>
                                            <ButtonCanclled>
                                                X
                                            </ButtonCanclled>
                                        </FilterAside>
                                    </ApartAside>
                                    <BoxAside>

                                        {/*FORM FILTER SIDE BAR*/}
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
                                                <CheckBoks type="checkbox" id="Three Up" name="rating" value="Three Up" />
                                                <LabelCheck for="Three Up">3 ke atas</LabelCheck>
                                            </CheckFlex>
                                            <div style={{ marginBottom: "15px" }} />

                                            <LabelSearch>Kategori</LabelSearch>
                                            {Kategories.map((data, idx) => {
                                                return (
                                                    <>
                                                        <CheckFlex key={idx}>
                                                            <CheckBoks type="checkbox" id={data.cath} name="kategori" value={data.cath} />
                                                            <LabelCheck for={data.cath}>{data.cath}</LabelCheck>
                                                        </CheckFlex>
                                                        {data.subcath.map((item, idx) => {
                                                            return (
                                                                <CheckFlex key={idx}>
                                                                    <CheckBoks type="checkbox" id={item} name="kategori" value={item} sub />
                                                                    <LabelCheck for={item}>{item}</LabelCheck>
                                                                </CheckFlex>
                                                            )
                                                        })}
                                                    </>
                                                )
                                            })}
                                            <ButtonsSearch type="submit">Gunakan Filter</ButtonsSearch>
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
                                                    setProduk(true)
                                                    setSearched({ ...searched, loading: true })
                                                }} aktif>
                                                <Bag aktif />
                                                <TitlePage aktif>Produk</TitlePage>
                                            </ButtonChange>

                                            <Line />

                                            <ButtonChange
                                                onClick={() => {
                                                    setProduk(false)
                                                    setSearched({ ...searched, loading: true })
                                                }}>
                                                <ShopVendor />
                                                <TitlePage>Vendor</TitlePage>
                                            </ButtonChange>
                                        </DivApart>
                                        <DivApart urutan>
                                            <UrutanTemp>
                                                <InputMCQKat
                                                    name="kategori"
                                                >
                                                    {Pilihan.map((data, idx) => (
                                                        <Options value={data} key={idx}>{data}</Options>
                                                    ))}
                                                </InputMCQKat>
                                                <br />
                                                <Urutan>Urutkan</Urutan>
                                            </UrutanTemp>
                                            <FilterNav>
                                                <FilterBox onClick={() => { setActive(true) }}>
                                                    <Sett /> Filter
                                                </FilterBox>
                                            </FilterNav>
                                        </DivApart>
                                    </TopHeader>

                                    <GridTempProduk>
                                        {PopulerData.map((data, idx) => (
                                            <BoxHarga
                                                key={idx}
                                                image={data.image}
                                                city={data.kota}
                                                judul={data.judul}
                                                harga={data.harga}
                                                rate={data.rating}
                                                review={data.ulasan}
                                            />
                                        ))}
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
    )
};

export default SearchContent;