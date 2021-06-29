import React,{useState} from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import { MainVendash, TempVendash } from "../VendorDashboardStyled";
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
    BackButton
} from "./VendorChatStyled";
import EllipsisText from "react-ellipsis-text";

const ChatResponsive = () => {
    const [openchat, setOpenchat] = useState(true);
    return (
        <>
            <GlobalTemplate>
                            {openchat ? (<>
                                <ChatList resp>

                                    <ChatPerson active onClick={()=>{setOpenchat(false)}}>
                                        <ListChatPart resp>
                                            <ProfilePhoto content/>
                                        </ListChatPart>
                                        <ListChatPart resp2>
                                            <ProfileName>Emma</ProfileName>
                                            <LastChatDisplay>
                                                <EllipsisText text="Iyaaaa..... Terima kasih banyak ya kaaaaaaa" length={"40"} />
                                            </LastChatDisplay>
                                        </ListChatPart>
                                    </ChatPerson>
                                    <div style={{ borderBottom: "1px solid #E0E0E0", width: "100%" }} />

                                    <ChatPerson>
                                        <ListChatPart resp>
                                            <ProfilePhoto content/>
                                        </ListChatPart>
                                        <ListChatPart resp2>
                                            <ProfileName>Saffan</ProfileName>
                                            <LastChatDisplay>
                                                <EllipsisText text="Makasih mangkok" length={"25"} />
                                            </LastChatDisplay>
                                        </ListChatPart>
                                    </ChatPerson>
                                    <div style={{ borderBottom: "1px solid #E0E0E0", width: "100%" }} />

                                </ChatList>
                            </>) : (<>
                                <ChatContent resp>
                                    <DisplayChatProfileContent>
                                        <BackButton onClick={()=>{setOpenchat(true)}}/>
                                        <ProfilePhoto content />
                                        <ProfileName>Emma</ProfileName>
                                    </DisplayChatProfileContent>

                                    <ChatContetnDisplay>
                                        <PlacedChatBox>
                                            <ChatBox>
                                                Ka boleh nego?
                                            </ChatBox>
                                        </PlacedChatBox>

                                        <PlacedChatBox user>
                                            <ChatBox user>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                \n
                                                Spesifikasi :
                                                App Name : Fitpro/HryFine
                                                Versi Bluetooth :  5.0
                                                Layar  : Warna 0,96 Inch
                                                Sensor Optik : Mikro Epco
                                                Bahan Host : Plastik
                                                Bahan Gelang : TPU
                                                Diameter Jam : 2 cm
                                                Metode Operasi ： Operasi Tombol Sentuh Tunggal
                                                Standby selama lebih dari 5 hari
                                                Sistem Operasi :
                                                -Android 5.0 or higher
                                                -iOS 9.0 or higher

                                                Paket sudah termasuk :
                                                1 x M4
                                                1x Charging Dock Cable
                                                1 x Instruksi
                                            </ChatBox>
                                        </PlacedChatBox>

                                        <PlacedChatBox>
                                            <ChatBox>
                                                Apa itu ka?
                                            </ChatBox>
                                        </PlacedChatBox>

                                    </ChatContetnDisplay>

                                    <TypingPart>
                                        <TextType
                                            type="text"
                                            name="type"
                                            placeholder="tulis pesan.." />
                                        <ButtonSend type="submit">Kirim</ButtonSend>
                                    </TypingPart>

                                </ChatContent>
                            </>)}
            </GlobalTemplate>
        </>
    )
}
export default ChatResponsive;