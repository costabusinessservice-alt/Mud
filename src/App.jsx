import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, Clock, Star, Instagram, MessageCircle } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const services = [
    {
      title: "Office Cleaning",
      description: "Professional cleaning services tailored for your business environment.",
      features: ["🌟 Trusted by local businesses", "📅 Customized cleaning schedules", "🏆 Professional uniformed staff", "📋 Detailed cleaning checklists", "🚀 Same-day emergency cleaning available"]
    },
    {
      title: "House Cleaning",
      description: "Comprehensive residential cleaning to make your home sparkle.",
      features: ["✨ Deep cleaning that reaches every corner", "🧽 Eco-friendly products safe for families", "⏰ Flexible scheduling (weekly, bi-weekly, monthly)", "🔒 100% insured and bonded professionals", "💎 Premium quality guaranteed or money back"]
    },
    {
      title: "Commercial Cleaning",
      description: "Specialized cleaning solutions for various commercial establishments.",
      features: ["🏢 Retail spaces, restaurants, and more", "🧼 High-traffic area expertise", "📈 Consistent quality control", "🛡️ Fully insured and bonded teams"]
    },
    {
      title: "Pressure Washing",
      description: "High-pressure cleaning for exterior surfaces, removing stubborn dirt and grime.",
      features: ["💧 Effective for driveways, sidewalks, and patios", "🏡 Restores exterior appearance", "🌿 Eco-friendly cleaning solutions", "🛠️ Professional-grade equipment"]
    },
    {
      title: "Move In/Move Out Cleaning",
      description: "Thorough cleaning for seamless transitions into or out of your property.",
      features: ["🏠 Complete property sanitization", "🧹 All rooms, closets, and storage areas", "🔧 Light fixture and switch plate cleaning", "🚿 Bathroom and kitchen deep clean", "✅ Move-out inspection ready guarantee"]
    }
  ]

  const serviceAreas = [
    "Miami", "Hialeah", "Coral Gables", "Doral", "Kendall", "Homestead",
    "Fort Lauderdale", "Hollywood", "Pembroke Pines", "Miramar", "Davie", "Weston",
    "Plantation", "Sunrise", "Pompano Beach", "Deerfield Beach", "Boca Raton",
    "Delray Beach", "Boynton Beach", "Lake Worth Beach", "West Palm Beach",
    "Palm Beach Gardens", "Jupiter"
  ].filter(area => !["Miami Beach", "Riviera Beach"].includes(area));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/costa_business_logo_final.png" alt="Costa Business Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold text-blue-900">Costa Business</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {['Home', 'Services', 'About Us', 'Service Areas', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase().replace(' ', ''))}
                  className="text-blue-900 hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-600"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:inline-flex">
                Get a Free Quote
              </Button>
              <Button variant="outline" className="md:hidden">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 relative overflow-hidden">
        <img src="/rocket_logo_final.png" alt="Rocket Trail" className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10 animate-trail" />
        <img src="/rocket_logo_final.png" alt="Rocket Trail" className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-10 animate-trail-delay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 animate-text-pop">
                Clean spaces inspire productivity and improve the atmosphere.
              </h1>
              
              <div className="mb-8">
                <p className="text-xl text-blue-800 mb-4">
                  Partner with a cleaning company that simplifies your life. We are the trusted choice for your business or home, ensuring impeccable service without the need for double-checking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
                  🔥 GET A FREE QUOTE NOW!
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                  📞 Call: (561) 836-2355
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-blue-900">
                <div className="text-center">
                  <div className="font-bold text-lg">5+ Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">100% Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center h-96">
              <img src="/rocket_logo_final.png" alt="Rocket Logo" className="w-48 h-48 object-contain animate-orbit" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-blue-700">Choose the perfect cleaning solution for your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-blue-700 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Images Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Work in Action</h2>
            <p className="text-xl text-blue-700">See the difference Costa Business can make</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <img src="/user_image_1.png" alt="Cleaning Project 1" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <img src="/user_image_2.png" alt="Cleaning Project 2" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <img src="/user_image_3.png" alt="Cleaning Project 3" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <img src="/user_image_4.png" alt="Cleaning Project 4" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <img src="/user_image_5.png" alt="Cleaning Project 5" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <img src="/user_image_6.png" alt="Cleaning Project 6" className="rounded-lg shadow-lg object-cover w-full h-64" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">A Message from Our Founder</h2>
              <div className="space-y-4 text-blue-800 bg-blue-50 p-6 rounded-lg">
                <p className="font-style: italic">
                  "My name is Davi da Costa Pacheco, and it’s an honor to serve you through Costa Business. I’ve been in the cleaning industry for over 5 years, and my journey began with a simple observation: as cleaning contracts got bigger, the quality of service often suffered. I'm a perfectionist by nature, and I believe every client deserves an impeccable space, not just a quick clean. That’s why, at 21, I founded this company on the principles of punctuality, attention to detail, and genuine care. We offer a service that is not only reliable and trustworthy but one that truly makes a difference in your environment."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-blue-900">Satisfied Customers</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-blue-900">Years of Experience</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center shadow-md">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-3xl font-bold text-blue-600">4.9</span>
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </div>
                <div className="text-blue-900">Rating (127 reviews)</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-blue-900">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">🌟 Proudly Serving South Florida</h2>
            <p className="text-xl text-blue-700">We cover the following cities and surrounding areas:</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white text-blue-900 px-4 py-2 rounded-full text-center font-medium shadow-md hover:bg-blue-100 transition-colors">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for a Spotless Space?</h2>
          <p className="text-xl mb-8">Join hundreds of satisfied clients who chose excellence over ordinary cleaning!</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4">
              🎯 GET A FREE QUOTE NOW!
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
              📞 Call: (561) 836-2355
            </Button>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.instagram.com/costabusinesservice/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow us on Instagram</span>
            </a>
            <a 
              href="https://wa.me/15618362355" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/costa_business_logo_final.png" alt="Costa Business Logo" className="h-10 w-10" />
                <span className="text-xl font-bold">Costa Business</span>
              </div>
              <p className="text-blue-200">
                Perfection-driven results with over 5 years of experience and a 100% satisfaction guarantee.
              </p>
              <div className="flex items-center space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-blue-200 ml-2">4.9/5 (127 reviews)</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-blue-200">
                <li>Office Cleaning</li>
                <li>House Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Pressure Washing</li>
                <li>Move In/Move Out Cleaning</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-blue-200">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (561) 836-2355</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>costabusinessservice@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>South Florida, USA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <div>
                    <div>Mon-Fri: 8 AM-6 PM</div>
                    <div>Sat: 9 AM-4 PM</div>
                    <div>Sun: Closed</div>
                    <div className="text-sm">(Emergency service available)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2025 Costa Business - Cleaning Services. All rights reserved.
            </p>
            <div className="flex space-x-4 text-blue-200 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

