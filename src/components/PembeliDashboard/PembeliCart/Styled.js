import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

export const BgNoEntry = styled.div`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 10px auto;
    max-height: 510px;
    padding: 20px;
    width: 100%;
`;

export const NoEntryContent = styled.div`
    width: 50%;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    @media screen and (max-width: 748px) {
        width: 80%;
        padding: 10px;
    }
    @media screen and (max-width: 420px) {
        width: 100%;
    }
`;

export const ImageNoEntry = styled.img`
    width: 60%;
    margin-bottom: 30px;
    @media screen and (max-width: 611px) {
        width: 80%;
    }
`;

export const MulaiBelanja = styled(Link)`
    display: block;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 14px;
    text-align: center;
    background: #E30045;
    border-radius: 10px;
    padding: 8px;
    width: 100%;
    margin-top: ${(props) => props.need ? "20px" : "40px"};
    &:hover {
        background-color:#a3143f;
    }
    &:active{
        background-color:#c91a4f;
    }
`;

export const PurchaseContentApart = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 25px;
    margin: 20px 0;
    @media screen and (max-width: 994px) {
        flex-direction: column;
        row-gap: 25px;
        column-gap:0;
    }
`;

export const PurchaseContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const PurchasePrice = styled.div`
    width: 29%;
    height: fit-content;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    h5 {
        font-size: 16px;
        line-height: 27px;
        color: #212B36;
        margin-bottom: 10px;
    }
    @media screen and (max-width: 994px) {
        width: 60%;
        margin: 0 auto;
    }
    @media screen and (max-width: 588px) {
        width: 100%;
        margin: 0 auto;
    }
`;

export const PriceTotal = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 0;
    p {
        font-size: 14px;
        line-height: 21px;
        color: #909DAA;
    }
    h6 {
        font-size: 14px;
        line-height: 21px;
        color: #212B36;
        margin-left: auto;
    }
`;

export const BoxContentCart = styled.div`
    padding: 15px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 30px;
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items:center;
    margin-bottom: 10px;
    width: 100%;
`;

export const DivRowContent = styled.div`
    display: flex;
    flex-direction: ${(props)=>props.need ? "row" : "row"};
    column-gap: ${(props)=>props.need ? "6px" : "20px"};
    flex:1;
    align-items:center;
    align-self:center;
    width: 100%;
    margin-bottom: 10px;
    p {
        font-size: 14px;
        line-height: 21px;
        color: #212B36;
    }
    h6 {
        font-size: 18px;
        line-height: 27px;
        color: #212B36;
    }
    @media screen and (max-width: 718px) {
        flex-direction: ${(props)=>props.need ? "column" : "column"};
        text-align: ${(props)=>props.needs ? "center" : "left"};
        p{
            margin: 8px auto;
        }
    }
`;

export const ImageCart = styled.img`
    width: 156px;
    height: 156px;
    object-fit: cover;
    
    @media screen and (max-width: 461px) {
        width: 120px;
        height: 120px;
    }
`;

export const PartTrashButtons = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-right: 5px
    height: 100%;
    justify-content: center;
    align-items: right;
    margin-top: auto;
    margin-left: auto;
    @media screen and (max-width: 718px) {
        margin-top:0;
        margin-left:0;
    }
`;

export const Shopping = styled(AiFillShopping)`
    font-size: 24px;
    color: #9B51E0;
    margin-right:9px;
`;

export const LinkChat = styled(Link)`
    text-decoration: none;
    margin-left: auto;
    border: none;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #E30045;
    &:hover{
        text-decoration: underline;
    }
    @media screen and (max-width: 718px) {
        margin-left: 0;
    }
`;

export const NoteInput = styled.input`
    background: #FFFFFF;
    width: 220px;
    padding: 8px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    color: #909DAA;
    margin: 5px 0;
    border-radius: 5px;
    &:focus,
    &:active {
        outline: none;
        color:black;
    }
    @media screen and (max-width: 461px) {
        width: 150px;
    }
`;

export const NoteButton = styled.button`
    padding: 9px 6px;
    color: #E30045;
    border:none;
    outline:none;
    background: white;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const ButtonAddInformation = styled.div`
    border: 1px dashed #909DAA;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #909DAA;
    text-align:center;
    cursor:pointer;
    margin: 10px auto;
`;