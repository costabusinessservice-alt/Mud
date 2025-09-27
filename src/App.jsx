import { Routes, Route, Link } from "react-router-dom";

// Importando as páginas
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ServiceAreas from "./pages/ServiceAreas.jsx";
import Gallery from "./pages/Gallery.jsx";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";
import AboutOwner from "./pages/AboutOwner.jsx";
import FreeQuote from "./pages/FreeQuote.jsx";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="p-4 bg-gray-800 text-white flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/areas">Service Areas</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/owner">About Owner</Link>
        <Link to="/quote">Free Quote</Link>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/areas" element={<ServiceAreas />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/owner" element={<AboutOwner />} />
        <Route path="/quote" element={<FreeQuote />} />
      </Routes>
    </div>
  );
}
