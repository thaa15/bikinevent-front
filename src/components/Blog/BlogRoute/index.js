import React from "react";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";
import {
    OtherBlog,
    Otwrit,
    MainBlog,
    BlogBoxImage,
    BlogWritedContent
} from "./BlogRouteStyled";
import EllipsisText from "react-ellipsis-text";

const BlogRoute = ({data, datas, ids}) => {
    return(
        <GlobalTemplate row>
            <OtherBlog>
                {datas.slice(0,6).map((item,idx) => {
                    return(
                        <Otwrit key={idx}
                                aktif={item.id === ids}
                                to={`/blog/${item.id}`}>
                            <EllipsisText text={item.title} length={"23"}/>
                        </Otwrit>
                    )
                })}
            </OtherBlog>
            <MainBlog>
                {data.map((item,idx) => {
                    return(
                        <>
                            <BlogBoxImage src={item.image} key={idx}/>
                            <BlogWritedContent title>{item.title}</BlogWritedContent>
                            <BlogWritedContent>{item.desc}</BlogWritedContent>
                        </>
                    )
                })}
            </MainBlog>
        </GlobalTemplate>
    )
}

export default BlogRoute;