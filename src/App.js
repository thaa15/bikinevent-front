import './App.css';
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {
  ProtectedRouteSucReg,
  ProtectedVendorLogin,
  ProtectedVendor
} from "./templates/ProtectedRoute";
import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import Footer from "./templates/Footer";
import Home from "./pages";
import LoginPage from "./components/LogReg/LoginPage";
import ScrollToTop from "./templates/ScrollToTop";
import RegisterPage from "./components/LogReg/RegisterPage";
import SuccessReg from "./components/LogReg/SuccessRegPage";
import {
  RoutedBlog,
  Blogs
} from "./pages/blog";
import {
  FAQ,
  TentangKami,
  Panduan,
  Privasi,
  Refund
} from "./pages/pelayanan";
import {
  TampilanProdukPage,
  TampilanVendorPage
} from "./pages/vendor_produk";
import {
  VendorChat,
  VendorPesanan,
  VendorProduk,
  VendorKeuangan,
  VendorProfil
} from "./pages/vendorcenter"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [toct,setToct] = useState();
  const [name,setName] = useState();
  const toggling = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    setToct(localStorage.getItem('token'));
    setName(localStorage.getItem('namaLengkap'));
  });
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggling={toggling} isAuth={toct}/>
        <Navbar toggling={toggling} isAuth={toct} nama={name}/>
        <Switch>
          <ProtectedVendor path="/" component={Home} exact isAuth={toct}/>
          <Route path="/login" component={LoginPage} exact/>
          <Route path="/register" component={RegisterPage} exact/>
          <ProtectedVendorLogin path="/vendor-chat" component={VendorChat} isAuth={toct} exact/>
          <ProtectedVendorLogin path="/vendor-pesanan" component={VendorPesanan} isAuth={toct} exact/>
          <ProtectedVendorLogin path="/vendor-produk" component={VendorProduk} isAuth={toct} exact/>
          <ProtectedVendorLogin path="/vendor-keuangan" component={VendorKeuangan} isAuth={toct} exact/>
          <ProtectedVendorLogin path="/vendor-profil" component={VendorProfil} isAuth={toct} exact/>
          <ProtectedRouteSucReg path="/successreg" component={SuccessReg} exact/>
          <Route path="/blog/:id" component={RoutedBlog} exact/>
          <Route path="/allblog" component={Blogs} exact/>
          <Route path="/faq" component={FAQ} exact/>
          <Route path="/tentangkami" component={TentangKami} exact/>
          <Route path="/panduan" component={Panduan} exact/>
          <Route path="/privasi" component={Privasi} exact/>
          <Route path="/refund" component={Refund} exact/>
          <ProtectedVendor path="/detailed-product/:id" component={TampilanProdukPage} exact isAuth={toct}/>
          <ProtectedVendor path="/vendor/:vendor" component={TampilanVendorPage} exact isAuth={toct}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
