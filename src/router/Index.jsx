import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services.jsx";
import Media from "../pages/Media.jsx";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
