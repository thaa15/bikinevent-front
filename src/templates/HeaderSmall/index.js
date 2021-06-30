import React from "react";
import {
    HeaderBg,
    HeaderWrited
} from "./HeaderSmallStyled"

const HeaderSmall = ({text,searche}) => {
    return(
        <HeaderBg>
            <HeaderWrited>
                {text} <b>{searche}</b>
            </HeaderWrited>
        </HeaderBg>
    )
};

export default HeaderSmall;