import styled from "styled-components";
import {Link} from "react-router-dom";

export const LoginBg = styled.div`
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    background: #F9FAFB;
`;

export const LoginBox = styled.div`
    min-width: 400px;
    width: 30%;
    min-height: 400px;
    background: white;
    border-radius: 10px;
    padding: 36px;
    margin: 30px auto;
`;

export const LoginTittle = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.4px;
    color: #212B36;
    width: 100%;
    text-align:center;
    margin: 20px auto;
`;

export const IconBg = styled.div`
    display: flex;
    align-self:center;
    padding: 7px;
    border-radius: 0 6px 6px 0;
    border-top:1px solid #E4E4E4;
    border-bottom:1px solid #E4E4E4;
    border-left:none;
    border-right:1px solid #E4E4E4;
`;

export const LoginInput = styled.input`
width: 100%;
background: #FFFFFF;
border-top: 1px solid #E4E4E4;
border-bottom: 1px solid #E4E4E4;
border-left: 1px solid #E4E4E4;
border-right: ${(props) => props.pw ? "none" : "1px solid #E4E4E4"};
outline: none;
padding: 5px;
border-radius: ${(props) => props.pw ? "6px 0 0 6px" : "6px"};
margin: 5px auto;
/*&:focus,&:active {
    border-top: 2px solid #5C5C5C;
    border-bottom: 2px solid #5C5C5C;
    border-left: 2px solid #5C5C5C;
    border-right: ${(props) => props.pw ? "none" : "2px solid #5C5C5C"};
}*/
/*@media screen and (max-width: 707px) {
    width: 100%;
}*/
`;
export const LogApart = styled.div`
    display: flex;
    width: 100%;
    align-self: center;
    align-items: center;
`;

export const LoginLabel = styled.label`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    color: #545454;
`;

export const RadioButton = styled.input`
    cursor: pointer;
    background-color: white;
    margin: 0 5px;
`;

export const HaveAccount = styled.div`
    font-size: 14px;
    line-height: 22px;
    width: 100%;
    letter-spacing: -0.2px;
    color: #545454;
    margin: 20px auto 0;
    text-align: center;
`;

export const HaveAccountLink = styled(Link)`
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.1px;
    color: #2F80ED;
    margin: 0 5px;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    width:100%;
    margin: 0 auto;
`
export const Buttonslog = styled.button`
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
    margin: 30px auto 0;
    &:active, &:focus {
        background-color:#a3143f;
    }
`;