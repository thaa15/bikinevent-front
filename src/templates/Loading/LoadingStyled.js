import styled from "styled-components";

export const LoadingBg = styled.div`
    background-color: white;
    min-height: 700px;
    display: flex;
    align-items:center;
    justify-content:center;
    width:100%;
    transition: .3s ease-out
    opacity:${(props)=>props.load ? "1" : "0"};
`;

export const ImageLoading = styled.img`
    border-radius: 100%;
`;