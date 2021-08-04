import styled from "styled-components";
import {BsFillBagFill} from "react-icons/bs";
import {GiShop} from "react-icons/gi";
import {VscSettings} from "react-icons/vsc";

export const BoxAside = styled.div`
background: #FFFFFF;
width:100%;
border: 1px solid #E0E0E0;
box-sizing: border-box;
border-radius: 5px;
padding: 8px;
display:flex;
flex-direction: column;
@media screen and (max-width: 957px) {
    border:none;
    height:100%;
}
`;

export const TitleAside = styled.div`
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    margin-bottom: 24px;
    @media screen and (max-width: 957px) {
        font-size:22px;
    }
`;

export const ApartAside = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
`;

export const FilterAside = styled.div`
    display:${(props)=>props.button ? "none" : "flex"};
    flex-basis:${(props)=>props.button ? "5%" : "94%"};
    width:100%;
    @media screen and (max-width: 957px){
        display: ${(props)=>props.button ? "flex" : "flex"};
    }
`;

export const ButtonCanclled = styled.div`
    border-radius: 100%;
    background:#E30045;
    color:white;
    height:fit-content;
    width:fit-content;
    font-weight: bold;
    padding: 3px 10px;
`;

export const LabelSearch = styled.label`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #212B36;
    margin-bottom: 5px;
`;

export const CheckBoks = styled.input`
    border: 2px solid #909DAA;
    margin-left:${(props)=>props.sub ? "20px" : "0"};
    cursor: pointer;
    &:hover{
        box-shadow: #909DAA;
    }
`;

export const LabelCheck = styled.label`
    margin-left: 5px;
    font-size: 12px;
    line-height: 15px;
    color: #909DAA;
`;

export const CheckFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    margin-bottom: 9px;
`;

export const InputModif = styled.input`
    background: #FFFFFF;
    width: 80%;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: ${(props) => props.harga ? "0 6px 6px 0" : "6px"};
    padding: 8px;
    font-size: 12px;
    line-height: 10px;
    outline:none;
`;

export const ButtonsSearch = styled.button`
    display: inline-block;
    background: #E30045;
    border-radius: 10px;
    width:100%;
    text-align:center;
    cursor: pointer;
    border:0;
    outline:none;
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
    padding: 8px 32px;
    margin: 10px auto 0;
    &:hover {
        background-color:#a3143f;
    }
    &:active{
        background-color:#c91a4f;
    }
`;

export const ResetButton = styled.input`
    outline:none;
    border:none;
    border-bottom: 1px solid #E30045;
    margin: 15px auto 20px;
    display:block;
    cursor:pointer;
    text-align:center;
    font-size: 12px;
    line-height: 10px;
    background: white;
    text-decoration: underline;
    color: #E30045;
`;

export const TopHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    align-items: center;
    @media screen and (max-width: 957px) {
        flex-direction: column;
    }
`;

export const Bag = styled(BsFillBagFill)`
    display: block;
    font-size: 16px;
    margin-right: 5px;
    font-weight: bold;
    color: ${(props)=>props.aktif ? "#E30045" : "#909DAA"};
`;

export const ShopVendor = styled(GiShop)`
    display: block;
    font-size: 16px;
    margin-right: 5px;
    font-weight: bold;
    color: ${(props)=>props.aktif ? "#E30045" : "#909DAA"};
`;

export const TitlePage = styled.div`
    font-size: 14px;
    font-weight: bold;
    line-height: 21px;
    color: ${(props)=>props.aktif ? "#E30045" : "#909DAA"};
`;

export const DivApart = styled.div`
    width:100%;
    display:flex;
    flex-basis:50%;
    flex-direction: ${(props)=>props.urutan ? "row-reverse" : "row"};
    @media screen and (max-width: 411px) {
        flex-direction: ${(props)=>props.urutan ? "column" : "row"};
    }
`;

export const UrutanTemp = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: row-reverse;
@media screen and (max-width: 411px) {
    flex-direction: row;
}
`;

export const ButtonChange = styled.div`
    display:flex;
    flex-direction: row;
    cursor:pointer;
    border-bottom: ${(props)=>props.aktif ? "none" : "none"};
    @media screen and (max-width: 957px) {
        flex-basis:50%;
        justify-content:center;
        padding-bottom: 4px;
        margin-bottom: 20px;
        border-bottom: ${(props)=>props.aktif ? "4px solid #E30045" : "4px solid #909DAA"};
    }
`;

export const Line = styled.div`
    border-right: 2px solid #909DAA;
    margin: 0 30px;
    @media screen and (max-width: 957px) {
        display:none;
    }
`;

export const Urutan = styled.div`
    font-size: 14px;
    font-weight: bold;
    line-height: 21px;
    color: #212B3;
    margin-right: 10px;
    @media screen and (max-width: 957px) {
        display:none;
    }
`;

export const InputMCQKat = styled.select`
    width: 45%;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: 6px;
    outline: none;
    padding: 8px;
    @media screen and (max-width: 957px) {
        width: 150px;
    }
`;

export const GridTempProduk = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    grid-gap: 5px;
    @media screen and (max-width: 1085px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 577px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 359px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const GridTempVendor = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 5px;
    @media screen and (max-width: 957px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ShowedVendor = styled.div`
    display: flex;
    display:-webkit-flex;
    flex-direction: row;
    -webkit-flex-direction:row;
    -ms-flex-direction:row;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    @media screen and (max-width: 369px) {
        flex-direction: column;
        -webkit-flex-direction:column;
        -ms-flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const VendorPhotos = styled.div`
    border-radius: 100%;
    height: 84px;
    width: 84px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #F2994A;
    margin-right: 8px;
    @media screen and (max-width: 503px) {
        height: 60px;
        width: 60px;
    }
`;

export const BoxsExpVendor = styled.div`
    font-weight: ${(props)=> props.titlee ? "bold":"normal"};
    font-size: ${(props)=> props.titlee ? "18px":"12px"};
    line-height: ${(props)=> props.titlee ? "27px":"18px"};
    color: ${(props)=> props.titlee ? "#212B36":"#909DAA"};
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    @media screen and (max-width: 503px) {
        font-size: ${(props)=> props.titlee ? "15px":"12px"};
        line-height: ${(props)=> props.titlee ? "15px":"12px"};
    }
`;

export const FilterNav = styled.div`
    display:none;
    @media screen and (max-width: 957px) {
        display:flex;
        flex-direction: row;
        margin-top:5px;
    }
`;

export const FilterBox = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    line-height: 10px;
    color: #909DAA;
    padding: 10px;
    width: 100px;
    @media screen and (max-width: 411px) {
        width:150px;
    }
`;

export const Sett = styled(VscSettings)`
    font-size: 16px;
    line-height: 10px;
    color: #909DAA;
    margin-right: 6px;
`;