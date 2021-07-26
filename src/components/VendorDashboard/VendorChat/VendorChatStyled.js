import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import ScrollToBottom from 'react-scroll-to-bottom';

export const TemplateChat = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const ChatList = styled.div`
    flex-basis: 30%;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    height: 500px;
    background: white;
    overflow-y: scroll;
    padding: 7px;
    ::-webkit-scrollbar{
        width: 10px;
    }
      
    ::-webkit-scrollbar-thumb{
        background: rgba(158, 158, 158,0.6);
        border-radius: 8px;
    }
      
    ::-webkit-scrollbar-thumb:hover{
        background: rgba(158, 158, 158,0.9);
        border-radius: 8px;
    }
    @media screen and (max-width: 957px) {
        flex-basis: 34%;
    }
`;

export const ChatListResp = styled.div`
    width: 100%;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    background: white;
    height: 500px;
    overflow-y: scroll;
    padding: 7px;
    ::-webkit-scrollbar{
        width: 10px;
    }
      
    ::-webkit-scrollbar-thumb{
        background: rgba(158, 158, 158,0.6);
        border-radius: 8px;
    }
      
    ::-webkit-scrollbar-thumb:hover{
        background: rgba(158, 158, 158,0.9);
        border-radius: 8px;
    }
`;

export const ChatContent = styled.div`
    flex-basis: 69%;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 500px;
    padding: 7px 10px;
    background: white;
    display:flex;
    flex-direction: column;
    @media screen and (max-width: 957px) {
        flex-basis:65%;
    }
`;

export const ChatContentResp = styled.div`
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 500px;
    padding: 7px 10px;
    display:flex;
    flex-direction: column;
    background: white;
`;

export const ChatPerson = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background: ${(props)=>props.active ? "#DAF3E5" : "white"};
    border-radius: 5px;
    height: 80px;
    margin-bottom: 4px;
    justify-content: space-between;
    align-self: center;
    align-items:center;
    padding: 8px;
    cursor: pointer;
    margin-top: 4px;
    &:hover{
        background: ${(props)=>props.active ? "#DAF3E5" : "#DAF3E5"};
    }
`;

export const ProfilePhoto = styled.div`
    border-radius: 100%;
    width: 52px;
    height: 52px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #F2994A;
    margin-right: ${(props)=>props.content ? "10px" : "0"};
`;

export const ProfileName = styled.h6`
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    margin-bottom: 3px;
`;

export const LastChatDisplay = styled.div`
    font-size: 12px;
    line-height: 18px;
    color: #909DAA;
`;

export const TimeDisplay = styled.span`
    font-size: 11px;
    line-height: 18px;
    color: #909DAA;
    margin: 8px 4px 0 4px;
`;

export const ListChatPart = styled.div`
    flex-basis: ${(props)=>props.photo ? "30%" : props.resp ? "12%" : props.resp2 ? "87%" : "69%"};
    width: 100%;
    flex-direction: column;
`;

export const DisplayChatProfileContent = styled.div`
    height: 77px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    display:flex;
    flex-direction: row;
    padding: 8px;
    align-items: center;
    margin-bottom: 10px;
    
`;

export const ChatContetnDisplay = styled(ScrollToBottom)`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display:table-cell;
    vertical-align:bottom;
    ::-webkit-scrollbar{
        width: 10px !important;
    }
      
    ::-webkit-scrollbar-thumb{
        background: rgba(158, 158, 158,0.6) !important;
        border-radius: 8px !important;
    }
      
    ::-webkit-scrollbar-thumb:hover{
        background: rgba(158, 158, 158,0.9) !important;
        border-radius: 8px !important;
    }
    
`;

export const TypingPart = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TextType = styled.input`
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    border-radius: 5px 0 0 5px;
    font-size: 12px;
    line-height: 18px;
    color: #212B36;
    outline: none;
`;

export const ButtonSend = styled.button`
    display: inline-block;
    background: #E30045;
    border-radius: 0 10px 10px 0;
    width:70px;
    text-align:center;
    border:0;
    outline:none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    cursor:pointer;
    padding: 8px;
    &:active, &:focus {
        background-color:#a3143f;
    }
`;

export const ChatBox = styled.div`
    background: ${(props)=>props.user ? "#F2F2F2" : "white"};
    border-radius: 20px;
    border:${(props)=>props.user ? "none" : "1px solid #BDBDBD"};
    max-width: 70%;
    font-size: 12px;
    line-height: 18px;
    padding: 6px 14px;
    color: #212B36;
    display:flex;
    flex-direction:column;
    white-space: pre-line;  
    vertical-align: bottom;
`;

export const PlacedChatBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: ${(props)=>props.user ? "row-reverse" : "row"};
    margin-bottom: 10px;
`;

export const BackButton = styled(IoIosArrowBack)`
font-size: 16px;
color: #212B36;
margin: 0 5px;
cursor:pointer;
`;

export const ChatNotOpen = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;