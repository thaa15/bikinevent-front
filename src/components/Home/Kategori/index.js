import React from "react";
import {GlobalTemplate} from "../../../templates/GlobalTemplate";
import {TitleHome} from "../HomeGlobal";
import {KategoriBox} from "../../../templates/Box";
import {KategoriGrid} from "./KategoriStyled";
import {KategoriData} from "../../../datas/populerdata";

const Kategori = () => {
    return(
        <GlobalTemplate>
            <TitleHome>
                Berdasarkan Kategori
            </TitleHome>
            <KategoriGrid>
                {KategoriData.map((item,idx)=>(
                    <KategoriBox
                    key={idx}
                    desc={item.desc}
                    imagee={item.image}
                    />
                ))}
            </KategoriGrid>
        </GlobalTemplate>
    )
}

export default Kategori;