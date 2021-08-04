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
  InvoiceTrack
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";
import { orderService } from "../../../../services/OrderHistory";
import { loginContext } from "../../../../context";
import { roomService } from "../../../../services/Room";
import { vendorService } from "../../../../services/Vendor";
import { useHistory } from "react-router-dom";

const getStatus = (stats) => {
  if (stats === "MenungguPembayaranTahap1")
    return "Menunggu\nPembayaran Tahap 1";
  else if (stats === "MenungguPembayaranTahap2")
    return "Menunggu\nPembayaran Tahap 2";
  else if (stats === "MenungguPembayaranTahap3")
    return "Menunggu\nPembayaran Tahap 3";
  else if (stats === "MenungguPembayaranTahap4")
    return "Menunggu\nPembayaran Tahap 4";
  else if (stats === "MenungguPembayaranTahap5")
    return "Menunggu\nPembayaran Tahap 5";
  else if (stats === "MenungguPembayaranTahap6")
    return "Menunggu\nPembayaran Tahap 6";
  else if (stats === "MenungguPembayaranTahap7")
    return "Menunggu\nPembayaran Tahap 7";
  else if (stats === "MenungguPembayaranTaha8")
    return "Menunggu\nPembayaran Tahap 8";
  else if (stats === "MenungguPembayaranTahap9")
    return "Menunggu\nPembayaran Tahap 9";
  else if (stats === "MenungguPembayaranTahap10")
    return "Menunggu\nPembayaran Tahap 10";
};

const PelaksanaanPesananPage = ({ match }) => {
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

  const statusConfirm = async () => {
    let body = {
      status:"LayananSelesai",
    };
    const response = await orderService.editOrderById(
      match.params.id,
      loginInfo.token,
      body
    );
    return response;
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
                act="pelaksanaan"
              />
              {orderData.produks.map((prod, idx) => {
                console.log(orderData)
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
                    <InvoiceTrack href={orderData.link_invoice}>
                      {orderData.kode_invoice}
                    </InvoiceTrack>
                    <LabelDetailTrack>Nama Vendor</LabelDetailTrack>
                    <ContentDetailTrack invoice>
                      {prod.vendor.nama_vendor}
                    </ContentDetailTrack>
                    <LabelDetailTrack>Tanggal Pesanan</LabelDetailTrack>
                    <ContentDetailTrack>{date}</ContentDetailTrack>
                    <LabelDetailTrack>Status</LabelDetailTrack>
                    <ContentDetailTrack status>
                      {getStatus(orderData.status)}
                    </ContentDetailTrack>

                    <BoxRowDetailed>
                      <ButtonBottoms
                        need
                        onClick={() => {
                          contactVendor(prod.vendor.id);
                        }}
                      >
                        Hubungi Vendor
                      </ButtonBottoms>
                      <ButtonBottoms call need 
                      onClick={() => {
                        AuthCliTrack.inclitrack(() => {
                          history.push(`/detailed-order/done/${match.params.id}`);
                        });
                        statusConfirm()
                      }}>
                        Pesanan Selesai
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

export default PelaksanaanPesananPage;
