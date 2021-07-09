import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxRowDetailed = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    width: 100%;
    margin: 10px auto;
    align-items:center;
    h6{
        font-size: 18px;
        line-height: 27px;
        color: #212B36;
    }
    p{
        font-size: 14px;
        line-height: 21px;
        color: #212B36;
    }
    @media screen and (max-width: 481px) {
        flex-direction: column;
        column-gap: 0;
        justify-content: center;
        align-self:center;
        h6{
            font-size: 18px;
            line-height: 27px;
            color: #212B36;
            text-align:center;
        }
        p{
            font-size: 14px;
            line-height: 21px;
            color: #212B36;
            text-align:center;
            width: 80%;
            margin: 0 auto;
        }
    }
`;

export const BoxRowReview = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    width: 100%;
    margin: 10px auto;
    h6{
        font-size: 18px;
        line-height: 27px;
        color: #212B36;
    }
    p{
        font-size: 14px;
        line-height: 21px;
        color: #212B36;
    }
    @media screen and (max-width: 634px) {
        flex-direction: column;
        column-gap: 0;
        row-gap: 15px;
    }
`;

export const SubtitleReview = styled.div`
font-size: 14px;
line-height: 21px;
color: #909DAA;
margin-top:3px;
`;

export const ImageDetailed = styled.img`
    width: 168px;
    height: 168px;
    object-fit: cover;
    @media screen and (max-width: 481px) {
        margin: 0 auto 10px;
        width: 250px;
        height: 250px;
    }
`;

export const ImageReview = styled.img`
    width: 148px;
    height: 148px;
    object-fit: cover;
    @media screen and (max-width: 824px) {
        margin: 5px auto;
    }
    @media screen and (max-width: 624px) {
        width: 190px;
        height: 190px;
    }
`;

export const ButtonBottoms = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    background: ${(props) => props.call ? "#FFFFFF" : "#E30045"};
    border-radius: 10px;
    cursor:pointer;
    width: ${(props) => props.need ? "100%" : "221px"};
    border:${(props) => props.call ? "1px solid #E30045" : "none"};
    text-decoration:none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-right: 5px;
    margin-top: 20px;
    margin-bottom: ${(props) => props.need ? "5px" : "0"};
    color: ${(props) => props.call ? "#E30045" : "#FFFFFF"};
    @media screen and (max-width: 606px) {
        margin: 10px 0;
    }
    &:hover {
        background: ${(props) => props.call ? "#f5eded" : "#a3143f"};
    }
    &:active{
        background: ${(props) => props.call ? "#f5eded" : "#c91a4f"};
    }
    @media screen and (max-width: 481px) {
        margin: 10px auto 5px;
    }
`;

export const ButtonBottomss = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    background: ${(props) => props.call ? "#FFFFFF" : "#E30045"};
    border-radius: 10px;
    cursor:pointer;
    width: ${(props) => props.need ? "100%" : "221px"};
    border:${(props) => props.call ? "1px solid #E30045" : "none"};
    text-decoration:none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-right: 5px;
    margin-top: 20px;
    margin-bottom: ${(props) => props.need ? "5px" : "0"};
    color: ${(props) => props.call ? "#E30045" : "#FFFFFF"};
    @media screen and (max-width: 606px) {
        margin: 10px 0;
    }
    &:hover {
        background: ${(props) => props.call ? "#f5eded" : "#a3143f"};
    }
    &:active{
        background: ${(props) => props.call ? "#f5eded" : "#c91a4f"};
    }
    @media screen and (max-width: 481px) {
        margin: 10px auto 5px;
    }
`;

export const LabelDetailTrack = styled.div`
    margin: 20px 0 3px;
    font-size: 12px;
    line-height: 18px;
    color: #909DAA;
`;

export const ContentDetailTrack = styled.div`
    font-weight: ${(props) => props.status ? "bold" : "normal"};
    font-size: 15px;
    line-height: 21px;
    color: ${(props) => props.invoice ? "#E30045" : "#212B36"};
`;

export const EmailWrited = styled.div`
font-size: 15px;
line-height: 21px;
margin: 5px 0 25px;
color: #212B36;
span{
    color: #E30045;
}
`;

export const ReviewBg = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    width: 60%;
    max-height: 512px;
    overflow-Y: scroll;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.4);
    -webkit-animation: anvil 1s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    animation: anvil 1s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    ::-webkit-scrollbar{
        width: 8px;
    }
      
    ::-webkit-scrollbar-thumb{
        background: rgba(158, 158, 158,0.6);
        border-radius: 10px;
    }
      
    ::-webkit-scrollbar-thumb:hover{
        background: rgba(158, 158, 158,0.9);
    }
    @media screen and (max-width: 1031px) {
        width: 90%;
    }
`;