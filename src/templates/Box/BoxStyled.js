import styled from "styled-components";
import {AiFillStar} from "react-icons/ai";

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
    background-color:#cfcaca;
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
    
`;

export const Price = styled.h3`
    font-size: 18px;
    line-height: 27px;
    color: #212B36;
    @media screen and (max-width: 1130px) {
        font-size: 15px;
    }
`;

export const ApartPriced = styled.div`
    display: flex;
    flex-direction: column;
    height: 115px;
    @media screen and (max-width: 443px) {
        height: 165px;
    }
`;

export const Star = styled(AiFillStar)`
    font-size: 15px;
    color: #F2C94C;
    padding: 0 2px;
`;

export const BoxKat = styled.div`
    border-radius: 10px;
    background-image: url(${(props) => props.imge});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 140px;
    cursor: pointer;
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