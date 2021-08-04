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
  BoxTrackContent,
} from "./styled";
import { AuthCliTrack } from "../../../../AllAuth";
import { pembeliService } from "../../../../services/Pembeli";
import { loginContext } from "../../../../context";

const getButtonStatus = (stats) => {
  if (stats === "MenungguKonfirmasi") return "Menunggu\nKonfirmasi";
  else if (stats === "PesananTerkonfirmasi") return "Pesanan\nTerkonfirmasi";
  else if (stats === "MenungguPembayaranTahap1")
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
  else if (stats === "PembayaranLunas") return "Pembayaran\nLunas";
  else if (stats === "MempersiapkanLayanan") return "Mempersiapkan\nLayanan";
  else if (stats === "LayananSelesai") return "Layanan\nSelesai";
  else return "Invalid Status";
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
  }, [loginInfo.pembeliId, loginInfo.token]);

  const progress = pesananData.filter(
    (order) => order.status !== "LayananSelesai"
  );

  const done = pesananData.filter((order) => order.status === "LayananSelesai");

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
                        if (item.status === "MenungguKonfirmasi") {
                          AuthCliTrack.inclitrack(() => {
                            props.history.push(
                              `/detailed-order/waiting/${item.id}`
                            );
                          });
                        } else if (item.status === "PesananTerkonfirmasi") {
                          AuthCliTrack.inclitrack(() => {
                            props.history.push(
                              `/detailed-order/confirm/${item.id}`
                            );
                          });
                        } else if (
                          item.status === "MenungguPembayaranTahap1" ||
                          item.status === "MenungguPembayaranTahap2" ||
                          item.status === "MenungguPembayaranTahap3" ||
                          item.status === "MenungguPembayaranTahap4" ||
                          item.status === "MenungguPembayaranTahap5" ||
                          item.status === "MenungguPembayaranTahap6" ||
                          item.status === "MenungguPembayaranTahap7" ||
                          item.status === "MenungguPembayaranTahap8" ||
                          item.status === "MenungguPembayaranTahap9" ||
                          item.status === "MenungguPembayaranTahap10"
                        ) {
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
                          {item.produks
                            .filter((a) => a.vendor != null)
                            .map((prod) => {
                              return (
                                <BoxManageContent>
                                  <ImageOrder src={prod.foto_produk[0].url} />
                                  <div>
                                    <DivRowContent top>
                                      <DivRowContent titlee need>
                                        <Shopping />
                                        {typeof prod.vendor.nama_vendor ===
                                          "undefined" ||
                                        prod.vendor.nama_vendor == null ? (
                                          <p
                                            style={{
                                              fontSize: "14px",
                                              lineHeight: "21px",
                                              color: "#909DAA",
                                            }}
                                          >
                                            Unknown
                                          </p>
                                        ) : (
                                          <p
                                            style={{
                                              fontSize: "14px",
                                              lineHeight: "21px",
                                              color: "#909DAA",
                                            }}
                                          >
                                            {prod.vendor.nama_vendor}
                                          </p>
                                        )}
                                      </DivRowContent>
                                    </DivRowContent>
                                    <p>{prod.nama}</p>
                                    <h6>
                                      Rp
                                      {parseInt(prod.harga).toLocaleString(
                                        "id-ID"
                                      )}
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
                    <>
                      {item.produks.filter((a) => {
                        return a.vendor != null;
                      }).length > 0 ? (
                        <>
                          <BoxContentTrack
                            key={idx}
                            onClick={() => {
                              AuthCliTrack.inclitrack(() => {
                                props.history.push(
                                  `/detailed-order/done/${item.id}`
                                );
                              });
                            }}
                          >
                            <BoxManage>
                              <BoxTrackContent>
                                {item.produks.map((prod) => {
                                  return (
                                    <BoxManageContent>
                                      <ImageOrder
                                        src={prod.foto_produk[0].url}
                                      />
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
                                          {parseInt(prod.harga).toLocaleString(
                                            "id-ID"
                                          )}
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
                        </>
                      ) : (
                        <></>
                      )}
                    </>
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
