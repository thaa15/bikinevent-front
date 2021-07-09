import styled from "styled-components";

/*export const BannerContainer = styled.div`
  min-height: 330px;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;*/

export const BannerContainer = styled.img`
  min-height: 330px;
  max-height: 390px;
  width: 100%;
  object-fit: cover;
`;