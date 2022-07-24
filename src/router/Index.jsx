import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services.jsx";
import Media from "../pages/media.jsx";
import Contact from "../pages/contact.jsx";
import Donation from "../pages/donation.jsx";
import Project from "../pages/project.jsx";
import Blog from "../pages/blog.jsx";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
