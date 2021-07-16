import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { BsChatFill, BsFillPersonFill,BsFillBagFill } from "react-icons/bs";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {Link} from "react-router-dom";

export const TempVendash = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-top: 25px;
@media screen and (max-width: 957px) {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
}
`;

export const OtherVendash = styled.div`
    flex-basis: 18%;
    padding: 4px;
    width: 100%;
    margin-right: 10px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    height: fit-content;

    @media screen and (max-width: 957px) {
        display:none;
    }
`;

export const MainVendash = styled.div`
    flex-basis: 80%;
    padding: 0 10px;
    width: 100%;
    background: #FFFFFF;
    animation: myopacity 0.8s linear;
    @media screen and (max-width: 957px) {
        -webkit-box-ordinal-group: 1;
        -moz-box-ordinal-group: 1;
        box-ordinal-group: 1;
    }
`;

export const VendashWritedContent = styled.div`
    white-space: pre-line;  
    vertical-align: bottom;
    margin: ${(props) => props.title ? "10px 0 5px" : "0 0 20px"};
    font-weight: ${(props) => props.title ? "600" : "normal"};
    font-size: 14px;
    line-height: 20px;
    color: #212B36;
`;

export const Otwrit = styled(Link)`
    display: flex;
    text-decoration: none;
    padding: 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #909DAA;
    align-items:center;
    background-color: ${(props) => props.aktif ? "#F2F2F2" : "white"};
    border-radius: 5px;
    &:hover {
        background-color: ${(props) => props.aktif ? "#F2F2F2" : "#f7f8fa"};
    }
`;

export const PesananIcon = styled(FaShoppingCart)`
    color: #909DAA;
    margin-right: 9px;
`;

export const KeuanganIcon = styled(RiMoneyDollarCircleFill)`
    color: #909DAA;
    margin-right: 9px;
    font-size:14.4px;
`;

export const ProdukIcon = styled(BsFillBagFill)`
    color: #909DAA;
    margin-right: 9px;
`;

export const ChatIcon = styled(BsChatFill)`
    color: #909DAA;
    margin-right: 9px;
`;

export const ProfilIcon = styled(BsFillPersonFill)`
    color: #909DAA;
    margin-right: 9px;
`;