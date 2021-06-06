import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { TitleHome, ApartView, LinkTitle } from "../HomeGlobal";
import { BlogHomeBox } from "../../../templates/Box";
import { BlogBoxGrid } from "./BlogHomeStyled";
import { BlogHomeData } from "../../../datas/populerdata";
import { Link } from "react-router-dom";

const BlogHome = ({ blogData }) => {
  return (
    <>
      <GlobalTemplate>
        <ApartView>
          <TitleHome>Blog</TitleHome>
          <TitleHome view>
            <LinkTitle to="/allblog">Lihat Semua</LinkTitle>
          </TitleHome>
        </ApartView>
        <BlogBoxGrid>
          {blogData.slice(0, 3).map((data, idx) => {
            return (
              <Link
                to={`/blog/${data.id}`}
                style={{ textDecoration: "none", color: "#212B36" }}
              >
                <BlogHomeBox
                  key={idx}
                  titlee={data.judul_artikel}
                  image={data.media_artikel.url}
                  desc={data.konten_blog}
                />
              </Link>
            );
          })}
        </BlogBoxGrid>
      </GlobalTemplate>
    </>
  );
};
export default BlogHome;
