import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarWrapperContainer,
    SidebarLink,
    SideBtnWrap,
    ShoppingCartIcon,
    ChatIcon,
    ProfileIcon,
    ButtonBottom,
    ProdukIcon,
    KeuanganIcon
} from "./SidebarStyled";

const SidebarVendor = ({ isOpen, toggling }) => {
    const removed = () => {
        localStorage.removeItem("tokenVendor");
        localStorage.removeItem("nama");

        window.location.reload();
        window.location.href = "/";
        toggling=false;
    }
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarWrapperContainer>
                <Icon>
                    <CloseIcon onClick={toggling} />
                </Icon>

                <SidebarWrapper>
                    <SidebarLink to="/vendor-chat" onClick={toggling}>
                        <SideBtnWrap>
                            <ChatIcon />Chat
                        </SideBtnWrap>
                    </SidebarLink>

                    <SidebarLink to="/vendor-pesanan" onClick={toggling}>
                        <SideBtnWrap>
                            <ShoppingCartIcon />Pesanan
                        </SideBtnWrap>
                    </SidebarLink>

                    <SidebarLink to="/vendor-produk" onClick={toggling}>
                        <SideBtnWrap>
                            <ProdukIcon />Produk
                        </SideBtnWrap>
                    </SidebarLink>

                    <SidebarLink to="/vendor-keuangan" onClick={toggling}>
                        <SideBtnWrap>
                            <KeuanganIcon />Keuangan
                        </SideBtnWrap>
                    </SidebarLink>

                    <SidebarLink to="/vendor-profil" onClick={toggling}>
                        <SideBtnWrap>
                            <ProfileIcon />Profil
                        </SideBtnWrap>
                    </SidebarLink>
                </SidebarWrapper>

                <div style={{ width: "50%", margin: "0 auto" }}>
                    <ButtonBottom onClick={removed}>Logout</ButtonBottom>
                </div>
            </SidebarWrapperContainer>
        </SidebarContainer>
    );
};

export default SidebarVendor;