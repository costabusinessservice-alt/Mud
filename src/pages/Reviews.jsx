import Section from '../Components/Section'

export default function Reviews() {
  return (
    <Section title="Customer Reviews">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <p className="text-gray-700 mb-2">
            “They did an amazing job on our office — everything looks spotless
            every week!”
          </p>
          <p className="text-sm text-gray-500">— Lauren M.</p>
        </div>

        <div className="card">
          <p className="text-gray-700 mb-2">
            “Super reliable! We use Costa Business Service for post-construction
            cleaning, and they never disappoint.”
          </p>
          <p className="text-sm text-gray-500">— Gregory F.</p>
        </div>

        <div className="card">
          <p className="text-gray-700 mb-2">
            “Highly recommend for residential cleaning. Very professional and
            friendly team.”
          </p>
          <p className="text-sm text-gray-500">— Ashley R.</p>
        </div>
      </div>
    </Section>
  )
}
