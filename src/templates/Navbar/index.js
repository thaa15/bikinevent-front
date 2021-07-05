import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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
  LogOutContent,
  DropdownSearchContent
} from "./NavbarStyled";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import gambartest from "../../images/logocomp.png";
import NavbarVendor from "./NavbarVendor";
import { searchContext } from "../../context";

const Navbar = ({ toggling, isAuth, nama, role }) => {
  const history = useHistory();
  const { searched, setSearched } = useContext(searchContext);
  const [getsearch, setGetsearch] = useState("");
  const [placehldr, setPlacehldr] = useState("");
  const [searchContent, setSearchContent] = useState(false);

  const removed = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nama");
    localStorage.removeItem("vendor_id");
    localStorage.removeItem("role");
    
    window.location.reload();
    window.location.href = "/login";
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setPlacehldr("Cari Keperluan Event Anda..")
    setSearched({ ...searched, searchFill: getsearch, loading: true });
    history.push({
      pathname: "/searched"
    })
    setPlacehldr("");
    setSearchContent(false)
  };
  return (
    <>
      {isAuth.length > 4 && role === "vendor" ? (
        <NavbarVendor toggling={toggling} nama={nama} />
      ) : (
        <Nav>
          <NavSet>
            <NavItem part="17%">
              <ElementLink to="/">
                <NavLogo src={gambartest} alt="logo" />
              </ElementLink>
            </NavItem>

            <MobileIcon>
              <FaBars onClick={toggling} />
              <AiOutlineSearch
                style={{ marginRight: "14px" }}
                onClick={() => { setSearchContent(!searchContent) }}
              />
              {searchContent ? (
                <DropdownSearchContent>
                  <form onSubmit={submitHandler}>
                    <SearchBar
                      mobile
                      type="search"
                      required
                      placeholder="Cari Keperluan Event Anda.."
                      value={placehldr}
                      onChange={(e) => {
                        setGetsearch(e.target.value);
                        setPlacehldr(e.target.value);
                      }}
                    />
                    <SearchButton mobile type="submit">
                      <FiSearch style={{ color: "white", fontSize: "20px" }} />
                    </SearchButton>
                  </form>
                </DropdownSearchContent>
              ) : (<></>)}
            </MobileIcon>

            <NavItem part="65%" removedl>
              <Cathe>
                Kategori <Dropdownbut />
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
              <form
                style={{ width: "100%", display: "flex", flexDirection: "row" }}
                onSubmit={submitHandler}
              >
                <SearchBar
                  type="search"
                  placeholder="Cari Keperluan Event Anda.."
                  value={placehldr}
                  required
                  onChange={(e) => {
                    setGetsearch(e.target.value);
                    setPlacehldr(e.target.value);
                  }}
                />
                <SearchButton>
                  <FiSearch style={{ color: "white", fontSize: "20px" }} />
                </SearchButton>
              </form>
            </NavItem>

            <NavItem part="18%" removedl>
              <ProfButton>
                <ElementLink to="/">
                  <ShoppingCartIcon />
                </ElementLink>
                <ElementLink to="/">
                  <ChatIcon />
                </ElementLink>
                <ElementLink to="/">
                  <ProfileIcon />
                </ElementLink>

                <LogOutContent>
                  {nama.length > 4 ? (
                    <>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <DisplayProf>Hello</DisplayProf>
                        <DisplayProf name>{nama}</DisplayProf>
                      </div>
                      <DropdownContent>
                        <ElementLink onClick={removed}>
                          <Dropdownlist>LogOut</Dropdownlist>
                        </ElementLink>
                      </DropdownContent>
                    </>
                  ) : (
                    <>
                      <div style={{ display: "flex", flexDirection: "column" }}>
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
                    </>
                  )}

                </LogOutContent>
              </ProfButton>
            </NavItem>
          </NavSet>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
