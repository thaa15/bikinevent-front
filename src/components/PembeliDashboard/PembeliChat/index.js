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
  TimeDisplay,
  ChatNotOpen,
} from "../../VendorDashboard/VendorChat/VendorChatStyled";
import ChatResponsiveClient from "./ChatResponsiveClient";
import EllipsisText from "react-ellipsis-text";
import { roomService } from "../../../services/Room";
import { socket } from "../../../config/web-sockets";
import { messageService } from "../../../services/Message";
import { format } from "timeago.js";
import { vendorService } from "../../../services/Vendor";

const PembeliChatPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { loginInfo } = useContext(loginContext);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [vendorImage, setVendorImage] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await roomService.getUserRoom(
        loginInfo.userId,
        loginInfo.token
      );
      const data = response.data;
      setConversations(data);
      setIsLoading(false);
    };
    fetchConversations();
  }, [loginInfo.userId, loginInfo.token]);

  useEffect(() => {
    socket.emit("addUser", loginInfo.userId);
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.sender,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [socket]);

  useEffect(() => {
    arrivalMessage &&
      currentChat.vendorId.id.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [currentChat, arrivalMessage]);

  useEffect(() => {
    const fetchVendors = async () => {
      const response = await vendorService.getAllVendor();
      const data = response.data;
      const dataVendorFiltered = data
        .filter(elmen => conversations
          .map(el => el.vendorId.vendor).includes(elmen.id))
      setVendorImage(dataVendorFiltered);
    };
    fetchVendors();
  })

  const submitChat = async (e, roomId) => {
    e.preventDefault();
    const message = {
      sender: loginInfo.userId,
      text: newMessage,
      room: roomId,
    };
    socket.emit("sendMessage", {
      sender: loginInfo.userId,
      receiver: currentChat.vendorId.id,
      text: newMessage,
    });

    try {
      const response = await messageService.postNewChat(
        loginInfo.token,
        message
      );
      setMessages([...messages, response.data]);
      setNewMessage("");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const [responsive, setResponsive] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 861) setResponsive(false);
    else setResponsive(true);
  }, []);
  console.log(currentChat)

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
                    <TemplateChat>
                      <ChatList>
                        {conversations
                          .sort((a, b) => {
                            if (a.messages.length !== 0 && b.messages.length !== 0) {
                              return new Date(b.messages[b.messages.length - 1].createdAt)
                                - new Date(a.messages[a.messages.length - 1].createdAt)
                            }
                          })
                          .map((room, idx) => {
                            return (
                              <>
                                <ChatPerson
                                  key={idx}
                                  onClick={(e) => {
                                    if (currentChat === room) {
                                      return null;
                                    }
                                    setCurrentChat(room);
                                    setMessages(room.messages);
                                  }}
                                  active={currentChat == room}
                                >
                                  {vendorImage
                                    .filter(elmen => room.vendorId.vendor === elmen.id)
                                    .map((items, idsx) => {
                                      return (
                                        <>
                                          {typeof items.foto_profil ===
                                            "undefined" ||
                                            items.foto_profil == null ? (
                                            <ListChatPart photo>
                                              <ProfilePhoto content />
                                            </ListChatPart>
                                          ) : (
                                            <ListChatPart photo key={idsx}>
                                              <ProfilePhoto
                                                content
                                                src={items.foto_profil.url}
                                              />
                                            </ListChatPart>
                                          )}
                                        </>
                                      )
                                    })}
                                  <ListChatPart>
                                    <ProfileName>
                                      {room.vendorId.nama_lengkap}
                                    </ProfileName>
                                    <LastChatDisplay>
                                      {room.messages.length === 0 ? (
                                        <EllipsisText
                                          text={"Start Chatting"}
                                          length={"20"}
                                        />
                                      ) : (
                                        <EllipsisText
                                          text={
                                            room.messages[room.messages.length - 1]
                                              .text
                                          }
                                          length={"20"}
                                        />
                                      )}
                                    </LastChatDisplay>
                                  </ListChatPart>
                                </ChatPerson>
                                <div
                                  style={{
                                    borderBottom: "1px solid #E0E0E0",
                                    width: "100%",
                                  }}
                                />
                              </>
                            );
                          })}
                      </ChatList>

                      <ChatContent>
                        {typeof currentChat === "undefined" ||
                          currentChat == null ? (
                          <ChatNotOpen>
                            <NoEntryContent>
                              <ImageNoEntry src={nochat} alt="No Entry" />
                              <h4
                                style={{ fontSize: "18px", color: "#212B36" }}
                              >
                                Menampilkan pesan
                              </h4>
                              <p style={{ fontSize: "14px", color: "#909DAA" }}>
                                Tekan salah satu pesan dengan pembeli untuk
                                memulai display ini
                              </p>
                            </NoEntryContent>
                          </ChatNotOpen>
                        ) : (
                          <>
                            <DisplayChatProfileContent>
                              {vendorImage
                                .filter(elmen => elmen.id === currentChat.vendorId.vendor)
                                .map((items, idsx) => {
                                  return (
                                    <>
                                      {typeof items.foto_profil ===
                                        "undefined" ||
                                        items.foto_profil == null ? (
                                        <ProfilePhoto content />
                                      ) : (
                                        <ProfilePhoto
                                          content
                                          src={items.foto_profil.url}
                                        />
                                      )}
                                    </>
                                  )
                                })}
                              <ProfileName>
                                {currentChat.vendorId.nama_lengkap}
                              </ProfileName>
                            </DisplayChatProfileContent>
                            <ChatContetnDisplay>
                              {messages.map((chat, idx) => {
                                return (
                                  <>
                                    {chat.sender == loginInfo.userId ? (
                                      <PlacedChatBox user key={idx}>
                                        <ChatBox>{chat.text}</ChatBox>
                                        <TimeDisplay>
                                          {format(chat.createdAt)}
                                        </TimeDisplay>
                                      </PlacedChatBox>
                                    ) : (
                                      <PlacedChatBox key={idx}>
                                        <ChatBox>{chat.text}</ChatBox>
                                        <TimeDisplay>
                                          {format(chat.createdAt)}
                                        </TimeDisplay>
                                      </PlacedChatBox>
                                    )}
                                  </>
                                );
                              })}
                            </ChatContetnDisplay>
                            <TypingPart>
                              <TextType
                                type="text"
                                name="type"
                                placeholder="tulis pesan.."
                                onChange={(e) => setNewMessage(e.target.value)}
                                value={newMessage}
                              />
                              <ButtonSend
                                type="submit"
                                onClick={(e) => {
                                  submitChat(e, currentChat.id);
                                }}
                              >
                                Kirim
                              </ButtonSend>
                            </TypingPart>
                          </>
                        )}
                      </ChatContent>
                    </TemplateChat>
                  </>
                ) : (
                  <>
                    <ChatResponsiveClient
                      conversations={conversations} />
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
