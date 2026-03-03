"use client"

import { motion } from "framer-motion"
import { PhotoGallery } from "@/components/photo-gallery"

const photos = [
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

export default function KoningsScaniaPage() {
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
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Galerij</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">Konings Scania Power</h1>
            <p className="text-zinc-400 mt-3 text-lg">
              Foto&apos;s van festivals, evenementen en onze showtrucks
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <PhotoGallery photos={photos} title="Konings Scania Power" />
        </motion.div>
      </div>
    </div>
  )
}
