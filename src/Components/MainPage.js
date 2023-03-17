import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import ContactDetails from "./ContactDetails";
import Home from "./Home";
import PvcInteriorDesign from "./PvcInteriorDesign";
import WoodCarvingDesign from "./WoodCarvingDesign";
import Enquiry from "./Enquiry";

function MainPage() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home hide={false} />} />
        <Route path="/PvcInteriorDesign" element={<PvcInteriorDesign />} />
        <Route path="/WoodCarvingDesign" element={<WoodCarvingDesign />} />
        <Route path="/ContactDetails" element={<ContactDetails />} />
        <Route path="/About" element={<About />} />
        <Route path="/Enquiry" element={<Enquiry />} />
      </Routes>
    </div>
  );
}

export default MainPage;
