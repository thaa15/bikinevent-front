import styled from "styled-components";
import {Link} from "react-router-dom";

export const TitleHome = styled.div`
    display: flex;
    flex-basis: 50%;
    flex-direction: ${(props) => props.view ? "row-reverse" : "row"};
    font-weight: ${(props) => props.view ? "600" : "bold"};
    font-size: ${(props) => props.view ? "15px" : "24px"};
    line-height: ${(props) => props.view ? "18px" : "36px"};
    color: ${(props) => props.view ? "#E30045" : "#212B36"};
    margin: 30px 0 25px;
    width:100%;
    @media screen and (max-width: 506px) {
        font-size: ${(props) => props.view ? "12px" : "16px"};
        line-height: ${(props) => props.view ? "14px" : "24px"};
    }
`;

export const ApartView = styled.div`
    display: flex;
    align-self:center;
    align-items:center;
    width:100%;
`;

export const LinkTitle = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: row-reverse;
    width: fit-content;
    margin-left: auto;
    cursor: pointer;
    color: #E30045;
    &:hover,&:active{
        color: #b5073c;
    }
`;