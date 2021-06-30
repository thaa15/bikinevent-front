import styled from "styled-components";
import {BsFillBagFill} from "react-icons/bs";

export const BoxAside = styled.div`
background: #FFFFFF;
width:100%;
border: 1px solid #E0E0E0;
box-sizing: border-box;
border-radius: 5px;
padding: 8px;
display:flex;
flex-direction: column;
`;

export const TitleAside = styled.div`
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    margin-bottom: 24px;
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
    line-height: 10px;
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
    width: ${(props) => props.harga ? "95%" : "100%"};
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
    &:active, &:focus {
        background-color:#a3143f;
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
    margin-bottom: 24px
    align-items: center;
`;

/*export const Bag = styled(BsFillBagFill)`
    font-size: 14px;
    line-height: 21px;
    color: #E30045;${(props)=>props.aktif ? "" : ""}
`;*/