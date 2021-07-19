import React, { useState, useEffect, useContext } from "react";
import { PesananPembeliHeaderWithStep } from "../../../../templates/HeaderSmall/PembeliHeader";
import LoadingPage from "../../../../templates/Loading";
import { Redirect } from "react-router";
import { GlobalTemplate } from "../../../../templates/GlobalTemplate";
import { ProfilePembeli } from "../../../../datas/vendordata";
import {
  ButtonBottom,
  ChatShop,
} from "../../../../templates/Tampilan/TampilanStyled";
import {
  BoxRowDetailed,
  ImageDetailed,
  ButtonBottoms,
  LabelDetailTrack,
  ContentDetailTrack,
  EmailWrited,
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";
import { loginContext } from "../../../../context";
import { orderService } from "../../../../services/OrderHistory";

const MenungguPembayaranPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orderData, setOrderData] = useState();
  const { loginInfo } = useContext(loginContext);
  const [date, setDate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await orderService.getOrderById(
        match.params.id,
        loginInfo.token
      );
      const data = response.data;
      setOrderData(data);
      const format = new Intl.DateTimeFormat("id", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const date = new Date(data.createdAt);
      const dateFormatted = format.format(date);
      setDate(dateFormatted);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {!AuthCliTrack.isAutclitrack() ? (
        <Redirect to="/track-order/records" />
      ) : (
        <>
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
              <PesananPembeliHeaderWithStep
                title="Detail Pesanan"
                subtitle="Ketahui dan lacak status pesanan anda."
                act="menunggu"
              />
              {orderData.produks.map((prod, idx) => {
                return (
                  <GlobalTemplate top key={idx}>
                    <BoxRowDetailed>
                      <ImageDetailed src={prod.foto_produk[0].url} />
                      <div style={{ rowGap: "5px" }}>
                        <p>{prod.nama}</p>
                        <h6>
                          Rp{parseInt(prod.harga).toLocaleString("id-ID")}
                        </h6>
                        <ButtonBottoms call>
                          <ChatShop />
                          Hubungi Vendor
                        </ButtonBottoms>
                      </div>
                    </BoxRowDetailed>
                    <LabelDetailTrack>Nomor Invoice</LabelDetailTrack>
                    <ContentDetailTrack invoice>
                      {orderData.kode_invoice}
                    </ContentDetailTrack>
                    <LabelDetailTrack>Nama Vendor</LabelDetailTrack>
                    <ContentDetailTrack invoice>
                      {prod.vendor.nama_vendor}
                    </ContentDetailTrack>
                    <LabelDetailTrack>Tanggal Pesanan</LabelDetailTrack>
                    <ContentDetailTrack>{date}</ContentDetailTrack>
                    <LabelDetailTrack>Status</LabelDetailTrack>
                    <ContentDetailTrack status>
                      Menunggu Pembayaran
                    </ContentDetailTrack>
                    <EmailWrited>
                      Mohon periksa email{" "}
                      <span>{orderData.pembeli.user.email}</span>
                    </EmailWrited>
                    <BoxRowDetailed>
                      <ButtonBottoms need>Sudah Dibayar</ButtonBottoms>
                      <ButtonBottoms call need>
                        Ajukan Pembatalan
                      </ButtonBottoms>
                    </BoxRowDetailed>
                  </GlobalTemplate>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
};

export default MenungguPembayaranPage;
