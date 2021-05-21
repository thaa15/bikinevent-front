import styled from "styled-components";

export const GridTempBlog = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-content: space-between;
    grid-gap: 30px;
    min-height: 840px;
    -webkit-transition: all .9s linear;
    -moz-transition: all .9s linear;
    -o-transition: all .9s linear;
    -ms-transition: all .9s linear;
    transition: all .9s linear;
    transform: ${(props) => props.right ? "translateX(-100%)" : props.left ? "translateX(100%)" : "translateX(0)"};
    @media screen and (max-width: 936px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 512px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
`;

export const PaginationNum = styled.div`
    padding: 8px 16px;
    text-align: center;
    width: fit-content;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${(props) => props.num ? "white" : "black"};
    background: ${(props) => props.num ? "#E30045" : "white"};
    &:hover{
        background-color: ${(props) => props.num ? "none" : "#ddd"};
    }
`;