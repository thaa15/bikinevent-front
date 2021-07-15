import styled from "styled-components";

export const BotBanTemp = styled.div`
    border-radius: 20px;
    width: 100%;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 290px;
`;

export const BannerWrited = styled.div`
    font-size: 14px;
    max-width: 410px;
    line-height: 17px;
    text-align: center;
    color: #212B36;
`;