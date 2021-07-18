import styled from "styled-components";

export const PesananHome = styled.div`
    margin:${(props)=>props.top ? "-100px 0 10px" : "20px 0 10px"};
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #212B36;
    z-index: 10;
`;

export const BoxManage = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items:center;
    align-self:center;
    margin-bottom: 10px;
    width: 100%;
    @media screen and (max-width: 728px) {
        flex-direction: column;
    }
`;

export const BoxTrackContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    flex:1;
`;

export const BoxManageContent = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    flex:1;
    align-self: center;
    align-items: center;
    width: 100%;
    p {
        font-size: 14px;
        line-height: 21px;
        color: #212B36;
        margin: 3px 0;
    }
    h6 {
        font-size: 18px;
        line-height: 27px;
        color: #212B36;
        margin: 3px 0;
    }
    @media screen and (max-width: 728px) {
        flex-direction: column;
    }
`;

export const ImageOrder = styled.img`
    width: 156px;
    height: 156px;
    object-fit: cover;
    
    @media screen and (max-width: 728px) {
        width: 100%;
        height: 220px;
    }
`;

export const ButtonStatus = styled.div`
    width: 159px;
    white-space: pre-line;  
    vertical-align: bottom;
    background: #FFFFFF;
    border: 1px solid #E30045;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #E30045;
    margin-left: auto;
    padding: 8px;
    @media screen and (max-width: 728px) {
        margin: 10px 0 3px;
        width: 100%;
    }
`;

export const BoxContentTrack = styled.div`
    padding: 15px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    margin-bottom: 30px;
    transform: scale(1);
    transition: transform 0.5s linear;
    &:hover{
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
        transform: scale(1.01);
    }
`;