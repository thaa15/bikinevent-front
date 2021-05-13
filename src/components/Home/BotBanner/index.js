import React from "react";
import {BotBanTemp,BannerWrited} from "./BotBannerStyled";
import fotban from "../../../images/botban.png";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";

const BotBanner = () => {
    return(
        <GlobalTemplate>
            <BotBanTemp img={fotban}>
                <BannerWrited>
                <b style={{color:"#E30045"}}>BikinEvent </b> 
                memberikan kemudahan dalam membuat event impian anda dengan aman dan nyaman
                </BannerWrited>
            </BotBanTemp>
        </GlobalTemplate>
    )
}

export default BotBanner;