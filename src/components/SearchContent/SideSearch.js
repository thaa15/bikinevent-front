import React, {useState,useEffect} from "react";
import { OtherSearch } from "./Style/SearchContentStyle";
import {
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
    ButtonCanclled
} from "./Style/ProdukSearchStyled";
import {
    DivPrice,
    PriceLabel,
} from "../VendorDashboard/VendorProduk/VendorProdukStyled";
import { Kategories } from "../../datas/vendordata";

export const SideSearchProduk = ({ act }) => {
    const [actv,setActv] = useState();
    const Location = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"]

    return (
        <OtherSearch aktif={actv}>
            <ApartAside>
                <FilterAside>
                    <TitleAside>Filter</TitleAside>
                </FilterAside>
                <FilterAside button onClick={()=>{setActv(!actv)}}>
                    <ButtonCanclled>
                        X
                    </ButtonCanclled>
                </FilterAside>
            </ApartAside>
            <BoxAside>
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
    )
}

export const SideSearchVendor = ({ act }) => {
    const Location = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"]
    return (
        <OtherSearch aktif={act === true}>
            <ApartAside>
                <FilterAside>
                    <TitleAside>Filter</TitleAside>
                </FilterAside>
                <FilterAside button>
                    X
                </FilterAside>
            </ApartAside>
            <BoxAside>
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
    )
}