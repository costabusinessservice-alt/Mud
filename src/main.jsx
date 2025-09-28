import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
// ... outras páginas

export default function App() {
  return (
    <BrowserRouter basename="/costa-business-project">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        {/* demais rotas */}
      </Routes>
    </BrowserRouter>
  );
}
