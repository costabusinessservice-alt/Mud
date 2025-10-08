import Section from '../Components/Section'

export default function ServiceAreas() {
  return (
    <Section title="Service Areas">
      <p className="text-gray-700 mb-6 max-w-3xl">
        We proudly serve residential and commercial clients across South Florida.
        From **West Palm Beach** to **Miami**, we bring reliable cleaning and care to homes,
        offices, and post-construction projects.
      </p>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
        <li className="card">West Palm Beach</li>
        <li className="card">Boca Raton</li>
        <li className="card">Deerfield Beach</li>
        <li className="card">Pompano Beach</li>
        <li className="card">Fort Lauderdale</li>
        <li className="card">Miami</li>
      </ul>
    </Section>
  )
}
