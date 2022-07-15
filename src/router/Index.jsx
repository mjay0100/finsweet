import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Navbar from "../components/Navbar";
// import Teams from "../views/teams";
// import Badge from "../views/badge";
// import Communities from "../views/communities";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="faq" element={<FAQ />} />
        <Route path="teams" element={<Teams />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/communities" element={<Communities />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
