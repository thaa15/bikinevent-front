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
        id: "1",
        image: wedfod,
        kota: "Depok",
        judul: "300 px Wedding Food Course Food Course Food Course",
        harga: "2.200.000",
        invoice: "INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan: "20 April 2021, 10:22 WIB",
        status: "selesai",
        statprod: "arsip",
    },
    {
        id: "2",
        image: takjil,
        kota: "Depok",
        judul: "Dinner with FREE Takjil 200 px",
        harga: "1.600.000",
        invoice: "INV/20210326/MPL/1128690183",
        pembeli: "Saffan",
        tanggalpesan: "21 April 2021, 10:23 WIB",
        status: "selesai",
        statprod: "show",
    },
    {
        id: "3",
        image: eskrim,
        kota: "Depok",
        judul: "Dessert Ice Cream 400 px ",
        harga: "500.000",
        invoice: "INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan: "20 April 2021, 10:22 WIB",
        status: "memesan",
        statprod: "arsip",
    },
    {
        id: "4",
        image: western,
        kota: "Depok",
        judul: "Breakfast ONLY Western Style 500 px",
        harga: "400.000",
        invoice: "INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan: "20 April 2021, 10:22 WIB",
        status: "memesan",
        statprod: "arsip",
    },
    {
        id: "5",
        image: panggung,
        kota: "Depok",
        judul: "Perlengkapan Set Panggung",
        harga: "5.400.000",
        invoice: "INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan: "20 April 2021, 10:22 WIB",
        status: "selesai",
        statprod: "show",
    },
    {
        id: "6",
        image: panggung,
        kota: "Depok",
        judul: "Perlengkapan Set Panggung",
        harga: "5.400.000",
        invoice: "INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan: "20 April 2021, 10:22 WIB",
        status: "selesai",
        statprod: "arsip",
    },
    {
        id: "7",
        image: panggung,
        kota: "Depok",
        judul: "Perlengkapan Set Panggung",
        harga: "5.400.000",
        invoice: "INV/20210326/MPL/1128690183",
        pembeli: "Dimas",
        tanggalpesan: "20 April 2021, 10:22 WIB",
        status: "selesai",
        statprod: "arsip",
    },
]

export const KeuanganVendor = [
    {
        id: "1",
        balance_release: "4.000.000",
        seller_price: "0",
        account_number: "073586298",
        bank: "BNI",
        name: "Ernia",
        income_history: [
            "INV/20210326/MPL/1128690183",
            "INV/20210326/MPL/1146551122"
        ],
        balance_withdrawal: [
            {
                bank: "BNI",
                account_number: "073586298",
                name: "Ernia",
                balance: "1.000.000",
                date: "11/05/2020 10.00 WIB"
            },
            {
                bank: "BNI",
                account_number: "073586298",
                name: "Ernia",
                balance: "1.000.000",
                date: "11/05/2021 10.00 WIB"
            }
        ]
    }
]

export const ProfileVendor = [
    {
        id: "1",
        vendor_name: "Mangkok Jonathan",
        name: "Ernia",
        email: "Ernia@yahud.com",
        phone_number: "+6112312312",
        password: "ernia123",
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

export const ProfilePembeli = [
    {
        id: "1",
        name: "Ernia Watson",
        email: "Ernia@yahud.com",
        phone_number: "+6112312312",
        client_information: [
            {
                title_name: "Saffan Firdaus",
                number: "081395090000",
                address: "Jl. ABC Tengah no 18 RT 04 RW 11, Kelurahan Zebra Cikutra Barat, Kota Bandung, 40123",
            },
            {
                title_name: "Kevin Ahmad",
                number: "081312343333",
                address: "Jl. CDE Utara no 14 RT 05 RW 04, Kelurahan Kijang Cimenyan Barat, Kota Bogor, 42312",
            },
            {
                title_name: "Saffan Firdaus",
                number: "081395090000",
                address: "Jl. ABC Tengah no 18 RT 04 RW 11, Kelurahan Zebra Cikutra Barat, Kota Bandung, 40123",
            },
            {
                title_name: "Kevin Ahmad",
                number: "081312343333",
                address: "Jl. CDE Utara no 14 RT 05 RW 04, Kelurahan Kijang Cimenyan Barat, Kota Bogor, 42312",
            },
            {
                title_name: "Kevin Ahmad",
                number: "081312343333",
                address: "Jl. CDE Utara no 14 RT 05 RW 04, Kelurahan Kijang Cimenyan Barat, Kota Bogor, 42312",
            },
            {
                title_name: "Saffan Firdaus",
                number: "081395090000",
                address: "Jl. ABC Tengah no 18 RT 04 RW 11, Kelurahan Zebra Cikutra Barat, Kota Bandung, 40123",
            },
        ],
        order: [
            {
                vendor_name: "Katering Nina",
                items: [
                    {
                        image: eskrim,
                        judul: "3 Course Food Custom untuk BU EMMA",
                        price: "3000000"
                    },
                    {
                        image: panggung,
                        judul: "Unlimited Drinks (Soda dan Jus) 300 px include peralatan minum",
                        price: "2100000"
                    }
                ]
            },
            {
                vendor_name: "Pusat Stage Challange",
                items: [
                    {
                        image: western,
                        judul: "Panggung Pernikahan Lengkap",
                        price: "5000000"
                    },
                    {
                        image:wedfod,
                        judul:"Laoek Mak Imah",
                        price:"10000000"
                    }
                ]
            },
        ]
    }
]

export const VendorChat = [
    {
        id: "1",
        people: [
            "Emma", "Erni"
        ]
    }
]

export const Kategories = [
    {
        cath: "Perlengkapan",
        subcath: ["Panggung", "Sound System", "Lighting", "Meja Kursi", "Tenda", "AC/Cooling Fan", "Genset", "Perlengkapan Lainnya"]
    },
    {
        cath: "Venue",
        subcath: ["Gedung Pernikahan", "Gedung Pertunjukan", "Gedung Pesta", "Venue Lainnya"]
    },
    {
        cath: "Talent",
        subcath: ["Make up", "MC", "Penari", "Band", "Penyanyi", "Talent Lainnya"]
    },
    {
        cath: "Jasa",
        subcath: ["Manpower", "Security", "Event Organizer", "Wedding Organizer", "MICE Organizer", "Photo Booth", "Photography", "Live Streaming", "Jasa Lainnya"]
    },
    {
        cath: "Catering",
        subcath: ["All", "Snacks", "Main Course", "Beverages", "Catering Lainnya"]
    },
    {
        cath: "Dekorasi",
        subcath: ["Florist", "Backdrop", "Dekorasi Lainnya"]
    },
]

export const StableCheck = [
    [
        false, false, false, false, false, false, false, false
    ],
    [
        false, false, false, false
    ],
    [
        false, false, false, false, false, false
    ],
    [
        false, false, false, false, false, false, false, false, false
    ],
    [
        false, false, false, false, false
    ],
    [
        false, false, false
    ]
]