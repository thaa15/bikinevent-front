import React, { useState, useEffect, useContext } from "react";
import { PesananPembeliHeader } from "../../../../templates/HeaderSmall/PembeliHeader";
import LoadingPage from "../../../../templates/Loading";
import { GlobalTemplate } from "../../../../templates/GlobalTemplate";
import { BoxNotEntry } from "../../../VendorDashboard/VendorPesanan/VendorPesananStyle";
import { DivRowContent, Shopping } from "../../PembeliCart/Styled";
import {
  PesananHome,
  BoxContentTrack,
  ButtonStatus,
  BoxManage,
  BoxManageContent,
  ImageOrder,
  BoxTrackContent
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";
import { pembeliService } from "../../../../services/Pembeli";
import { loginContext } from "../../../../context";

const getButtonStatus = (stats) => {
  const defaultStatus = [
    "Menunggu\nPembayaran",
    "Mengkonfirmasi\nPembayaran",
    "Pelaksanaan\nPesanan",
    "Pesanan\nSelesai",
  ];

  if (stats === "Pending") return defaultStatus[0];
  else if (stats === "Confirmed") return defaultStatus[1];
  else if (stats === "Implemented") return defaultStatus[2];
  else return defaultStatus[3];
};

const PembeliPesananPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pesananData, setPesananData] = useState([]);
  const { loginInfo } = useContext(loginContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await pembeliService.getPembeliById(
        loginInfo.pembeliId,
        loginInfo.token
      );
      const data = response.data;
      setPesananData(data.order_histories);
    };
    fetchData();
    setIsLoading(false);
  }, []);
  console.log(pesananData);
  const progress = pesananData.filter((order) => order.status !== "Completed");

  const done = pesananData.filter((order) => order.status === "Completed");
  console.log(progress)

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <PesananPembeliHeader
            title="Pesanan"
            subtitle="Pesanan anda adalah prioritas kami."
            path="/"
            buttonTitle="Kembali ke Beranda"
          />
          <GlobalTemplate top>
            <PesananHome top>Sedang Berjalan</PesananHome>
            {progress.length === 0 ? (
              <BoxNotEntry>Tidak ada pesanan yang sedang berjalan!</BoxNotEntry>
            ) : (
              <>
                {progress.map((item, idx) => {
                  return (
                    <BoxContentTrack
                      key={idx}
                      onClick={() => {
                        if (item.status === "Pending") {
                          AuthCliTrack.inclitrack(() => {
                            props.history.push(
                              `/detailed-order/waiting/${item.id}`
                            );
                          });
                        } else if (item.status === "Confirmed") {
                          AuthCliTrack.inclitrack(() => {
                            props.history.push(
                              `/detailed-order/confirm/${item.id}`
                            );
                          });
                        } else if (item.status === "Implemented") {
                          AuthCliTrack.inclitrack(() => {
                            props.history.push(
                              `/detailed-order/implement/${item.id}`
                            );
                          });
                        }
                      }}
                    >
                      <BoxManage>
                        <BoxTrackContent>
                          {item.produks.map((prod) => {
                            return (
                              <BoxManageContent>
                                <ImageOrder src={prod.foto_produk[0].url} />
                                <div>
                                  <DivRowContent top>
                                    <DivRowContent titlee need>
                                      <Shopping />
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          lineHeight: "21px",
                                          color: "#909DAA",
                                        }}
                                      >
                                        {prod.vendor.nama_vendor}
                                      </p>
                                    </DivRowContent>
                                  </DivRowContent>
                                  <p>{prod.nama}</p>
                                  <h6>
                                    Rp
                                    {parseInt(prod.harga).toLocaleString("id-ID")}
                                  </h6>
                                </div>
                              </BoxManageContent>
                            );
                          })}
                        </BoxTrackContent>

                        <ButtonStatus>
                          {getButtonStatus(item.status)}
                        </ButtonStatus>
                      </BoxManage>
                    </BoxContentTrack>
                  );
                })}
              </>
            )}
            <PesananHome>Selesai</PesananHome>
            {done.length === 0 ? (
              <BoxNotEntry>Tidak ada pesanan yang selesai!</BoxNotEntry>
            ) : (
              <>
                {done.map((item, idx) => {
                  return (
                    <BoxContentTrack
                      key={idx}
                      onClick={() => {
                        AuthCliTrack.inclitrack(() => {
                          props.history.push(`/detailed-order/done/${item.id}`);
                        });
                      }}
                    >
                      <BoxManage>
                        <BoxTrackContent>
                        {item.produks.map((prod) => {
                          return (
                            <BoxManageContent>
                              <ImageOrder src={prod.foto_produk[0].url} />
                              <div>
                                <DivRowContent top>
                                  <DivRowContent titlee need>
                                    <Shopping />
                                    <p
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        color: "#909DAA",
                                      }}
                                    >
                                      {prod.vendor.nama_vendor}
                                    </p>
                                  </DivRowContent>
                                </DivRowContent>
                                <p>{prod.nama}</p>
                                <h6>
                                  Rp
                                  {parseInt(prod.harga).toLocaleString("id-ID")}
                                </h6>
                              </div>
                            </BoxManageContent>
                          );
                        })}
                        </BoxTrackContent>

                        <ButtonStatus>
                          {getButtonStatus(item.status)}
                        </ButtonStatus>
                      </BoxManage>
                    </BoxContentTrack>
                  );
                })}
              </>
            )}
          </GlobalTemplate>
        </>
      )}
    </>
  );
};

export default PembeliPesananPage;
