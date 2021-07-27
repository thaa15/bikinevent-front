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
import { BoxNotEntry } from "../../../VendorDashboard/VendorPesanan/VendorPesananStyle";
import {
  BoxRowDetailed,
  ImageDetailed,
  ButtonBottoms,
  LabelDetailTrack,
  ContentDetailTrack,
  EmailWrited,
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";
import { orderService } from "../../../../services/OrderHistory";
import { loginContext } from "../../../../context";
import { roomService } from "../../../../services/Room";
import { vendorService } from "../../../../services/Vendor";
import { useHistory } from "react-router-dom";
const KonfirmasiPembayaranPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orderData, setOrderData] = useState();
  const { loginInfo } = useContext(loginContext);
  const [date, setDate] = useState();
  const history = useHistory();
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

  const contactVendor = async (vendorId) => {
    const response = await roomService.getUserRoom(
      loginInfo.userId,
      loginInfo.token
    );
    const dataRoomUser = response.data;
    const responseVendor = await vendorService.getVendorById(vendorId);
    const dataVendor = responseVendor.data;
    const resRoomVendor = await roomService.getVendorRoom(
      dataVendor.user.id,
      loginInfo.token
    );
    const dataRoom = resRoomVendor.data;
    if (
      dataRoom.filter((room) =>
        dataRoomUser.some((roomUser) => roomUser.id === room.id)
      ).length > 0
    ) {
      return history.push("/client-chat");
    } else {
      let body = {
        userId: loginInfo.userId,
        vendorId: dataVendor.user.id,
      };
      const makeRoom = await roomService.postRoom(loginInfo.token, body);
      return history.push("/client-chat");
    }
  };
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
                act="konfirmasi"
              />
              {orderData.produks.map((prod) => {
                return (
                  <GlobalTemplate top>
                    <BoxRowDetailed>
                      <ImageDetailed src={prod.foto_produk[0].url} />
                      <div style={{ rowGap: "5px" }}>
                        <p>{prod.nama}</p>
                        <h6>
                          Rp{parseInt(prod.harga).toLocaleString("id-ID")}
                        </h6>
                        <ButtonBottoms
                          call
                          onClick={() => {
                            contactVendor(prod.vendor.id);
                          }}
                        >
                          <ChatShop />
                          Hubungi Vendor
                        </ButtonBottoms>
                      </div>
                    </BoxRowDetailed>
                    <LabelDetailTrack>Nomor Invoice</LabelDetailTrack>
                    {orderData.kode_invoice.length == 0 ? (
                      <ContentDetailTrack invoice>
                        Wait for Confirmation
                      </ContentDetailTrack>
                    ) : (
                      <ContentDetailTrack invoice>
                        {orderData.kode_invoice}
                      </ContentDetailTrack>
                    )}
                    <LabelDetailTrack>Nama Vendor</LabelDetailTrack>
                    <ContentDetailTrack invoice>
                      {prod.vendor.nama_vendor}
                    </ContentDetailTrack>
                    <LabelDetailTrack>Tanggal Pesanan</LabelDetailTrack>
                    <ContentDetailTrack>{date}</ContentDetailTrack>
                    <LabelDetailTrack>Status</LabelDetailTrack>
                    <ContentDetailTrack status>
                      Mengonfirmasi Pembayaran
                    </ContentDetailTrack>
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

export default KonfirmasiPembayaranPage;
