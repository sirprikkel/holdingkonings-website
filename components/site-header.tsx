"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/voorraad", label: "Onze voorraad" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/konings-scania-power", label: "Konings Scania Power" },
  { href: "/ons-merk", label: "Ons Merk" },
  { href: "/nieuws", label: "Nieuws" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900/95 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Holding Konings"
              width={160}
              height={48}
              className="object-contain h-10 lg:h-12 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl lg:text-2xl tracking-tight group-hover:text-orange-500 transition-colors">
                Holding Konings
              </span>
              <span className="text-orange-500 text-xs uppercase tracking-widest font-semibold">
                In- en verkoop
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  pathname === link.href
                    ? "text-orange-500 bg-orange-500/10"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-zinc-900/98 backdrop-blur-md border-t border-zinc-800"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                    pathname === link.href
                      ? "text-orange-500 bg-orange-500/10"
                      : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
