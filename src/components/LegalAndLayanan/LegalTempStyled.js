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

    @media screen and (max-width: 957px) {
        -webkit-box-ordinal-group: 1;
        -moz-box-ordinal-group: 1;
        box-ordinal-group: 1;
    }
`;

export const LegalWritedContent = styled.div`
    white-space: pre-line;  
    vertical-align: bottom;
    margin: ${(props) => props.title ? "10px 0 5px" : "0 0 20px"};
    font-weight: ${(props) => props.title ? "600" : "normal"};
    font-size: 14px;
    line-height: 20px;
    color: #212B36;
`;