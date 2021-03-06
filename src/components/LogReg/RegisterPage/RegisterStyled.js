import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

export const RegisterTittle = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.4px;
    color: #212B36;
    width: 100%;
    text-align:center;
    margin: 15px auto 0;
`;

export const HaveAccount = styled.div`
    font-size: 14px;
    line-height: 22px;
    width: 100%;
    letter-spacing: -0.2px;
    color: #545454;
    margin: 5px auto 0;
    text-align: center;
`;

export const TypeChoose = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    width: 100%;
    margin: 15px auto 0;
`;

export const TypeChooseGoogle = styled.div`
    display: flex;
    align-items: center;
    width: 65%;
    margin: 15px auto 0;
`;

export const TypeImage = styled.div`
    width: 100%;
    color: white;
    height: 150px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
`;

export const TypeApart = styled.div`
    display:flex;
    width: 80%;
    margin: ${(props)=>props.need ? "0 auto" : "0 5px"};
    cursor: pointer;
    align-items:center;
    border: ${(props) => props.aktif ? "1px solid #219653" : "1px solid #E4E4E4"};
    box-sizing: border-box;
    border-radius: 3px;
`;

export const Typebg = styled.div`
    background-color: ${(props) => props.aktif ? "rgba(218, 243, 229,0.6)" : "transparent"};
    width: 100%;
    height: 100%;
`;

export const ChecklistCircle = styled(FaCheckCircle)`
    color: #219653;
    font-size: 40px;
    background: white;
    border-radius: 100%;
    @media screen and (max-width: 512px) {
        font-size: 30px;
    }
`;

export const TypeSigned = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    text-align:center;
    padding: 16px auto;
    color: #212B36;
    font-size: 16px;
    line-heifht: 22px;
    font-weight: 600;
`;

export const IconCheck = styled.div`
    display: ${(props) => props.aktif ? "flex" : "none"};
    flex-direction: row-reverse;
    width: 105%;
    z-index: 5;
    margin-bottom: -40px;
    margin-right; -20px;
    align-items: right;
`;

export const Welcomed = styled.div`
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #212B36;
    margin: 25px auto;
`;

export const InputCityApart = styled.div`
display:flex;
alignItems:center;
width: 100%;
justify-content: space-between;
`;

export const CheckBoxInput = styled.div`
    display: flex;
    align-items:center;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    color: #545454;
    margin-top: 10px;
`;

export const TermanConds = styled.span`
    color: #007BFF;
    cursor: pointer;
    margin-left: 4px;
    &:hover{
        text-decoration: underline;
    }
`;

export const DropDiv = styled.div`
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
    border: 5px;
    border-color: #333;
`;

export const UploadFile = styled.div`
    background: #FFFFFF;
    width: 100%;
    border: 1px dashed #007BFF;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 15px;
    cursor:pointer;
`;

export const FileViewStyle = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 24px;
`;

export const CondTermBg = styled.div`
    max-width: 584px;
    height: 500px;
    background: #FFFFFF;
    border-radius: 20px;
    padding: 20px;
    overflow-Y: scroll;
    ::-webkit-scrollbar{
        width: 8px;
    }
      
    ::-webkit-scrollbar-thumb{
        background: rgba(158, 158, 158,0.6);
        border-radius: 100%;
    }
      
    ::-webkit-scrollbar-thumb:hover{
        background: rgba(158, 158, 158,0.9);
        border-radius: 100%;
    }
`;

export const CondTermTitle = styled.h5`
    font-size: 20px;
    line-height: 30px;
    color: #212B36;
    margin-bottom: 15px;
`;

export const CondTermContent = styled.div`
    white-space: pre-line;  
    vertical-align: bottom;
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    ul,ol {
        padding-left: 20px;
    }
    h1,h2,h3,h4,h5,h6{
        line-height: 20px;
        margin: 10px 0 6px;
        color: #212B36;
    }
    img{
        width: 90%;
        margin: 0 auto;
    }
`;