import React from "react";
import {
    HeaderBg,
    HeaderWrited
} from "./HeaderSmallStyled"

const HeaderSmall = ({text}) => {
    return(
        <HeaderBg>
            <HeaderWrited>
                {text}
            </HeaderWrited>
        </HeaderBg>
    )
};

export default HeaderSmall;