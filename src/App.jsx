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