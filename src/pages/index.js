import React from "react";
import Banner from "../components/Home/Banner";
import Populer from "../components/Home/Populer";
import Kategori from "../components/Home/Kategori";
import OtherPopuler from "../components/Home/OtherPopuler";
import BlogHome from "../components/Home/BlogHome";

const Home = () =>{
    return(
        <>
        <Banner/>
        <Populer/>
        <Kategori/>
        <OtherPopuler/>
        <BlogHome/>
        </>
    );
};

export default Home;