import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import {
    GridTempBlog,
    Pagination,
    PaginationNum
} from "./AllBlogStyled";
import { BlogHomeBox } from "../../../templates/Box";

const AllBlog = ({ datas }) => {
    const [page, setPage] = useState(1);
    const [prevalue, setPrevalue] = useState(0);
    const [afvalue, setAfvalue] = useState(9);
    const [getprevnum, setGetprevnum] = useState(false);
    const [now_num,setNow_num] = useState(false);
    let lengths;

    if ((Object.keys(datas).length) / 9 == (Object.keys(datas).length) % 9) {
        lengths = (Object.keys(datas).length) % 9;
    } else if ((Object.keys(datas).length) % 9 < (Object.keys(datas).length) / 9) {
        lengths = (Object.keys(datas).length) % 9 + 1;
    };

    const toright = () => {
        setPage(page === lengths ? lengths : page + 1);
        setGetprevnum(true);
        setNow_num(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        setTimeout(()=>{
            setPrevalue(page === lengths ? prevalue : prevalue + 9);
            setAfvalue(page === lengths ? afvalue : afvalue + 9);
            setGetprevnum(false);
        },1000)
    };
    const toleft = () => {
        setPage(page === 1 ? 1 : page - 1);
        setGetprevnum(false);
        setNow_num(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        setTimeout(()=>{
            setNow_num(false);
            setPrevalue(page === 1 ? 0 : prevalue - 9);
            setAfvalue(page === 1 ? 9 : afvalue - 9);
        },1000);
    };

    return (
        <GlobalTemplate>
            <GridTempBlog 
            right={getprevnum}
            left={now_num}>
                    {datas
                        .slice(prevalue, afvalue)
                        .map((item, idx) => {
                            return (
                                <Link to={`/blog/${item.id}`}
                                    style={{ textDecoration: "none", color: "#212B36", height: "fit-content" }}>
                                    <BlogHomeBox
                                        key={idx}
                                        titlee={item.title}
                                        image={item.image}
                                        desc={item.desc}
                                    />
                                </Link>
                            )
                        })}
            </GridTempBlog>
            <Pagination>
                <PaginationNum onClick={toleft}>&laquo;</PaginationNum>
                <PaginationNum num>{page}</PaginationNum>
                <PaginationNum onClick={toright}>&raquo;</PaginationNum>
            </Pagination>
        </GlobalTemplate>
    )
}

export default AllBlog;