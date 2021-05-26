import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash,TempVendash } from "../VendorDashboardStyled"

const VendorChatContent = () => {
    return (
        <GlobalTemplate>
            <TempVendash>
                <DashboardSite typeVendash="chat" />
                <MainVendash>
                    HALO
                </MainVendash>
            </TempVendash>
        </GlobalTemplate>
    )
}

export default VendorChatContent;