import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

export const ProfilMax = styled.div`
    width: 65%;
    margin: 10px 0;
    @media screen and (max-width: 830px) {
        width: 100%;
    }
`;

export const GridInformasi = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 15px;
    margin: 5px auto 15px;
    @media screen and (max-width: 523px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const BoxClientInformation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 8px;
`;

export const ContentInformation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const PartTrashButton = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 8%;
    margin-right: 5px
    height: 100%;
    align-items: right;
`;

export const TrashButton = styled.div`
    height: fit-content;
    width: 100%;
    cursor: pointer;
`;

export const TitleName = styled.h6`
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    margin-bottom: 3px;
`;

export const InformationContent = styled.p`
    font-size: 12px;
    line-height: 18px;
    color: #212B36;
    margin: 3px 0;
`;

export const TrashsIcon = styled(BsFillTrashFill)`
    font-size: 20px;
    color: #909DAA;
    padding: 0 2px;
`;