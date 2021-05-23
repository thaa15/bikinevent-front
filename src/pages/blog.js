import React,{useState} from "react";
import HeaderSmall from "../templates/HeaderSmall";
import BlogRoute from "../components/Blog/BlogRoute";
import AllBlog from "../components/Blog/AllBlog";
import { BlogHomeData } from "../datas/populerdata";
import LoadingPage from "../templates/Loading";

const RoutedBlog = ({match}) =>{
    const blogdata = BlogHomeData.filter(x => x['id'] == match.params.id);
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
        <HeaderSmall text="Blog Kami"/>
        <BlogRoute
        data={blogdata}
        datas={BlogHomeData}
        ids={match.params.id}/>
        </>
        )}
        </>
    )
}

const Blogs = () =>{
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
        <HeaderSmall text="Blog Kami"/>
        <AllBlog datas={BlogHomeData}/>
        </>
        )}
        </>
    )
}

export {RoutedBlog,Blogs};