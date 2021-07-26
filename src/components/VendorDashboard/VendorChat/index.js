import React, { useState, useEffect, useContext, useRef } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash, TempVendash } from "../VendorDashboardStyled";
import { format } from "timeago.js";
import nochat from "../../../images/nochat.png";
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
  ChatNotOpen
} from "./VendorChatStyled";
import EllipsisText from "react-ellipsis-text";
import ChatResponsive from "./VendorChatResponsive";
import { roomService } from "../../../services/Room";
import { loginContext } from "../../../context";
import { BgChat } from "../../PembeliDashboard/PembeliChat/style";
import { messageService } from "../../../services/Message";
import { socket } from "../../../config/web-sockets";
import { ImageNoEntry, NoEntryContent } from "../../PembeliDashboard/PembeliCart/Styled";

const VendorChatContent = () => {
  const [responsive, setResponsive] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const { loginInfo } = useContext(loginContext);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await roomService.getVendorRoom(
        loginInfo.userId,
        loginInfo.token
      );
      const data = response.data;
      setConversations(data);
      setMessages(data.messages);
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
      currentChat?.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [currentChat, arrivalMessage]);

  const submitChat = async (e, roomId) => {
    e.preventDefault();
    const message = {
      sender: loginInfo.userId,
      text: newMessage,
      room: roomId,
    };
    socket.emit("sendMessage", {
      sender: loginInfo.userId,
      receiver: currentChat.userId.id,
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

  useEffect(() => {
    if (window.innerWidth < 861) setResponsive(false);
    else setResponsive(true);
  }, [window.innerWidth]);

  console.log(currentChat)
  return (
    <>
      {responsive ? (
        <>
          <GlobalTemplate>
            <TempVendash>
              <DashboardSite typeVendash="chat" />
              <MainVendash>
                <TemplateChat>
                  {conversations.length == 0 ? (

                    <NoEntryContent>
                      <ImageNoEntry src={nochat} alt="No Entry" need />
                      <h4 style={{ fontSize: "18px", color: "#212B36" }}>
                        Chat-mu Kosong!
                      </h4>
                      <p style={{ fontSize: "14px", color: "#909DAA" }}>
                        Belum ada pembeli menghubungimu!
                      </p>
                    </NoEntryContent>
                  ) : (
                    <>
                      <ChatList>
                        {conversations.map((room, idx) => {
                          return (
                            <>
                              <ChatPerson
                                key={idx}
                                onClick={(e) => {
                                  setCurrentChat(room);
                                  setMessages(room.messages);
                                }}
                                active={currentChat == room}>
                                {typeof room.userId.foto_profil.url === "undefined" ||
                                  room.userId.foto_profil.url == null ? (
                                  <ListChatPart photo>
                                    <ProfilePhoto content />
                                  </ListChatPart>
                                ) : (
                                  <ListChatPart photo>
                                    <ProfilePhoto content src={room.userId.foto_profil.url} />
                                  </ListChatPart>
                                )}
                                <ListChatPart>
                                  <ProfileName>
                                    {room.userId.nama_lengkap}
                                  </ProfileName>
                                  <LastChatDisplay>
                                    <EllipsisText
                                      text={
                                        room.messages[room.messages.length - 1].text
                                      }
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
                              <h4 style={{ fontSize: "18px", color: "#212B36" }}>
                                Menampilkan pesan
                              </h4>
                              <p style={{ fontSize: "14px", color: "#909DAA" }}>
                                Tekan salah satu pesan dengan pembeli untuk memulai display ini
                              </p>
                            </NoEntryContent>
                          </ChatNotOpen>
                        ) : (
                          <>
                            <DisplayChatProfileContent>
                              {typeof currentChat.userId.foto_profil.url === "undefined" ||
                                currentChat.userId.foto_profil.url == null ? (
                                <ProfilePhoto content />
                              ) : (
                                <ProfilePhoto content src={currentChat.userId.foto_profil.url} />
                              )}
                              <ProfileName>
                                {currentChat.userId.nama_lengkap}
                              </ProfileName>
                            </DisplayChatProfileContent>
                            <ChatContetnDisplay>
                              {messages.map((chat, idx) => {
                                return (
                                  <>
                                    {chat.sender == loginInfo.userId ? (
                                      <PlacedChatBox user key={idx}>
                                        <ChatBox>{chat.text}</ChatBox>
                                        <TimeDisplay>{format(chat.createdAt)}</TimeDisplay>
                                      </PlacedChatBox>
                                    ) : (
                                      <PlacedChatBox key={idx}>
                                        <ChatBox>{chat.text}</ChatBox>
                                        <TimeDisplay>{format(chat.createdAt)}</TimeDisplay>
                                      </PlacedChatBox>
                                    )}
                                  </>
                                );
                              })}
                            </ChatContetnDisplay>{" "}
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
                    </>
                  )}
                </TemplateChat>
              </MainVendash>
            </TempVendash>
          </GlobalTemplate>
        </>
      ) : (
        <>
          <ChatResponsive />
        </>
      )}
    </>
  );
};

export default VendorChatContent;
