import React, { useState, useContext } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import {
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
    BackButton,
    ChatListResp,
    ChatContentResp,
    TimeDisplay
} from "./VendorChatStyled";
import EllipsisText from "react-ellipsis-text";
import { AnimationPortofolio } from "../VendorProfil/VendorProfileStyled";
import { messageService } from "../../../services/Message";
import { format } from "timeago.js";
import { socket } from "../../../config/web-sockets";
import { loginContext } from "../../../context";

const ChatResponsive = ({
    conversations,
}) => {
    const [openchat, setOpenchat] = useState(true);
    const [currentChat, setCurrentChat] = useState();
    const [newMessage, setNewMessage] = useState("");
    const { loginInfo } = useContext(loginContext);
    const [messages, setMessages] = useState([]);
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
    return (
        <AnimationPortofolio>
            <GlobalTemplate>
                {openchat ? (<>
                    <ChatListResp>
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
                                                setOpenchat(false)
                                            }}
                                            active={currentChat == room}>
                                            {typeof room.userId.foto_profil ===
                                                "undefined" ||
                                                room.userId.foto_profil == null ? (
                                                <ListChatPart photo>
                                                    <ProfilePhoto content />
                                                </ListChatPart>
                                            ) : (
                                                <ListChatPart photo>
                                                    <ProfilePhoto
                                                        content
                                                        src={room.userId.foto_profil.url}
                                                    />
                                                </ListChatPart>
                                            )}
                                            <ListChatPart resp2>
                                                <ProfileName>{room.userId.nama_lengkap}</ProfileName>
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
                                        <div style={{ borderBottom: "1px solid #E0E0E0", width: "100%" }} />
                                    </>)
                            })}
                    </ChatListResp>
                </>) : (<>
                    <ChatContentResp>
                        <DisplayChatProfileContent>
                            <BackButton onClick={() => {
                                setOpenchat(true)
                                setMessages([]);
                                setCurrentChat();
                            }} />
                            {typeof currentChat.userId.foto_profil ===
                                "undefined" ||
                                currentChat.userId.foto_profil == null ? (
                                <ProfilePhoto content />
                            ) : (
                                <ProfilePhoto
                                    content
                                    src={currentChat.userId.foto_profil.url}
                                />
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
                    </ChatContentResp>
                </>)}
            </GlobalTemplate>
        </AnimationPortofolio>
    )
}
export default ChatResponsive;