"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Calendar, MapPin, PieChart, User, Users, Search } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboardPage() {
  // Gerçek uygulamada bu veriler API'den gelecek
  const stats = {
    totalUsers: 1245,
    totalSalons: 87,
    totalAppointments: 3567,
    activeUsers: 856,
  }

  const recentSalons = [
    { id: 1, name: "Güzellik Salonu 1", location: "Kadıköy, İstanbul", date: "10 Mayıs 2023", status: "active" },
    { id: 2, name: "Erkek Kuaförü 2", location: "Beşiktaş, İstanbul", date: "8 Mayıs 2023", status: "pending" },
    { id: 3, name: "Güzellik Merkezi 3", location: "Şişli, İstanbul", date: "5 Mayıs 2023", status: "active" },
    { id: 4, name: "Saç Tasarım 4", location: "Ataşehir, İstanbul", date: "1 Mayıs 2023", status: "active" },
  ]

  const recentUsers = [
    { id: 1, name: "Ayşe Yılmaz", email: "ayse@example.com", date: "12 Mayıs 2023", type: "customer" },
    { id: 2, name: "Mehmet Demir", email: "mehmet@example.com", date: "11 Mayıs 2023", type: "provider" },
    { id: 3, name: "Fatma Kaya", email: "fatma@example.com", date: "9 Mayıs 2023", type: "customer" },
    { id: 4, name: "Ali Yıldız", email: "ali@example.com", date: "7 Mayıs 2023", type: "customer" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="admin" />

      <div className="flex-1">
        <header className="border-b bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Admin Paneli</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-gray-200">
                  <AvatarImage src="/placeholder.svg?height=100&width=100&text=Admin" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className="font-medium">Admin</span>
              </div>
              <Button variant="outline" size="sm" className="border-gray-200 text-gray-800 hover:bg-gray-50">
                Çıkış Yap
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-gray-100 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Toplam Kullanıcılar</CardTitle>
                <Users className="h-5 w-5 text-brand-purple" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.totalUsers}</div>
                <p className="text-xs text-green-600">
                  <span className="font-medium">+12%</span> bu ay
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-100 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Toplam Salonlar</CardTitle>
                <MapPin className="h-5 w-5 text-brand-purple" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.totalSalons}</div>
                <p className="text-xs text-green-600">
                  <span className="font-medium">+5%</span> bu ay
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-100 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Toplam Randevular</CardTitle>
                <Calendar className="h-5 w-5 text-brand-purple" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.totalAppointments}</div>
                <p className="text-xs text-green-600">
                  <span className="font-medium">+18%</span> bu ay
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-100 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Aktif Kullanıcılar</CardTitle>
                <User className="h-5 w-5 text-brand-purple" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.activeUsers}</div>
                <p className="text-xs text-green-600">
                  <span className="font-medium">+8%</span> bu ay
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8 grid gap-8 lg:grid-cols-2">
            <Card className="border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>Kullanıcı İstatistikleri</CardTitle>
                <CardDescription>Son 30 gün</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-80 w-full">
                  <div className="flex h-full items-center justify-center">
                    <BarChart className="h-16 w-16 text-brand-300" />
                    <p className="ml-4 text-gray-800">Grafik burada görüntülenecek</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>Randevu Dağılımı</CardTitle>
                <CardDescription>Hizmet türüne göre</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-80 w-full">
                  <div className="flex h-full items-center justify-center">
                    <PieChart className="h-16 w-16 text-brand-300" />
                    <p className="ml-4 text-gray-800">Grafik burada görüntülenecek</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Son Eklenen Salonlar</h2>
                <Button variant="outline" className="border-gray-200 text-brand-purple hover:bg-gray-50">
                  Tüm Salonlar
                </Button>
              </div>
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="px-4 py-3 text-left font-medium text-gray-800">Salon Adı</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-800">Konum</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-800">Tarih</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-800">Durum</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentSalons.map((salon) => (
                          <tr key={salon.id} className="border-b border-gray-100">
                            <td className="px-4 py-3 font-medium text-gray-800">{salon.name}</td>
                            <td className="px-4 py-3 text-gray-800">{salon.location}</td>
                            <td className="px-4 py-3 text-gray-800">{salon.date}</td>
                            <td className="px-4 py-3">
                              <Badge
                                variant="outline"
                                className={`${
                                  salon.status === "active"
                                    ? "border-green-200 bg-green-100 text-green-800"
                                    : "border-yellow-200 bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {salon.status === "active" ? "Aktif" : "Onay Bekliyor"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Son Kayıt Olan Kullanıcılar</h2>
                <Button variant="outline" className="border-gray-200 text-brand-purple hover:bg-gray-50">
                  Tüm Kullanıcılar
                </Button>
              </div>
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="px-4 py-3 text-left font-medium text-gray-800">Kullanıcı</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-800">E-posta</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-800">Tarih</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-800">Tip</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="border-b border-gray-100">
                            <td className="px-4 py-3 font-medium text-gray-800">{user.name}</td>
                            <td className="px-4 py-3 text-gray-800">{user.email}</td>
                            <td className="px-4 py-3 text-gray-800">{user.date}</td>
                            <td className="px-4 py-3">
                              <Badge
                                variant="outline"
                                className={`${
                                  user.type === "customer"
                                    ? "border-blue-200 bg-blue-100 text-blue-800"
                                    : "border-purple-200 bg-purple-100 text-purple-800"
                                }`}
                              >
                                {user.type === "customer" ? "Müşteri" : "Kuaför"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Hızlı İşlemler</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="mb-4 h-12 w-12 text-brand-purple" />
                  <h3 className="mb-2 text-lg font-medium text-gray-800">Kullanıcı Ekle</h3>
                  <p className="mb-4 text-center text-gray-800">Yeni bir müşteri veya kuaför hesabı oluşturun.</p>
                  <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white">Kullanıcı Ekle</Button>
                </CardContent>
              </Card>
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <MapPin className="mb-4 h-12 w-12 text-brand-purple" />
                  <h3 className="mb-2 text-lg font-medium text-gray-800">Salon Ekle</h3>
                  <p className="mb-4 text-center text-gray-800">Yeni bir kuaför salonu ekleyin ve yönetin.</p>
                  <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white">Salon Ekle</Button>
                </CardContent>
              </Card>
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Search className="mb-4 h-12 w-12 text-brand-purple" />
                  <h3 className="mb-2 text-lg font-medium text-gray-800">Gelişmiş Arama</h3>
                  <p className="mb-4 text-center text-gray-800">
                    Kullanıcılar, salonlar ve randevular arasında arama yapın.
                  </p>
                  <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white">Aramaya Git</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle>Sistem Durumu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">Sunucu Durumu</span>
                  <Badge variant="outline" className="border-green-200 bg-green-100 text-green-800">
                    Çalışıyor
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">Veritabanı Durumu</span>
                  <Badge variant="outline" className="border-green-200 bg-green-100 text-green-800">
                    Çalışıyor
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">API Durumu</span>
                  <Badge variant="outline" className="border-green-200 bg-green-100 text-green-800">
                    Çalışıyor
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">Son Yedekleme</span>
                  <span className="text-gray-800">15 Mayıs 2023, 03:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">Son Güncelleme</span>
                  <span className="text-gray-800">10 Mayıs 2023, 15:30</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
