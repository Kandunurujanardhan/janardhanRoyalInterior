import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PvcInteriorDesign from "./Components/PvcInteriorDesign";
import WoodCarvingDesign from "./Components/WoodCarvingDesign";
import ContactDetails from "./Components/ContactDetails";
import About from "./Components/About";
import MainPage from "./Components/MainPage";

function ChildRoutes() {
  return (
    <Routes>
      <Route path="/PvcInteriorDesign" element={<PvcInteriorDesign />} />
      <Route exact path="/WoodCarvingDesign" element={<WoodCarvingDesign />} />
      <Route path="/ContactDetails" element={<ContactDetails />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default ChildRoutes;




