import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsChatFill, BsFillPersonFill, BsFillBagFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CgTrack } from "react-icons/cg"

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height:100%;
    background: rgba(255,255,255,0.8);
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarWrapperContainer = styled.div`
    background: white;
    width: 100%;
    height: fit-content;
    display: flex;
    overflow-Y: scroll;
    flex-direction: column;
`;

export const CloseIcon = styled(FaTimes)`
    color: #909DAA;
`;

export const Icon = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    padding: 25px;
    outline: none;
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
`;

export const SidebarWrapper = styled.div`
    color: #909DAA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
`;

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #909DAA;
    cursor: pointer;
    line-height: 3rem;
`;

export const SideBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    font-weight: 600;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    margin-bottom: 32px;
    font-size: 26px;
    color: #212B36;
`;

export const HomeButton = styled(AiFillHome)`
    color: #212B36;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
`;
export const ShoppingCartIcon = styled(FaShoppingCart)`
    color: #212B36;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
`;

export const TrackIcon = styled(CgTrack)`
    color: #212B36;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
`;

export const ChatIcon = styled(BsChatFill)`
    color: #212B36;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
`;

export const ProfileIcon = styled(BsFillPersonFill)`
    color: #212B36;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
`;

export const KeuanganIcon = styled(RiMoneyDollarCircleFill)`
    color: #212B36;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
`;
export const ProdukIcon = styled(BsFillBagFill)`
    color: #212B36;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
`;

export const ButtonBottom = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    background: ${(props) => props.call ? "#FFFFFF" : "#E30045"};
    border-radius: 10px;
    cursor:pointer;
    width: 100%;
    border:${(props) => props.call ? "1px solid #E30045" : "none"};
    text-decoration:none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin: 5px auto;
    color: ${(props) => props.call ? "#E30045" : "#FFFFFF"};
    @media screen and (max-width: 606px) {
        margin: 10px 0;
    }
`;