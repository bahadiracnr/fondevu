"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  // State for form inputs
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Form submission handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Burada giriş işlemi yapılacak
    console.log("Giriş yapılıyor:", email, password)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with consistent branding */}
      <header className="container mx-auto p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-brand-purple p-2 text-white">
            <Scissors size={20} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Föndevu</h1>
        </Link>
      </header>

      <main className="container mx-auto flex flex-col items-center justify-center px-4 py-8">
        {/* Back to home link */}
        <Link href="/" className="mb-6 flex items-center text-brand-purple hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Ana Sayfaya Dön
        </Link>

        <div className="w-full max-w-md">
          {/* User type tabs */}
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

            {/* Customer login form */}
            <TabsContent value="customer">
              <Card>
                <CardHeader>
                  <CardTitle>Müşteri Girişi</CardTitle>
                  <CardDescription>Randevu almak için hesabınıza giriş yapın</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="grid gap-4">
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
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Şifre</Label>
                          <Link href="/sifremi-unuttum" className="text-xs text-brand-purple hover:underline">
                            Şifremi Unuttum
                          </Link>
                        </div>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-700">
                        Giriş Yap
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-4">
                  <div className="text-center text-sm text-gray-800">
                    Hesabınız yok mu?{" "}
                    <Link href="/kayit" className="text-brand-purple hover:underline">
                      Hemen Kayıt Olun
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Provider login form */}
            <TabsContent value="provider">
              <Card>
                <CardHeader>
                  <CardTitle>Kuaför Girişi</CardTitle>
                  <CardDescription>Salonunuzu yönetmek için giriş yapın</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="provider-email">E-posta</Label>
                        <Input id="provider-email" type="email" placeholder="salon@mail.com" required />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="provider-password">Şifre</Label>
                          <Link href="/sifremi-unuttum" className="text-xs text-brand-purple hover:underline">
                            Şifremi Unuttum
                          </Link>
                        </div>
                        <Input id="provider-password" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-700">
                        Giriş Yap
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-4">
                  <div className="text-center text-sm text-gray-800">
                    Salonunuzu eklemek mi istiyorsunuz?{" "}
                    <Link href="/kayit" className="text-brand-purple hover:underline">
                      Salon Kaydı
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Admin login form */}
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Girişi</CardTitle>
                  <CardDescription>Sistemi yönetmek için giriş yapın</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="admin-email">E-posta</Label>
                        <Input id="admin-email" type="email" placeholder="admin@fondevu.com" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="admin-password">Şifre</Label>
                        <Input id="admin-password" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-700">
                        Giriş Yap
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
