import React from "react";
import {BannerContainer} from "./BannerStyled";
import bannerhome from "../../../images/homebanner.png"

const Banner = () => {
    return(
        <BannerContainer src={bannerhome} />
    )
};

export default Banner;