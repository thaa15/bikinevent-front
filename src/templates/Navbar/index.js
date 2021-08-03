import React, { useContext, useState, useEffect } from "react";
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
  DropdownSearchContent,
  ElementLinks,
  NotifBadge,
} from "./NavbarStyled";
import { FiSearch } from "react-icons/fi";
import EllipsisText from "react-ellipsis-text";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import gambartest from "../../images/bikineventLogo.png";
import NavbarVendor from "./NavbarVendor";
import { clientCartContext, searchContext } from "../../context";
import { Kategories } from "../../datas/vendordata";
import { encryptData } from "../../Crypted";

const Navbar = ({ toggling, isAuth, nama, role }) => {
  const { searched, setSearched } = useContext(searchContext);
  let history = useHistory();
  const [getsearch, setGetsearch] = useState("");
  const [placehldr, setPlacehldr] = useState("");
  const [searchContent, setSearchContent] = useState(false);
  const { clientCart, setClientCart } = useContext(clientCartContext);

  const removed = () => {
    localStorage.removeItem('mk');

    window.location.reload();
    window.location.href = "/login";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPlacehldr("Cari Keperluan Event Anda..");
    setSearched({ ...searched, searchFill: getsearch, loading: true, fromFilter: false });
    history.push({
      pathname: "/searched",
    });
    setPlacehldr("");
    setSearchContent(false);
  };

  return (
    <>
      {isAuth.length != 0 && role === "vendor" ? (
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
                onClick={() => {
                  setSearchContent(!searchContent);
                }}
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
              ) : (
                <></>
              )}
            </MobileIcon>

            <NavItem part="65%" removedl>
              <Cathe>
                Kategori <Dropdownbut />
                <DropdownContent>
                  {Kategories.map((data, idx) => {
                    return (
                      <ElementLinks
                        key={idx}
                        onClick={() => {
                          setSearched({
                            rangeFilter: {
                              hargaMin: "",
                              hargaMax: "",
                              rating: "",
                            },
                            filter: {
                              lokasi: [],
                              subcategory: [data.subcath],
                            },
                            fromFilter: true,
                            searchFill: `Produk Kategori ${data.cath}`,
                            loading: true
                          });

                          history.push({
                            pathname: "/searched",
                          });
                        }}>
                        <Dropdownlist>{data.cath}</Dropdownlist>
                      </ElementLinks>
                    )
                  })}
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
                {nama.length != 0 ? (
                  <>
                    <ElementLink to="/client-purchase/cart"
                      onClick={() => {
                        setClientCart({
                          ...clientCart,
                          price: "",
                          payment_method: null,
                          clientInfo: null,
                          product: [],
                          statusDp: false,
                          notes: [],
                          vendor: [],
                        });
                      }}>
                      <ShoppingCartIcon />
                      {clientCart.notif === 0 ? (<></>) : (
                        <NotifBadge>{clientCart.notif}</NotifBadge>)}
                    </ElementLink>
                    <ElementLink to="/client-chat">
                      <ChatIcon />
                    </ElementLink>
                    <LogOutContent need>
                      <ElementLinks>
                        <ProfileIcon />
                      </ElementLinks>
                      <DropdownContent>
                        <ElementLink to="/client-profil">
                          <Dropdownlist>Profile</Dropdownlist>
                        </ElementLink>
                        <ElementLink to="/track-order/records">
                          <Dropdownlist>Pesanan</Dropdownlist>
                        </ElementLink>
                        <ElementLink onClick={removed}>
                          <Dropdownlist>LogOut</Dropdownlist>
                        </ElementLink>
                      </DropdownContent>
                    </LogOutContent>
                  </>
                ) : (
                  <>
                    <ElementLink to="/client-purchase/cart">
                      <ShoppingCartIcon />
                    </ElementLink>
                    <ElementLink to="/client-chat">
                      <ChatIcon />
                    </ElementLink>
                    <ElementLink to="/client-profil">
                      <ProfileIcon />
                    </ElementLink>
                  </>
                )}

                <LogOutContent>
                  {nama.length != 0 ? (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <DisplayProf need>Hello</DisplayProf>
                      <DisplayProf name need>
                        <EllipsisText text={nama} tail={""} length={"6"} />
                      </DisplayProf>
                    </div>
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
