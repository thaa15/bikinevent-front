import React,{useState,useEffect} from "react";
import {
    Nav,
    NavSet,
    NavItem,
    NavLogo,
    Cathe,
    Dropdownbut,
    DropdownContent,
    Dropdownlist,
    SearchBar,
    SearchButton,
    ProfButton,
    DisplayProf,
    ElementLink,
    ShoppingCartIcon,
    ChatIcon,
    ProfileIcon,
    MobileIcon,
    LogOutContent
} from "./NavbarStyled";
import {FiSearch} from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import {AuthLogins} from "../../AllAuth";
import gambartest from "../../images/logocomp.png";
import NavbarVendor from "./NavbarVendor"

const Navbar = ({toggling,isAuth,nama}) => {
    return(
        <>
        {isAuth !== null ? (
            <NavbarVendor toggling={toggling} nama={nama}/>
        ) : (
            <Nav>
                <NavSet>

                    <NavItem part="17%">
                        <ElementLink to="/">
                            <NavLogo src={gambartest} alt="logo"/>
                        </ElementLink>
                    </NavItem>
                    
                    <MobileIcon onClick={toggling}>
                        <FaBars />
                    </MobileIcon>

                    <NavItem part="65%" removedl>
                        <Cathe>Kategori <Dropdownbut/>
                            <DropdownContent>
                                <ElementLink to="/">
                                    <Dropdownlist>Perlengkapan</Dropdownlist>
                                </ElementLink>
                                <ElementLink to="/">
                                    <Dropdownlist>Vanue</Dropdownlist>
                                </ElementLink>
                                <ElementLink to="/">
                                    <Dropdownlist>Talent</Dropdownlist>
                                </ElementLink>
                                <ElementLink to="/">
                                    <Dropdownlist>Jasa</Dropdownlist>
                                </ElementLink>
                                <ElementLink to="/">
                                    <Dropdownlist>Catering</Dropdownlist>
                                </ElementLink>
                                <ElementLink to="/">
                                    <Dropdownlist>Dekorasi</Dropdownlist>
                                </ElementLink>
                            </DropdownContent>
                        </Cathe>
                        <SearchBar placeholder="Cari Keperluan Event Anda.."/>
                        <SearchButton>
                            <FiSearch style={{color:"white",fontSize:"20px"}}/>
                        </SearchButton>
                    </NavItem>

                    <NavItem part="18%" removedl>
                        <ProfButton>
                            <ElementLink to="/">
                                <ShoppingCartIcon/>
                            </ElementLink>
                            <ElementLink to="/">
                                <ChatIcon/>
                            </ElementLink>
                            <ElementLink to="/">
                                <ProfileIcon/>
                            </ElementLink>
                            
                            <LogOutContent>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <DisplayProf>Masuk/</DisplayProf>
                                    <DisplayProf name>Daftar</DisplayProf>
                                </div>
                                <DropdownContent>
                                        <ElementLink to="/login">
                                            <Dropdownlist>Masuk</Dropdownlist>
                                        </ElementLink>
                                        <ElementLink to="/register">
                                            <Dropdownlist>Daftar</Dropdownlist>
                                        </ElementLink>
                                </DropdownContent>
                            </LogOutContent>
                        </ProfButton>
                    </NavItem>
                </NavSet>
            </Nav>
        )}
        </>
    )
}

export default Navbar;