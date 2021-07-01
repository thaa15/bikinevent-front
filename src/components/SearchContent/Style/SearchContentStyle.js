import styled from "styled-components"

export const TempSearch = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 25px;
    @media screen and (max-width: 957px) {
        display: -webkit-box;
        display: -moz-box;
        display: box;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        box-orient: vertical;
    }
`;

export const OtherSearch = styled.div`
    flex-basis: 25%;
    padding: 4px;
    width: 100%;
    margin-right: 10px;
    background: #FFFFFF;
    height: fit-content;
    display:${(props)=>props.aktif ? "flex" : "flex"};
    flex-direction:column;
    @media screen and (max-width: 957px) {
        display:${(props)=>props.aktif ? "block" : "none"};
        position: fixed;
        z-index: 999;
        width: 100%;
        height:100%;
        background: white;
        transition: all 1s ease-in-out;
        padding: 20px;
        overflow-Y: scroll;
        left:0;
        opacity: ${(props)=>props.aktif ? "100%" : "0"};
        top: ${(props)=>props.aktif ? "0" : "-100%"};
    }
`;

export const MainSearch = styled.div`
    flex-basis: 73%;
    padding: 0 10px;
    width: 100%;
    background: #FFFFFF;

    @media screen and (max-width: 957px) {
        -webkit-box-ordinal-group: 1;
        -moz-box-ordinal-group: 1;
        box-ordinal-group: 1;
    }
`;