import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopbutton from "./Components/ScrollToTopbutton";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <br />
        <ScrollToTopbutton />
        <MainPage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
