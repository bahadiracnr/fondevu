"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Lock, Bell, CreditCard, LogOut, Camera, MapPin, Mail, Phone, Calendar, Award, Heart } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import FavoriteSalons from "@/components/favorite-salons"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ProfilePage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("profile")

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <div className="flex-1">
        {/* Enhanced header with user info */}
        <header className="border-b bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-brand-100 shadow-sm">
                <AvatarImage src="/placeholder.svg?height=100&width=100&text=AY" alt="Profil" />
                <AvatarFallback>AY</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Profil Ayarları</h1>
                <p className="text-sm text-gray-600">Hesap bilgilerinizi yönetin ve güncelleyin</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-brand-50 text-brand-purple border-brand-200 gap-1">
                <Award className="h-3 w-3" /> Premium Üye
              </Badge>
              <Button variant="outline" size="sm" className="border-gray-200 text-gray-800 hover:bg-gray-50 gap-2">
                <LogOut className="h-4 w-4" />
                Çıkış Yap
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex w-full justify-start bg-white border border-gray-100 p-1 rounded-lg shadow-sm">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-brand-purple data-[state=active]:text-white gap-2"
                >
                  <User className="h-4 w-4" /> Profil
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-brand-purple data-[state=active]:text-white gap-2"
                >
                  <Lock className="h-4 w-4" /> Güvenlik
                </TabsTrigger>
                <TabsTrigger
                  value="favorites"
                  className="data-[state=active]:bg-brand-purple data-[state=active]:text-white gap-2"
                >
                  <Heart className="h-4 w-4" /> Favoriler
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-brand-purple data-[state=active]:text-white gap-2"
                >
                  <Bell className="h-4 w-4" /> Bildirimler
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="data-[state=active]:bg-brand-purple data-[state=active]:text-white gap-2"
                >
                  <CreditCard className="h-4 w-4" /> Ödeme
                </TabsTrigger>
                <TabsTrigger
                  value="appointments"
                  className="data-[state=active]:bg-brand-purple data-[state=active]:text-white gap-2"
                >
                  <Calendar className="h-4 w-4" /> Randevular
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="profile" className="mt-0">
              <motion.div className="grid gap-8 md:grid-cols-3" initial="hidden" animate="visible" variants={fadeIn}>
                {/* Profile photo card */}
                <Card className="border-gray-100 shadow-sm md:col-span-1">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Profil Fotoğrafı</CardTitle>
                    <CardDescription>Görünürlüğünüzü artırın</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center space-y-6 pb-6">
                    <div className="relative">
                      <Avatar className="h-32 w-32 border-4 border-brand-100">
                        <AvatarImage src="/placeholder.svg?height=200&width=200&text=AY" alt="Profil" />
                        <AvatarFallback className="text-3xl">AY</AvatarFallback>
                      </Avatar>
                      <button className="absolute bottom-0 right-0 rounded-full bg-brand-purple p-2 text-white shadow-md hover:bg-brand-700 transition-colors">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-gray-800">Ahmet Yılmaz</h3>
                      <p className="text-sm text-gray-600">Üyelik: 15 Ocak 2023</p>
                    </div>
                    <div className="flex w-full gap-2">
                      <Button variant="outline" className="flex-1 border-gray-200 text-gray-800 hover:bg-gray-50">
                        Kaldır
                      </Button>
                      <Button className="flex-1 bg-brand-purple hover:bg-brand-700 text-white">Değiştir</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal information card */}
                <Card className="border-gray-100 shadow-sm md:col-span-2">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Kişisel Bilgiler</CardTitle>
                    <CardDescription>Profil bilgilerinizi güncelleyin</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <form className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Ad</Label>
                          <Input
                            id="firstName"
                            defaultValue="Ahmet"
                            className="border-gray-200 focus-visible:ring-brand-purple"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Soyad</Label>
                          <Input
                            id="lastName"
                            defaultValue="Yılmaz"
                            className="border-gray-200 focus-visible:ring-brand-purple"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2">
                            E-posta
                            <Badge className="ml-2 bg-brand-50 text-brand-purple border-brand-200 text-xs">
                              Doğrulanmış
                            </Badge>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              defaultValue="ahmet@example.com"
                              className="border-gray-200 pl-10 focus-visible:ring-brand-purple"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              id="phone"
                              type="tel"
                              defaultValue="0532 123 45 67"
                              className="border-gray-200 pl-10 focus-visible:ring-brand-purple"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Hakkımda</Label>
                        <Textarea
                          id="bio"
                          placeholder="Kendiniz hakkında kısa bir bilgi..."
                          className="min-h-[100px] border-gray-200 focus-visible:ring-brand-purple"
                        />
                      </div>

                      <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white">
                        Değişiklikleri Kaydet
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Address card */}
                <Card className="border-gray-100 shadow-sm md:col-span-3">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Adres Bilgileri</CardTitle>
                    <CardDescription>Adres bilgilerinizi güncelleyin</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="address">Adres</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Textarea
                            id="address"
                            placeholder="Adresiniz..."
                            className="min-h-[100px] border-gray-200 pl-10 focus-visible:ring-brand-purple"
                            defaultValue="Caferağa Mah. Moda Cad. No:123 Daire:5"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="city">İlçe</Label>
                          <Input
                            id="city"
                            defaultValue="Kadıköy"
                            className="border-gray-200 focus-visible:ring-brand-purple"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">İl</Label>
                          <Input
                            id="state"
                            defaultValue="İstanbul"
                            className="border-gray-200 focus-visible:ring-brand-purple"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Posta Kodu</Label>
                          <Input
                            id="postalCode"
                            defaultValue="34710"
                            className="border-gray-200 focus-visible:ring-brand-purple"
                          />
                        </div>
                      </div>

                      <Button className="w-full bg-brand-purple hover:bg-brand-700 text-white">
                        Değişiklikleri Kaydet
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Favorites Tab */}
            <TabsContent value="favorites" className="mt-0">
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <FavoriteSalons />
              </motion.div>
            </TabsContent>

            {/* Other tabs remain the same */}
            <TabsContent value="security" className="mt-0">
              {/* Security content */}
            </TabsContent>

            <TabsContent value="notifications" className="mt-0">
              {/* Notifications content */}
            </TabsContent>

            <TabsContent value="payment" className="mt-0">
              {/* Payment content */}
            </TabsContent>

            <TabsContent value="appointments" className="mt-0">
              {/* Appointments content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
