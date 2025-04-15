import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Scissors, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-full bg-brand-purple p-2 text-white">
              <Scissors size={20} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Föndevu</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/giris">
              <Button variant="ghost" className="text-gray-800 hover:text-gray-800 hover:bg-brand-50">
                Giriş Yap
              </Button>
            </Link>
            <Link href="/kayit">
              <Button className="bg-brand-purple text-white hover:bg-brand-700">Kayıt Ol</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">İletişim</h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-800">
              Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz. Size en kısa
              sürede dönüş yapacağız.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-brand-100">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Bize Ulaşın</h2>
                <form>
                  <div className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Ad Soyad</Label>
                      <Input id="name" type="text" placeholder="Ad Soyad" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">E-posta</Label>
                      <Input id="email" type="email" placeholder="ornek@mail.com" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Konu</Label>
                      <Input id="subject" type="text" placeholder="Mesajınızın konusu" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea id="message" placeholder="Mesajınızı buraya yazın..." rows={5} required />
                    </div>
                    <Button type="submit" className="bg-brand-purple text-white hover:bg-brand-700">
                      Gönder
                    </Button>
                  </div>
                </form>
              </div>

              <div>
                <div className="mb-8 rounded-lg bg-white p-6 shadow-sm border border-brand-100">
                  <h2 className="mb-6 text-2xl font-bold text-gray-800">İletişim Bilgileri</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-brand-purple">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">E-posta</h3>
                        <p className="text-gray-800">info@fondevu.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-brand-purple">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Telefon</h3>
                        <p className="text-gray-800">+90 212 123 45 67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-brand-purple">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Adres</h3>
                        <p className="text-gray-800">
                          Caferağa Mah. Moda Cad. No:123
                          <br />
                          Kadıköy, İstanbul
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-sm border border-brand-100">
                  <h2 className="mb-6 text-2xl font-bold text-gray-800">Çalışma Saatleri</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">Pazartesi - Cuma</span>
                      <span className="text-gray-800">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">Cumartesi</span>
                      <span className="text-gray-800">10:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">Pazar</span>
                      <span className="text-gray-800">Kapalı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="rounded-lg overflow-hidden h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-800">Harita burada görüntülenecek</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Sık Sorulan Sorular</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-800">
              Sorularınıza hızlı yanıtlar bulamıyor musunuz? SSS sayfamızı ziyaret edin veya doğrudan bizimle iletişime
              geçin.
            </p>
            <Link href="/sss">
              <Button className="bg-brand-purple text-white hover:bg-brand-700">SSS Sayfasına Git</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
