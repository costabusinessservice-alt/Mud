export default function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="card hover:shadow-lg transition">
      {Icon && <Icon className="w-6 h-6 mb-3" />}
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
