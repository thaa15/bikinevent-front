import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash,TempVendash } from "../VendorDashboardStyled"

const VendorProfileContent = () => {
    return (
        <GlobalTemplate>
            <TempVendash>
                <DashboardSite typeVendash="profile" />
                <MainVendash>
                    HALO
                </MainVendash>
            </TempVendash>
        </GlobalTemplate>
    )
}

export default VendorProfileContent;