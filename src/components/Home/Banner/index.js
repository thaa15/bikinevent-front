import React, { useEffect, useState } from "react";
import {
  BannerContainer,
  Sliders,
} from "./BannerStyled";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { homeService } from "../../../services/Home";
import logocomp from "../../../images/logocomp.png"

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const AutoplaySlider = withAutoplay(Sliders);

  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getHome();
      const data = response.data;
      if (window.innerWidth > 660) setBanner(data.banner_promo);
      else setBanner(data.banner_promo_alt);
    };
    fetchData();
  }, []);

  const startupScreen = (
    <div>
      <BannerContainer
        href="bikinevent.id"
       />
    </div>
  );

return (
  <AutoplaySlider
    play={true}
    startupScreen={startupScreen}
    cancelOnInteraction={false}
    interval={4000}
    className="aws-btn"
  >
    {banner.map((item, idx) => {
      return (
        <div>
          <BannerContainer
            href={item.link}
            src={item.promo_banner.url}
            key={idx} />
        </div>
      );
    })}
  </AutoplaySlider>
);
};

export default Banner;
