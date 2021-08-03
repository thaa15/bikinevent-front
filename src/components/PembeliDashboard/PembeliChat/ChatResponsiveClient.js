import React, { useState, useContext, useEffect } from "react";
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
} from "../../VendorDashboard/VendorChat/VendorChatStyled";
import EllipsisText from "react-ellipsis-text";
import { AnimationPortofolio } from "../../VendorDashboard/VendorProfil/VendorProfileStyled";
import { messageService } from "../../../services/Message";
import { format } from "timeago.js";
import { socket } from "../../../config/web-sockets";
import { loginContext } from "../../../context";
import { vendorService } from "../../../services/Vendor";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const ChatResponsiveClient = ({
    conversations,
}) => {
    const [openchat, setOpenchat] = useState(true);
    const [currentChat, setCurrentChat] = useState();
    const [newMessage, setNewMessage] = useState("");
    const { loginInfo } = useContext(loginContext);
    const [messages, setMessages] = useState([]);
    const [vendorImage, setVendorImage] = useState([]);

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
            let newMsg = [...messages]
            const response = await messageService.postNewChat(
                loginInfo.token,
                message
            );
            newMsg.push(response.data)
            setMessages(newMsg);
            setNewMessage("");
            return response;
        } catch (error) {
            console.log(error);
        }
    };

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
    }, [messages])
    return (
        <AnimationPortofolio>
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
                                        <ListChatPart resp2>
                                            <ProfileName>{room.vendorId.nama_lengkap}</ProfileName>
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
                        {vendorImage
                            .filter(elmen => elmen.id === currentChat.vendorId.vendor)
                            .map((items) => {
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
                                            <ChatBox>
                                                <ReactMarkdown
                                                    children={chat.text}
                                                    plugins={[[gfm, { singleTilde: false }]]}
                                                    allowDangerousHtml={true}
                                                />
                                            </ChatBox>
                                            <TimeDisplay>
                                                {format(chat.createdAt)}
                                            </TimeDisplay>
                                        </PlacedChatBox>
                                    ) : (
                                        <PlacedChatBox key={idx}>
                                            <ChatBox>
                                                <ReactMarkdown
                                                    children={chat.text}
                                                    plugins={[[gfm, { singleTilde: false }]]}
                                                    allowDangerousHtml={true}
                                                />
                                            </ChatBox>
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
                            rows="1"
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
        </AnimationPortofolio>
    )
}
export default ChatResponsiveClient;