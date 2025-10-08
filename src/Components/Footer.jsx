export default function Footer() {
  return (
    <footer className="border-t">
      <div className="section text-sm text-gray-600 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Costa Business Service. All rights reserved.</p>
        <p>South Florida • (561) 836-2355 • costabusinessservice@gmail.com</p>
      </div>
    </footer>
  )
}
