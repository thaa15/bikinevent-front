import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash,TempVendash } from "../VendorDashboardStyled"

const VendorKeuanganContent = () => {
    return (
        <GlobalTemplate>
            <TempVendash>
                <DashboardSite typeVendash="keuangan" />
                <MainVendash>
                    HALO
                </MainVendash>
            </TempVendash>
        </GlobalTemplate>
    )
}

export default VendorKeuanganContent;