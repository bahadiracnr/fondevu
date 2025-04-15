"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Star } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import ProviderCalendar from "@/components/provider-calendar"

export default function ProviderDashboardPage() {
  // Gerçek uygulamada bu veriler API'den gelecek
  const upcomingAppointments = [
    {
      id: 1,
      customer: "Ayşe Yılmaz",
      service: "Saç Kesimi",
      date: "15 Mayıs 2023",
      time: "14:30",
      image: "/placeholder.svg?height=100&width=100&text=User+1",
    },
    {
      id: 2,
      customer: "Fatma Demir",
      service: "Saç Boyama",
      date: "15 Mayıs 2023",
      time: "16:00",
      image: "/placeholder.svg?height=100&width=100&text=User+2",
    },
    {
      id: 3,
      customer: "Zeynep Kaya",
      service: "Fön",
      date: "16 Mayıs 2023",
      time: "10:00",
      image: "/placeholder.svg?height=100&width=100&text=User+3",
    },
  ]

  const services = [
    { id: 1, name: "Saç Kesimi", price: "150₺", duration: "30 dk", active: true },
    { id: 2, name: "Saç Boyama", price: "350₺", duration: "120 dk", active: true },
    { id: 3, name: "Fön", price: "100₺", duration: "30 dk", active: true },
    { id: 4, name: "Saç Bakımı", price: "200₺", duration: "45 dk", active: false },
    { id: 5, name: "Manikür", price: "120₺", duration: "45 dk", active: true },
    { id: 6, name: "Pedikür", price: "150₺", duration: "60 dk", active: true },
  ]

  return (
    <div className="flex min-h-screen bg-brand-50">
      <DashboardSidebar userType="provider" />

      <div className="flex-1">
        <header className="border-b bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-brand-dark">Kuaför Paneli</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-brand-200">
                  <AvatarImage src="/placeholder.svg?height=100&width=100&text=SK" alt="Salon" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <span className="font-medium">Stil Kuaför</span>
              </div>
              <Button variant="outline" size="sm" className="border-brand-200 text-brand-dark hover:bg-brand-50">
                Çıkış Yap
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <div className="mb-8 grid gap-6 md:grid-cols-4">
            <Card className="border-brand-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Bugünkü Randevular</CardTitle>
                <CardDescription>15 Mayıs 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
              </CardContent>
            </Card>
            <Card className="border-brand-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Toplam Randevular</CardTitle>
                <CardDescription>Bu hafta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{upcomingAppointments.length}</div>
              </CardContent>
            </Card>
            <Card className="border-brand-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Aktif Hizmetler</CardTitle>
                <CardDescription>Toplam hizmet sayısı</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{services.filter((s) => s.active).length}</div>
              </CardContent>
            </Card>
            <Card className="border-brand-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Değerlendirmeler</CardTitle>
                <CardDescription>Ortalama puan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4.8</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-brand-dark">Yaklaşan Randevular</h2>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <Card key={appointment.id} className="border-brand-100 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-brand-200">
                          <AvatarImage src={appointment.image} alt={appointment.customer} />
                          <AvatarFallback>{appointment.customer.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-brand-dark">{appointment.customer}</h3>
                            <div className="flex items-center gap-2 text-brand-dark">
                              <Clock className="h-4 w-4 text-brand-navy" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-brand-dark">{appointment.service}</p>
                            <div className="flex items-center gap-2 text-brand-dark">
                              <Calendar className="h-4 w-4 text-brand-navy" />
                              <span>{appointment.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-brand-200 text-brand-dark hover:bg-brand-50"
                        >
                          İptal Et
                        </Button>
                        <Button size="sm" className="bg-brand-navy hover:bg-brand-700 text-white">
                          Düzenle
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <div className="text-center">
                  <Button variant="outline" className="border-brand-200 text-brand-navy hover:bg-brand-50">
                    Tüm Randevuları Görüntüle
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-brand-dark">Takvim</h2>
              <Card className="border-brand-100 shadow-sm">
                <CardContent className="p-4">
                  <ProviderCalendar />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-brand-dark">Hizmetleriniz</h2>
              <Button className="bg-brand-navy hover:bg-brand-700 text-white">Yeni Hizmet Ekle</Button>
            </div>

            <Card className="border-brand-100 shadow-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-brand-100">
                        <th className="px-4 py-3 text-left font-medium text-brand-dark">Hizmet Adı</th>
                        <th className="px-4 py-3 text-left font-medium text-brand-dark">Süre</th>
                        <th className="px-4 py-3 text-left font-medium text-brand-dark">Fiyat</th>
                        <th className="px-4 py-3 text-left font-medium text-brand-dark">Durum</th>
                        <th className="px-4 py-3 text-right font-medium text-brand-dark">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service) => (
                        <tr key={service.id} className="border-b border-brand-100">
                          <td className="px-4 py-3 text-brand-dark">{service.name}</td>
                          <td className="px-4 py-3 text-brand-dark">{service.duration}</td>
                          <td className="px-4 py-3 text-brand-dark">{service.price}</td>
                          <td className="px-4 py-3">
                            <Badge
                              variant="outline"
                              className={`${
                                service.active
                                  ? "border-green-200 bg-green-100 text-green-800"
                                  : "border-gray-200 bg-gray-100 text-gray-800"
                              }`}
                            >
                              {service.active ? "Aktif" : "Pasif"}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-brand-navy">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700"
                              >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-brand-100 shadow-sm">
              <CardHeader>
                <CardTitle>Son Değerlendirmeler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Ahmet Y.",
                      rating: 5,
                      comment: "Harika bir deneyimdi, çok memnun kaldım!",
                      date: "15.03.2023",
                    },
                    {
                      name: "Zeynep K.",
                      rating: 4,
                      comment: "Personel çok ilgiliydi, tekrar geleceğim.",
                      date: "02.04.2023",
                    },
                  ].map((review, index) => (
                    <div key={index} className="rounded-lg border border-brand-100 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="font-medium text-brand-dark">{review.name}</div>
                        <div className="text-sm text-brand-dark">{review.date}</div>
                      </div>
                      <div className="mb-2 flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-brand-dark">{review.comment}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full border-brand-200 text-brand-navy hover:bg-brand-50">
                    Tüm Değerlendirmeleri Görüntüle
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-100 shadow-sm">
              <CardHeader>
                <CardTitle>Performans İstatistikleri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-brand-dark">Toplam Randevu</span>
                    <span className="font-medium text-brand-dark">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-dark">Tamamlanan Randevu</span>
                    <span className="font-medium text-brand-dark">142</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-dark">İptal Edilen Randevu</span>
                    <span className="font-medium text-brand-dark">14</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-dark">Ortalama Değerlendirme</span>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-brand-dark">4.8</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-dark">Toplam Gelir</span>
                    <span className="font-medium text-brand-dark">12,450₺</span>
                  </div>
                  <Button className="w-full bg-brand-navy hover:bg-brand-700 text-white">
                    Detaylı Rapor Görüntüle
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
