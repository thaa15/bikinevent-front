import styled from "styled-components";

export const BgChat = styled.div`
    background: ${(props)=>props.exist ? "transparent" : "#FFFFFF"};
    border: ${(props)=>props.exist ? "none" : "1px solid #E0E0E0"};
    box-sizing: border-box;
    border-radius: 10px;
    margin: -100px 0 10px;
    max-height: 510px;
    padding: ${(props)=>props.exist ? "0" : "20px"};
    width: 100%;
`;