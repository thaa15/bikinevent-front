import React, { useState,useEffect } from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
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
    ChatBox
} from "./VendorChatStyled";
import EllipsisText from "react-ellipsis-text";
import ChatResponsive from "./VendorChatResponsive";

const VendorChatContent = () => {
    const [responsive, setResponsive] = useState(true);

    useEffect(()=>{
        if (window.innerWidth < 861) setResponsive(false);
        else setResponsive(true);
    },[window.innerWidth])
    return (
        <>
            {responsive ? (
                <>
                    <GlobalTemplate>
                        <TempVendash>
                            <DashboardSite typeVendash="chat" />
                            <MainVendash>
                                <TemplateChat>
                                    <ChatList>

                                        <ChatPerson active>
                                            <ListChatPart photo>
                                                <ProfilePhoto content/>
                                            </ListChatPart>
                                            <ListChatPart>
                                                <ProfileName>Emma</ProfileName>
                                                <LastChatDisplay>
                                                    <EllipsisText text="Iyaaaa..... Terima kasih banyak ya kaaaaaaa" length={"25"} />
                                                </LastChatDisplay>
                                            </ListChatPart>
                                        </ChatPerson>
                                        <div style={{ borderBottom: "1px solid #E0E0E0", width: "100%" }} />

                                        <ChatPerson>
                                            <ListChatPart photo>
                                                <ProfilePhoto content/>
                                            </ListChatPart>
                                            <ListChatPart>
                                                <ProfileName>Saffan</ProfileName>
                                                <LastChatDisplay>
                                                    <EllipsisText text="Makasih mangkok" length={"25"} />
                                                </LastChatDisplay>
                                            </ListChatPart>
                                        </ChatPerson>
                                        <div style={{ borderBottom: "1px solid #E0E0E0", width: "100%" }} />

                                    </ChatList>
                                    <ChatContent>
                                        <DisplayChatProfileContent>
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
                                                placeholder="tulis pesan.." />
                                            <ButtonSend type="submit">Kirim</ButtonSend>
                                        </TypingPart>

                                    </ChatContent>
                                </TemplateChat>
                            </MainVendash>
                        </TempVendash>
                    </GlobalTemplate>
                </>) : (<>
                <ChatResponsive/>
                </>)}

        </>
    )
}

export default VendorChatContent;