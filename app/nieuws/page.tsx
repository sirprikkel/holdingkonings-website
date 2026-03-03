"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function NieuwsPage() {
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
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Updates</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">Nieuws</h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl"
        >
          {/* News item */}
          <article className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-colors duration-300">
            <div className="relative aspect-video">
              <Image
                src="https://www.holdingkonings.nl/img/general/980_980_1756972058_Goed-2.jpg"
                alt="Nieuws Holding Konings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-3">Laatste nieuws van Holding Konings</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Blijf op de hoogte van ons nieuwste aanbod en activiteiten. Volg ons voor de laatste updates over
                nieuwe voertuigen in onze voorraad, festivalbezoeken en meer.
              </p>
              <Link
                href="/voorraad"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
              >
                Bekijk ons actueel aanbod
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  )
}
