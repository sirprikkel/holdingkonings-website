"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Vehicle } from "@/lib/vehicles"

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={`/voorraad/${vehicle.slug}`} className="group block">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-colors duration-300">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
            <Image
              src={vehicle.thumbnail}
              alt={vehicle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {vehicle.sold && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="bg-red-600 text-white font-bold text-lg px-6 py-2 rounded-full uppercase tracking-widest rotate-[-12deg]">
                  Verkocht
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors">
              {vehicle.title}
            </h3>
            <ul className="space-y-1 mb-4">
              {vehicle.shortDescription.map((line, i) => (
                <li key={i} className="text-zinc-400 text-sm">
                  {i === vehicle.shortDescription.length - 1 && line.includes("€") ? (
                    <span className="text-orange-500 font-semibold text-base">{line}</span>
                  ) : (
                    line
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-orange-500 text-sm font-medium">
              <span>Bekijk details</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
