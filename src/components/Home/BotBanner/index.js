import React from "react";
import {BotBanTemp,BannerWrited} from "./BotBannerStyled";
import fotban from "../../../images/botban.png";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";
import bannerBawah from "../../../images/bannerbawah.png";

const BotBanner = () => {
    return(
        <GlobalTemplate>
            <BotBanTemp src={bannerBawah}/>
        </GlobalTemplate>
    )
}

export default BotBanner;