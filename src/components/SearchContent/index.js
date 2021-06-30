import React,{useState,useContext} from "react";
import ProdukSearch from "./ProdukSearch";
import HeaderSmall from "../../templates/HeaderSmall";
import { searchContext } from "../../context";
import VendorSearch from "./VendorSearch";

const SearchContent = () => {
    const { searched, setSearched } = useContext(searchContext);
    const [produk,setProduk] = useState(true);

    return(
        <>
        <HeaderSmall
        text="Hasil Pencarian "
        searche={`"${searched.searchFill}"`}
        />
            { produk ? (
            <ProdukSearch/>
            ) : (
            <VendorSearch/>
            ) }
        </>
    )
};

export default SearchContent;