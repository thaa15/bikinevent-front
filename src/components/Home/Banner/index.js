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
      cancelOnInteraction={false}
      interval={6000}
      className="aws-btn"
    >
      {banner.map((item, idx) => {
        console.log(banner)
        return (
          <>
            {window.innerWidth <= 1000 ? (
              <div>
                <BannerContainers href={item.link}>
                  <BannerContainer src={item.promo_banner.formats.large.url} key={idx} />
                </BannerContainers>
              </div>
            ) : window.innerWidth <= 750 ? (
              <div>
                <BannerContainers href={item.link}>
                  <BannerContainer src={item.promo_banner.formats.medium.url} key={idx} />
                </BannerContainers>
              </div>
            ) : window.innerWidth <= 500 ? (
              <div>
                <BannerContainers href={item.link}>
                  <BannerContainer src={item.promo_banner.formats.small.url} key={idx} />
                </BannerContainers>
              </div>
            ) : window.innerWidth <= 250 ? (
              <div>
                <BannerContainers href={item.link}>
                  <BannerContainer src={item.promo_banner.formats.thumbnail.url} key={idx} />
                </BannerContainers>
              </div>
            ) : (
              <div>
                <BannerContainers href={item.link}>
                  <BannerContainer src={item.promo_banner.url} key={idx} />
                </BannerContainers>
              </div>
            )}
          </>
        );
      })}
    </AutoplaySlider>
  );
};

export default Banner;
