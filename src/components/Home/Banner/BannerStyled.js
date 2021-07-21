import styled from "styled-components";
import AwesomeSlider from 'react-awesome-slider';
import { Link } from "react-router-dom";

export const BannerContainers = styled.a`
  display: block;
  height: 361px;
  width: 100%;
  min-width: 100%;
  text-decoration: none;
  cursor:pointer;
  z-index: 10;
`;

export const CarouselContainer = styled.div`
  overflow: hidden;
  visibility: visible;
  position: relative
`;

export const BannerContainer = styled.div`
  height: 361px;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Slider = styled(AwesomeSlider)`
.awssld__wrapper{
  margin: 0 auto !important;
  display: block;
  height: 361px;
}
.awssld__bullets{
  bottom: 10px;
  z-index: 5;
  height: 12px !important;
}
.awssld__content  {
  width: 100% !important;
  position: static !important;
}
.awssld__content > div {
  background-color: transparent;
  width: 100%;
  display: block;
  height: 100%;
}
.awssld__container{
  height: fit-content;
}

.awssld__bullets button{
  width: 5px !important;
  height: 5px !important;
}
`;