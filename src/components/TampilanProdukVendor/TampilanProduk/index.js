import React, { useState } from "react";
import { TitleTampilan } from "../../../templates/Tampilan/TampilanStyled";
import {
  GlobalTemplate,
  PopUpBg,
  ContentPopUp,
  ButtonCloser,
  ButtonClosePopUp,
  AngleLeft,
  AngleRight,
  ContentDrop,
} from "../../../templates/GlobalTemplate";
import {
  TampilanWritedContent,
  TampilanWritedWidth,
  GridTempTampilan,
  BoxImageTampilan,
  Imagees,
} from "./TampilanProdukStyled";

const TampilanProduk = ({ descprod, fotoproduk }) => {
  const [clicked, setClicked] = useState(true);
  const [current, setCurrent] = useState(0);
  const lengths = fotoproduk.length;
  const carouseleft = () => {
    setCurrent(current === lengths - 1 ? 0 : current + 1);
  };
  const carouseright = () => {
    setCurrent(current === 0 ? lengths - 1 : current - 1);
  };
  return (
    <GlobalTemplate>
      <div style={{ width: "100%" }}>
        <TitleTampilan>Deskripsi Produk</TitleTampilan>
        <TampilanWritedWidth>
          <TampilanWritedContent>{descprod}</TampilanWritedContent>
        </TampilanWritedWidth>
        <TitleTampilan>Foto Produk</TitleTampilan>
        <GridTempTampilan>
          {fotoproduk.map((data, idx) => {
            return (
              <>
                {clicked ? (
                  <>
                    <BoxImageTampilan
                      img={data}
                      key={idx}
                      onClick={() => {
                        setClicked(false);
                        setCurrent(idx);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <PopUpBg>
                      <ButtonClosePopUp
                        onClick={() => {
                          setClicked(true);
                        }}
                      >
                        <ButtonCloser />
                      </ButtonClosePopUp>
                      <ContentPopUp>
                        <AngleLeft role="button" onClick={carouseright} />
                        <AngleRight role="button" onClick={carouseleft} />
                        {fotoproduk.map((dats, index) => {
                          return (
                            <ContentDrop played={index === current} key={index}>
                              {index === current && <Imagees src={dats} />}
                            </ContentDrop>
                          );
                        })}
                      </ContentPopUp>
                    </PopUpBg>
                  </>
                )}
              </>
            );
          })}
        </GridTempTampilan>
        <TitleTampilan>Penilaian Vendor</TitleTampilan>
      </div>
    </GlobalTemplate>
  );
};

export default TampilanProduk;
