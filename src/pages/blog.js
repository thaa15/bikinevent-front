import React, { useEffect, useState } from "react";
import HeaderSmall from "../templates/HeaderSmall";
import BlogRoute from "../components/Blog/BlogRoute";
import AllBlog from "../components/Blog/AllBlog";
import { BlogHomeData } from "../datas/populerdata";
import LoadingPage from "../templates/Loading";
import { blogService } from "../services/Blog";

const RoutedBlog = ({ match }) => {
  const [blogData, setBlogData] = useState();
  const [blogDatas, setBlogDatas] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await blogService.getBlogById(match.params.id);
      const responseAll = await blogService.getAllBlog();
      const data = response.data;
      const allData = responseAll.data;
      setBlogDatas(allData);
      setBlogData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [match.params.id]);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <HeaderSmall text="Blog Kami" />
          <BlogRoute data={blogData} datas={blogDatas} ids={match.params.id} />
        </>
      )}
    </>
  );
};

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <HeaderSmall text="Blog Kami" />
          <AllBlog datas={BlogHomeData} />
        </>
      )}
    </>
  );
};

export { RoutedBlog, Blogs };
