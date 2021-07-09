import React, { useState, useEffect } from "react";
import { PesananPembeliHeader } from "../../../../templates/HeaderSmall/PembeliHeader";
import LoadingPage from "../../../../templates/Loading";
import { GlobalTemplate } from "../../../../templates/GlobalTemplate";
import { 
    BoxContentCart,
    DivRow,
    DivRowContent,
    ImageCart,Shopping
} from "../../PembeliCart/Styled";

const PembeliPesananPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])
    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
                    <PesananPembeliHeader
                        title="Pesanan"
                        subtitle="Pesanan anda adalah prioritas kami."
                    />
                    <GlobalTemplate>
                        <>
                            <h6>Sedang Berjalan</h6>
                        </>
                        <BoxContentCart>
                            <DivRow>
                                <DivRowContent>
                                    <ImageCart />
                                    <div>
                                        <DivRowContent top>
                                            <DivRowContent need>
                                                <Shopping />
                                                <p
                                                    style={{ fontSize: "14px", lineHeight: "21px", color: "#212B36", }}
                                                >Test</p>
                                            </DivRowContent>
                                        </DivRowContent>
                                        <p>{`Judul`}</p>
                                        <h6>Rp{parseInt(20000).toLocaleString("id-ID")}</h6>
                                    </div>
                                </DivRowContent>
                            </DivRow>
                        </BoxContentCart>
                    </GlobalTemplate>
                </>
            )}
        </>
    )

}

export default PembeliPesananPage;