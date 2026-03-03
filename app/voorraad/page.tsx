"use client"

import { motion } from "framer-motion"
import { vehicles } from "@/lib/vehicles"
import { VehicleCard } from "@/components/vehicle-card"

export default function VoorraadPage() {
  const available = vehicles.filter((v) => !v.sold)
  const sold = vehicles.filter((v) => v.sold)

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
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Aanbod</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">Onze voorraad</h1>
            <p className="text-zinc-400 mt-3 text-lg">
              {available.length} voertuigen beschikbaar — showtrucks, oldtimers en bijzondere voertuigen
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Available vehicles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {available.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </div>

        {/* Sold vehicles */}
        {sold.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-zinc-500 mb-6 border-b border-zinc-800 pb-4">
              Verkochte voertuigen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sold.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <VehicleCard vehicle={vehicle} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
