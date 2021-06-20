import wedfod from "../images/wedfood.png";
import takjil from "../images/takjil.png";
import eskrim from "../images/eskrim.png";
import western from "../images/western.png";
import panggung from "../images/panggung.png";
import wedding1 from "../images/wedding1.png";
import wedding2 from "../images/wedding2.png";
import pentas1 from "../images/pentas1.png";
import pentas2 from "../images/pentas2.png";
import bookletsma1 from "../images/bookletsma1.png";
import bookletsma2 from "../images/bookletsma2.png";

export const PesananVendor = [
    {
        id:"1",
        image: wedfod,
        kota:"Depok",
        judul:"300 px Wedding Food Course Food Course Food Course",
        harga:"2.200.000",
        invoice:"INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan:"20 April 2021, 10:22 WIB",
        status:"selesai",
        statprod:"arsip",
    },
    {
        id:"2",
        image: takjil,
        kota:"Depok",
        judul:"Dinner with FREE Takjil 200 px",
        harga:"1.600.000",
        invoice:"INV/20210326/MPL/1128690183",
        pembeli: "Saffan",
        tanggalpesan:"21 April 2021, 10:23 WIB",
        status:"selesai",
        statprod:"show",
    },
    {
        id:"3",
        image: eskrim,
        kota:"Depok",
        judul:"Dessert Ice Cream 400 px ",
        harga:"500.000",
        invoice:"INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan:"20 April 2021, 10:22 WIB",
        status:"memesan",
        statprod:"arsip",
    },
    {
        id:"4",
        image: western,
        kota:"Depok",
        judul:"Breakfast ONLY Western Style 500 px",
        harga:"400.000",
        invoice:"INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan:"20 April 2021, 10:22 WIB",
        status:"memesan",
        statprod:"arsip",
    },
    {
        id:"5",
        image: panggung,
        kota:"Depok",
        judul:"Perlengkapan Set Panggung",
        harga:"5.400.000",
        invoice:"INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan:"20 April 2021, 10:22 WIB",
        status:"selesai",
        statprod:"show",
    },
    {
        id:"6",
        image: panggung,
        kota:"Depok",
        judul:"Perlengkapan Set Panggung",
        harga:"5.400.000",
        invoice:"INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan:"20 April 2021, 10:22 WIB",
        status:"selesai",
        statprod:"arsip",
    },
    {
        id:"7",
        image: panggung,
        kota:"Depok",
        judul:"Perlengkapan Set Panggung",
        harga:"5.400.000",
        invoice:"INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan:"20 April 2021, 10:22 WIB",
        status:"selesai",
        statprod:"arsip",
    },
]

export const KeuanganVendor = [
    {
        id:"1",
        balance_release:"4.000.000",
        seller_price:"0",
        account_number:"073586298",
        bank:"BNI",
        name:"Ernia",
        income_history:[
            "INV/20210326/MPL/1128690183",
            "INV/20210326/MPL/1146551122"
        ],
        balance_withdrawal:[
            {
                bank:"BNI",
                account_number:"073586298",
                name:"Ernia",
                balance:"1.000.000",
                date:"11/05/2020 10.00 WIB"
            },
            {
                bank:"BNI",
                account_number:"073586298",
                name:"Ernia",
                balance:"1.000.000",
                date:"11/05/2021 10.00 WIB"
            }
        ]
    }
]

export const ProfileVendor = [
    {
        id:"1",
        vendor_name:"Mangkok Jonathan",
        name:"Ernia",
        email:"Ernia@yahud.com",
        phone_number:"+6112312312",
        password:"ernia123",
        portofolio: [
        {
            portofoliotitle: "Saffan's Wedding Party",
            foto1: wedding1,
            foto2: wedding2,
        },
        {
            portofoliotitle: "Pentas Seni SMA",
            foto1: pentas1,
            foto2: pentas2,
        },
        {
            portofoliotitle: "Booklet SMA",
            foto1: bookletsma1,
            foto2: bookletsma2,
        },
        ],
    }
]

export const VendorChat = [
    {
        id:"1",
        people:[
            "Emma","Erni"
        ]
    }
]