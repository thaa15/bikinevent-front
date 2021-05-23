import React,{useState} from "react";
import {PopulerData,AllVendor} from "../datas/populerdata";
import LoadingPage from "../templates/Loading";
import { ShowAtTopProduk, ShowAtTopVendor,PenilaianVendor } from "../templates/Tampilan";
import TampilanProduk from "../components/TampilanProdukVendor/TampilanProduk";
import TampilanVendor from "../components/TampilanProdukVendor/TampilanVendor";

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
        {produk.map((item,idx)=>{
            return(
                <>
                <ShowAtTopProduk
                    key={idx}
                    image={item.image} 
                    kota={item.kota}
                    judul={item.judul}
                    vendor={item.vendor}
                    rating={item.rating}
                    ulasan={item.ulasan}
                    harga={item.harga} />
                <TampilanProduk 
                    descprod={item.descprod}
                    fotoproduk={item.fotoproduk}/>
                <PenilaianVendor 
                    fotovendor={item.fotovendor}
                    vendor={item.vendor}
                    rating={item.rating}
                    ulasan={item.ulasan}
                    comments= {item.comments}/>
                </>
            )
        })}
        </>)}
        </>
    )
}

const TampilanVendorPage = ({match}) =>{
    const vendor = AllVendor.filter(x => x['vendor'] == match.params.vendor);
    const produkvendors = PopulerData.filter(x => x['vendor'] == match.params.vendor);
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
        {vendor.map((item,idx)=>{
            return(
                <>
                <ShowAtTopVendor 
                    key={idx}
                    fotovendor={item.fotovendor}
                    vendor={item.vendor}
                    ratingvendor={item.ratingvendor}
                    ulasanvendor={item.ulasanvendor}/>
                <TampilanVendor
                    descvendor={item.descvendor} 
                    produkvendor={produkvendors}
                    comments={item.comments}
                    portofolio={item.portofolio}/>
                </>
            )
        })}
        </>)}
        </>
    )
}

export {TampilanProdukPage,TampilanVendorPage};