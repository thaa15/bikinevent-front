import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 361px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;