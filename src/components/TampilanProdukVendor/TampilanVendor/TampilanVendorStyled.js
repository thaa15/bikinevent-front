import styled from "styled-components";

export const GridVendorTampilan = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    grid-gap: 10px;
    @media screen and (max-width: 845px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const GridVendorPortofolio = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    grid-gap: 10px;
    @media screen and (max-width: 998px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 728px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;