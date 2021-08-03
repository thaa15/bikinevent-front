import styled from "styled-components";

export const ButtonAddProduct = styled.div`
    max-width: 388px;
    background: #E30045;
    border-radius: 10px;
    margin: 6px 0 13px;
    cursor: pointer;
    &:hover {
        background-color:#a3143f;
    }
    &:active{
        background-color:#c91a4f;
    }
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
    display: block;
    font-size: 13px;
    line-height: 22px;
    color: #545454;
    margin: ${(props) => props.awal ? "15px 0 10px" : "10px 0 5px"};
`;

export const InputModif = styled.input`
    background: #FFFFFF;
    width: ${(props) => props.harga ? "95%" : "100%"};
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: ${(props) => props.harga ? "0 6px 6px 0" : "6px"};
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
    resize: none;
`;

export const InputMCQ = styled.select`
    width: 30%;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: 6px;
    outline: none;
    padding: 8px;
    @media screen and (max-width: 599px) {
        width: 100%
    }
`;

export const Options = styled.option`
    font-size: 13px;
    line-height: 22px;
    outline: none;
    color: ${(props) => props.non ? "#909DAA" : "#212B36"};
`;

export const PriceLabel = styled.div`
    display:inline-block;
    background: #909DAA;
    width: 50px;
    box-sizing: border-box;
    border-radius: 6px 0 0 6px;
    padding: 13px 13px 15px 13px;
    outline:none;
    font-weight: 600;
    font-size: 14px;
    line-height: 10px;
    color: #FFFFFF;
`;

export const FotoUploadApartProduct = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 10px 0 20px;
    @media screen and (max-width: 739px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 527px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media screen and (max-width: 527px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
`;

export const UploadFile = styled.div`
    background: #FFFFFF;
    display:flex;
    width: 100%;
    height: 110px;
    padding: 3px;
    border: 1px dashed #909DAA;
    box-sizing: border-box;
    border-radius: 6px;
    align-items:center;
    align-self:center;
    justify-content:center;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const DivPrice = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-self: center;
`;

export const ButtonsArsip = styled.button`
    display: inline-block;
    background: #FFFFFF;
    border-radius: 10px;
    width:100%;
    text-align:center;
    cursor: ${(props) => props.allowed ? "not-allowed" : "pointer"};
    border: 1px solid #E30045;
    outline:none;
    color: #E30045;
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

export const ExpTags = styled.span`
    font-size: 13px;
    line-height: 18px;
    color: white;
`;

export const BoxTags = styled.span`
    display: inline-block;
    width: fit-content;
    padding: 6px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    column-gap: 10px;
    background: #E30045;
    align-items: center;
`;

export const RemoveTag = styled.div`
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    margin-left: auto;
    color: #E30045;
    border: 1px solid #E30045;
    padding: 1px 5px;
    outline: none;
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    background: white;
    border-radius: 100%;
    &:hover {
        font-weight: bold;
    }
`;

export const ContentTags = styled.div`
    display: grid;
    margin-top: 20px;
    width: auto;
    grid-template-columns: repeat(4, 150px);
    column-gap: 5px;
    row-gap: 5px;
`;