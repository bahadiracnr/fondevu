"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Scissors, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleRegister = (e: React.FormEvent, type: string) => {
    e.preventDefault()
    // Burada kayıt işlemi yapılacak
    console.log(`${type} kaydı yapılıyor:`, { email, password, name, phone, acceptTerms })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="container mx-auto p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-brand-purple p-2 text-white">
            <Scissors size={20} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Föndevu</h1>
        </Link>
      </header>

      <main className="container mx-auto flex flex-col items-center justify-center px-4 py-8">
        <Link href="/" className="mb-6 flex items-center text-brand-purple hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Ana Sayfaya Dön
        </Link>

        <div className="w-full max-w-md">
          <Tabs defaultValue="customer" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="customer"
                className="data-[state=active]:bg-brand-purple data-[state=active]:text-white"
              >
                Müşteri
              </TabsTrigger>
              <TabsTrigger
                value="provider"
                className="data-[state=active]:bg-brand-purple data-[state=active]:text-white"
              >
                Kuaför
              </TabsTrigger>
              <TabsTrigger value="admin" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white">
                Admin
              </TabsTrigger>
            </TabsList>

            <TabsContent value="customer">
              <Card>
                <CardHeader>
                  <CardTitle>Müşteri Kaydı</CardTitle>
                  <CardDescription>Randevu almak için hesap oluşturun</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleRegister(e, "Müşteri")}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Ad Soyad</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Ad Soyad"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">E-posta</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ornek@mail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="05XX XXX XX XX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password">Şifre</Label>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirmPassword">Şifre Tekrar</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={acceptTerms}
                          onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          <span className="text-gray-800">
                            <Link href="/kullanim-kosullari" className="text-brand-purple hover:underline">
                              Kullanım Koşulları
                            </Link>
                            'nı ve{" "}
                            <Link href="/gizlilik-politikasi" className="text-brand-purple hover:underline">
                              Gizlilik Politikası
                            </Link>
                            'nı kabul ediyorum
                          </span>
                        </label>
                      </div>
                      <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-700">
                        Kayıt Ol
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-4">
                  <div className="text-center text-sm text-gray-800">
                    Zaten hesabınız var mı?{" "}
                    <Link href="/giris" className="text-brand-purple hover:underline">
                      Giriş Yapın
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="provider">
              <Card>
                <CardHeader>
                  <CardTitle>Kuaför Kaydı</CardTitle>
                  <CardDescription>Salonunuzu yönetmek için hesap oluşturun</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleRegister(e, "Kuaför")}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="salon-name">Salon Adı</Label>
                        <Input id="salon-name" type="text" placeholder="Salon Adı" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="provider-name">Yetkili Adı Soyadı</Label>
                        <Input id="provider-name" type="text" placeholder="Ad Soyad" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="provider-email">E-posta</Label>
                        <Input id="provider-email" type="email" placeholder="salon@mail.com" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="provider-phone">Telefon</Label>
                        <Input id="provider-phone" type="tel" placeholder="05XX XXX XX XX" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="provider-password">Şifre</Label>
                        <Input id="provider-password" type="password" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="provider-confirm-password">Şifre Tekrar</Label>
                        <Input id="provider-confirm-password" type="password" required />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="provider-terms" required />
                        <label
                          htmlFor="provider-terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          <span className="text-gray-800">
                            <Link href="/kullanim-kosullari" className="text-brand-purple hover:underline">
                              Kullanım Koşulları
                            </Link>
                            'nı ve{" "}
                            <Link href="/gizlilik-politikasi" className="text-brand-purple hover:underline">
                              Gizlilik Politikası
                            </Link>
                            'nı kabul ediyorum
                          </span>
                        </label>
                      </div>
                      <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-700">
                        Kayıt Ol
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-4">
                  <div className="text-center text-sm text-gray-800">
                    Zaten hesabınız var mı?{" "}
                    <Link href="/giris" className="text-brand-purple hover:underline">
                      Giriş Yapın
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Kaydı</CardTitle>
                  <CardDescription>Yönetici hesabı oluşturun</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleRegister(e, "Admin")}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="admin-name">Ad Soyad</Label>
                        <Input id="admin-name" type="text" placeholder="Ad Soyad" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="admin-email">E-posta</Label>
                        <Input id="admin-email" type="email" placeholder="admin@fondevu.com" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="admin-password">Şifre</Label>
                        <Input id="admin-password" type="password" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="admin-confirm-password">Şifre Tekrar</Label>
                        <Input id="admin-confirm-password" type="password" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="admin-key">Admin Erişim Kodu</Label>
                        <Input id="admin-key" type="text" required />
                      </div>
                      <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-700">
                        Kayıt Ol
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
