import styled from "styled-components";

export const ButtonAddProduct = styled.div`
    max-width: 388px;
    background: #E30045;
    border-radius: 10px;
    margin: 6px 0 13px;
    cursor: pointer;
`;

export const ButtonAddProdTitl = styled.div`
    width:100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    padding: 10px;
`;

export const GridProduct = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    grid-gap: 12px;
    @media screen and (max-width: 1150px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 743px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 375px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const LabelVendorProduk = styled.label`
    font-size: 15px;
    line-height: 22px;
    color: #545454;
    padding: ${(props) => props.awal ? "15px 0 10px" : "10px 0"};
`;

export const InputModif = styled.input`
    background: #FFFFFF;
    width: 100%;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 8px;
    outline:none;
`;

export const InputModifArea = styled.textarea`
    width: 100%;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: 6px;
    outline: none;
    padding: 8px;
`;

export const InputMCQ= styled.select`
    width: 30%;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: 6px;
    outline: none;
    padding: 8px;
    font-size: 13px;
line-height: 22px;
color: #909DAA;
`;