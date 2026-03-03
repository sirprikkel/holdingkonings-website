import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/voorraad", label: "Onze voorraad" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/konings-scania-power", label: "Konings Scania Power" },
  { href: "/nieuws", label: "Nieuws" },
  { href: "/contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-xl tracking-tight mb-1">Holding Konings</h3>
            <p className="text-orange-500 text-xs uppercase tracking-widest font-semibold mb-4">In- en verkoop</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Specialist in de inkoop en verkoop van showtrucks, oldtimers en bijzondere voertuigen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigatie</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <span className="text-zinc-400 text-sm">
                  Bulk 19<br />5371 ML Ravenstein
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500 shrink-0" />
                <a
                  href="mailto:holdingkonings@hotmail.com"
                  className="text-zinc-400 text-sm hover:text-orange-500 transition-colors"
                >
                  holdingkonings@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Holding Konings B.V. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
