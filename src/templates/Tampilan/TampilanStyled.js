import styled from "styled-components";
import { AiFillStar, AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";

export const BgTop = styled.div`
    background: #E5E5E5;
    width: 100%;
    min-height:${(props) => props.prod ? "406px" : "333px"};
`;

export const ShowedObj = styled.div`
    display: flex;
    display:-webkit-flex;
    flex-direction: row;
    -webkit-flex-direction:row;
    -ms-flex-direction:row;
    padding: 30px;
    margin: 50px auto;
    background: #FFFFFF;
    border-radius: 10px;
    width: 100%;
    align-items: ${(props) => props.prod ? "none" : "center"};
    height:${(props) => props.prod ? "406px" : "228px"};
    min-height:${(props) => props.prod ? "406px" : "228px"};
    @media screen and (max-width: 955px) {
        flex-direction: ${(props) => props.prod ? "column" : "row"};
        -webkit-flex-direction:${(props) => props.prod ? "column" : "row"};
        -ms-flex-direction:${(props) => props.prod ? "column" : "row"};
        height:${(props) => props.prod ? "606px" : "228px"};
    }
    @media screen and (max-width: 550px) {
        flex-direction: column;
        -webkit-flex-direction:column;
        -ms-flex-direction:column;
        height:${(props) => props.prod ? "606px" : "328px"};
    }
`;

export const ApartContent = styled.div`
    flex-basis: ${(props) => props.imagee ? "35%" : "65%"};
    height: 100%;
    width: 100%;
`;

export const ImageProduk = styled.div`
    width: 297px;
    margin-right: 23px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 955px) {
        height: 500px;
        width: 100%;
    }
`;

export const GetApart = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content:center;
    @media screen and (max-width: 550px) {
        height:fit-content;
    }
`;

export const GetButBot = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column-reverse;
    div{
        display:flex;
        flex-direction: row;
        @media screen and (max-width: 606px) {
            flex-direction: column;
            -webkit-flex-direction:column;
            -ms-flex-direction:column;
        }
    }
`;

export const BoxExp = styled.div`
    font-size: ${(props) => props.titlee ? "18px" : "14px"};
    line-height: ${(props) => props.titlee ? "30px" : "21px"};
    color: ${(props) => props.titlee ? "#212B36" : "#909DAA"};
    display: flex;
    align-items: center;
    margin: 6px 0;
`;

export const Price = styled.h3`
    font-size: 30px;
    line-height: 45px;
    color: #212B36;
    @media screen and (max-width: 1130px) {
        font-size: 24px;
    }
`;

export const Star = styled(AiFillStar)`
    font-size: 18px;
    color: #F2C94C;
    margin-right:9px;
`;

export const Shopping = styled(AiFillShopping)`
    font-size: 18px;
    color: #9B51E0;
    margin-right:9px;
`;

export const ButtonBottom = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    background: ${(props) => props.call ? "#FFFFFF" : "#E30045"};
    border-radius: 10px;
    cursor:pointer;
    min-width: 211px;
    border:${(props) => props.call ? "1px solid #E30045" : "none"};
    text-decoration:none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-right: 5px;
    margin-bottom: ${(props) => props.need ? "5px" : "0"};
    color: ${(props) => props.call ? "#E30045" : "#FFFFFF"};
    @media screen and (max-width: 606px) {
        margin: 10px 0;
    }
    &:hover {
        background: ${(props) => props.call ? "#f5eded" : "#a3143f"};
    }
    &:active{
        background: ${(props) => props.call ? "#f5eded" : "#c91a4f"};
    }
`;

export const ChatShop = styled(BsChatFill)`
    font-weight: 500;
    font-size: 14px;
    color: #E30045;
    margin-right: 11px;
`;

export const Shop = styled(AiFillShop)`
    font-weight: 500;
    font-size: 14px;
    color: white;
    margin-right: 11px;
`;

export const CartShop = styled(FaShoppingCart)`
    font-weight: 500;
    font-size: 14px;
    color: white;
    margin-right: 11px;
`;

export const VendorPhoto = styled.div`
    border-radius: 100%;
    height: ${(props) => props.inComment ? "102px" : "139px"};
    width: ${(props) => props.inComment ? "102px" : "139px"};
    margin-right: 23px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #F2994A;
    @media screen and (max-width: 550px) {
        margin-right: 0;
    }
`;

export const TitleTampilan = styled.h3`
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #212B36;
    margin: 25px 0 15px;
`;

export const VendorCommentsPhoto = styled.div` 
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    width: 100%;
    @media screen and (max-width: 789px) {
        flex-direction: column;
        -webkit-flex-direction:column;
        -ms-flex-direction:column;
        justify-content: space-between;
    }
`;

export const TampilanComments = styled.div`
    display: flex;
    flex-direction: column;
    background: #F9FAFB;
    border-radius: 10px;
    padding:32px;
    width:100%;
`;

export const TampilanCommentsVendor = styled.div`
    display: flex;
    align-self: center;
    align-items:center;
    flex-basis: ${(props) => props.button ? "35%" : "65%"};
    flex-direction: ${(props) => props.button ? "row-reverse" : "row"};
    width: fit-content;
    @media screen and (max-width: 789px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const TampilanApart = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CommentsPart = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
background: #FFFFFF;
border-radius: 3px;
width:100%;
margin-bottom: 7px;
`;

export const CommentsPartHeight = styled.div`
    width: 100%;
    max-height: 500px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 0 !important;
      }
      
      ::-webkit-scrollbar-thumb{
        background: transparent !important;
        border-radius: 8px !important;
      }
      
      ::-webkit-scrollbar-thumb:hover{
        background: rgba(158, 158, 158,0.9) !important;
        border-radius: 8px !important;
      }
`;

export const CommentProfile = styled.div`
display:flex;
flex-direction:column;
overflow:hidden;
flex-basis:${(props) => props.profile ? "10%" : "90%"};
align-items: ${(props) => props.profile ? "center" : "left"};
text-align: ${(props) => props.profile ? "center" : "left"};
align-self: center;
@media screen and (max-width: 789px) {
    flex-basis:${(props) => props.profile ? "20%" : "75%"};
}
@media screen and (max-width: 495px) {
    flex-basis:${(props) => props.profile ? "30%" : "65%"};
}
`;

export const UserPhoto = styled.div`
    border-radius: 100%;
    height: 43px;
    width: 43px;
    margin-bottom: 3px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #F2994A;
`;

export const UserName = styled.div`
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #909DAA;
    word-wrap:break-word;
    @media screen and (max-width: 789px) {
        line-height: 16px;
    }
`;

export const UserComment = styled.div`
    font-size: 12px;
    line-height: 20px;
    color: #212B36;
    word-wrap:break-word;
    @media screen and (max-width: 789px) {
        line-height: 16px;
    }
`;

export const UserRate = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    font-size: 10px;
    line-height: 20px;
    color: #909DAA;
`;

export const StarUserRate = styled(AiFillStar)`
    font-size: 15px;
    color: #F2C94C;
    line-height: 20px;
    margin-right: 9px;
`;

export const BoxExpVendor = styled.div`
    font-weight: ${(props) => props.titlee ? "bold" : "normal"};
    font-size: ${(props) => props.titlee ? "20px" : "14px"};
    line-height: ${(props) => props.titlee ? "30px" : "21px"};
    color: ${(props) => props.titlee ? "#212B36" : "#909DAA"};
    display: flex;
    align-items: center;
    margin: 6px 0;
`;

export const PortofolioBox = styled.div`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    min-height: 153px;
    padding: 7px;
`;

export const PortofolioTitle = styled.div`
    text-align:center;
    width:100%;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #212B36;
    margin-bottom: 5px;
`;

export const PartOfImage = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 4px;
`;

export const PortofolioImage = styled.div`
    width: 100%;
    height: 113px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor:pointer;
`;