import "./App.css";
import React, { useState, useEffect } from "react";
import {
  loginContext,
  searchContext,
  clientCartContext,
  chatContext,
} from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ProtectedRouteSucReg,
  ProtectedVendorLogin,
  ProtectedVendor,
  ProtectedSearch,
  ProtectedUser,
  ProtectedPembeliLogin,
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
import {
  FAQ,
  TentangKami,
  Panduan,
  Privasi,
  Refund,
  Syarat,
} from "./pages/pelayanan";
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
import KeranjangBelanjaPage from "./components/PembeliDashboard/PembeliCart/KeranjangBelanja";
import InformasiPembeliPage from "./components/PembeliDashboard/PembeliCart/InformasiPembeli";
import PembayaranPembeliPage from "./components/PembeliDashboard/PembeliCart/PembayaranPembeli";
import PemeriksaanBelanjaPage from "./components/PembeliDashboard/PembeliCart/PemeriksaanPembeli";
import SuccessCart from "./components/PembeliDashboard/PembeliCart/SuccessCart";
import MenungguPembayaranPage from "./components/PembeliDashboard/PembeliPesanan/DetailedOrder/WaitingPayment";
import { PembeliProfil } from "./pages/pembelidashboard";
import PembeliPesananPage from "./components/PembeliDashboard/PembeliPesanan/AllOrder";
import KonfirmasiPembayaranPage from "./components/PembeliDashboard/PembeliPesanan/DetailedOrder/ConfirmOrder";
import PelaksanaanPesananPage from "./components/PembeliDashboard/PembeliPesanan/DetailedOrder/ImplementOrder";
import PesananSelesaiPage from "./components/PembeliDashboard/PembeliPesanan/DetailedOrder/DoneOrder";
import PembeliChatPage from "./components/PembeliDashboard/PembeliChat";
import ForgotPasswordPage from "./components/LogReg/LoginPage/ForgotPassPage";
import GoogleRegisterPage from "./components/LogReg/RegisterPage/Googleregs";
import VendorProductChangedForm from "./components/VendorDashboard/VendorProduk/VendorProductChangedForm";
import ChangePortofolioForm from "./components/VendorDashboard/VendorProfil/ChangePortofolioForm";
import { decryptData } from "./Crypted";

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
    fromFilter: false,
  });
  const [loginInfo, setLoginInfo] = useState({
    token: "",
    userId: "",
    name: "",
    role: "",
    pembeliId: "",
    vendorId: "",
  });

  const [clientCart, setClientCart] = useState({
    price: "",
    payment_method: null,
    clientInfo: null,
    product: [],
    statusDp: false,
    notes: [],
    notif: 0,
    vendor: [],
  });

  const [chat, setChat] = useState({
    currentChat: null,
  });
  const toggling = () => {
    setIsOpen(!isOpen);
  };

  let mkLocalData = localStorage.getItem("mk");
  const salt = "6d090796-ecdf-11ea-adc1-0242ac120003";
  const originalData = decryptData(mkLocalData, salt);
  useEffect(() => {
    if (originalData != null) {
      setLoginInfo({
        userId: `${originalData.userId}`,
        name: `${originalData.nama}`,
        token: `${originalData.token}`,
        role: `${originalData.role}`,
        pembeliId: `${originalData.pembeliId}`,
        vendorId: `${originalData.vendorId}`,
      });
    } else {
      setLoginInfo({
        userId: "",
        name: "",
        token: "",
        role: "",
        pembeliId: "",
        vendorId: "",
      });
    }
  }, []);

  return (
    <loginContext.Provider value={{ loginInfo, setLoginInfo }}>
      <Router>
        <div className="page-container">
          <div className="content-wrap">
            <ScrollToTop />
            <searchContext.Provider value={{ searched, setSearched }}>
              <chatContext.Provider value={{ chat, setChat }}>
                <clientCartContext.Provider
                  value={{ clientCart, setClientCart }}
                >
                  <Sidebar
                    isOpen={isOpen}
                    toggling={toggling}
                    isAuth={loginInfo.token}
                    role={loginInfo.role}
                  />
                  <Navbar
                    toggling={toggling}
                    isAuth={loginInfo.token}
                    nama={loginInfo.name}
                    role={loginInfo.role}
                  />
                  <Switch>
                    <ProtectedVendor
                      path="/"
                      component={Home}
                      exact
                      role={loginInfo.role}
                      isAuth={loginInfo.token}
                    />
                    <ProtectedUser
                      path="/login"
                      component={LoginPage}
                      isAuth={loginInfo.token}
                      exact
                    />
                    <ProtectedUser
                      path="/register"
                      component={RegisterPage}
                      isAuth={loginInfo.token}
                      exact
                    />
                    <ProtectedVendorLogin
                      path="/vendor-chat"
                      component={VendorChat}
                      isAuth={loginInfo.token}
                      role={loginInfo.role}
                      exact
                    />
                    <ProtectedVendorLogin
                      path="/vendor-pesanan"
                      component={VendorPesanan}
                      isAuth={loginInfo.token}
                      role={loginInfo.role}
                      exact
                    />
                    <ProtectedVendorLogin
                      path="/vendor-produk"
                      component={VendorProduk}
                      isAuth={loginInfo.token}
                      role={loginInfo.role}
                      exact
                    />
                    <ProtectedVendorLogin
                      path="/changed-product/:id"
                      component={VendorProductChangedForm}
                      isAuth={loginInfo.token}
                      role={loginInfo.role}
                      exact
                    />
                    <ProtectedVendorLogin
                      path="/changed-portofolio/:id"
                      component={ChangePortofolioForm}
                      isAuth={loginInfo.token}
                      role={loginInfo.role}
                      exact
                    />
                    <ProtectedVendorLogin
                      path="/vendor-keuangan"
                      component={VendorKeuangan}
                      isAuth={loginInfo.token}
                      role={loginInfo.role}
                      exact
                    />
                    <ProtectedVendorLogin
                      path="/vendor-profil"
                      component={VendorProfil}
                      isAuth={loginInfo.token}
                      role={loginInfo.role}
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
                      role={loginInfo.role}
                      exact
                      isAuth={loginInfo.token}
                    />
                    <Route
                      path="/login-success"
                      component={LoginSuccess}
                      exact
                    />
                    <Route
                      path="/google-register"
                      component={GoogleRegisterPage}
                      exact
                    />
                    <Route path="/blog/:id" component={RoutedBlog} exact />
                    <Route path="/allblog" component={Blogs} exact />
                    <Route path="/faq" component={FAQ} exact />
                    <Route path="/tentangkami" component={TentangKami} exact />
                    <Route path="/panduan" component={Panduan} exact />
                    <Route path="/privasi" component={Privasi} exact />
                    <Route path="/refund" component={Refund} exact />
                    <Route path="/syarat" component={Syarat} exact />
                    <Route
                      path="/forgot-password"
                      component={ForgotPasswordPage}
                      exact
                    />
                    <ProtectedPembeliLogin
                      path="/client-purchase/cart"
                      role={loginInfo.role}
                      component={KeranjangBelanjaPage}
                      isAuth={loginInfo.token}
                      exact
                    />
                    <ProtectedPembeliLogin
                      path="/client-purchase/success-cart"
                      role={loginInfo.role}
                      component={SuccessCart}
                      isAuth={loginInfo.token}
                      exact
                    />
                    <ProtectedPembeliLogin
                      path="/client-purchase/check"
                      role={loginInfo.role}
                      component={PemeriksaanBelanjaPage}
                      isAuth={loginInfo.token}
                      exact
                    />
                    <ProtectedPembeliLogin
                      path="/client-purchase/payment"
                      role={loginInfo.role}
                      component={PembayaranPembeliPage}
                      isAuth={loginInfo.token}
                      exact
                    />
                    <ProtectedPembeliLogin
                      path="/client-purchase/information"
                      role={loginInfo.role}
                      component={InformasiPembeliPage}
                      isAuth={loginInfo.token}
                      exact
                    />
                    <ProtectedPembeliLogin
                      path="/client-profil"
                      role={loginInfo.role}
                      exact
                      component={PembeliProfil}
                      isAuth={loginInfo.token}
                    />
                    <ProtectedPembeliLogin
                      path="/client-chat"
                      role={loginInfo.role}
                      exact
                      component={PembeliChatPage}
                      isAuth={loginInfo.token}
                    />
                    <ProtectedPembeliLogin
                      role={loginInfo.role}
                      component={PembeliPesananPage}
                      isAuth={loginInfo.token}
                      path="/track-order/records"
                      exact
                    />
                    <ProtectedPembeliLogin
                      role={loginInfo.role}
                      component={KonfirmasiPembayaranPage}
                      isAuth={loginInfo.token}
                      path="/detailed-order/confirm/:id"
                      exact
                    />
                    <ProtectedPembeliLogin
                      role={loginInfo.role}
                      component={MenungguPembayaranPage}
                      isAuth={loginInfo.token}
                      path="/detailed-order/waiting/:id"
                      exact
                    />
                    <ProtectedPembeliLogin
                      role={loginInfo.role}
                      component={PelaksanaanPesananPage}
                      isAuth={loginInfo.token}
                      path="/detailed-order/implement/:id"
                      exact
                    />
                    <ProtectedPembeliLogin
                      path="/detailed-order/done/:id"
                      role={loginInfo.role}
                      component={PesananSelesaiPage}
                      isAuth={loginInfo.token}
                      exact
                    />
                    <Route
                      path="/detailed-product/:id"
                      component={TampilanProdukPage}
                      exact
                    />
                    <ProtectedVendor
                      path="/vendor/:vendor"
                      component={TampilanVendorPage}
                      role={loginInfo.role}
                      exact
                      isAuth={loginInfo.token}
                    />
                  </Switch>
                </clientCartContext.Provider>
              </chatContext.Provider>
            </searchContext.Provider>
          </div>
          <Footer />
        </div>
      </Router>
    </loginContext.Provider>
  );
}

export default App;
