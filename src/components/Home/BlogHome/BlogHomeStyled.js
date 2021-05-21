import styled from "styled-components";

export const BlogBoxGrid = styled.div`
    display: grid;
    width: 100%;
    grid-gap: 15px;
    align-items:center;
    grid-template-columns: repeat(3,1fr);
    @media screen and (max-width: 769px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 512px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;