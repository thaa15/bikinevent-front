import React, { useState, useEffect } from "react";
import { BotBanTemp, BannerWrited } from "./BotBannerStyled";
import fotban from "../../../images/botban.png";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { homeService } from "../../../services/Home";

const BotBanner = () => {
  const [bannerBawah, setBannerBawah] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getHome();
      const data = response.data;
      console.log(data);
      setBannerBawah(data.bottom_banner);
    };
    fetchData();
  }, []);

  if (typeof bannerBawah == "undefined") return null;

  return (
    <GlobalTemplate>
      <BotBanTemp src={bannerBawah.url} />
    </GlobalTemplate>
  );
};

export default BotBanner;
