import React, { useState, useContext, useEffect } from "react";
import { PesananPembeliHeader } from "../../../templates/HeaderSmall/PembeliHeader";
import LoadingPage from "../../../templates/Loading";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { loginContext } from "../../../context";
import nochat from "../../../images/nochat.png";
import {
  BgNoEntry,
  NoEntryContent,
  ImageNoEntry,
  MulaiBelanja,
} from "../PembeliCart/Styled";
import { BgChat } from "./style";
import {
  TemplateChat,
  ChatList,
  ChatContent,
  ProfilePhoto,
  ProfileName,
  ChatPerson,
  LastChatDisplay,
  ListChatPart,
  DisplayChatProfileContent,
  ChatContetnDisplay,
  TypingPart,
  TextType,
  ButtonSend,
  PlacedChatBox,
  ChatBox,
} from "../../VendorDashboard/VendorChat/VendorChatStyled";
import ChatResponsiveClient from "./ChatResponsiveClient";
import EllipsisText from "react-ellipsis-text";
import { roomService } from "../../../services/Room";

const PembeliChatPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { loginInfo } = useContext(loginContext);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await roomService.getVendorRoom(
        loginInfo.userId,
        loginInfo.token
      );
      const data = response.data;
      setConversations(data);
      setIsLoading(false);
    };
    fetchConversations();
  }, [loginInfo.userId, loginInfo.token]);

  const [responsive, setResponsive] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 861) setResponsive(false);
    else setResponsive(true);
  }, [window.innerWidth]);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <PesananPembeliHeader
            title="Chat"
            subtitle="Mulai perbincangan dengan vendor untuk negosiasi harga
                        dan detail acara yang akan dilaksanakan.."
            path="/"
            buttonTitle="Kembali ke Beranda"
          />
          <GlobalTemplate top>
            {conversations.length == 0 ? (
            <BgChat>
              <NoEntryContent>
                <ImageNoEntry src={nochat} alt="No Entry" />
                <h4 style={{ fontSize: "18px", color: "#212B36" }}>
                  Chat-mu Kosong!
                </h4>
                <p style={{ fontSize: "14px", color: "#909DAA" }}>
                  Hubungi Vendor untuk memulai perbincangan
                </p>
                <MulaiBelanja to="/">Mulai Belanja</MulaiBelanja>
              </NoEntryContent>
            </BgChat>
            ) : (
            <BgChat exist>
              {responsive ? (
                <>
                  {conversations.map((room, idx) => {
                    return (
                      <TemplateChat>
                        <ChatList>
                          <ChatPerson active>
                            <ListChatPart photo>
                              <ProfilePhoto content />
                            </ListChatPart>
                            <ListChatPart>
                              <ProfileName>
                                {room.vendorId.nama_lengkap}
                              </ProfileName>
                              <LastChatDisplay>
                                <EllipsisText
                                  text="Iyaaaa..... Terima kasih banyak ya kaaaaaaa"
                                  length={"25"}
                                />
                              </LastChatDisplay>
                            </ListChatPart>
                          </ChatPerson>
                          <div
                            style={{
                              borderBottom: "1px solid #E0E0E0",
                              width: "100%",
                            }}
                          />

                          <ChatPerson>
                            <ListChatPart photo>
                              <ProfilePhoto content />
                            </ListChatPart>
                            <ListChatPart>
                              <ProfileName>
                                {room.vendorId.nama_lengkap}
                              </ProfileName>
                              <LastChatDisplay>
                                <EllipsisText
                                  text="Makasih mangkok"
                                  length={"25"}
                                />
                              </LastChatDisplay>
                            </ListChatPart>
                          </ChatPerson>
                          <div
                            style={{
                              borderBottom: "1px solid #E0E0E0",
                              width: "100%",
                            }}
                          />
                        </ChatList>

                        <ChatContent>
                          <DisplayChatProfileContent>
                            <ProfilePhoto content />
                            <ProfileName>Emma</ProfileName>
                          </DisplayChatProfileContent>

                          <ChatContetnDisplay>
                            <PlacedChatBox>
                              <ChatBox>Ka boleh nego?</ChatBox>
                            </PlacedChatBox>

                            <PlacedChatBox user>
                              <ChatBox user>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                \n Spesifikasi : App Name : Fitpro/HryFine Versi
                                Bluetooth : 5.0 Layar : Warna 0,96 Inch Sensor
                                Optik : Mikro Epco Bahan Host : Plastik Bahan
                                Gelang : TPU Diameter Jam : 2 cm Metode Operasi
                                ： Operasi Tombol Sentuh Tunggal Standby selama
                                lebih dari 5 hari Sistem Operasi : -Android 5.0
                                or higher -iOS 9.0 or higher Paket sudah
                                termasuk : 1 x M4 1x Charging Dock Cable 1 x
                                Instruksi
                              </ChatBox>
                            </PlacedChatBox>

                            <PlacedChatBox>
                              <ChatBox>Apa itu ka?</ChatBox>
                            </PlacedChatBox>

                            <PlacedChatBox>
                              <ChatBox>
                                Iyaaaa..... Terima kasih banyak ya kaaaaaaa
                              </ChatBox>
                            </PlacedChatBox>
                          </ChatContetnDisplay>

                          <TypingPart>
                            <TextType
                              type="text"
                              name="type"
                              placeholder="tulis pesan.."
                            />
                            <ButtonSend type="submit">Kirim</ButtonSend>
                          </TypingPart>
                        </ChatContent>
                      </TemplateChat>
                    );
                  })}
                </>
              ) : (
                <>
                  <ChatResponsiveClient />
                </>
              )}
            </BgChat>
            )}
          </GlobalTemplate>
        </>
      )}
    </>
  );
};

export default PembeliChatPage;
