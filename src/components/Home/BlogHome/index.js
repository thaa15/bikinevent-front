import React from "react";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";
import {TitleHome,ApartView,LinkTitle} from "../HomeGlobal";
import {BlogHomeBox} from "../../../templates/Box";
import {BlogBoxGrid} from "./BlogHomeStyled";
import {BlogHomeData} from "../../../datas/populerdata";
import {Link} from "react-router-dom";

const BlogHome = () => {
    return(
        <>
        <GlobalTemplate>
            <ApartView>
                <TitleHome>Blog</TitleHome>
                <TitleHome view>
                    <LinkTitle to="/">Lihat Semua</LinkTitle>
                </TitleHome>
            </ApartView>
            <BlogBoxGrid>
                {BlogHomeData.map((data,idx) => {
                    return(
                        <Link to={`/blog/${data.id}`}
                        style={{textDecoration:"none",color:"#212B36"}}>
                        <BlogHomeBox
                        key={idx}
                        titlee={data.title}
                        image={data.image}
                        desc={data.desc}
                        />
                        </Link>
                    )
                })}
            </BlogBoxGrid>
        </GlobalTemplate>
        </>
    )
}
export default BlogHome;