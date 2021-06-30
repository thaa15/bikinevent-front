import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import SideSearch from "./SideSearch";
import { MainSearch,TempSearch } from "../SearchContent";
import { 
    TopHeader,
    Bag
} from "./ProdukSearchStyled";

const ProdukSearch = () => {
    return(
        <>
        <GlobalTemplate>
            <TempSearch>
                <SideSearch/>
                <MainSearch>
                    <TopHeader>
                        {/*<div>
                            <Bag/>
                        </div>*/}
                    </TopHeader>
                </MainSearch>
            </TempSearch>
        </GlobalTemplate>
        </>
    )
}

export default ProdukSearch;