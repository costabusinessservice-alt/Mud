import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="section flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          Costa Business Service
        </Link>

        {/* Menu */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about-us">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/free-quote" className="text-blue-600 font-semibold">
            Free Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
