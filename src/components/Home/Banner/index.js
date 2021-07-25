import React, { useEffect, useState } from "react";
import { 
  BannerContainer, 
  BannerContainers, 
  Slider,
} from "./BannerStyled";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { homeService } from "../../../services/Home";
const AutoplaySlider = withAutoplay(Slider);

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
      interval={5000}
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
