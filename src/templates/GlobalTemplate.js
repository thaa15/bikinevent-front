import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDoubleRight,FaAngleDoubleLeft,FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export const GlobalTemplate = styled.div`
    display: flex;
    flex-direction: ${(props) => props.row ? "row" : "column"};
    margin: ${(props)=> props.need ? "0 auto" : "5px auto 25px"};
    max-width: 80%;
    overflow: hidden;
    transition: .3s ease-out
    opacity:1;
    position:relative;
    min-height: 100%;
`;

export const PopUpBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props)=>props.need ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.8)"};
    z-index: 51;
    padding: 15px;
    overflow-y: visible;
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
    &:hover{
        font-weight: 800;
    }
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
    background-color: transparent;
    color : #EFB401;
    font-size:50px;
    cursor: pointer;
    user-select: none;
    &:hover{
        font-weight: 800;
    }
`;
export const AngleLeft = styled(FaAngleDoubleLeft)`
    position: absolute;
    top: 50%;
    z-index: 60;
    left: 5px;
    background-color: transparent;
    color : #EFB401;
    font-size:50px;
    cursor: pointer;
    user-select: none;
    &:hover{
        font-weight: 800;
    }
`;

export const PopBgSuccess = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    z-index:100;
`;

export const BgSuccess = styled.div`
    margin: 0 auto 20px;
    width: 330px;
    border-radius:10px;
    display:flex;
    flex-direction: row;
    align-items:center;
    opacity:${(props)=>props.aktif ? "1" : "0"};
    transform: ${(props)=>props.aktif ? "scaleY(1)" : "scaleY(0)"};
    transition: 0.5s all linear;
    background: ${(props)=>props.right ? "#219653" : "#cc0000"};
    color: white;
    font-size: 14px;
    padding: 8px;
    @media screen and (max-width: 574px) {
        width: 270px;
    }
    @media screen and (max-width: 412px) {
        width: 250px;
    }
`;

export const Succesicon = styled(FaCheck)`
    font-size: 40px;
    margin-right: 16px;
    color: #219653;
    font-weight: bold;
    padding: 10px 8px;
    border-radius: 100%;
    background:white;
`;

export const Failedicon = styled(ImCross)`
    font-size: 40px;
    margin-right: 16px;
    color: #cc0000;
    font-weight: bold;
    padding: 10px 8px;
    border-radius: 100%;
    background:white;
`;