import styled from "styled-components";
import {Link} from "react-router-dom";

export const OtherBlog = styled.div`
    flex-basis: 18%;
    padding: 4px;
    width: 100%;
    margin-right: 10px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    height: fit-content;
`;

export const MainBlog = styled.div`
    flex-basis: 80%;
    padding: 10px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
`;
export const BlogBoxImage = styled.div`
    border-radius: 10px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 294px;
    width: 100%;
`;

export const BlogWritedContent = styled.div`
    white-space: pre-line;  
    vertical-align: bottom;
    margin: 10px 0;
    font-weight: ${(props) => props.title ? "600" : "normal"};
    font-size: 14px;
    line-height: 20px;
    color: #212B36;
`;
export const Otwrit = styled(Link)`
    display: block;
    text-decoration: none;
    padding: 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #909DAA;
    background-color: ${(props) => props.aktif ? "#F2F2F2" : "white"};
    border-radius: 5px;
`;