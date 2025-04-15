"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Heart, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

interface FavoriteSalon {
  id: number
  name: string
  rating: number
  reviewCount: number
  location: string
  services: string[]
  hours: string
  image: string
  isNew?: boolean
  distance: string
}

interface FavoriteSalonsProps {
  initialSalons?: FavoriteSalon[]
}

export default function FavoriteSalons({ initialSalons = [] }: FavoriteSalonsProps) {
  const [salons, setSalons] = useState<FavoriteSalon[]>(
    initialSalons.length > 0
      ? initialSalons
      : [
          {
            id: 1,
            name: "Stil Kuaför",
            rating: 4.8,
            reviewCount: 124,
            location: "Kadıköy, İstanbul",
            services: ["Saç Kesimi", "Fön", "Boya"],
            hours: "09:00 - 20:00",
            image: "/placeholder.svg?height=300&width=500&text=Stil+Kuaför",
            isNew: true,
            distance: "1.2 km",
          },
          {
            id: 2,
            name: "Modern Saç Tasarım",
            rating: 4.6,
            reviewCount: 98,
            location: "Beşiktaş, İstanbul",
            services: ["Saç Kesimi", "Fön", "Bakım"],
            hours: "10:00 - 21:00",
            image: "/placeholder.svg?height=300&width=500&text=Modern+Saç",
            distance: "2.5 km",
          },
          {
            id: 5,
            name: "Güzellik Merkezi",
            rating: 4.7,
            reviewCount: 112,
            location: "Üsküdar, İstanbul",
            services: ["Saç Kesimi", "Manikür", "Pedikür"],
            hours: "09:00 - 21:00",
            image: "/placeholder.svg?height=300&width=500&text=Güzellik+Merkezi",
            distance: "4.3 km",
          },
        ],
  )

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  // Remove salon from favorites
  const removeFavorite = (id: number) => {
    setSalons((prev) => prev.filter((salon) => salon.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Favori Salonlarım</h2>
        <Link href="/salonlar">
          <Button variant="outline" size="sm" className="border-gray-200 text-brand-purple hover:bg-brand-50">
            Tüm Salonları Gör
          </Button>
        </Link>
      </div>

      {salons.length > 0 ? (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {salons.map((salon) => (
            <motion.div key={salon.id} variants={fadeIn} className="group">
              <Card className="overflow-hidden border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={salon.image || "/placeholder.svg"}
                      alt={salon.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {salon.isNew && (
                      <div className="absolute left-4 top-4 rounded-full bg-brand-purple px-3 py-1 text-xs font-medium text-white shadow-sm">
                        Yeni
                      </div>
                    )}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-brand-purple shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      onClick={(e) => {
                        e.preventDefault()
                        removeFavorite(salon.id)
                      }}
                    >
                      <Heart className="h-4 w-4 fill-brand-purple" />
                    </button>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-bold text-gray-800 group-hover:text-brand-purple transition-colors">
                        {salon.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{salon.rating}</span>
                        <span className="text-xs text-gray-500">({salon.reviewCount})</span>
                      </div>
                    </div>
                    <p className="mb-2 flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" /> {salon.location} •{" "}
                      <span className="text-brand-purple font-medium">{salon.distance}</span>
                    </p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {salon.services.map((service, idx) => (
                        <span key={idx} className="rounded-full bg-brand-50 px-2 py-0.5 text-xs text-brand-purple">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 p-3 bg-gray-50 mt-auto">
                    <div className="text-sm text-gray-600">
                      <Clock className="mr-1 inline-block h-3 w-3" /> {salon.hours}
                    </div>
                    <Link href={`/salon/${salon.id}`}>
                      <Button size="sm" className="bg-brand-purple hover:bg-brand-700 text-white">
                        Randevu Al <ChevronRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-200 p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
            <Heart className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-800">Henüz favori salonunuz yok</h3>
          <p className="mb-6 text-gray-600">Beğendiğiniz salonları favorilere ekleyerek daha hızlı erişebilirsiniz.</p>
          <Link href="/salonlar">
            <Button className="bg-brand-purple hover:bg-brand-700 text-white">Salonları Keşfet</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
