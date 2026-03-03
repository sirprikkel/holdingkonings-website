"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { vehicles } from "@/lib/vehicles"
import { VehicleCard } from "@/components/vehicle-card"

const featuredVehicles = vehicles.filter((v) => !v.sold).slice(0, 3)

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://www.holdingkonings.nl/img/general/background-home7.jpg"
            alt="Holding Konings hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              In- en verkoop
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Holding{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Konings
              </span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Specialist in de inkoop en verkoop van showtrucks, oldtimers en bijzondere voertuigen. Ontdek ons
              exclusieve aanbod in Ravenstein.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/voorraad"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Bekijk voorraad
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-orange-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5"
              >
                Neem contact op
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Featured vehicles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Uitgelicht</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Actueel aanbod</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/voorraad"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-orange-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Bekijk alle {vehicles.length} voertuigen
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "2022", label: "Actief in de truck branche" },
              { value: "14+", label: "Voertuigen in voorraad" },
              { value: "Ravenstein", label: "Showroom locatie" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interesse in een voertuig?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Neem contact met ons op voor meer informatie of een bezichtiging op afspraak in onze showroom in
              Ravenstein.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Contact opnemen
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
