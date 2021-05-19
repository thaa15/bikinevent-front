import React from "react";
import HeaderSmall from "../templates/HeaderSmall";
import BlogRoute from "../components/Blog/BlogRoute";
import AllBlog from "../components/Blog/AllBlog";
import { BlogHomeData } from "../datas/populerdata";

const RoutedBlog = ({match}) =>{
    const blogdata = BlogHomeData.filter(x => x['id'] == match.params.id)
    return(
        <>
        <HeaderSmall text="Blog Kami"/>
        <BlogRoute
        data={blogdata}
        datas={BlogHomeData}
        ids={match.params.id}/>
        </>
    )
}

const Blogs = () =>{
    return(
        <>
        <HeaderSmall text="Blog Kami"/>
        <AllBlog datas={BlogHomeData}/>
        </>
    )
}

export {RoutedBlog,Blogs};