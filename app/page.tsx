"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Search,
  Star,
  ArrowRight,
  Zap,
  Scissors,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle,
  Heart,
  Check,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function Home() {
  // State for location input
  const [location, setLocation] = useState("İstanbul / Kadıköy")

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Featured salons data
  const featuredSalons = [
    {
      id: 1,
      name: "Stil Kuaför",
      rating: 4.9,
      reviews: 128,
      location: "Kadıköy, İstanbul",
      image: "/placeholder.svg?height=300&width=400&text=Stil+Kuaför",
      services: ["Saç Kesimi", "Fön", "Bakım"],
      isNew: true,
    },
    {
      id: 2,
      name: "Modern Saç Tasarım",
      rating: 4.7,
      reviews: 96,
      location: "Beşiktaş, İstanbul",
      image: "/placeholder.svg?height=300&width=400&text=Modern+Saç",
      services: ["Saç Boyama", "Manikür", "Pedikür"],
      isNew: false,
    },
    {
      id: 3,
      name: "Elit Güzellik",
      rating: 4.8,
      reviews: 112,
      location: "Şişli, İstanbul",
      image: "/placeholder.svg?height=300&width=400&text=Elit+Güzellik",
      services: ["Saç Kesimi", "Cilt Bakımı", "Makyaj"],
      isNew: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navbar with Glassmorphism Effect */}
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

      <main className="pt-16">
        {/* Enhanced Hero Section with Layered Design */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-gray-50">
          {/* Background patterns */}
          <div className="absolute inset-0 bg-gray-50 opacity-70"></div>
          <div className="absolute inset-0 bg-dots"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>

          <div className="container relative mx-auto px-4">
            <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" animate="visible" variants={fadeIn}>
              {/* Enhanced badge with animation */}
              <motion.div
                className="mb-6 inline-flex items-center rounded-full border border-brand-200 bg-white/90 px-4 py-2 backdrop-blur-sm shadow-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-purple">
                  <Zap size={14} />
                </span>
                <span className="text-sm font-medium text-gray-800">Profesyonel saç bakımı artık daha kolay</span>
              </motion.div>

              {/* Improved typography with better spacing */}
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
                Mükemmel Saçlar İçin{" "}
                <span className="text-brand-purple relative">
                  Mükemmel Randevular
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-brand-purple/20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 25 9, 50 5 Q 75 0, 100 5" stroke="currentColor" strokeWidth="5" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="mb-8 text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
                Föndevu ile size en yakın kuaförleri keşfedin, anında randevu alın ve güzelliğinizi ön plana çıkarın.
              </p>

              {/* Enhanced search bar with animation */}
              <motion.div className="mx-auto mb-12 flex max-w-lg flex-col gap-4 sm:flex-row" variants={scaleUp}>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Konum seçin"
                    className="border-gray-200 pl-10 focus-visible:ring-brand-purple rounded-md shadow-sm"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <Button className="group bg-brand-purple hover:bg-brand-700 text-white shadow-md">
                  <Search className="mr-2 h-4 w-4" />
                  Kuaför Bul
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              {/* Enhanced hero image with interactive elements */}
              <motion.div
                className="relative mx-auto h-72 w-full max-w-3xl overflow-hidden rounded-xl shadow-lg sm:h-80 md:h-96"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src="/placeholder.svg?height=500&width=1000&text=Föndevu+Uygulaması"
                  alt="Föndevu Uygulaması"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

                {/* Interactive salon card */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-white/95 p-3 backdrop-blur-sm shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-sm">
                      <Image
                        src="/placeholder.svg?height=100&width=100&text=Salon"
                        alt="Salon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Stil Kuaför</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-3 w-3" /> Kadıköy, İstanbul
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-brand-purple hover:bg-brand-700 text-white">
                    Randevu Al
                  </Button>
                </div>

                {/* Floating rating badge */}
                <motion.div
                  className="absolute left-8 top-8 rounded-lg bg-white/95 px-3 py-2 shadow-md"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-brand-purple text-brand-purple" />
                    <span className="text-sm font-medium">4.9 (120+ değerlendirme)</span>
                  </div>
                </motion.div>

                {/* Floating time badge */}
                <motion.div
                  className="absolute right-8 top-8 rounded-lg bg-white/95 px-3 py-2 shadow-md"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-purple" />
                    <span className="text-sm font-medium">Bugün müsait</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section - New Addition */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">1000+</div>
                <p className="text-gray-600">Aktif Kullanıcı</p>
              </motion.div>
              <motion.div variants={fadeIn} className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">100+</div>
                <p className="text-gray-600">Kayıtlı Salon</p>
              </motion.div>
              <motion.div variants={fadeIn} className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">5000+</div>
                <p className="text-gray-600">Tamamlanan Randevu</p>
              </motion.div>
              <motion.div variants={fadeIn} className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">4.8</div>
                <p className="text-gray-600">Ortalama Değerlendirme</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Features Section with Better Visual Hierarchy */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="mb-4 bg-brand-50 text-brand-purple hover:bg-brand-100 border-brand-200">
                Özellikler
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Saç Bakımı İçin <span className="text-brand-purple">Tek Adres</span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
                Kuaför randevusu almanın en kolay ve hızlı yolu. Föndevu ile tüm saç bakım ihtiyaçlarınız için tek bir
                uygulama yeterli.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Enhanced feature cards with hover effects */}
              <motion.div
                className="group card-hover rounded-xl bg-white p-8 shadow-sm border border-gray-100 relative overflow-hidden"
                variants={scaleUp}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-8 -mt-8 transition-all duration-300 group-hover:bg-brand-100"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                  <Search className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Kolay Keşif</h3>
                <p className="text-gray-600">
                  Konumunuza göre en iyi kuaförleri keşfedin, değerlendirmeleri okuyun ve size en uygun salonu seçin.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-purple" />
                    <span>Detaylı salon profilleri</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-purple" />
                    <span>Gerçek müşteri değerlendirmeleri</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="group card-hover rounded-xl bg-white p-8 shadow-sm border border-gray-100 relative overflow-hidden"
                variants={scaleUp}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-8 -mt-8 transition-all duration-300 group-hover:bg-brand-100"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                  <Calendar className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Hızlı Randevu</h3>
                <p className="text-gray-600">
                  Birkaç tıklama ile istediğiniz gün ve saatte randevunuzu oluşturun, zaman kaybetmeyin.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-purple" />
                    <span>Anlık müsaitlik kontrolü</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-purple" />
                    <span>Kolay iptal ve değişiklik</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="group card-hover rounded-xl bg-white p-8 shadow-sm border border-gray-100 relative overflow-hidden"
                variants={scaleUp}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-8 -mt-8 transition-all duration-300 group-hover:bg-brand-100"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Hatırlatmalar</h3>
                <p className="text-gray-600">
                  Randevunuza yakın SMS veya e-posta ile hatırlatma alın, hiçbir randevuyu kaçırmayın.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-purple" />
                    <span>Özelleştirilebilir bildirimler</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-purple" />
                    <span>Takvim entegrasyonu</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Salons Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="mb-4 bg-brand-50 text-brand-purple hover:bg-brand-100 border-brand-200">
                Öne Çıkan
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Popüler <span className="text-brand-purple">Salonlar</span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
                Kullanıcılarımızın en çok tercih ettiği ve en yüksek puanlı salonları keşfedin.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {featuredSalons.map((salon) => (
                <motion.div key={salon.id} variants={scaleUp} className="group">
                  <Card className="overflow-hidden border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="relative h-48 w-full overflow-hidden">
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
                        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-brand-purple shadow-sm backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                          <Heart className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <h3 className="font-bold text-gray-800 group-hover:text-brand-purple transition-colors">
                            {salon.name}
                          </h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-brand-purple text-brand-purple" />
                            <span className="text-sm font-medium">{salon.rating}</span>
                            <span className="text-xs text-gray-500">({salon.reviews})</span>
                          </div>
                        </div>
                        <p className="mb-3 flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" /> {salon.location}
                        </p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {salon.services.map((service, idx) => (
                            <span key={idx} className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-purple">
                              {service}
                            </span>
                          ))}
                        </div>
                        <Link href={`/salon/${salon.id}`}>
                          <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white">Randevu Al</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section - Integrated into homepage */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-50 rounded-full -ml-32 -mb-32"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="mb-4 bg-brand-50 text-brand-purple hover:bg-brand-100 border-brand-200">
                Nasıl Çalışır
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Sadece <span className="text-brand-purple">3 Adımda</span> Randevu Alın
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
                Föndevu ile kuaför randevusu almak hiç bu kadar kolay olmamıştı. Birkaç tıklama ile istediğiniz
                kuaförden randevu alabilirsiniz.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Step 1 */}
              <motion.div
                className="relative rounded-xl bg-white p-8 shadow-sm border border-gray-100 text-center"
                variants={fadeIn}
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple text-white font-bold shadow-md">
                  1
                </div>
                <div className="mt-4 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-purple mx-auto">
                  <Search className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Kuaför Bul</h3>
                <p className="text-gray-600">
                  Konumunuza göre size en yakın kuaförleri keşfedin, değerlendirmeleri okuyun ve size en uygun salonu
                  seçin.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="relative rounded-xl bg-white p-8 shadow-sm border border-gray-100 text-center"
                variants={fadeIn}
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple text-white font-bold shadow-md">
                  2
                </div>
                <div className="mt-4 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-purple mx-auto">
                  <Calendar className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Tarih ve Saat Seç</h3>
                <p className="text-gray-600">
                  Size uygun tarih ve saati seçin, istediğiniz hizmeti ve personeli belirleyin ve randevunuzu oluşturun.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="relative rounded-xl bg-white p-8 shadow-sm border border-gray-100 text-center"
                variants={fadeIn}
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple text-white font-bold shadow-md">
                  3
                </div>
                <div className="mt-4 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-purple mx-auto">
                  <Check className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Randevunu Onayla</h3>
                <p className="text-gray-600">
                  Randevunuzu onaylayın ve hatırlatma bildirimleri alın. Randevu saatinizde kuaföre gidin ve profesyonel
                  hizmetin keyfini çıkarın.
                </p>
              </motion.div>
            </motion.div>

            <div className="mt-12 text-center">
              <Link href="/salonlar">
                <Button size="lg" className="bg-brand-purple hover:bg-brand-700 text-white">
                  Hemen Randevu Al
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-brand-purple text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-20 bg-white/5 -skew-y-3 transform origin-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-20 bg-white/5 -skew-y-3 transform origin-right"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="animate-float rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Hemen Kayıt Olun ve Randevu Almaya Başlayın</h2>
              <p className="mb-8 text-white/90 md:text-lg">
                Föndevu ile kuaför randevusu almanın keyfini çıkarın. Ücretsiz kayıt olun ve hemen kullanmaya başlayın.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/kayit">
                  <Button size="lg" className="w-full bg-white text-brand-purple hover:bg-white/90 sm:w-auto shadow-md">
                    Ücretsiz Kayıt Ol
                  </Button>
                </Link>
                <Link href="/giris">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
                  >
                    Giriş Yap
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
