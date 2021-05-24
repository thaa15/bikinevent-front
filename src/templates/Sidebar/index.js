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
    ButtonBottom
} from "./SidebarStyled";

const Sidebar = ({ isOpen, toggling }) => {
    return (
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

                    <SidebarLink to="/" onClick={toggling}>
                        <SideBtnWrap>
                            <ShoppingCartIcon />Cart
                        </SideBtnWrap>
                    </SidebarLink>

                    <SidebarLink to="/" onClick={toggling}>
                        <SideBtnWrap>
                            <ChatIcon />Chat
                        </SideBtnWrap>
                    </SidebarLink>

                    <SidebarLink to="/" onClick={toggling}>
                        <SideBtnWrap>
                            <ProfileIcon />Profile
                        </SideBtnWrap>
                    </SidebarLink>

                </SidebarWrapper>

                <div style={{width:"50%",margin:"0 auto"}}>
                    <ButtonBottom to="/login">Login</ButtonBottom>
                    <ButtonBottom call to="/register">Register</ButtonBottom>
                </div>
            </SidebarWrapperContainer>
        </SidebarContainer>
    );
};

export default Sidebar;