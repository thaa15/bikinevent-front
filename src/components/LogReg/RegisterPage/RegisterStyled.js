import styled from "styled-components";

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
    margin: 0 5px;
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
    align-self: center;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    color: #545454;
    margin-top: 10px;
`;

export const TermanConds = styled.div`
    display: inline;
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
    padding: 24px;
    border: 1px dashed #007BFF;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 15px;
`;