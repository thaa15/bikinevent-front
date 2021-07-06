import React, { useState } from "react";
import HeaderSmall from "../templates/HeaderSmall";
import LoadingPage from "../templates/Loading";
import PembeliProfilContent from "../components/PembeliDashboard/PembeliProfil";
import { ProfilePembeli } from "../datas/vendordata";

export const PembeliProfil = () => {
    const [isLoading, setIsLoading] = useState(true);

    const data = ProfilePembeli.filter((dats) => dats.name === "Ernia Watson");
    setTimeout(() => {
        setIsLoading(false);
    }, 1500);
    setTimeout(() => {
        setIsLoading(false);
    }, 1500)
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>) : (
                <>
                    <HeaderSmall text="Pengaturan Profile" />
                    {/*Ini karena dapet Array, sabi ganti*/}
                    {data.map((item, idx) => (
                        <PembeliProfilContent
                            key={idx}
                            owner={item.name}
                            email={item.email}
                            phone_number={item.phone_number}
                            client_information={item.client_information}
                        />
                    ))}
                </>
            )}
        </>
    )
}