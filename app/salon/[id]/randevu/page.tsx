"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Check, ChevronLeft, Clock, MapPin, Scissors, CreditCard, CalendarClock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import AppointmentCalendar from "@/components/appointment-calendar"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function AppointmentPage({ params }: { params: { id: string } }) {
  const salonId = params.id

  // Gerçek uygulamada bu veriler API'den gelecek
  const salon = {
    id: salonId,
    name: `${Number(salonId) % 2 === 0 ? "Stil Kuaför" : "Modern Saç Tasarım"} ${salonId}`,
    address: "Caferağa Mah. Moda Cad. No:123, Kadıköy/İstanbul",
    services: [
      { id: 1, name: "Saç Kesimi", price: "150₺", duration: "30 dk" },
      { id: 2, name: "Saç Boyama", price: "350₺", duration: "120 dk" },
      { id: 3, name: "Fön", price: "100₺", duration: "30 dk" },
      { id: 4, name: "Saç Bakımı", price: "200₺", duration: "45 dk" },
      { id: 5, name: "Manikür", price: "120₺", duration: "45 dk" },
      { id: 6, name: "Pedikür", price: "150₺", duration: "60 dk" },
    ],
    staff: [
      { id: 1, name: "Ayşe Hanım", title: "Saç Stilisti", image: "/placeholder.svg?height=100&width=100&text=Ayşe" },
      { id: 2, name: "Fatma Hanım", title: "Renk Uzmanı", image: "/placeholder.svg?height=100&width=100&text=Fatma" },
      {
        id: 3,
        name: "Zeynep Hanım",
        title: "Manikür Uzmanı",
        image: "/placeholder.svg?height=100&width=100&text=Zeynep",
      },
    ],
  }

  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<number[]>([])
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const totalPrice = selectedServices.reduce((total, serviceId) => {
    const service = salon.services.find((s) => s.id === serviceId)
    return total + (service ? Number.parseInt(service.price) : 0)
  }, 0)

  const handleServiceToggle = (serviceId: number) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Burada randevu oluşturma işlemi yapılacak
    alert("Randevunuz başarıyla oluşturuldu!")
  }

  // Örnek zaman dilimleri
  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ]

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
        <div className="mb-8">
          <Link
            href={`/salon/${salonId}`}
            className="mb-4 inline-flex items-center text-gray-600 hover:text-brand-purple transition-colors"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            <span>Salon Sayfasına Dön</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{salon.name}</h1>
              <p className="text-gray-600">{salon.address}</p>
            </div>
            <Badge className="bg-brand-50 text-brand-purple border-brand-100 self-start md:self-auto">
              <Clock className="mr-1 h-3 w-3" /> Bugün Açık: 09:00 - 20:00
            </Badge>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="relative flex justify-between">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-200"></div>

            <div className="relative flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 1 ? "bg-brand-purple text-white" : "bg-gray-200 text-gray-500"
                } z-10`}
              >
                <CalendarClock className="h-5 w-5" />
              </div>
              <span className={`mt-2 text-sm ${step >= 1 ? "text-brand-purple font-medium" : "text-gray-500"}`}>
                Hizmet Seçimi
              </span>
            </div>

            <div className="relative flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 2 ? "bg-brand-purple text-white" : "bg-gray-200 text-gray-500"
                } z-10`}
              >
                <Calendar className="h-5 w-5" />
              </div>
              <span className={`mt-2 text-sm ${step >= 2 ? "text-brand-purple font-medium" : "text-gray-500"}`}>
                Tarih ve Saat
              </span>
            </div>

            <div className="relative flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 3 ? "bg-brand-purple text-white" : "bg-gray-200 text-gray-500"
                } z-10`}
              >
                <User className="h-5 w-5" />
              </div>
              <span className={`mt-2 text-sm ${step >= 3 ? "text-brand-purple font-medium" : "text-gray-500"}`}>
                Bilgiler
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            {step === 1 && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Card className="border-gray-100 shadow-sm bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle>Hizmet Seçin</CardTitle>
                    <CardDescription>Size uygun hizmetleri seçin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {salon.services.map((service) => (
                        <div
                          key={service.id}
                          className={`cursor-pointer rounded-lg border p-4 transition-all hover:border-brand-200 hover:shadow-sm ${
                            selectedServices.includes(service.id)
                              ? "border-brand-purple bg-brand-50"
                              : "border-gray-100"
                          }`}
                          onClick={() => handleServiceToggle(service.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-gray-800">{service.name}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Clock className="h-3 w-3 text-brand-purple" />
                                <span>{service.duration}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-gray-800">{service.price}</div>
                              <div
                                className={`flex h-5 w-5 items-center justify-center rounded-full ${
                                  selectedServices.includes(service.id)
                                    ? "bg-brand-purple text-white"
                                    : "border border-gray-300"
                                }`}
                              >
                                {selectedServices.includes(service.id) && <Check className="h-3 w-3" />}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h3 className="mb-4 text-lg font-medium text-gray-800">Personel Seçin (Opsiyonel)</h3>
                      <RadioGroup
                        value={selectedStaff?.toString() || ""}
                        onValueChange={(value) => setSelectedStaff(Number.parseInt(value))}
                      >
                        <div className="grid gap-4 sm:grid-cols-3">
                          {salon.staff.map((person) => (
                            <div
                              key={person.id}
                              className={`rounded-lg border p-4 transition-all hover:border-brand-200 hover:shadow-sm ${
                                selectedStaff === person.id ? "border-brand-purple bg-brand-50" : "border-gray-100"
                              }`}
                            >
                              <RadioGroupItem
                                value={person.id.toString()}
                                id={`staff-${person.id}`}
                                className="sr-only"
                              />
                              <Label
                                htmlFor={`staff-${person.id}`}
                                className="flex flex-col items-center gap-3 cursor-pointer"
                              >
                                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-sm">
                                  <Image
                                    src={person.image || "/placeholder.svg"}
                                    alt={person.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="text-center">
                                  <div className="font-medium text-gray-800">{person.name}</div>
                                  <div className="text-xs text-gray-500">{person.title}</div>
                                </div>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        className="bg-brand-purple text-white hover:bg-brand-700 shadow-sm"
                        disabled={selectedServices.length === 0}
                        onClick={() => setStep(2)}
                      >
                        Devam Et
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Card className="border-gray-100 shadow-sm bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle>Tarih ve Saat Seçin</CardTitle>
                    <CardDescription>Size uygun bir zaman seçin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-8">
                      <h3 className="mb-4 text-lg font-medium text-gray-800">Tarih</h3>
                      <AppointmentCalendar
                        salonId={salonId}
                        onSelectDate={(date) => setSelectedDate(date)}
                        selectedDate={selectedDate}
                      />
                    </div>

                    {selectedDate && (
                      <div className="mb-8">
                        <h3 className="mb-4 text-lg font-medium text-gray-800">Saat</h3>
                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                          {availableTimes.map((time) => (
                            <Button
                              key={time}
                              variant="outline"
                              className={`border-gray-200 hover:border-brand-purple hover:bg-brand-50 hover:text-brand-purple ${
                                selectedTime === time ? "border-brand-purple bg-brand-50 text-brand-purple" : ""
                              }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-8 flex justify-between">
                      <Button
                        variant="outline"
                        className="border-gray-200 text-brand-purple hover:bg-brand-50"
                        onClick={() => setStep(1)}
                      >
                        Geri
                      </Button>
                      <Button
                        className="bg-brand-purple text-white hover:bg-brand-700 shadow-sm"
                        disabled={!selectedDate || !selectedTime}
                        onClick={() => setStep(3)}
                      >
                        Devam Et
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Card className="border-gray-100 shadow-sm bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle>Kişisel Bilgiler</CardTitle>
                    <CardDescription>Randevu bilgilerinizi tamamlayın</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="grid gap-2">
                            <Label htmlFor="firstName">Ad</Label>
                            <Input
                              id="firstName"
                              className="border-gray-200 focus-visible:ring-brand-purple"
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="lastName">Soyad</Label>
                            <Input id="lastName" className="border-gray-200 focus-visible:ring-brand-purple" required />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="grid gap-2">
                            <Label htmlFor="email">E-posta</Label>
                            <Input
                              id="email"
                              type="email"
                              className="border-gray-200 focus-visible:ring-brand-purple"
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone">Telefon</Label>
                            <Input
                              id="phone"
                              type="tel"
                              className="border-gray-200 focus-visible:ring-brand-purple"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="notes">Notlar (Opsiyonel)</Label>
                          <Textarea
                            id="notes"
                            placeholder="Özel istekleriniz varsa belirtebilirsiniz"
                            className="min-h-[100px] border-gray-200 focus-visible:ring-brand-purple"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label>Ödeme Yöntemi</Label>
                          <RadioGroup defaultValue="location">
                            <div className="grid gap-3 sm:grid-cols-2">
                              <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:border-brand-200 hover:bg-brand-50">
                                <RadioGroupItem value="location" id="payment-location" />
                                <Label htmlFor="payment-location" className="flex items-center gap-2 cursor-pointer">
                                  <MapPin className="h-4 w-4 text-brand-purple" />
                                  <span>Yerinde Ödeme</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:border-brand-200 hover:bg-brand-50">
                                <RadioGroupItem value="card" id="payment-card" />
                                <Label htmlFor="payment-card" className="flex items-center gap-2 cursor-pointer">
                                  <CreditCard className="h-4 w-4 text-brand-purple" />
                                  <span>Kredi Kartı</span>
                                </Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="mt-8 flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            className="border-gray-200 text-brand-purple hover:bg-brand-50"
                            onClick={() => setStep(2)}
                          >
                            Geri
                          </Button>
                          <Button type="submit" className="bg-brand-purple text-white hover:bg-brand-700 shadow-sm">
                            Randevu Oluştur
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          <div>
            <Card className="border-gray-100 shadow-sm bg-white sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle>Randevu Özeti</CardTitle>
                <CardDescription>Seçilen hizmetler ve detaylar</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedServices.length > 0 ? (
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium text-gray-800">Seçilen Hizmetler</h4>
                      <ul className="space-y-2">
                        {selectedServices.map((serviceId) => {
                          const service = salon.services.find((s) => s.id === serviceId)
                          return service ? (
                            <li key={service.id} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-600">{service.name}</span>
                                <span className="text-xs text-gray-500">({service.duration})</span>
                              </div>
                              <span className="font-medium">{service.price}</span>
                            </li>
                          ) : null
                        })}
                      </ul>
                    </div>

                    {selectedStaff && (
                      <div>
                        <h4 className="mb-2 font-medium text-gray-800">Seçilen Personel</h4>
                        <div className="flex items-center gap-2">
                          <div className="relative h-8 w-8 overflow-hidden rounded-full">
                            <Image
                              src={salon.staff.find((s) => s.id === selectedStaff)?.image || ""}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-gray-600">{salon.staff.find((s) => s.id === selectedStaff)?.name}</span>
                        </div>
                      </div>
                    )}

                    {selectedDate && selectedTime && (
                      <div>
                        <h4 className="mb-2 font-medium text-gray-800">Tarih ve Saat</h4>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4 text-brand-purple" />
                          <span>
                            {selectedDate.toLocaleDateString("tr-TR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4 text-brand-purple" />
                          <span>{selectedTime}</span>
                        </div>
                      </div>
                    )}

                    <Separator />

                    <div className="flex items-center justify-between font-medium">
                      <span>Toplam</span>
                      <span className="text-lg text-brand-purple">{totalPrice}₺</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-6">
                    <CalendarClock className="mb-2 h-12 w-12 text-gray-300" />
                    <p className="text-center text-gray-500">Henüz bir hizmet seçilmedi</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
