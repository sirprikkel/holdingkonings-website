"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function OverOnsPage() {
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
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Bedrijf</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">Over ons</h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://www.holdingkonings.nl/img/general/980_980_1758619489_Assen-2025-3.jpg"
                alt="Geert en Marion Konings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-500/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Passie voor <span className="text-orange-500">vrachtwagens</span>
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Geert Konings is eigenaar van Holding Konings B.V. en is sinds 2022 actief in de truck branche. Dit
              doet hij samen met zijn vrouw, Marion. Deze werkt actief mee in het bedrijf. Samen zorgen ze ervoor dat
              de klanten altijd kunnen rekenen op kwaliteit en betrouwbaarheid.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              De passie voor vrachtwagens heeft hij van thuis uit meegekregen en zit er al van jongs af aan in. Sinds
              2010 is hij zelf in bezit van diverse showtrucks. Hier bezoeken ze jaarlijks diverse festivals mee. Nu
              is de tijd aangebroken om van zijn hobby zijn werk te maken en deze ook te gaan inkopen en verkopen.
              Zowel nieuw als jong gebruikt en oldtimers.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              U bent van harte welkom om ons aanbod en showtrucks te komen bekijken in onze showroom in Ravenstein!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/voorraad"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Bekijk voorraad
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-orange-500 text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
              >
                Contact opnemen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
