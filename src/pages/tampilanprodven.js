import React,{useState} from "react";
import {PopulerData} from "../datas/populerdata";
import LoadingPage from "../templates/Loading";
import { ShowAtTopProduk, ShowAtTopVendor,PenilaianVendor } from "../templates/Tampilan";
import TampilanProduk from "../components/TampilanProdukVendor/TampilanProduk";

const TampilanProdukPage = ({match}) =>{
    const produk = PopulerData.filter(x => x['id'] == match.params.id);
    const [isLoading,setIsLoading] = useState(true);

    setTimeout(()=>{
        setIsLoading(false);
    },1500);
    return(
        <>
        {isLoading ? (
        <>
        <LoadingPage/>
        </>) : (
        <>
        <ShowAtTopProduk dataexact={produk}/>
        <TampilanProduk dataxact={produk}/>
        <PenilaianVendor dataexact={produk}/>
        </>)}
        </>
    )
}

export default TampilanProdukPage;