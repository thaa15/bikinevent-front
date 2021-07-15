import React from "react";
import {
    BannerContainer,
    BannerContainers
} from "./BannerStyled";
import bannerhome from "../../../images/homebanner.png";

const Banner = () => {
    return (
        <BannerContainers>
            <BannerContainer src={bannerhome} width="1000" height="500"/>
        </BannerContainers>
    )
};

export default Banner;