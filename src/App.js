import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./templates/Navbar";
import Footer from "./templates/Footer";
import Home from "./pages";
import LoginPage from "./components/LogReg/LoginPage";
import ScrollToTop from "./templates/ScrollToTop";
import RegisterPage from "./components/LogReg/RegisterPage";
import SuccessReg from "./components/LogReg/SuccessRegPage"

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
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
