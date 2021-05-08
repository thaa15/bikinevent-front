import styled from "styled-components";
import {Link} from "react-router-dom";

export const Foot = styled.nav`
    background: #F9FAFB;
`;

export const FootSet = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    padding: 45px 32px;
`;

export const FooterBox = styled.div`
    flex-basis: 20%;
    display: flex;
    width: 100%;
    margin-right: 10px;
    flex-direction: column;
    flex-flow: column wrap;
    align-content: center;
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