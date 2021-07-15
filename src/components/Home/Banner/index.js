import React from "react";
import {
    BannerContainer,
    BannerContainers,
    Slider
} from "./BannerStyled";
import bannerhome from "../../../images/homebanner.png";
import bannerAtas from "../../../images/bannerAtas.png";
import bannerAtas1 from "../../../images/bannerAtas1.png";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(Slider);

const photos = [
    {
        link: "/detailed-product/60aa10737c9f7c3c20e55f90",
        photo: bannerAtas
    },
    {
        link: "/detailed-product/60a9f35b0a10f64098dc0f2c",
        photo: bannerhome
    },
    {
        link: "/detailed-product/60dec9d8018e081536512cd6",
        photo: bannerAtas1
    },
]

const Banner = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={10000}
            className="aws-btn"
        >
            {photos.map((item, idx) => {
                return (
                    <div>
                        <BannerContainers to={item.link}>
                            <BannerContainer src={item.photo} key={idx} />
                        </BannerContainers>
                    </div>
                )
            }
            )}
        </AutoplaySlider>
    )
};

export default Banner;