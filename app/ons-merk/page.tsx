"use client"

import { motion } from "framer-motion"
import { PhotoGallery } from "@/components/photo-gallery"
import { vehicles } from "@/lib/vehicles"

const eventPhotos = [
  "https://www.holdingkonings.nl/img/general/980_980_1758613202_9.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1758613182_12.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1756980045_Schermafbeelding-2025-09-04-115844.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1756980029_Schermafbeelding-2025-09-04-115804.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1756980007_Schermafbeelding-2025-09-04-115711.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1756979734_Schermafbeelding-2025-09-04-115511.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1729585144_2023.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1729585004_2024-4.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1729584959_2024.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1729584927_2024-3.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1696506892_Geert-en-Marion-Konings-2.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1685436110_Liessel-2022.jpg",
  "https://www.holdingkonings.nl/img/general/980_980_1685433127_Truckersfestival-Assen-2022-3.jpg",
]

const googlePhotos = [
  "/google_place_1.jpg",
  "/google_place_2.jpg",
]

const vehiclePhotos = vehicles.flatMap((v) =>
  v.photos.map((photo) => ({ photo, vehicleName: v.title }))
)

export default function OnsMerkPage() {
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
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Fotogalerij</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">Ons Merk</h1>
            <p className="text-zinc-400 mt-3 text-lg">
              Alle foto&apos;s van Holding Konings — showtrucks, voertuigen, evenementen en meer
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Sectie 1: Showtrucks & Voertuigen */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Showtrucks & Voertuigen</h2>
            <p className="text-zinc-400 mt-1">
              {vehiclePhotos.length} foto&apos;s van onze volledige voorraad
            </p>
          </div>
          <PhotoGallery
            photos={vehiclePhotos.map((v) => v.photo)}
            title="Showtrucks & Voertuigen"
          />
        </motion.section>

        {/* Sectie 2: Konings Scania Power (Events) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Konings Scania Power</h2>
            <p className="text-zinc-400 mt-1">
              {eventPhotos.length} foto&apos;s van festivals en evenementen
            </p>
          </div>
          <PhotoGallery photos={eventPhotos} title="Konings Scania Power" />
        </motion.section>

        {/* Sectie 3: Google Places */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Google Places</h2>
            <p className="text-zinc-400 mt-1">
              {googlePhotos.length} foto&apos;s van onze locatie
            </p>
          </div>
          <PhotoGallery photos={googlePhotos} title="Google Places" />
        </motion.section>
      </div>
    </div>
  )
}
