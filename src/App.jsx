import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BrandWork from "./Components/BrandWork";
import Typography from "./Components/Typography";
import ColorPalette from "./Components/ColorPalette";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import LogoVersion from "./Components/LogoVersion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brandwork" element={<BrandWork />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/colorpalette" element={<ColorPalette />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logoversion" element={<LogoVersion />} />
      </Routes>
    </>
  );
}

export default App;
