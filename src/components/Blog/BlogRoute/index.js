import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import {
  OtherBlog,
  Otwrit,
  MainBlog,
  BlogBoxImage,
  BlogWritedContent,
  TempBlog,
} from "./BlogRouteStyled";

const BlogRoute = ({ data, datas, ids }) => {
  return (
    <GlobalTemplate>
      <TempBlog>
        <OtherBlog>
          {datas.slice(0, 6).map((item, idx) => {
            return (
              <Otwrit key={idx} aktif={item.id === ids} to={`/blog/${item.id}`}>
                {item.judul_artikel}
              </Otwrit>
            );
          })}
        </OtherBlog>
        <MainBlog>
          <>
            <BlogBoxImage src={data.media_artikel.url} />
            <BlogWritedContent title>{data.judul_artikel}</BlogWritedContent>
            <BlogWritedContent>{data.konten_blog}</BlogWritedContent>
          </>
        </MainBlog>
      </TempBlog>
    </GlobalTemplate>
  );
};

export default BlogRoute;
