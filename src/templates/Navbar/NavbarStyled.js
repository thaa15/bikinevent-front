import styled from "styled-components";
import {RiArrowDropDownLine} from "react-icons/ri";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
    background: white;
    height: 86px;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 50;
`;

export const NavSet = styled.div`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    align-self: center;
    align-items: center;
    color: #909DAA;
`;
export const NavLogo = styled.div`
    width: 100%;
    color: white;
    height: fit-content;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;
export const NavItem = styled.div`
    flex-basis: ${(props) => props.part};
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    align-self: center;
    align-items:center;
`;
export const Dropdownbut = styled(RiArrowDropDownLine)`
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    transition: transform 1s;
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
    width: fit-content;
    transition .5s;
    &:hover ${Dropdownbut}{
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    &:hover ${DropdownContent}{
        top:100%;
        display: block;
        transition: .3s linear;
        opacity: 1;
        visibility: visible;
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
    font-size: ${(props)=>props.name ? "18px":"12px"};
    line-height: ${(props)=>props.name ? "27px":"18px"};
    color: ${(props)=>props.name ? "#212B36":"#909DAA"};
`;

export const ElementLink = styled(LinkR)`
    cursor: pointer;
    text-decoration: none;
    border: none;
    display: flex;
    align-items: center;
    width: 100%;
`;