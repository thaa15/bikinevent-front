import styled from "styled-components";

export const TempLegal = styled.div`
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

export const OtherLegal = styled.div`
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

export const MainLegal = styled.div`
    flex-basis: 80%;
    padding: 10px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
    overflow-x: hidden;

    @media screen and (max-width: 957px) {
        -webkit-box-ordinal-group: 1;
        -moz-box-ordinal-group: 1;
        box-ordinal-group: 1;
    }
`;

export const LegalWritedContent = styled.div`
    white-space: pre-line;  
    vertical-align: bottom;
    margin: ${(props) => props.title ? "10px 0 6px" : props.last ? "0 0 60px": "0 0 20px"};
    font-weight: ${(props) => props.title ? "bold" : "normal"};
    font-size: ${(props) => props.title ? "22px" : "14px"};
    line-height: 20px;
    color: #212B36;
    ul {
        padding-left: 20px;
    }
    img{
        width: 90%;
        margin: 0 auto;
    }
`;