import styled from "styled-components";

export const TampilanWritedWidth = styled.div`
    width:80%;
`;

export const TampilanWritedContent = styled.p`
    white-space: pre-line;  
    vertical-align: bottom;
    font-size: 14px;
    line-height: 21px;
    color: #212B36;
`;

export const GridTempTampilan = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    
    justify-content: space-between;
    grid-gap: 10px;
    @media screen and (max-width: 845px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const BoxImageTampilan = styled.div`
    height: 200px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor:pointer;
`;

export const Imagees = styled.img`
  width:100%;
`;