import React, { useState, useEffect } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { TitleHome } from "../HomeGlobal";
import { Link } from "react-router-dom";
import { PopulerGrid } from "./PopulerStyled";
import { DataLoadingProduct } from "../../../datas/populerdata";
import { BoxHarga } from "../../../templates/Box";
import { homeService } from "../../../services/Home";

const Populer = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await homeService.getHome();
      const data = response.data;
      setProductData(data.popular_product.produks);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <GlobalTemplate>
      <TitleHome>Paling Populer</TitleHome>
      <PopulerGrid>
        {loading ? (
          <>
            {DataLoadingProduct.slice(0, 10).map((data, idx) => (
              <BoxHarga
                key={idx}
                image={data.image}
                city={data.kota}
                judul={data.judul}
                harga={data.harga}
                rate={data.rating}
                review={data.ulasan}
              />
            ))}
          </>
        ) : (
          <>
            {productData.slice(0, 10).map((data, idx) => {
              return (
                <Link
                  to={`/detailed-product/${data._id}`}
                  style={{
                    height: "fit-content",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <BoxHarga
                    key={idx}
                    image={data.foto_produk[0].url}
                    city={data.lokasi}
                    judul={data.nama}
                    harga={data.harga}
                    rate={data.rating}
                    review={data.penilaian.length}
                  />
                </Link>
              );
            })}
          </>
        )}
      </PopulerGrid>
    </GlobalTemplate>
  );
};
export default Populer;
