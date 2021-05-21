import styled from "styled-components";

export const GlobalTemplate = styled.div`
    display: flex;
    flex-direction: ${(props) => props.row ? "row" : "column"};
    margin: 5px auto 25px;
    max-width: 80%;
    overflow: hidden;
`;