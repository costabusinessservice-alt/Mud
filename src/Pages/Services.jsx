import Section from '../Components/Section'
import { Sparkles, Building2, Home as HomeIcon, ShowerHead } from 'lucide-react'

export default function Services() {
  return (
    <Section title="Our Cleaning Services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <HomeIcon className="w-6 h-6 mb-2 text-blue-500" />
          <h3 className="font-semibold text-lg mb-1">Residential Cleaning</h3>
          <p className="text-gray-600 text-sm">
            Recurring or one-time deep cleaning for your home or apartment.
          </p>
        </div>

        <div className="card">
          <Building2 className="w-6 h-6 mb-2 text-blue-500" />
          <h3 className="font-semibold text-lg mb-1">Office Cleaning</h3>
          <p className="text-gray-600 text-sm">
            Reliable office cleaning that keeps your workspace fresh and
            professional.
          </p>
        </div>

        <div className="card">
          <Sparkles className="w-6 h-6 mb-2 text-blue-500" />
          <h3 className="font-semibold text-lg mb-1">Deep Cleaning</h3>
          <p className="text-gray-600 text-sm">
            Full deep-clean services for move-in/out or seasonal refresh.
          </p>
        </div>

        <div className="card">
          <ShowerHead className="w-6 h-6 mb-2 text-blue-500" />
          <h3 className="font-semibold text-lg mb-1">Pressure & Window</h3>
          <p className="text-gray-600 text-sm">
            Exterior pressure washing and crystal-clear window cleaning.
          </p>
        </div>
      </div>
    </Section>
  )
}
