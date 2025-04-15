import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  MapPin,
  Phone,
  Star,
  Heart,
  Scissors,
  Calendar,
  Check,
  ChevronRight,
  Share2,
  Navigation,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AppointmentCalendar from "@/components/appointment-calendar"
import Footer from "@/components/footer"

export default function SalonDetailPage({ params }: { params: { id: string } }) {
  const salonId = params.id

  // Gerçek uygulamada bu veriler API'den gelecek
  const salon = {
    id: salonId,
    name: `${Number(salonId) % 2 === 0 ? "Stil Kuaför" : "Modern Saç Tasarım"} ${salonId}`,
    address: "Caferağa Mah. Moda Cad. No:123, Kadıköy/İstanbul",
    phone: "+90 (216) 123 45 67",
    rating: 4.8,
    reviewCount: 124,
    description:
      "Kadıköy'ün kalbinde, profesyonel ekibimizle size en iyi hizmeti sunuyoruz. Modern ekipmanlarımız ve uzman kadromuzla saç kesimi, boyama, bakım ve daha fazlası için sizi salonumuza bekliyoruz.",
    services: [
      { id: 1, name: "Saç Kesimi", price: "150₺", duration: "30 dk", popular: true },
      { id: 2, name: "Saç Boyama", price: "350₺", duration: "120 dk", popular: true },
      { id: 3, name: "Fön", price: "100₺", duration: "30 dk", popular: false },
      { id: 4, name: "Saç Bakımı", price: "200₺", duration: "45 dk", popular: false },
      { id: 5, name: "Manikür", price: "120₺", duration: "45 dk", popular: true },
      { id: 6, name: "Pedikür", price: "150₺", duration: "60 dk", popular: false },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmet Y.",
        rating: 5,
        comment: "Harika bir deneyimdi, çok memnun kaldım!",
        date: "15.03.2023",
        avatar: "/placeholder.svg?height=100&width=100&text=AY",
      },
      {
        id: 2,
        user: "Zeynep K.",
        rating: 4,
        comment: "Personel çok ilgiliydi, tekrar geleceğim.",
        date: "02.04.2023",
        avatar: "/placeholder.svg?height=100&width=100&text=ZK",
      },
      {
        id: 3,
        user: "Elif M.",
        rating: 5,
        comment: "Saç boyamam mükemmel oldu, teşekkürler!",
        date: "18.04.2023",
        avatar: "/placeholder.svg?height=100&width=100&text=EM",
      },
    ],
    workingHours: [
      { day: "Pazartesi", hours: "09:00 - 20:00" },
      { day: "Salı", hours: "09:00 - 20:00" },
      { day: "Çarşamba", hours: "09:00 - 20:00" },
      { day: "Perşembe", hours: "09:00 - 20:00" },
      { day: "Cuma", hours: "09:00 - 20:00" },
      { day: "Cumartesi", hours: "10:00 - 18:00" },
      { day: "Pazar", hours: "Kapalı" },
    ],
    features: ["Ücretsiz Wi-Fi", "Klima", "Engelli Erişimi", "Çocuk Dostu", "Kahve İkramı"],
    staff: [
      {
        id: 1,
        name: "Ayşe Hanım",
        title: "Saç Stilisti",
        image: "/placeholder.svg?height=100&width=100&text=Ayşe",
        rating: 4.9,
      },
      {
        id: 2,
        name: "Fatma Hanım",
        title: "Renk Uzmanı",
        image: "/placeholder.svg?height=100&width=100&text=Fatma",
        rating: 4.7,
      },
      {
        id: 3,
        name: "Zeynep Hanım",
        title: "Manikür Uzmanı",
        image: "/placeholder.svg?height=100&width=100&text=Zeynep",
        rating: 4.8,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-full bg-brand-purple p-2 text-white">
              <Scissors size={20} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Föndevu</h1>
          </Link>

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
        {/* Back button */}
        <div className="mb-6">
          <Link
            href="/salonlar"
            className="inline-flex items-center text-gray-600 hover:text-brand-purple transition-colors"
          >
            <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
            <span>Salonlara Dön</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-96">
            <Image
              src={`/placeholder.svg?height=500&width=800&text=${salon.name}`}
              alt={salon.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Floating badges */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{salon.rating}</span>
                  <span className="text-xs text-gray-600">({salon.reviewCount})</span>
                </div>
                <div className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
                  <Clock className="mr-1 inline-block h-3 w-3" /> Bugün Açık
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full border-none bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-white hover:text-brand-purple"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full border-none bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-white hover:text-brand-purple"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h1 className="mb-2 text-3xl font-bold text-gray-800">{salon.name}</h1>
              <div className="mb-2 flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4 text-brand-purple" />
                <span>{salon.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4 text-brand-purple" />
                <span>{salon.phone}</span>
              </div>
            </div>

            <p className="mb-6 text-gray-600">{salon.description}</p>

            {/* Features */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {salon.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-brand-50 text-brand-purple border-brand-100">
                    <Check className="mr-1 h-3 w-3" /> {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-medium text-gray-800">Çalışma Saatleri</h3>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                {salon.workingHours.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-lg border p-2 text-sm ${
                      item.day === "Pazar" ? "border-red-100 bg-red-50" : "border-gray-100 bg-white"
                    }`}
                  >
                    <div className="font-medium">{item.day}</div>
                    <div className={item.day === "Pazar" ? "text-red-500" : "text-gray-600"}>{item.hours}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={`/salon/${salonId}/randevu`}>
                <Button className="bg-brand-purple text-white hover:bg-brand-700 shadow-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Randevu Al
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-200 text-brand-purple hover:bg-brand-50">
                <Navigation className="mr-2 h-4 w-4" />
                Yol Tarifi Al
              </Button>
              <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                <Phone className="mr-2 h-4 w-4" />
                Ara
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="services" className="mb-12">
          <TabsList className="w-full justify-start border-b bg-transparent p-0">
            <TabsTrigger
              value="services"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-brand-purple data-[state=active]:bg-transparent data-[state=active]:text-brand-purple data-[state=active]:shadow-none"
            >
              Hizmetler
            </TabsTrigger>
            <TabsTrigger
              value="staff"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-brand-purple data-[state=active]:bg-transparent data-[state=active]:text-brand-purple data-[state=active]:shadow-none"
            >
              Personel
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-brand-purple data-[state=active]:bg-transparent data-[state=active]:text-brand-purple data-[state=active]:shadow-none"
            >
              Galeri
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-brand-purple data-[state=active]:bg-transparent data-[state=active]:text-brand-purple data-[state=active]:shadow-none"
            >
              Değerlendirmeler
            </TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="mt-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Hizmetler</h2>
              <div className="text-sm text-gray-600">Toplam {salon.services.length} hizmet</div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-medium text-gray-800">Popüler Hizmetler</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {salon.services
                  .filter((service) => service.popular)
                  .map((service) => (
                    <Card
                      key={service.id}
                      className="overflow-hidden border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between border-b p-4">
                          <div>
                            <h3 className="font-medium text-gray-800">{service.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Clock className="h-3 w-3 text-brand-purple" />
                              <span>{service.duration}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-gray-800">{service.price}</div>
                            <Link href={`/salon/${salonId}/randevu?service=${service.id}`}>
                              <Button variant="link" className="h-auto p-0 text-brand-purple">
                                Seç
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-800">Tüm Hizmetler</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {salon.services.map((service) => (
                  <Card
                    key={service.id}
                    className="overflow-hidden border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between border-b p-4">
                        <div>
                          <h3 className="font-medium text-gray-800">{service.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-3 w-3 text-brand-purple" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-800">{service.price}</div>
                          <Link href={`/salon/${salonId}/randevu?service=${service.id}`}>
                            <Button variant="link" className="h-auto p-0 text-brand-purple">
                              Seç
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Staff Tab */}
          <TabsContent value="staff" className="mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">Personel</h2>
              <p className="text-gray-600">Uzman ekibimizle tanışın</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {salon.staff.map((person) => (
                <Card
                  key={person.id}
                  className="overflow-hidden border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-sm font-medium backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{person.rating}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800">{person.name}</h3>
                      <p className="text-sm text-gray-600">{person.title}</p>
                      <Link href={`/salon/${salonId}/randevu?staff=${person.id}`}>
                        <Button className="mt-3 w-full bg-brand-purple text-white hover:bg-brand-700">
                          Randevu Al
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">Galeri</h2>
              <p className="text-gray-600">Salonumuzdan görüntüler</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
                <div key={img} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Salon+${salonId}+Foto+${img}`}
                    alt={`Salon ${salonId} Fotoğraf ${img}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-6">
            <div className="mb-6 grid gap-6 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-3xl font-bold text-brand-purple">
                      {salon.rating}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${star <= Math.round(salon.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">{salon.reviewCount} değerlendirme</div>
                    </div>
                  </div>

                  <Link href={`/salon/${salonId}/degerlendirme`}>
                    <Button
                      variant="outline"
                      className="w-full border-gray-200 text-brand-purple hover:bg-brand-50 hover:text-brand-700"
                    >
                      Değerlendirme Yap
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="space-y-4">
                  {salon.reviews.map((review) => (
                    <div key={review.id} className="rounded-lg bg-white p-4 shadow-sm border border-gray-100">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.user}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{review.user}</div>
                            <div className="text-xs text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Appointment Section */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Randevu Al</h2>
            <p className="text-gray-600">Size uygun bir zaman seçin ve hemen randevu oluşturun</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-800">Uygun Zamanlar</h3>

              <AppointmentCalendar salonId={salonId} />
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-800">Seçilen Hizmetler</h3>
              <Card className="bg-white border border-gray-100 shadow-sm">
                <CardContent className="p-4">
                  <p className="mb-4 text-center text-gray-500">Henüz bir hizmet seçilmedi</p>
                  <Link href={`/salon/${salonId}/randevu`}>
                    <Button className="w-full bg-brand-purple text-white hover:bg-brand-700 shadow-sm">
                      Randevu Oluştur
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
