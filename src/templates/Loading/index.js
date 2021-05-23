import React from "react";
import {LoadingBg,ImageLoading} from "./LoadingStyled";
import loadinggif from "../../images/loadinggif.gif"

const LoadingPage = () => {
    return(
        <LoadingBg>
            <ImageLoading src={loadinggif} alt="loading"/>
        </LoadingBg>
    )
}

export default LoadingPage;