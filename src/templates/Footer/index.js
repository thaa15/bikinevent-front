import React from "react";
import {
    Foot,
    FootSet,
    FooterBox,
    FooterExp,
    FooterExpLink,
    CopyWright,
    SocialIconLink,
    SocialIcons,
} from "./FooterStyled";
import gambartest from "../../images/logocomp.png";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai";


const Footer = () => {
    return(
        <Foot>
            <div style={{width:"100%"}}>
                <FootSet>
                    <FooterBox>
                        <img src={gambartest} alt="logo" width="90%"/>
                        <FooterExp>
                            Tower C Taman Melati
                            Jl. ABC Tengah no 18 RT 04 RW 11
                            Kelurahan Zebra, Kecamatan Cikutra
                            Kota Bandung, 40123
                        </FooterExp>
                    </FooterBox>

                    <FooterBox>
                        <FooterExp title row>Layanan Pelanggan</FooterExp>
                        <FooterExpLink to="/allblog">Blog</FooterExpLink>
                        <FooterExpLink to="/faq">FAQ</FooterExpLink>
                        <FooterExpLink to="/tentangkami">Tentang Kami</FooterExpLink>
                        <FooterExpLink to="/panduan">Panduan Pemesanan</FooterExpLink>
                        <FooterExpLink>Pelaporan Kejahatan</FooterExpLink>
                    </FooterBox>

                    <FooterBox>
                        <FooterExp title row>Legal</FooterExp>
                        <FooterExpLink>Syarat dan Ketentuan</FooterExpLink>
                        <FooterExpLink to="/privasi">Kebijakan Privasi</FooterExpLink>
                        <FooterExpLink to="/refund">Kebijakan Refund</FooterExpLink>
                    </FooterBox>

                    <FooterBox>
                        <FooterExp title row>Hubungi Kami</FooterExp>
                        <FooterExp row>+62813 1234 5678</FooterExp>
                        <FooterExp row>bikinevent@gmail.com</FooterExp>
                    </FooterBox>

                    <FooterBox>
                        <FooterExp title row>Media Sosial</FooterExp>
                        <SocialIcons>
                            <SocialIconLink
                            href="https://www.facebook.com"
                            target="_blank"
                            aria-label="Facebook"
                            >
                                <AiFillFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                            href="https://www.instagram.com"
                            target="_blank"
                            aria-label="Instagram"
                            >
                                <AiFillInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                            href="https://www.youtube.com"
                            target="_blank"
                            aria-label="Youtube"
                            >
                                <AiFillYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                            href="https://www.linkedin.com"
                            target="_blank"
                            aria-label="Linkedin"
                            >
                                <AiFillLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </FooterBox>
                </FootSet>
                <CopyWright>Bikinevent 2021 © All rights reserved</CopyWright>
            </div>
        </Foot>
    )
};

export default Footer;