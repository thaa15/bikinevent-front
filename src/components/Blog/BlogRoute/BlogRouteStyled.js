import styled from "styled-components";
import {Link} from "react-router-dom";

export const TempBlog = styled.div`
display: flex;
flex-direction: row;
width: 100%;
@media screen and (max-width: 957px) {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
}
`;

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

    @media screen and (max-width: 957px) {
        -webkit-box-ordinal-group: 2;
        -moz-box-ordinal-group: 2;
        box-ordinal-group: 2;
        margin-top: 20px;
    }
`;

export const MainBlog = styled.div`
    flex-basis: 80%;
    padding: 10px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;

    @media screen and (max-width: 957px) {
        -webkit-box-ordinal-group: 1;
        -moz-box-ordinal-group: 1;
        box-ordinal-group: 1;
    }
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
    &:hover {
        background-color: ${(props) => props.aktif ? "#F2F2F2" : "#f7f8fa"};
    }
`;