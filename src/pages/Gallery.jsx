import Section from '../Components/Section'

export default function Gallery() {
  return (
    <Section title="Gallery">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-video bg-gray-200 rounded-xl" />
        ))}
      </div>
    </Section>
  )
}
