import styled from "styled-components";
import {AiFillStar} from "react-icons/ai";
import {BsFillTrashFill} from "react-icons/bs";

export const BoxedPrice = styled.div`
    background: white;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    flex-direction: column;
    padding: 6px;
    width: 100%;
    min-height: 285px;
    cursor: pointer;
`;

export const BoxImage = styled.div`
    height: 170px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #808080;
    margin-bottom: 4px;
    @media screen and (max-width: 443px) {
        height: 150px;
    }
`;

export const BoxExp = styled.div`
    font-size: ${(props)=> props.titlee ? "14px":"10px"};
    line-height: ${(props)=> props.titlee ? "21px":"15px"};
    color: ${(props)=> props.titlee ? "#212B36":"#909DAA"};
    display: flex;
    align-self: center;
    word-wrap:break-word;
`;

export const Price = styled.h3`
    font-size: 18px;
    line-height: ${(props)=>props.handle ? "24px" : "27px"};
    color: #212B36;
    word-wrap:break-word;
    @media screen and (max-width: 1130px) {
        font-size: ${(props)=>props.handle ? "12px" : "15px"};
    }
`;

export const ApartPriced = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 115px;
    justify-content:space-between;
`;

export const Star = styled(AiFillStar)`
    font-size: 15px;
    color: #F2C94C;
    padding: 0 2px;
`;

export const Trash = styled(BsFillTrashFill)`
    font-size: 20px;
    color: white;
    padding: 0 2px;
`;

export const BoxKat = styled.div`
    border-radius: 10px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color:#cfcaca;
    width: 100%;
    height: 140px;
    cursor: pointer;
    transition: .3s linear;
    &:hover{
        transform: scale(1.01);
    }
`;

export const BoxKatOpac = styled.div`
    background: #000000;
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
    display: flex;
    width:100%;
    height: 100%;
    align-items: center;
`;

export const BoxKatExp = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width: 634px) {
        font-size: 14px;
    }
`;

export const BlogBoxHome = styled.div`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    min-height: 260px;
    cursor: pointer;
`;

export const BlogBoxImage = styled.div`
    border-radius: 5px 5px 0 0;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 130px;
`;

export const BlogExpHome = styled.div`
    padding: ${(props) => props.title ? "5px 10px 0" : "0 10px"};
    font-weight: ${(props) => props.title ? "bold" : "normal"};
    font-size: ${(props) => props.title ? "14px" : "12px"};
    line-height: ${(props) => props.title ? "21px" : "20px"};
    color: #212B36;
`;

export const ButtonVendor = styled.div`
    background: #FFFFFF;
    width: ${(props)=>props.changed ? "100%" : "50%"};
    border: ${(props)=>props.ubah? "1px solid #E30045" : "1px solid #909DAA"};
    box-sizing: border-box;
    border-radius: 3px;
    text-align:center;
    font-weight: 500;
    font-size: 10px;
    padding: 8px;
    line-height: 15px;
    height: fit-content;
    cursor:pointer;
    color: ${(props)=>props.ubah? "#E30045" : "#909DAA"};
    margin-right: ${(props)=>props.ubah? "5px" : "0"};
`;

export const ButtonDelete = styled.div`
    background: #E30045;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 8px;
    height: fit-content;
    cursor:pointer;
    margin: 4px auto;
`;

export const ApartButton = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 40%;
    width: 100%;
    column-gap: 5px;
`;

export const BoxedVendor = styled.div`
    background: white;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    flex-direction: column;
    padding: 6px;
    width: 100%;
    min-height: 250px;
`;
export const ApartVendor = styled.div`
    display: flex;
    flex-direction: column;
    height: ${(props)=>props.ars ? "155px" : "105px"};
    justify-content: space-between;
    @media screen and (max-width: 423px) {
        height: ${(props)=>props.ars ? "180px" : "130px"};
    }
    @media screen and (max-width: 375px) {
        height: ${(props)=>props.ars ? "145px" : "95px"};
    }
    @media screen and (max-width: 209px) {
        height: ${(props)=>props.ars ? "170px" : "120px"};
    }
`;