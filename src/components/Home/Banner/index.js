import React, { useEffect, useState } from "react";
import { BannerContainer, BannerContainers, Slider } from "./BannerStyled";
import bannerhome from "../../../images/homebanner.png";
import bannerAtas from "../../../images/bannerAtas.png";
import bannerAtas1 from "../../../images/bannerAtas1.png";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { homeService } from "../../../services/Home";
const AutoplaySlider = withAutoplay(Slider);

const photos = [
  {
    link: "/detailed-product/60aa10737c9f7c3c20e55f90",
    photo: bannerAtas,
  },
  {
    link: "/detailed-product/60a9f35b0a10f64098dc0f2c",
    photo: bannerhome,
  },
  {
    link: "/detailed-product/60dec9d8018e081536512cd6",
    photo: bannerAtas1,
  },
];

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getHome();
      const data = response.data;
      setBanner(data.banner_promo);
    };
    fetchData();
  }, []);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={10000}
      className="aws-btn"
    >
      {banner.map((item, idx) => {
        return (
          <div>
            <BannerContainers href={item.link}>
              <BannerContainer src={item.promo_banner.url} key={idx} />
            </BannerContainers>
          </div>
        );
      })}
    </AutoplaySlider>
  );
};

export default Banner;
