"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, MapPin } from "lucide-react"
import { vehicles } from "@/lib/vehicles"
import { PhotoGallery } from "@/components/photo-gallery"
import { use } from "react"

interface Props {
  params: Promise<{ slug: string }>
}

export default function VehicleDetailPage({ params }: Props) {
  const { slug } = use(params)
  const vehicle = vehicles.find((v) => v.slug === slug)

  if (!vehicle) notFound()

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link
          href="/voorraad"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Terug naar voorraad</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: photos */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main image */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-800 mb-4">
                <Image
                  src={vehicle.thumbnail}
                  alt={vehicle.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                {vehicle.sold && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-600 text-white font-bold text-2xl px-8 py-3 rounded-full uppercase tracking-widest rotate-[-12deg]">
                      Verkocht
                    </span>
                  </div>
                )}
              </div>

              {/* Gallery */}
              {vehicle.photos.length > 0 && (
                <div>
                  <h3 className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-3">
                    Foto&apos;s ({vehicle.photos.length})
                  </h3>
                  <PhotoGallery photos={vehicle.photos} title={vehicle.title} />
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sticky top-24"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h1 className="text-2xl font-bold text-white mb-1">{vehicle.title}</h1>

                {/* Short description */}
                <ul className="space-y-2 mb-6 mt-4">
                  {vehicle.shortDescription.map((line, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1.5 block w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span
                        className={
                          line.includes("€") ? "text-orange-400 font-bold text-xl" : "text-zinc-300 text-sm"
                        }
                      >
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Detail info */}
                {vehicle.detailInfo && vehicle.detailInfo.length > 0 && (
                  <div className="border-t border-zinc-800 pt-5 mb-6">
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                      Specificaties
                    </h3>
                    <ul className="space-y-2">
                      {vehicle.detailInfo.map((info, i) => (
                        <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                          <span className="text-orange-500 mt-1.5 block w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                          {info}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact */}
                {!vehicle.sold && (
                  <div className="border-t border-zinc-800 pt-5 space-y-3">
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                      Interesse?
                    </h3>
                    <a
                      href="mailto:holdingkonings@hotmail.com"
                      className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Mail size={18} />
                      <span>Stuur een email</span>
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-white font-medium px-5 py-3 rounded-lg transition-all duration-200"
                    >
                      <MapPin size={18} />
                      <span>Bezichtiging plannen</span>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
