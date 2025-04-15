import { Button } from "@/components/ui/button"
import { Scissors, Search, Calendar, Check, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Kuaför Bul",
      description:
        "Konumunuza göre size en yakın kuaförleri keşfedin, değerlendirmeleri okuyun ve size en uygun salonu seçin.",
      icon: Search,
      image: "/placeholder.svg?height=400&width=600&text=Kuaför+Arama",
    },
    {
      title: "Randevu Al",
      description:
        "Size uygun tarih ve saati seçin, istediğiniz hizmeti ve personeli belirleyin ve randevunuzu oluşturun.",
      icon: Calendar,
      image: "/placeholder.svg?height=400&width=600&text=Randevu+Alma",
    },
    {
      title: "Hizmet Al",
      description: "Randevu saatinizde kuaföre gidin ve profesyonel hizmetin keyfini çıkarın.",
      icon: Check,
      image: "/placeholder.svg?height=400&width=600&text=Hizmet+Alma",
    },
    {
      title: "Değerlendirme Yap",
      description: "Hizmet sonrası deneyiminizi paylaşın ve diğer kullanıcılara yardımcı olun.",
      icon: Star,
      image: "/placeholder.svg?height=400&width=600&text=Değerlendirme",
    },
  ]

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
              <Button variant="ghost" className="text-gray-800 hover:text-gray-800 hover:bg-gray-50">
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
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">Nasıl Çalışır?</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-800">
              Föndevu ile kuaför randevusu almanın ne kadar kolay olduğunu keşfedin. Sadece birkaç adımda istediğiniz
              kuaförden randevu alabilirsiniz.
            </p>
            <Link href="/kayit">
              <Button size="lg" className="bg-brand-purple text-white hover:bg-brand-700">
                Hemen Başla
              </Button>
            </Link>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`mb-16 grid gap-8 ${index % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2 md:flex-row-reverse"}`}
              >
                <div className={`flex flex-col justify-center ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-brand-purple">
                    <step.icon size={32} />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-gray-800">
                    <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple text-sm text-white">
                      {index + 1}
                    </span>
                    {step.title}
                  </h2>
                  <p className="mb-6 text-lg text-gray-800">{step.description}</p>
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">Föndevu'nun Avantajları</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="mb-4 text-xl font-bold text-gray-800">Müşteriler İçin</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Kolay ve hızlı randevu alma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Değerlendirmelere göre kuaför seçimi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Randevu hatırlatmaları</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Kolay iptal ve değişiklik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Favori kuaförleri kaydetme</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="mb-4 text-xl font-bold text-gray-800">Kuaförler İçin</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Daha fazla müşteriye ulaşma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Randevu yönetimini kolaylaştırma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Müşteri sadakatini artırma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Detaylı raporlar ve analizler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Salon profilini özelleştirme</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="mb-4 text-xl font-bold text-gray-800">Herkes İçin</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Kullanımı kolay arayüz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">7/24 erişilebilirlik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Güvenli ödeme seçenekleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Müşteri desteği</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-purple" />
                    <span className="text-gray-800">Sürekli güncellenen özellikler</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Hemen Başlayın</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-800">
              Föndevu ile kuaför randevusu almanın kolaylığını keşfedin. Ücretsiz kayıt olun ve hemen kullanmaya
              başlayın.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/kayit">
                <Button size="lg" className="bg-brand-purple text-white hover:bg-brand-700">
                  Ücretsiz Kayıt Ol
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/salonlar">
                <Button size="lg" variant="outline" className="border-gray-200 text-brand-purple hover:bg-gray-50">
                  Kuaförleri Keşfet
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
