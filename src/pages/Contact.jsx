import Section from '../Components/Section'

export default function Contact() {
  return (
    <Section title="Contact">
      <form className="card max-w-xl grid gap-3">
        <input className="border rounded-lg px-3 py-2" placeholder="Name" />
        <input className="border rounded-lg px-3 py-2" placeholder="Email" />
        <input className="border rounded-lg px-3 py-2" placeholder="Phone" />
        <textarea
          className="border rounded-lg px-3 py-2"
          placeholder="Message"
          rows="4"
        />
        <button className="btn-primary">Submit</button>
      </form>

      <div className="mt-6 text-gray-600">
        Or reach us at (561) 836-2355 • costabusinessservice@gmail.com
      </div>
    </Section>
  )
}