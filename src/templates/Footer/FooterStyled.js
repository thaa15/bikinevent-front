import styled from "styled-components";
import {Link} from "react-router-dom";

export const Foot = styled.nav`
    background: #F9FAFB;
    width:100%;
`;

export const FootSet = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    padding: 45px 32px;
    row-gap: 30px;
    column-gap: 10px;
    justify-content: center;
    @media screen and (max-width: 1117px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 741px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 444px) {
        grid-template-columns: repeat(2, 0.5fr);
    }
    @media screen and (max-width: 356px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const FooterBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-flow: column wrap;
    align-content: center;
    @media screen and (max-width: 1023px) {
        flex-flow: column;
    }
`;

export const ImageFooter = styled.img`
    width: 226px;
    @media screen and (max-width: 605px) {
        width: 80%;
    }
`;

export const FooterExp = styled.div`
    font-weight: ${(props) => props.title ? "bold" : "normal"};
    margin: ${(props) => props.row ? "3px 0 0" : "20px 0 0 0"};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.2px;
    color: #212B36;
`;

export const FooterExpLink = styled(Link)`
    font-size: 14px;
    margin: 3px 0 0;
    letter-spacing: -0.2px;
    color: #212B36;
    text-decoration: none;
    &:hover{
        color: #E30045;
    }
`;

export const CopyWright = styled.div`
    max-width: 90%;
    margin: 0 auto;
    font-size: 14px;
    padding: 0 32px 45px;
    color: #212B36;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 175px;
`;

export const SocialIconLink = styled.a`
  color: #111;
  font-size: 30px;
  margin-right: 3px;
`;