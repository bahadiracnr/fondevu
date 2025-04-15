"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Search,
  Star,
  Heart,
  Clock,
  Filter,
  Users,
  Scissors,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "@/components/footer"

export default function SalonsPage() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [filterOpen, setFilterOpen] = useState(false)
  const [viewType, setViewType] = useState("grid")
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Sample salon data
  const salons = [
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
      priceRange: "₺₺",
      description: "Modern ve şık atmosferiyle profesyonel saç bakım hizmetleri sunan salon.",
      featured: true,
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
      isNew: false,
      distance: "2.5 km",
      priceRange: "₺₺₺",
      description: "Uzman kadrosuyla kişiye özel saç tasarımları ve bakım hizmetleri.",
      featured: true,
    },
    {
      id: 3,
      name: "Elit Kuaför",
      rating: 4.9,
      reviewCount: 156,
      location: "Şişli, İstanbul",
      services: ["Saç Kesimi", "Boya", "Manikür"],
      hours: "09:00 - 19:00",
      image: "/placeholder.svg?height=300&width=500&text=Elit+Kuaför",
      isNew: true,
      distance: "3.8 km",
      priceRange: "₺₺₺₺",
      description: "Premium saç ve güzellik hizmetleri sunan lüks salon.",
      featured: false,
    },
    {
      id: 4,
      name: "Saç Tasarım",
      rating: 4.5,
      reviewCount: 87,
      location: "Ataşehir, İstanbul",
      services: ["Saç Kesimi", "Fön", "Pedikür"],
      hours: "10:00 - 20:00",
      image: "/placeholder.svg?height=300&width=500&text=Saç+Tasarım",
      isNew: false,
      distance: "5.1 km",
      priceRange: "₺₺",
      description: "Uygun fiyatlarla kaliteli saç bakım ve güzellik hizmetleri.",
      featured: false,
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
      isNew: false,
      distance: "4.3 km",
      priceRange: "₺₺₺",
      description: "Kapsamlı güzellik ve bakım hizmetleri sunan modern merkez.",
      featured: true,
    },
    {
      id: 6,
      name: "Trend Kuaför",
      rating: 4.4,
      reviewCount: 76,
      location: "Bakırköy, İstanbul",
      services: ["Saç Kesimi", "Fön", "Boya"],
      hours: "10:00 - 19:00",
      image: "/placeholder.svg?height=300&width=500&text=Trend+Kuaför",
      isNew: true,
      distance: "7.8 km",
      priceRange: "₺₺",
      description: "En son trendleri takip eden genç ve dinamik ekip.",
      featured: false,
    },
  ]

  // Toggle favorite status
  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  // Render salon list based on view type
  const renderSalonList = () => {
    if (viewType === "grid") {
      return (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {salons.map((salon) => (
            <motion.div key={salon.id} variants={fadeIn} className="group">
              <Link href={`/salon/${salon.id}`} className="block h-full">
                <Card className="overflow-hidden border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg h-full bg-white">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-52 w-full overflow-hidden">
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
                        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:text-brand-purple"
                        onClick={(e) => {
                          e.preventDefault()
                          toggleFavorite(salon.id)
                        }}
                      >
                        <Heart
                          className={`h-4 w-4 ${favoriteIds.includes(salon.id) ? "fill-brand-purple text-brand-purple" : ""}`}
                        />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24 pointer-events-none"></div>
                      <div className="absolute bottom-3 left-4 flex items-center gap-1 text-white">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{salon.rating}</span>
                        <span className="text-xs opacity-90">({salon.reviewCount})</span>
                      </div>
                      <div className="absolute bottom-3 right-4 text-xs font-medium text-white bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                        {salon.distance}
                      </div>
                    </div>
                    <div className="flex-1 p-5">
                      <div className="mb-2">
                        <h3 className="font-bold text-gray-800 group-hover:text-brand-purple transition-colors text-lg">
                          {salon.name}
                        </h3>
                        <p className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                          <MapPin className="h-3 w-3 text-brand-purple" /> {salon.location}
                        </p>
                      </div>
                      <p className="mb-3 text-sm text-gray-600 line-clamp-2">{salon.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {salon.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-purple border border-brand-100"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 p-4 bg-gray-50 mt-auto">
                      <div className="text-sm text-gray-600 flex items-center">
                        <Clock className="mr-1 h-3 w-3 text-brand-purple" /> {salon.hours}
                      </div>
                      <Button size="sm" className="bg-brand-purple hover:bg-brand-700 text-white shadow-sm">
                        Randevu Al
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )
    } else {
      return (
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
          {salons.map((salon) => (
            <motion.div key={salon.id} variants={fadeIn} className="group">
              <Link href={`/salon/${salon.id}`} className="block">
                <Card className="overflow-hidden border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg bg-white">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
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
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16 md:hidden pointer-events-none"></div>
                        <div className="absolute bottom-3 left-4 flex items-center gap-1 text-white md:hidden">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{salon.rating}</span>
                        </div>
                      </div>
                      <div className="flex-1 p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-gray-800 group-hover:text-brand-purple transition-colors text-lg">
                              {salon.name}
                            </h3>
                            <p className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                              <MapPin className="h-3 w-3 text-brand-purple" /> {salon.location} •
                              <span className="text-brand-purple font-medium">{salon.distance}</span>
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="hidden md:flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{salon.rating}</span>
                              <span className="text-xs text-gray-500">({salon.reviewCount})</span>
                            </div>
                            <button
                              className="rounded-full bg-gray-50 p-2 text-gray-500 transition-all duration-300 hover:text-brand-purple"
                              onClick={(e) => {
                                e.preventDefault()
                                toggleFavorite(salon.id)
                              }}
                            >
                              <Heart
                                className={`h-4 w-4 ${favoriteIds.includes(salon.id) ? "fill-brand-purple text-brand-purple" : ""}`}
                              />
                            </button>
                          </div>
                        </div>
                        <p className="mb-3 text-sm text-gray-600">{salon.description}</p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {salon.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-purple border border-brand-100"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600 flex items-center">
                            <Clock className="mr-1 h-3 w-3 text-brand-purple" /> {salon.hours}
                          </div>
                          <Button size="sm" className="bg-brand-purple hover:bg-brand-700 text-white shadow-sm">
                            Randevu Al <ChevronRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header with Glassmorphism Effect */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-full bg-brand-purple p-2 text-white">
              <Scissors size={20} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Föndevu</h1>
          </Link>

          {/* Desktop Navigation - Empty as these pages require login */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Navigation links removed - only accessible after login */}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/giris">
              <Button variant="ghost" className="text-gray-800 hover:text-brand-purple hover:bg-brand-50">
                Giriş Yap
              </Button>
            </Link>
            <Link href="/kayit">
              <Button className="bg-brand-purple text-white hover:bg-brand-700 shadow-sm">Kayıt Ol</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Kuaförler</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Size en yakın ve en iyi kuaförleri keşfedin. Değerlendirmelere göz atın ve hemen randevu alın.
          </p>
        </motion.div>

        {/* Enhanced Search Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8 rounded-xl bg-white p-6 shadow-sm border border-gray-100"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Kuaför Ara</h2>
              <p className="text-sm text-gray-600">Tercihlerinize göre kuaför bulun</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-200 text-gray-800 hover:bg-gray-50 group"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className={`mr-2 h-4 w-4 transition-transform duration-200 ${filterOpen ? "rotate-180" : ""}`} />
              Filtreler {filterOpen ? "Kapat" : "Aç"}
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
              <Input
                type="text"
                placeholder="Kuaför adı veya hizmet ara"
                className="pl-9 border-gray-200 focus-visible:ring-brand-purple"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
              <Input
                type="text"
                placeholder="Konum"
                className="pl-9 border-gray-200 focus-visible:ring-brand-purple"
                defaultValue="İstanbul"
              />
            </div>
            <Button className="bg-brand-purple hover:bg-brand-700 text-white group shadow-sm">
              <Search className="mr-2 h-4 w-4" />
              Ara
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {filterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-6"
            >
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-800">Kuaför Tipi</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-gray-200 bg-white text-gray-800 hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
                    >
                      <Users className="mr-1 h-3 w-3" /> Unisex
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-gray-200 bg-white text-gray-800 hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
                    >
                      <Users className="mr-1 h-3 w-3" /> Kadın
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-gray-200 bg-white text-gray-800 hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
                    >
                      <Users className="mr-1 h-3 w-3" /> Erkek
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-800">Hizmet Türü</h3>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:ring-brand-purple">
                      <SelectValue placeholder="Hizmet seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Saç Kesimi</SelectItem>
                      <SelectItem value="coloring">Saç Boyama</SelectItem>
                      <SelectItem value="styling">Fön & Şekillendirme</SelectItem>
                      <SelectItem value="treatment">Saç Bakımı</SelectItem>
                      <SelectItem value="manicure">Manikür</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-800">
                    Fiyat Aralığı: {priceRange[0]}₺ - {priceRange[1]}₺
                  </h3>
                  <Slider
                    defaultValue={[0, 500]}
                    max={1000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-800">Değerlendirme</h3>
                  <div className="flex flex-wrap gap-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <Badge
                        key={rating}
                        variant="outline"
                        className="border-gray-200 bg-white hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
                      >
                        {rating}+ <Star className="ml-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-800">Sıralama</h3>
                  <Select defaultValue="rating">
                    <SelectTrigger className="border-gray-200 focus:ring-brand-purple">
                      <SelectValue placeholder="Sıralama seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">En Yüksek Puan</SelectItem>
                      <SelectItem value="distance">En Yakın</SelectItem>
                      <SelectItem value="price-asc">Fiyat (Artan)</SelectItem>
                      <SelectItem value="price-desc">Fiyat (Azalan)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white shadow-sm">
                    Filtreleri Uygula
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="border-gray-200 bg-white text-gray-800 hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
            >
              <Scissors className="mr-1 h-3 w-3" /> Saç Kesimi
            </Badge>
            <Badge
              variant="outline"
              className="border-gray-200 bg-white text-gray-800 hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
            >
              En Yakın
            </Badge>
            <Badge
              variant="outline"
              className="border-gray-200 bg-white text-gray-800 hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
            >
              En Yüksek Puan
            </Badge>
            <Badge
              variant="outline"
              className="border-gray-200 bg-white text-gray-800 hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
            >
              Uygun Fiyat
            </Badge>
            <Badge
              variant="outline"
              className="border-gray-200 bg-white text-gray-800 hover:bg-brand-50 hover:text-brand-purple hover:border-brand-200 cursor-pointer transition-colors"
            >
              Bugün Müsait
            </Badge>
          </div>
        </motion.div>

        {/* View Type Selector and Results Count */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-gray-800">
            <span className="font-medium">{salons.length}</span> kuaför bulundu
          </div>

          <div className="flex items-center gap-4">
            <Select defaultValue="rating">
              <SelectTrigger className="w-[180px] border-gray-200 focus:ring-brand-purple">
                <SelectValue placeholder="Sıralama" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">En Yüksek Puan</SelectItem>
                <SelectItem value="distance">En Yakın</SelectItem>
                <SelectItem value="price-asc">Fiyat (Artan)</SelectItem>
                <SelectItem value="price-desc">Fiyat (Azalan)</SelectItem>
              </SelectContent>
            </Select>

            <Tabs defaultValue={viewType} onValueChange={setViewType} className="w-auto">
              <TabsList className="grid w-[120px] grid-cols-2">
                <TabsTrigger
                  value="grid"
                  className="data-[state=active]:bg-brand-purple data-[state=active]:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                  </svg>
                </TabsTrigger>
                <TabsTrigger
                  value="list"
                  className="data-[state=active]:bg-brand-purple data-[state=active]:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Featured Salons Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-12">
          <div className="mb-6 flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-brand-purple" />
            <h2 className="text-2xl font-bold text-gray-800">Öne Çıkan Salonlar</h2>
          </div>

          <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {salons
              .filter((salon) => salon.featured)
              .map((salon) => (
                <motion.div key={salon.id} variants={fadeIn} className="group">
                  <Card className="overflow-hidden border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg h-full bg-white">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative h-52 w-full overflow-hidden">
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
                          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:text-brand-purple"
                          onClick={(e) => {
                            e.preventDefault()
                            toggleFavorite(salon.id)
                          }}
                        >
                          <Heart
                            className={`h-4 w-4 ${favoriteIds.includes(salon.id) ? "fill-brand-purple text-brand-purple" : ""}`}
                          />
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24 pointer-events-none"></div>
                        <div className="absolute bottom-3 left-4 flex items-center gap-1 text-white">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{salon.rating}</span>
                          <span className="text-xs opacity-90">({salon.reviewCount})</span>
                        </div>
                        <div className="absolute bottom-3 right-4 text-xs font-medium text-white bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                          {salon.distance}
                        </div>
                      </div>
                      <div className="flex-1 p-5">
                        <div className="mb-2">
                          <h3 className="font-bold text-gray-800 group-hover:text-brand-purple transition-colors text-lg">
                            {salon.name}
                          </h3>
                          <p className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                            <MapPin className="h-3 w-3 text-brand-purple" /> {salon.location}
                          </p>
                        </div>
                        <p className="mb-3 text-sm text-gray-600 line-clamp-2">{salon.description}</p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {salon.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-purple border border-brand-100"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-100 p-4 bg-gray-50 mt-auto">
                        <div className="text-sm text-gray-600 flex items-center">
                          <Clock className="mr-1 h-3 w-3 text-brand-purple" /> {salon.hours}
                        </div>
                        <Link href={`/salon/${salon.id}`}>
                          <Button size="sm" className="bg-brand-purple hover:bg-brand-700 text-white shadow-sm">
                            Randevu Al
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* Salon Listings - Fixed to use proper Tabs structure */}
        <Tabs defaultValue={viewType} className="w-full">
          <TabsContent value="grid">{renderSalonList()}</TabsContent>

          <TabsContent value="list">{renderSalonList()}</TabsContent>
        </Tabs>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brand-purple"
            >
              Önceki
            </Button>
            <Button size="sm" className="bg-brand-purple text-white hover:bg-brand-700">
              1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brand-purple"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brand-purple"
            >
              3
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brand-purple"
            >
              Sonraki
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
