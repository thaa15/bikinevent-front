import styled from "styled-components";

export const KategoriGrid = styled.div`
    display: grid;
    width: 100%;
    grid-gap: 10px;
    grid-template-columns: repeat(3,1fr);
    @media screen and (max-width: 634px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;