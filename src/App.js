import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./templates/Navbar";
import Footer from "./templates/Footer";
import Home from "./pages";
import LoginPage from "./components/LogReg/LoginPage";
import ScrollToTop from "./templates/ScrollToTop";
import RegisterPage from "./components/LogReg/RegisterPage";
import SuccessReg from "./components/LogReg/SuccessRegPage";
import RoutedBlog from "./pages/blog";
import {
  FAQ,
  TentangKami,
  Panduan,
  Privasi,
  Refund
} from "./pages/pelayanan";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={LoginPage} exact/>
          <Route path="/register" component={RegisterPage} exact/>
          <Route path="/successreg" component={SuccessReg} exact/>
          <Route path="/blog/:id" component={RoutedBlog} exact/>
          <Route path="/faq" component={FAQ} exact/>
          <Route path="/tentangkami" component={TentangKami} exact/>
          <Route path="/panduan" component={Panduan} exact/>
          <Route path="/privasi" component={Privasi} exact/>
          <Route path="/refund" component={Refund} exact/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
