import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        {/* <Route path="faq" element={<FAQ />} />
        <Route path="teams" element={<Teams />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/communities" element={<Communities />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
