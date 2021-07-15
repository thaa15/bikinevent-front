import React, { useEffect, useState } from "react";
import {
  Foot,
  FootSet,
  FooterBox,
  FooterExp,
  FooterExpLink,
  CopyWright,
  SocialIconLink,
  SocialIcons,
  ImageFooter,
} from "./FooterStyled";
import gambartest from "../../images/logocomp.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { footerService } from "../../services/Footer";

const Footer = () => {
  let year = new Date();
  let years = year.getFullYear();
  const [footerData, setFooterData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await footerService.getFooter();
      const data = response.data;
      setFooterData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <Foot>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div style={{ width: "100%" }}>
          <FootSet>
            <FooterBox>
              <ImageFooter src={gambartest} alt="logo" />
              <FooterExp>
                Tower C Taman Melati Jl. ABC Tengah no 18 RT 04 RW 11 Kelurahan
                Zebra, Kecamatan Cikutra Kota Bandung, 40123
              </FooterExp>
            </FooterBox>

            <FooterBox>
              <FooterExp title row>
                Layanan Pelanggan
              </FooterExp>
              <FooterExpLink to="/allblog">Blog</FooterExpLink>
              <FooterExpLink to="/faq">FAQ</FooterExpLink>
              <FooterExpLink to="/tentangkami">Tentang Kami</FooterExpLink>
              <FooterExpLink to="/panduan">Panduan Pemesanan</FooterExpLink>
              <FooterExpLink>Pelaporan Kejahatan</FooterExpLink>
            </FooterBox>

            <FooterBox>
              <FooterExp title row>
                Legal
              </FooterExp>
              <FooterExpLink to="/syarat">Syarat dan Ketentuan</FooterExpLink>
              <FooterExpLink to="/privasi">Kebijakan Privasi</FooterExpLink>
              <FooterExpLink to="/refund">Kebijakan Refund</FooterExpLink>
            </FooterBox>

            <FooterBox>
              <FooterExp title row>
                Hubungi Kami
              </FooterExp>
              <FooterExp row>{footerData.contact_number}</FooterExp>
              <FooterExp row>{footerData.contact_email}</FooterExp>
            </FooterBox>

            <FooterBox>
              <FooterExp title row>
                Media Sosial
              </FooterExp>
              <SocialIcons>
                <SocialIconLink
                  href={footerData.link_facebook}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <AiFillFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.link_instagram}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.link_youtube}
                  target="_blank"
                  aria-label="Youtube"
                >
                  <AiFillYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.link_linkedIn}
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <AiFillLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </FooterBox>
          </FootSet>
          <CopyWright>Bikinevent {years} © All rights reserved</CopyWright>
        </div>
      )}
    </Foot>
  );
};

export default Footer;
