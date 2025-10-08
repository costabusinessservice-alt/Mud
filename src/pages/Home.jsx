import Section from '../Components/Section'
import ServiceCard from '../Components/ServiceCard'
import { Home as HomeIcon, Building2, Sparkles, ShowerHead } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative section text-center py-32">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Spaces that shine, minds that thrive
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Office, commercial, and residential cleaning you can rely on — from
            West Palm Beach to Miami.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/free-quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn-outline text-white border-white">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section title="Popular Services">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={HomeIcon}
            title="Residential Cleaning"
            desc="Recurring or one-time deep cleans for homes and apartments."
          />
          <ServiceCard
            icon={Building2}
            title="Office Cleaning"
            desc="Daily, weekly, or custom schedules to keep your workplace spotless."
          />
          <ServiceCard
            icon={Sparkles}
            title="Deep Cleaning"
            desc="Detailed top-to-bottom cleaning for move-in/out or seasonal resets."
          />
          <ServiceCard
            icon={ShowerHead}
            title="Pressure & Window"
            desc="Outdoor pressure washing and streak-free window cleaning."
          />
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why choose us?">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          <li className="card">
            Long-term client relationships and flexible custom work.
          </li>
          <li className="card">
            Licensed & insured • Reliable crew • Clear communication.
          </li>
          <li className="card">Free onsite estimates • Competitive pricing.</li>
        </ul>
      </Section>
    </>
  )
}
