"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Bereikbaarheid</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">Contact</h1>
            <p className="text-zinc-400 mt-3 text-lg">Bezichtiging altijd op afspraak</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-white mb-8">Contactgegevens</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 shrink-0">
                    <MapPin size={22} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adres</h3>
                    <p className="text-zinc-400">
                      Bulk 19<br />
                      5371 ML Ravenstein
                    </p>
                    <p className="text-zinc-500 text-sm mt-1">Bezichtiging op afspraak</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 shrink-0">
                    <Mail size={22} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-mail</h3>
                    <a
                      href="mailto:holdingkonings@hotmail.com"
                      className="text-orange-500 hover:text-orange-400 transition-colors font-medium"
                    >
                      holdingkonings@hotmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-zinc-800">
                <h3 className="text-white font-semibold mb-3">Direct een email sturen?</h3>
                <a
                  href="mailto:holdingkonings@hotmail.com"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Mail size={18} />
                  Stuur een email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.3534337544415!2d5.651883815932623!3d51.78142629845091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c70235a07b54a5%3A0x974bebd867090d83!2sBulk%2019%2C%205371%20ML%20Ravenstein!5e0!3m2!1snl!2snl!4v1667315526980!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Holding Konings locatie"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
