import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { TitleHome, ApartView, LinkTitle } from "../HomeGlobal";
import { Link } from "react-router-dom";
import { PopulerGrid } from "../Populer/PopulerStyled";
import { DataLoadingProduct } from "../../../datas/populerdata";
import { BoxHarga } from "../../../templates/Box";
import { homeService } from "../../../services/Home";
import { BoxNotEntry } from "../../VendorDashboard/VendorPesanan/VendorPesananStyle";
import { Kategories } from "../../../datas/vendordata";
import { searchContext } from "../../../context";

const OtherPopuler = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const { searched, setSearched } = useContext(searchContext);

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
                <LinkTitle>Lihat Semua</LinkTitle>
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
                    <TitleHome>Populer di "{data.category}"</TitleHome>
                    <TitleHome view>
                      <LinkTitle
                        onClick={() => {
                          setSearched({
                            ...searched,
                            filter: {
                              lokasi: [],
                              subcategory: [Kategories.find(item => item.cath === data.category).subcath],
                            },
                            fromFilter: true,
                            searchFill: `Produk Kategori ${data.category}`,
                            loading: true
                          });

                          history.push({
                            pathname: "/searched",
                          });
                        }}>Lihat Semua</LinkTitle>
                    </TitleHome>
                  </ApartView>
                  {data.produks.length === 0 ? (
                    <BoxNotEntry>Tidak ada produk populer di "{data.category}"</BoxNotEntry>
                  ) : (
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
                  )}
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
