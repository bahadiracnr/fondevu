"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Star, Check, MapPin, Search, Scissors, Users, Heart, ArrowRight, Sliders } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [filterOpen, setFilterOpen] = useState(false)

  // Gerçek uygulamada bu veriler API'den gelecek
  const upcomingAppointments = [
    {
      id: 1,
      salon: "Stil Kuaför",
      service: "Saç Kesimi",
      date: "15 Mayıs 2023",
      time: "14:30",
      image: "/placeholder.svg?height=100&width=100&text=Salon+1",
    },
    {
      id: 2,
      salon: "Modern Saç Tasarım",
      service: "Saç Boyama",
      date: "22 Mayıs 2023",
      time: "10:00",
      image: "/placeholder.svg?height=100&width=100&text=Salon+3",
    },
  ]

  const pastAppointments = [
    {
      id: 3,
      salon: "Stil Kuaför",
      service: "Fön",
      date: "5 Mayıs 2023",
      time: "16:00",
      image: "/placeholder.svg?height=100&width=100&text=Salon+2",
      reviewed: true,
    },
    {
      id: 4,
      salon: "Modern Saç Tasarım",
      service: "Manikür",
      date: "28 Nisan 2023",
      time: "11:30",
      image: "/placeholder.svg?height=100&width=100&text=Salon+4",
      reviewed: false,
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <div className="flex-1">
        <header className="border-gray-100 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-800">Müşteri Paneli</h1>
              <div className="hidden items-center gap-2 rounded-md bg-gray-50 px-3 py-1 text-sm text-gray-800 md:flex">
                <MapPin className="h-4 w-4" />
                <span>İstanbul / Kadıköy</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-brand-200">
                  <Image
                    src="/placeholder.svg?height=100&width=100&text=User"
                    alt="Profil"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">Ahmet Yılmaz</span>
              </div>
              <Button variant="outline" size="sm" className="border-gray-200 text-gray-800 hover:bg-gray-50">
                Çıkış Yap
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <div className="mb-8 rounded-md bg-white p-6 shadow-sm border border-gray-100">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Kuaför Ara</h2>
                <p className="text-sm text-gray-800">Tercihlerinize göre kuaför bulun</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-800 hover:bg-gray-50"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Sliders className="mr-2 h-4 w-4" />
                Filtreler {filterOpen ? "Kapat" : "Aç"}
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
                <Input type="text" placeholder="Kuaför adı veya hizmet ara" className="pl-9 border-gray-200" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
                <Input
                  type="text"
                  placeholder="Konum"
                  className="pl-9 border-gray-200"
                  defaultValue="İstanbul / Kadıköy"
                />
              </div>
              <Button className="bg-brand-purple hover:bg-brand-700 text-white">
                <Search className="mr-2 h-4 w-4" /> Ara
              </Button>
            </div>

            {filterOpen && (
              <div className="mt-6 rounded-md border border-gray-100 bg-gray-50 p-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-3 text-sm font-medium text-gray-800">Kuaför Tipi</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-gray-200 bg-white text-gray-800 hover:bg-gray-50 cursor-pointer"
                      >
                        <Users className="mr-1 h-3 w-3" /> Unisex
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-200 bg-white text-gray-800 hover:bg-gray-50 cursor-pointer"
                      >
                        <Users className="mr-1 h-3 w-3" /> Kadın
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-200 bg-white text-gray-800 hover:bg-gray-50 cursor-pointer"
                      >
                        <Users className="mr-1 h-3 w-3" /> Erkek
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-medium text-gray-800">Hizmet Türü</h3>
                    <Select>
                      <SelectTrigger className="border-gray-200">
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
                          className="border-gray-200 bg-white hover:bg-gray-50 cursor-pointer"
                        >
                          {rating}+ <Star className="ml-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-medium text-gray-800">Sıralama</h3>
                    <Select defaultValue="rating">
                      <SelectTrigger className="border-gray-200">
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
                    <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white">Filtreleri Uygula</Button>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-gray-200 bg-white text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                <Scissors className="mr-1 h-3 w-3" /> Saç Kesimi
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-200 bg-white text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                En Yakın
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-200 bg-white text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                En Yüksek Puan
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-200 bg-white text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                Uygun Fiyat
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-200 bg-white text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                Bugün Müsait
              </Badge>
            </div>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden border-gray-100 shadow-sm">
              <CardHeader className="pb-2 bg-brand-purple text-white">
                <CardTitle className="text-lg">Toplam Randevu</CardTitle>
                <CardDescription className="text-brand-100">Tüm zamanlar</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-3xl font-bold">{upcomingAppointments.length + pastAppointments.length}</div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-gray-100 shadow-sm">
              <CardHeader className="pb-2 bg-brand-purple text-white">
                <CardTitle className="text-lg">Yaklaşan Randevular</CardTitle>
                <CardDescription className="text-brand-100">Önümüzdeki 30 gün</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-3xl font-bold">{upcomingAppointments.length}</div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-gray-100 shadow-sm">
              <CardHeader className="pb-2 bg-brand-purple text-white">
                <CardTitle className="text-lg">Favori Salonlar</CardTitle>
                <CardDescription className="text-brand-100">En çok ziyaret ettiğiniz</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-3xl font-bold">2</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="upcoming" className="mb-8">
            <TabsList className="bg-white border border-gray-100 p-1">
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-brand-purple data-[state=active]:text-white"
              >
                Yaklaşan Randevular
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white">
                Geçmiş Randevular
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-6">
              {upcomingAppointments.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id} className="overflow-hidden border-gray-100 shadow-sm card-hover">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 border-b p-4">
                          <div className="relative h-16 w-16 overflow-hidden rounded-md">
                            <Image
                              src={appointment.image || "/placeholder.svg"}
                              alt={appointment.salon}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">{appointment.salon}</h3>
                            <p className="text-sm text-gray-800">{appointment.service}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="mb-4 space-y-2">
                            <div className="flex items-center gap-2 text-gray-800">
                              <Calendar className="h-4 w-4 text-brand-purple" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-800">
                              <Clock className="h-4 w-4 text-brand-purple" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 border-gray-200 text-gray-800 hover:bg-gray-50"
                            >
                              İptal Et
                            </Button>
                            <Button size="sm" className="flex-1 bg-brand-purple hover:bg-brand-700 text-white">
                              Düzenle
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Calendar className="mb-2 h-12 w-12 text-brand-300" />
                    <h3 className="mb-1 text-lg font-medium text-gray-800">Yaklaşan Randevunuz Yok</h3>
                    <p className="mb-4 text-center text-gray-800">Şu anda planlanmış bir randevunuz bulunmuyor.</p>
                    <Link href="/">
                      <Button className="bg-brand-purple hover:bg-brand-700 text-white">Randevu Al</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="past" className="mt-6">
              {pastAppointments.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {pastAppointments.map((appointment) => (
                    <Card key={appointment.id} className="overflow-hidden border-gray-100 shadow-sm card-hover">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 border-b p-4">
                          <div className="relative h-16 w-16 overflow-hidden rounded-md">
                            <Image
                              src={appointment.image || "/placeholder.svg"}
                              alt={appointment.salon}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">{appointment.salon}</h3>
                            <p className="text-sm text-gray-800">{appointment.service}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="mb-4 space-y-2">
                            <div className="flex items-center gap-2 text-gray-800">
                              <Calendar className="h-4 w-4 text-brand-purple" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-800">
                              <Clock className="h-4 w-4 text-brand-purple" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                          {appointment.reviewed ? (
                            <div className="flex items-center gap-2 text-green-600">
                              <Check className="h-4 w-4" />
                              <span>Değerlendirme Yapıldı</span>
                            </div>
                          ) : (
                            <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white">
                              Değerlendirme Yap
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Clock className="mb-2 h-12 w-12 text-brand-300" />
                    <h3 className="mb-1 text-lg font-medium text-gray-800">Geçmiş Randevunuz Yok</h3>
                    <p className="mb-4 text-center text-gray-800">Henüz tamamlanmış bir randevunuz bulunmuyor.</p>
                    <Link href="/">
                      <Button className="bg-brand-purple hover:bg-brand-700 text-white">Randevu Al</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          <section className="mb-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Önerilen Salonlar</h2>
              <Button variant="outline" className="border-gray-200 text-gray-800 hover:bg-gray-50">
                Tümünü Gör
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((salon) => (
                <Link href={`/salon/${salon}`} key={salon} className="group">
                  <Card className="overflow-hidden border-gray-100 shadow-sm card-hover">
                    <CardContent className="p-0">
                      <div className="relative h-48 w-full">
                        <Image
                          src={`/placeholder.svg?height=300&width=500&text=Salon+${salon}`}
                          alt={`Salon ${salon}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 backdrop-blur-sm">
                          <Heart className="h-4 w-4 text-brand-purple" />
                        </div>

                        {salon % 2 === 0 && (
                          <div className="absolute left-3 top-3 rounded-md bg-brand-purple px-2 py-1 text-xs font-medium text-white">
                            Yeni
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800 group-hover:text-brand-purple">
                            {salon % 2 === 0 ? "Stil Kuaför" : "Modern Saç Tasarım"} {salon}
                          </h4>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium text-gray-800">4.{salon}</span>
                          </div>
                        </div>
                        <p className="mb-2 text-sm text-gray-800">
                          <MapPin className="mr-1 inline-block h-3 w-3" /> Kadıköy, İstanbul
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-800">Saç Kesimi</span>
                          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-800">Fön</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-100 p-4">
                        <div className="text-sm text-gray-800">
                          <Clock className="mr-1 inline-block h-3 w-3" /> 09:00 - 20:00
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-brand-purple hover:bg-gray-50 hover:text-brand-700"
                        >
                          Detaylar <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
