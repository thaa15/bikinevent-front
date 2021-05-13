import React from "react";
import {
    Nav,
    NavSet,
    NavItem,
    Cathe,
    Dropdownbut,
    DropdownContent,
    Dropdownlist,
    SearchBar,
    SearchButton,
    ProfButton,
    DisplayProf,
    ElementLink,
} from "./NavbarStyled";
import {FiSearch} from "react-icons/fi";
import {FaShoppingCart} from "react-icons/fa";
import {BsChatFill,BsFillPersonFill} from "react-icons/bs";
import gambartest from "../../images/logocomp.png";
const Navbar = () => {
    return(
        <Nav>
            <NavSet>

                <NavItem part="17%">
                    <ElementLink to="/">
                        <img src={gambartest} alt="logo" width="80%"/>
                    </ElementLink>
                </NavItem>

                <NavItem part="65%">
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

                <NavItem part="18%">
                    <ProfButton>
                        <ElementLink to="/">
                            <FaShoppingCart style={{color:"#909DAA",
                                                    fontSize:"25px",
                                                    cursor:"pointer"}}/>
                        </ElementLink>
                        <ElementLink to="/">
                            <BsChatFill style={{color:"#909DAA",
                                                fontSize:"25px",
                                                cursor:"pointer"}}/>
                        </ElementLink>
                        <ElementLink to="/">
                            <BsFillPersonFill style={{color:"#909DAA",
                                                    fontSize:"25px",
                                                    cursor:"pointer"}}/>
                        </ElementLink>
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <ElementLink to="/login">
                                <DisplayProf>Masuk/</DisplayProf>
                            </ElementLink>
                            <ElementLink to="/">
                                <DisplayProf name>Daftar</DisplayProf>
                            </ElementLink>
                        </div>
                    </ProfButton>
                </NavItem>
            </NavSet>
        </Nav>
    )
}

export default Navbar;