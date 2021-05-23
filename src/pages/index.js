import React,{useState} from "react";
import Banner from "../components/Home/Banner";
import Populer from "../components/Home/Populer";
import Kategori from "../components/Home/Kategori";
import OtherPopuler from "../components/Home/OtherPopuler";
import BlogHome from "../components/Home/BlogHome";
import BotBanner from "../components/Home/BotBanner";
import LoadingPage from "../templates/Loading";

const Home = () =>{
    const [isLoading,setIsLoading] = useState(true);

    setTimeout(()=>{
        setIsLoading(false);
    },1500)
    return(
        <>
        {isLoading ? (
        <>
        <LoadingPage/>
        </>
        ) : (
        <>
        <Banner/>
        <Populer/>
        <Kategori/>
        <OtherPopuler/>
        <BlogHome/>
        <BotBanner/>
        </>
        )}
        </>
    );
};

export default Home;