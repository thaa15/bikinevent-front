import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBg = styled.div`
    height: 60px;
    padding: 15px 0;
    width: 100%;
    background-color: #F9FAFB;
`;

export const HeaderBgPembeli = styled.div`
    display: ${(props) => props.step ? "flex" : "block"};
    flex-direction: ${(props) => props.step ? "column" : "none"};
    justify-content: center;
    min-height: 370px;
    padding: 20px 0;
    width: 100%;
    background-color: #F9FAFB;
`;

export const HeaderWrited = styled.div`
    max-width: 80%;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: #212B36;
    margin: 0 auto;
    span{
        font-weight: 750;
        color: #E30045;
    }
`;

export const TitleHeader = styled.h4`
    font-size: 30px;
    color: #212B36;
    margin: 15px 0;
    @media screen and (max-width: 503px) {
        font-size: 24px;
    }
`;

export const PartSubTitle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 50px;
    align-items: center;
    @media screen and (max-width: 906px) {
        flex-direction: column;
    }
`;

export const SubTitle = styled.p`
    font-size: 14px;
    line-height: 21px;
    color: #909DAA;
    width: 100%;
`;

export const ButtonPart = styled.div`
    flex-direction: row-reverse;
    display: flex;
    width:100%;
    @media screen and (max-width: 906px) {
        flex-direction: row;
        margin: 5px;
    }
`;

export const BackHome = styled(Link)`
    border: 1px solid #E30045;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 8px;
    font-weight: 500;
    text-decoration: none;
    outline: none;
    font-size: 14px;
    line-height: 21px;
    color: #E30045;
    &:hover{
        background: #E30045;
        color: white;
    }
`;

export const StepBg = styled.div`
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 9px;
    width: 100%;
    min-height: 55px;
`;

export const StepWrited = styled.div`
    font-size: 18px;
    line-height: 27px;
    color: ${(props)=>props.aktif ? "#E30045" : "#909DAA"};
    margin: 0 8px;
    span{
        text-align: center;
        font-size: 14px;
        display: inline-block;
        width: 33px;
        background: ${(props)=>props.aktif ? "#E30045" : "#909DAA"};
        color: white;
        border-radius: 100%;
        padding: 4px 0;
        margin: 0 8px;
    }
`;

export const Arrow = styled.div`
    color: #909DAA;
    font-weight: bold;
    margin: 0px 20px;
    font-size: 18px;
    line-height: 27px;
`;