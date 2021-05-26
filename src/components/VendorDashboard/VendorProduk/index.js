import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash,TempVendash } from "../VendorDashboardStyled"

const VendorProdukContent = () => {
    return (
        <GlobalTemplate>
            <TempVendash>
                <DashboardSite typeVendash="produk" />
                <MainVendash>
                    HALO
                </MainVendash>
            </TempVendash>
        </GlobalTemplate>
    )
}

export default VendorProdukContent;