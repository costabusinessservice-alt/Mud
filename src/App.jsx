<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ServiceAreas from "./pages/ServiceAreas";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import AboutOwner from "./pages/AboutOwner";
import FreeQuote from "./pages/FreeQuote";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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

        {/* Routes */}
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
    </BrowserRouter>
  );
}
=======
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import ServiceAreas from './pages/ServiceAreas'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import AboutOwner from './pages/AboutOwner'
import FreeQuote from './pages/FreeQuote'


export default function App(){
return (
<div className="min-h-screen flex flex-col bg-gray-50">
<Navbar />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/areas" element={<ServiceAreas />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/reviews" element={<Reviews />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about-owner" element={<AboutOwner />} />
<Route path="/free-quote" element={<FreeQuote />} />
</Routes>
</main>
<Footer />
</div>
)
}
>>>>>>> bade6a07e1a1e79a40e9f6b0d6acf5d2f5e75b77
