import React, { useEffect, useState } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { TitleHome, ApartView, LinkTitle } from "../HomeGlobal";
import { Link } from "react-router-dom";
import { PopulerGrid } from "../Populer/PopulerStyled";
import { DataLoadingProduct } from "../../../datas/populerdata";
import { BoxHarga } from "../../../templates/Box";
import { homeService } from "../../../services/Home";

const OtherPopuler = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await homeService.getHome();
      const data = response.data;
      setProductData(data.category_popular);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <GlobalTemplate>
        {loading ? (
          <>
            <ApartView>
              <TitleHome>Populer di 'Loading...'</TitleHome>
              <TitleHome view>
                <LinkTitle to="/">Lihat Semua</LinkTitle>
              </TitleHome>
            </ApartView>
            <PopulerGrid>
              {DataLoadingProduct.slice(0, 5).map((data, idx) => (
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
            </PopulerGrid>
          </>
        ) : (
          <>
            {productData.map((data, idx) => {
              return (
                <>
                  <ApartView key={idx}>
                    <TitleHome>Populer di {data.category}</TitleHome>
                    <TitleHome view>
                      <LinkTitle to="/">Lihat Semua</LinkTitle>
                    </TitleHome>
                  </ApartView>

                  <PopulerGrid>
                    {data.produks.slice(0, 5).map((data, idx) => {
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
                  </PopulerGrid>
                </>
              );
            })}
          </>
        )}
      </GlobalTemplate>
    </>
  );
};
export default OtherPopuler;
