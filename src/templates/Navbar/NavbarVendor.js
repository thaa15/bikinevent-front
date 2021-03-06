import React from "react";
import {
    Nav,
    NavSet,
    NavItemVendor,
    NavLogo,
    DisplayProf,
    ElementLink,
    MobileIconVendor,
    LogOutContent,
    DropdownContent,
    Dropdownlist
} from "./NavbarStyled";
import { FaBars } from "react-icons/fa";
import gambartest from "../../images/bikineventLogo.png";
import { encryptData } from "../../Crypted";

const NavbarVendor = ({ toggling, nama }) => {
    const removed = () => {
        localStorage.removeItem('mk');
        
        window.location.reload();
        window.location.href = "/login";
      }
    return (
        <Nav>
            <NavSet>

                <NavItemVendor part="80%">
                    <ElementLink to="/vendor-chat">
                        <NavLogo src={gambartest} alt="logo" />
                    </ElementLink>
                </NavItemVendor>

                <MobileIconVendor onClick={toggling}>
                    <FaBars />
                </MobileIconVendor>

                <NavItemVendor part="20%" removedl>
                    <LogOutContent>
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <DisplayProf>Hello</DisplayProf>
                            <DisplayProf name>{nama}</DisplayProf>
                        </div>
                        <DropdownContent>
                            <ElementLink onClick={removed}>
                                <Dropdownlist>LogOut</Dropdownlist>
                            </ElementLink>
                        </DropdownContent>
                    </LogOutContent>
                </NavItemVendor>
            </NavSet>
        </Nav>
    )
}

export default NavbarVendor;