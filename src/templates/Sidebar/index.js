import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarWrapperContainer,
    SidebarLink,
    SideBtnWrap,
    HomeButton,
    ShoppingCartIcon,
    ChatIcon,
    ProfileIcon,
    ButtonBottom,
    TrackIcon
} from "./SidebarStyled";
import SidebarVendor from "./SidebarVendor"

const Sidebar = ({ isOpen, toggling, isAuth, role }) => {
    const removed = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("nama");
        localStorage.removeItem("vendor_id");
        localStorage.removeItem("userId");
        localStorage.removeItem("pembeliId");
        localStorage.removeItem("role");

        window.location.reload();
        window.location.href = "/login";
        toggling = false;
    }
    return (
        <>
            {isAuth.length > 4 && role === "vendor" ? (
                <SidebarVendor isOpen={isOpen} toggling={toggling} />
            ) : (
                <SidebarContainer isOpen={isOpen}>
                    <SidebarWrapperContainer>
                        <Icon>
                            <CloseIcon onClick={toggling} />
                        </Icon>

                        <SidebarWrapper>
                            <SidebarLink to="/" onClick={toggling}>
                                <SideBtnWrap>
                                    <HomeButton />Home
                                </SideBtnWrap>
                            </SidebarLink>

                            <SidebarLink to="/client-purchase/cart" onClick={toggling}>
                                <SideBtnWrap>
                                    <ShoppingCartIcon />Cart
                                </SideBtnWrap>
                            </SidebarLink>

                            <SidebarLink to="/" onClick={toggling}>
                                <SideBtnWrap>
                                    <ChatIcon />Chat
                                </SideBtnWrap>
                            </SidebarLink>

                            <SidebarLink to="/client-profil" onClick={toggling}>
                                <SideBtnWrap>
                                    <ProfileIcon />Profile
                                </SideBtnWrap>
                            </SidebarLink>

                            {role === "pembeli" ? (
                                <SidebarLink to="/track-order/records" onClick={toggling}>
                                    <SideBtnWrap>
                                        <TrackIcon />Pesanan
                                    </SideBtnWrap>
                                </SidebarLink>
                            ) : (<></>)}

                        </SidebarWrapper>
                        {role === "pembeli" ? (
                            <div style={{ width: "50%", margin: "0 auto" }}>
                                <ButtonBottom onClick={removed}>Logout</ButtonBottom>
                            </div>
                        ) : (
                            <div style={{ width: "50%", margin: "0 auto" }}>
                                <ButtonBottom to="/login" onClick={toggling}>Login</ButtonBottom>
                                <ButtonBottom call to="/register" onClick={toggling}>Register</ButtonBottom>
                            </div>
                        )}
                    </SidebarWrapperContainer>
                </SidebarContainer>
            )}
        </>
    );
};

export default Sidebar;