import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleProfileVendor = styled.p`
    font-size: 13px;
    line-height: 22px;
    color: #909DAA;
    margin-bottom: 7px;
`;

export const GridContent = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 20px;
    margin-top: ${(props) => props.three ? "15px" : "0"};
    div{
        margin-right: 6vw;
    }
    @media screen and (max-width: 669px) {
        flex-direction: column;
    }
`;

export const ContentProfile = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #212B36;
    @media screen and (max-width: 669px) {
        margin-bottom: 20px;
    }
`;

export const UbahPwLink = styled(Link)`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #E30045;
    text-decoration: none;
    margin-left: 10px;
    &:hover{
        text-decoration: underline;
    }
`;

export const UploadFile = styled.div`
    background: #FFFFFF;
    display:flex;
    width: 110px;
    height: 110px;
    padding: 3px;
    border: 1px dashed #909DAA;
    box-sizing: border-box;
    border-radius: 6px;
    align-items:center;
    align-self:center;
    justify-content:center;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const PlusImage = styled.div`
font-weight: 300;
font-size: 20px;
line-height: 22px;
color: #909DAA;
padding: 4px 8px;
border-radius: 100%;
border: 1px solid #909DAA;
`;

export const FileViewStyle = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const PortofolioBox = styled.div`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    width: 321px;
    box-sizing: border-box;
    border-radius: 5px;
    min-height: 153px;
    padding: 7px;
    margin: 15px 0;
    @media screen and (max-width: 423px) {
        width: 100%;
    }
`;

export const ButtonPart = styled.div`
    display: grid;
    width: 50%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 4px;
    margin: 10px auto;
`;

export const Button = styled.button`
background: #FFFFFF;
border: ${(props) => props.delete ? "1px solid #909DAA" : "1px solid #E30045"};
box-sizing: border-box;
border-radius: 3px;
padding: 8px;
width: 80px;
cursor: pointer;
font-weight: 500;
font-size: 10px;
line-height: 15px;
color: ${(props) => props.delete ? "#909DAA" : "#E30045"};
`;

export const FotoUploadApart = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ExpUploadPhoto = styled.div`
font-size: 10px;
line-height: 18px;
text-align: center;
color: #909DAA;
width: 100%;
margin: -10px auto 0;
`;