import "./App.css";
import React, { useState, useEffect } from "react";
import { loginContext, searchContext } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ProtectedRouteSucReg,
  ProtectedVendorLogin,
  ProtectedVendor,
  ProtectedSearch,
  ProtectedUser
} from "./templates/ProtectedRoute";
import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import Footer from "./templates/Footer";
import Home from "./pages";
import LoginPage from "./components/LogReg/LoginPage";
import ScrollToTop from "./templates/ScrollToTop";
import RegisterPage from "./components/LogReg/RegisterPage";
import SuccessReg from "./components/LogReg/SuccessRegPage";
import { RoutedBlog, Blogs } from "./pages/blog";
import { FAQ, TentangKami, Panduan, Privasi, Refund } from "./pages/pelayanan";
import { TampilanProdukPage, TampilanVendorPage } from "./pages/vendor_produk";
import {
  VendorChat,
  VendorPesanan,
  VendorProduk,
  VendorKeuangan,
  VendorProfil,
} from "./pages/vendorcenter";
import SearchContent from "./components/SearchContent";
import LoginSuccess from "./components/LogReg/SuccessRegPage/LoginSuccess";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searched, setSearched] = useState({
    searchFill: "",
    filter: {
      lokasi: [],
      subcategory: [],
    },
    rangeFilter: {
      hargaMin: "",
      hargaMax: "",
      rating: "",
    },
    loading: true,
  });
  const [loginInfo, setLoginInfo] = useState({
    token: "",
    id: "",
    name: "",
    role: ""
  });

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoginInfo({
      ...loginInfo,
      name: `${localStorage.getItem("nama")}`,
      token: `${localStorage.getItem("tokenVendor")}`,
    });
  }, []);

  return (
    <>
      <Router>
        <div className="page-container">
          <div className="content-wrap">
            <ScrollToTop />
            <searchContext.Provider value={{ searched, setSearched }}>
              <loginContext.Provider value={{ loginInfo, setLoginInfo }}>
                <Sidebar
                  isOpen={isOpen}
                  toggling={toggling}
                  isAuth={loginInfo.token}
                />
                <Navbar toggling={toggling} isAuth={loginInfo.token} nama={loginInfo.name} />
                <Switch>
                  <ProtectedVendor
                    path="/"
                    component={Home}
                    exact
                    isAuth={loginInfo.token}
                  />
                  <ProtectedUser path="/login" component={LoginPage} isAuth={loginInfo.token} exact />
                  <ProtectedUser path="/register" component={RegisterPage} isAuth={loginInfo.token} exact />
                  <ProtectedVendorLogin
                    path="/vendor-chat"
                    component={VendorChat}
                    isAuth={loginInfo.token}
                    exact
                  />
                  <ProtectedVendorLogin
                    path="/vendor-pesanan"
                    component={VendorPesanan}
                    isAuth={loginInfo.token}
                    exact
                  />
                  <ProtectedVendorLogin
                    path="/vendor-produk"
                    component={VendorProduk}
                    isAuth={loginInfo.token}
                    exact
                  />
                  <ProtectedVendorLogin
                    path="/vendor-keuangan"
                    component={VendorKeuangan}
                    isAuth={loginInfo.token}
                    exact
                  />
                  <ProtectedVendorLogin
                    path="/vendor-profil"
                    component={VendorProfil}
                    isAuth={loginInfo.token}
                    exact
                  />
                  <ProtectedRouteSucReg
                    path="/successreg"
                    component={SuccessReg}
                    exact
                  />
                  <ProtectedSearch
                    path="/searched"
                    component={SearchContent}
                    exact
                    isAuth={loginInfo.token}
                  />
                  <Route path="/login-success" component={LoginSuccess} exact />
                  <Route path="/blog/:id" component={RoutedBlog} exact />
                  <Route path="/allblog" component={Blogs} exact />
                  <Route path="/faq" component={FAQ} exact />
                  <Route path="/tentangkami" component={TentangKami} exact />
                  <Route path="/panduan" component={Panduan} exact />
                  <Route path="/privasi" component={Privasi} exact />
                  <Route path="/refund" component={Refund} exact />
                  <ProtectedVendor
                    path="/detailed-product/:id"
                    component={TampilanProdukPage}
                    exact
                    isAuth={loginInfo.token}
                  />
                  <ProtectedVendor
                    path="/vendor/:vendor"
                    component={TampilanVendorPage}
                    exact
                    isAuth={loginInfo.token}
                  />
                </Switch>
              </loginContext.Provider>
            </searchContext.Provider>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
