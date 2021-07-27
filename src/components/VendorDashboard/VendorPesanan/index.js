import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { loginContext } from "../../../context";
import { roomService } from "../../../services/Room";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash, TempVendash } from "../VendorDashboardStyled";
import {
  TitleStats,
  BoxPesanan,
  BoxPesananContent,
  ImagePesanan,
  JudulHarga,
  SubJudul,
  SubJudulContent,
  BoxNotEntry,
  ButtonChat,
  GridButton,
  ButtonPengaduan,
} from "./VendorPesananStyle";

const VendorPesananContent = ({ data }) => {
  const pesanan = data.filter((stat) => stat.status !== "Completed");
  const ended = data.filter((stat) => stat.status === "Completed");
  const { loginInfo } = useContext(loginContext);
  const history = useHistory();
  const convertDate = (string) => {
    const date = new Date(string);
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };

  const contactUser = async (userId) => {
    const responseVendor = await roomService.getVendorRoom(
      loginInfo.userId,
      loginInfo.token
    );
    const dataRoomVendor = responseVendor.data;
    const resRoomUser = await roomService.getUserRoom(userId, loginInfo.token);
    const dataRoom = resRoomUser.data;
    console.log(dataRoom, dataRoomVendor);
    if (
      dataRoom.filter((room) =>
        dataRoomVendor.some((roomUser) => roomUser.id === room.id)
      ).length > 0
    ) {
      return history.push("/vendor-chat");
    } else {
      let body = {
        userId: userId,
        vendorId: loginInfo.userId,
      };
      const makeRoom = await roomService.postRoom(loginInfo.token, body);
      return history.push("/vendor-chat");
    }
  };
  return (
    <GlobalTemplate>
      <TempVendash>
        <DashboardSite typeVendash="pesanan" />
        <MainVendash>
          <TitleStats>Sedang Berjalan</TitleStats>
          {pesanan.length === 0 ? (
            <BoxNotEntry>Tidak Ada Pesanan</BoxNotEntry>
          ) : (
            <>
              {pesanan.map((item) => {
                return (
                  <>
                    {item.produks.map((prod, idx) => {
                      return (
                        <BoxPesanan key={idx}>
                          <BoxPesananContent image>
                            <ImagePesanan src={prod.foto_produk[0].url} />
                          </BoxPesananContent>
                          <BoxPesananContent>
                            <JudulHarga judul>{prod.nama}</JudulHarga>
                            <JudulHarga>
                              Rp{prod.harga.toLocaleString("id-ID")}
                            </JudulHarga>
                            <SubJudul>Nomor Invoice</SubJudul>
                            {item.kode_invoice == null ? (
                              <SubJudulContent invoice>
                                Wait for Confirmation
                              </SubJudulContent>
                            ) : (
                              <SubJudulContent invoice>
                                {item.kode_invoice}
                              </SubJudulContent>
                            )}
                            <SubJudul>Nama Pembeli</SubJudul>
                            <SubJudulContent>
                              {item.pembeli.user.username}
                            </SubJudulContent>
                            <SubJudul>Tanggal Pesanan</SubJudul>
                            <SubJudulContent tanggal>
                              {convertDate(item.createdAt)}
                            </SubJudulContent>
                            <SubJudul>Status</SubJudul>
                            <SubJudulContent tanggal status>
                              Menunggu Pembayaran
                            </SubJudulContent>
                            <GridButton>
                              <ButtonChat
                                onClick={() =>
                                  contactUser(item.pembeli.user.id)
                                }
                              >
                                Hubungi Pembeli
                              </ButtonChat>
                              <ButtonPengaduan>
                                Ajukan Pengaduan
                              </ButtonPengaduan>
                            </GridButton>
                          </BoxPesananContent>
                        </BoxPesanan>
                      );
                    })}
                  </>
                );
              })}
            </>
          )}
          <TitleStats selesai>Selesai</TitleStats>
          {ended.length === 0 ? (
            <BoxNotEntry>Belum Ada Pesanan Selesai</BoxNotEntry>
          ) : (
            <>
              {ended.map((item, idx) => {
                return (
                  <>
                    {item.produks.map((prod, idx) => {
                      return (
                        <BoxPesanan key={idx}>
                          <BoxPesananContent image>
                            <ImagePesanan src={prod.foto_produk[0].url} />
                          </BoxPesananContent>
                          <BoxPesananContent>
                            <JudulHarga judul>{prod.nama}</JudulHarga>
                            <JudulHarga>
                              Rp{prod.harga.toLocaleString("id-ID")}
                            </JudulHarga>
                            <SubJudul>Nomor Invoice</SubJudul>

                            {item.invoice == null ? (
                              <SubJudulContent invoice>
                                Wait for Confirmation
                              </SubJudulContent>
                            ) : (
                              <SubJudulContent invoice>
                                {item.invoice}
                              </SubJudulContent>
                            )}

                            <SubJudul>Nama Pembeli</SubJudul>
                            <SubJudulContent>
                              {item.pembeli.user.username}
                            </SubJudulContent>
                            <SubJudul>Tanggal Pesanan</SubJudul>
                            <SubJudulContent tanggal>
                              {convertDate(item.createdAt)}
                            </SubJudulContent>
                            <SubJudul>Status</SubJudul>
                            <SubJudulContent tanggal status>
                              Menunggu Pembayaran
                            </SubJudulContent>
                            <GridButton>
                              <ButtonChat to="/vendor-chat">
                                Hubungi Pembeli
                              </ButtonChat>
                              <ButtonPengaduan>
                                Ajukan Pengaduan
                              </ButtonPengaduan>
                            </GridButton>
                          </BoxPesananContent>
                        </BoxPesanan>
                      );
                    })}
                  </>
                );
              })}
            </>
          )}
        </MainVendash>
      </TempVendash>
    </GlobalTemplate>
  );
};

export default VendorPesananContent;
