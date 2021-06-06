import React, { useEffect, useState } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { TitleHome } from "../HomeGlobal";
import { KategoriBox } from "../../../templates/Box";
import { KategoriGrid } from "./KategoriStyled";
import { KategoriData } from "../../../datas/populerdata";
import { homeService } from "../../../services/Home";

const Kategori = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getHome();
      const data = response.data;
      setCategoryData(data.kategori);
    };
    fetchData();
  }, []);
  return (
    <GlobalTemplate>
      <TitleHome>Berdasarkan Kategori</TitleHome>
      <KategoriGrid>
        {categoryData.map((item, idx) => (
          <KategoriBox
            key={idx}
            desc={item.category}
            imagee={item.gambar_kategori.url}
          />
        ))}
      </KategoriGrid>
    </GlobalTemplate>
  );
};

export default Kategori;
