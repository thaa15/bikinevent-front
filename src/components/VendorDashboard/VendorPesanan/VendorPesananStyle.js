import styled from "styled-components";

export const TitleStats = styled.h3`
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    margin:${(props)=>props.selesai ? "15px 0 8px" : "0"};
`;

export const BoxPesanan = styled.div`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    @media screen and (max-width: 484px) {
        flex-direction: column;
    }
`;

export const BoxPesananContent = styled.div`
    width: 100%;
    flex-direction: column;
    align-items: ${(props)=>props.image ? "center" : "left"};
    justify-content: ${(props)=>props.image ? "center" : "left"};
    flex-basis: ${(props)=>props.image ? "12%" : "85%"};
    margin-right: ${(props)=>props.image ? "9px" : "0"};
    @media screen and (max-width: 1144px) {
        flex-basis: ${(props)=>props.image ? "15%" : "83%"};
    }
`;

export const ImagePesanan = styled.div`
    height: 95px;
    width:95px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color:#cfcaca;
    @media screen and (max-width: 484px) {
        width: 100%;
        height: 150px;
    }
`;

export const JudulHarga = styled.div`
    font-weight: ${(props=>props.judul ? "normal":"bold")};
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
    margin-bottom: ${(props=>props.judul ? "2px":"15px")};
`;

export const SubJudul = styled.div`
    font-size: 12px;
    line-height: 18px;
    color: #909DAA;
`;

export const SubJudulContent = styled.div`
    font-weight: ${(props)=>props.status ? "bold" : "normal"};
    font-size: 14px;
    line-height: 21px;
    color: ${(props)=>props.tanggal ? "#212B36" : "#E30045"};
    margin-bottom: 3px;
    @media screen and (max-width: 320px) {
        font-size: 12px;
    }
`;

export const BoxNotEntry = styled.div`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    width: 100%;
    height: 200px;
    align-items:center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
`;