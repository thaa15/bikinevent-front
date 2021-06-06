import React, { useState, useEffect } from "react";
import Banner from "../components/Home/Banner";
import Populer from "../components/Home/Populer";
import Kategori from "../components/Home/Kategori";
import OtherPopuler from "../components/Home/OtherPopuler";
import BlogHome from "../components/Home/BlogHome";
import BotBanner from "../components/Home/BotBanner";
import LoadingPage from "../templates/Loading";
import { blogService } from "../services/Blog";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogPost, setBlogPost] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await blogService.getAllBlog();
      const data = response.data;
      setBlogPost(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <Banner />
          <Populer />
          <Kategori />
          <OtherPopuler />
          <BlogHome blogData={blogPost} />
          <BotBanner />
        </>
      )}
    </>
  );
};

export default Home;
