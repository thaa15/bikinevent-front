import styled from "styled-components";

export const PopulerGrid = styled.div`
    display: grid;
    width: 100%;
    grid-gap: 15px;
    grid-template-columns: repeat(5, 1fr);
    @media screen and (max-width: 1130px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 911px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 676px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;