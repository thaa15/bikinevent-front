import styled from "styled-components";
import {Link} from "react-router-dom";
import {AiFillGooglePlusCircle} from "react-icons/ai";

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
    @media screen and (max-width: 512px) {
        min-width: 350px;
    }
    @media screen and (max-width: 440px) {
        min-width: 320px;
    }
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
&[type="radio"]{
    cursor: pointer;
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    &:checked:before{
        content:"";
        position:absolute;
        width: 45%;
        height: 45%;
        background: white;
        border: 6px solid #007BFF;
        border-radius: 100%;
      }
  
    @media screen and (max-width: 426px) {
        width: 15px;
    height: 15px;
    margin: 0 5px 0 8px;
    &:checked:before{
        width: 30%;
        height: 30%;
      }
    }
  }
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
`;

export const Buttonslog = styled.button`
    display: inline-block;
    background: #E30045;
    border-radius: 10px;
    width:100%;
    text-align:center;
    cursor: ${(props) => props.allowed ? "not-allowed" : "pointer"};
    border:0;
    outline:none;
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
    padding: 8px 32px;
    margin: 30px auto 0;
    &:hover {
        background-color:#a3143f;
    }
    &:active{
        background-color:#c91a4f;
    }
`;

export const Liner = styled.div`
  height: 40px;
  width: 100%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 2%;
  text-align:center;
  margin: 10px auto 0;
`;

export const OrLine = styled.div`
    background-color: white;
    font-weight: 500;
    width: fit-content;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    height: 100%;
    padding: 8px;
    justify-content: center;
    text-align:center;
    align-items: center;
    color: #212B36;
`;

export const Buttonsgoogle = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2F80ED;
    border-radius: 10px;
    width:100%;
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
    padding: 8px 32px;
    margin: 10px auto 0;
    &:hover {
        background-color:#286dc9;
    }
    &:active{
        background-color:#1f58a3;
    }
`;

export const GooglePlus = styled(AiFillGooglePlusCircle)`
    font-size: 24px;
    color: white;
    margin: 0 5px;
`;

export const ForgotPass = styled.div`
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    line-height: 18px;
    color: #969696;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

export const BgForgot = styled.div`
    width: 584px;
    padding: 40px;
    background: white;
    border-radius: 20px;
    margin: 30px auto;
`;