import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDoubleRight,FaAngleDoubleLeft } from "react-icons/fa";

export const GlobalTemplate = styled.div`
    display: flex;
    flex-direction: ${(props) => props.row ? "row" : "column"};
    margin: ${(props)=> props.need ? "0 auto" : "5px auto 25px"};
    max-width: 80%;
    overflow: hidden;
    transition: .3s ease-out
    opacity:1;
`;

export const PopUpBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0);
    z-index: 51;
    padding: 15px;
    overflow-y: auto;
`;

export const ContentPopUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    @media screen and (max-width: 574px) {
        height: 90vh;
    }
`;

export const ButtonCloser = styled(AiOutlineClose)`
    font-size: 26px;
    color: white;
    font-weight: 600;
`;

export const ContentDrop = styled.div`
    margin: 0 auto;
    max-width: 700px;
    border-radius: 10px;
    padding: 16px;
    z-index: 52;
    display: ${({ played }) => (played ? "inline-block" : "none")};
    background-color: transparent;
    @media screen and (max-width: 574px) {
        max-width: 600px;
    }
`;

export const ButtonClosePopUp = styled.div`
    display: block;
    z-index: 60;
    cursor:pointer;
    width:fit-content;
`;

export const AngleRight = styled(FaAngleDoubleRight)`
    position: absolute;
    top: 50%;
    z-index: 60;
    right: 5px;
    font-weight:bold;
    background-color: transparent;
    color : #EFB401;
    font-size:50px;
    cursor: pointer;
    user-select: none;
`;
export const AngleLeft = styled(FaAngleDoubleLeft)`
    position: absolute;
    top: 50%;
    z-index: 60;
    left: 5px;
    font-weight:bold;
    background-color: transparent;
    color : #EFB401;
    font-size:50px;
    cursor: pointer;
    user-select: none;
`;