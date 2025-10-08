import Section from '../Components/Section'

export default function FreeQuote() {
  return (
    <Section title="Get a Free Quote">
      <form className="card max-w-xl grid gap-3">
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Full Name"
        />
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Email"
        />
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Phone"
        />
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="City / Area"
        />
        <textarea
          className="border rounded-lg px-3 py-2"
          placeholder="Tell us about your cleaning needs"
          rows="4"
        />
        <button className="btn-primary">Request Quote</button>
      </form>
    </Section>
  )
}
