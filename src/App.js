import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./templates/Navbar";
import Footer from "./templates/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route/>
      
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
