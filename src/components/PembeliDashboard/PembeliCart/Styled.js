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
    width: ${(props) => props.need ? "85%" : "60%"};
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
    width: 100%;
    overflow-X: hidden;
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
    animation: slideLeft 1s forwards;
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items:center;
    align-self:center;
    margin-bottom: 10px;
    width: 100%;
    animation: slideLeft 1s forwards;
`;

export const BankRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items:center;
    align-self:center;
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    background: ${(props) => props.aktif ? "#DAF3E5" : "white"};
`;

export const InformationContents = styled.div`
    font-size: 15px;
    line-height: 18px;
    color: ${(props) => props.nonact ? "#909DAA" : "#212B36"};
`;

export const DivRowContent = styled.div`
    display: flex;
    flex-direction: ${(props) => props.top ? "row" : props.content ? "row" : "row"};
    column-gap: ${(props) => props.need ? "6px" : "20px"};
    flex:1;
    align-self: center;
    align-items: ${(props) => props.top ? "center" : props.content ? "center" : "center"};
    width: 100%;
    margin-bottom: ${(props) => props.top ? "0" : props.titlee ? "3px" : "10px"};
    p {
        font-size: 14px;
        line-height: 21px;
        color: #212B36;
        margin: 3px 0;
    }
    h6 {
        font-size: 18px;
        line-height: 27px;
        color: #212B36;
        margin: 3px 0;
    }
    @media screen and (max-width: 676px) {
        flex-direction: ${(props) => props.top ? "column" : props.content ? "row" : "row"};
        align-items: ${(props) => props.top ? "flex-start" : props.content ? "center" : "center"};
        text-align: left;
    }
    @media screen and (max-width: 505px) {
        flex-direction: ${(props) => props.top ? "column" : props.content ? "column" : "row"};
        align-items: ${(props) => props.top ? "flex-start" : props.content ? "flex-start" : "center"};
    }
    @media screen and (max-width: 489px) {
        h6 {
            font-size: 16px;
            line-height: 27px;
            color: #212B36;
        }
    }
    @media screen and (max-width: 392px) {
        h6 {
            font-size: 14px;
            line-height: 27px;
            color: #212B36;
        }
    } 
`;

export const ImageCart = styled.img`
    width: 156px;
    height: 156px;
    object-fit: cover;
    
    @media screen and (max-width: 718px) {
        width: 80px;
        height: 80px;
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
`;

export const Shopping = styled(AiFillShopping)`
    font-size: 24px;
    color: #9B51E0;
    margin-right:9px;
    @media screen and (max-width: 489px) {
        font-size: 22px;
    }    
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
    @media screen and (max-width: 676px) {
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
    @media screen and (max-width: 550px) {
        width: 150px;
    }
    @media screen and (max-width: 416px) {
        width: 170px;
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
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const Title = styled.h6`
    font-size: 18px;
    line-height: 27px;
    color: #212B36;
    margin: ${(props) => props.top ? "0 0 20px" : "20px 0"};
`;

export const PaymentContentGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 5px;
    animation: slideLeft 1s forwards;
    @media screen and (max-width: 653px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const BankImage = styled.img`
    margin: 8px 0;
    max-width: 170px;
    max-height: 50px;
    filter: ${(props) => props.nonact ? "grayscale(100%)" : "grayscale(0%)"};
`;

export const EmailConfirm = styled.div`
    margin: 8px 0;
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    span{
        color: #E30045;
        font-weight: bold;
        margin: 0 5px;
    }
    text-align:${(props) => props.need ? "center" : "left"};
`;

export const ButtonLacak = styled.button`
    width: 50%;
    margin: 10px auto;
    background: white;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    border: 1px solid #e30045;
    padding: 16px;
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;
    line-height: 22px;
    color: #e30045;
    cursor: pointer;
    @media screen and (max-width: 525px) {
        width: 80%;
    }

`;

export const ButtonApartas = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    width: 60%;
    @media screen and (max-width: 950px) {
        width: 100%;
    }
    @media screen and (max-width: 603px) {
        flex-direction: column;
    }
`;

export const Notes = styled.p`
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    color: #909DAA;
`;