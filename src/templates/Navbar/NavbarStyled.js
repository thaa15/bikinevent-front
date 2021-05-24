import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link as LinkR } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsChatFill, BsFillPersonFill } from "react-icons/bs";

export const Nav = styled.nav`
    background: white;
    min-height: 86px;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    @media screen and (max-width: 830px) {
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
    }
`;

export const NavSet = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    align-self: center;
    align-items: center;
    color: #909DAA;
`;
export const NavLogo = styled.img`
    width: 157px;
`;
export const NavItem = styled.div`
    flex-basis: ${(props) => props.part};
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    align-self: center;
    align-items:center;
    @media screen and (max-width: 830px) {
        display: ${(props) => props.removedl ? "none" : "flex"};
        width: ${(props) => props.removedl ? "none" : "100%"};
        flex-basis: 100%;
        justify-content: left;
    }
`;
export const Dropdownbut = styled(RiArrowDropDownLine)`
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    transition: transform 1s;
    @media screen and (max-width: 1116px) {
        font-size: 10px;
    }
`;

export const DropdownContent = styled.div`
    visibility:hidden;
    opacity:0;
    position: absolute;
    background: white;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius:5px;
    z-index: 51;
    left:0;
    transform: scaleY(0);
    transform-origin: top;
`;
export const Dropdownlist = styled.div`
    font-size: 13px;
    position:relative;
    line-height: 24px;
    color: #909DAA;
    padding: 15px;
    width:100%;
    &:hover{
        background:#E30045;
        color:white;
        border-radius:5px;
    }
`;
export const Cathe = styled.div`
    position: relative;
    display: inline-block;
    border: 1px solid #F9FAFB;
    box-sizing: border-box;
    border-radius: 5px 0 0 5px;
    padding: 10px;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
    width: 90px;
    &:hover ${Dropdownbut}{
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    &:hover ${DropdownContent}{
        top:100%;
        display: block;
        -webkit-transition: .3s ease-out;
        -moz-transition: .3s ease-out;
        -o-transition: .3s ease-out;
        -ms-transition: .3s ease-out;
        transition: .3s ease-out;
        opacity: 1;
        visibility: visible;
        transform: scaleY(1);
    }
    @media screen and (max-width: 906px) {
        width: 100px;
    }
`;

export const SearchBar = styled.input`
    border-radius: none;
    background: #F9FAFB;
    padding: 10px;
    width: 80%;
    border: none;
    font-size: 12px;
    line-height: 18px;
    color: #909DAA;
    &:focus,
    &:active {
        border: none;
        outline: none;
        color:black;
    }
`;

export const SearchButton = styled.button`
    padding: 6px;
    background: #E30045;
    border-radius: 0 5px 5px 0;
    border:none;
    cursor: pointer;
`;

export const ProfButton = styled.div`
    display: flex;
    margin: 0 auto;
    align-items:center;
    width: 100%;
    justify-content: space-around;
`;

export const DisplayProf = styled.div`
    cursor:pointer;
    font-size: ${(props) => props.name ? "18px" : "12px"};
    line-height: ${(props) => props.name ? "27px" : "18px"};
    color: ${(props) => props.name ? "#212B36" : "#909DAA"};

    @media screen and (max-width: 1063px) {
        font-size: ${(props) => props.name ? "14px" : "10px"};
        line-height: ${(props) => props.name ? "20px" : "14px"};
    }
`;

export const ElementLink = styled(LinkR)`
    cursor: pointer;
    text-decoration: none;
    border: none;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const ShoppingCartIcon = styled(FaShoppingCart)`
    color: #909DAA;
    font-size: 25px;
    cursor: pointer;
    @media screen and (max-width: 1125px) {
        font-size: 18px;
    }
`;

export const ChatIcon = styled(BsChatFill)`
    color: #909DAA;
    font-size: 25px;
    cursor: pointer;
    @media screen and (max-width: 1125px) {
        font-size: 18px;
    }
`;

export const ProfileIcon = styled(BsFillPersonFill)`
    color: #909DAA;
    font-size: 25px;
    cursor: pointer;
    @media screen and (max-width: 1125px) {
        font-size: 18px;
    }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 830px) {
    display: flex;
    flex-direction: row-reverse;
    width: fit-content !important;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    color: #909DAA;
  }
`;