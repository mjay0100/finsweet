import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Badge from "../views/badge";
// import Communities from "../views/communities";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="teams" element={<Teams />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/communities" element={<Communities />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
