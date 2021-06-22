import styled from "styled-components";

export const TitleVendorKeu = styled.div`
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    margin-bottom: 4px;
`;

export const ContentSeparator = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4,1fr);
    justify-content:space-between;
    grid-gap:50px;
    margin-bottom: 20px;
    @media screen and (max-width: 787px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap:15px;
        margin-bottom: 30px;
    }
    @media screen and (max-width: 655px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const TitleSubKeu = styled.p`
font-size: 12px;
line-height: 18px;
color: #909DAA;
margin-bottom: 6px;
`;

export const InfoKeuWrited = styled.p`
font-size: 20px;
line-height: 30px;
color: #212B36;
@media screen and (max-width: 427px) {
    font-size: 15px;
}
`;

export const ButtonKeu = styled.button`
width:100%;
background: ${(props)=>props.account ? "white" : "#E30045"};
border-radius: 10px;
font-weight: 500;
font-size: 14px;
line-height: 21px;
text-align: center;
color: ${(props)=>props.account ? "#E30045" : "#FFFFFF"};
padding: 8px;
outline: none;
border: ${(props)=>props.account ? "1px solid #E30045" : "none"};
cursor: pointer;
@media screen and (max-width: 655px) {
    font-size: 12px;
}
`;

export const IncomeWrite = styled.p`
font-size: 12px;
line-height: 18px;
color: #E30045;
margin-bottom:6px;
`;

export const BalanceTable = styled.table`
    width: 100%;
    border:1px solid #FFFFFF;
    @media screen and (max-width: 847px) {
        width:847px;
    }
`;

export const WithdrawalWrite = styled.td`
    width:20%;
    font-size: 13px;
    line-height: 18px;
    color: #212B36;
    margin-bottom:6px;
`;

export const ManageTable = styled.div`
    overflow-x: scroll;
    margin-bottom: 20px;
    ::-webkit-scrollbar{
        width: 5px;
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