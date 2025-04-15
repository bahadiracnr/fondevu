import { Button } from "@/components/ui/button"
import { Scissors, Users, Award, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function AboutPage() {
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
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">Hakkımızda</h1>
                <p className="mb-6 text-lg text-gray-800">
                  Föndevu, kuaför randevularını kolaylaştırmak ve herkesin kaliteli saç bakımına erişimini sağlamak
                  amacıyla 2023 yılında kurulmuştur.
                </p>
                <p className="mb-6 text-gray-800">
                  Misyonumuz, müşterilerin en iyi kuaförleri keşfetmelerini ve kolayca randevu almalarını sağlarken,
                  kuaförlerin de işlerini daha verimli yönetmelerine yardımcı olmaktır.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim">
                    <Button className="bg-brand-purple text-white hover:bg-brand-700">Bize Ulaşın</Button>
                  </Link>
                  <Link href="/nasil-calisir">
                    <Button variant="outline" className="border-gray-200 text-brand-purple hover:bg-gray-50">
                      Nasıl Çalışır?
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Föndevu+Ekibi"
                  alt="Föndevu Ekibi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">Değerlerimiz</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 text-center shadow-sm border border-gray-100">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-brand-purple">
                  <Users size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">Müşteri Odaklılık</h3>
                <p className="text-gray-800">
                  Her zaman müşterilerimizin ihtiyaçlarını ön planda tutarak, en iyi deneyimi sunmayı hedefliyoruz.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm border border-gray-100">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-brand-purple">
                  <Award size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">Kalite</h3>
                <p className="text-gray-800">
                  Platformumuzda sadece kaliteli hizmet veren kuaförleri listeleyerek, müşterilerimize en iyi
                  seçenekleri sunuyoruz.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm border border-gray-100">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-brand-purple">
                  <Clock size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">Verimlilik</h3>
                <p className="text-gray-800">
                  Hem müşteriler hem de kuaförler için zaman kazandıran, verimli bir randevu sistemi sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-brand-purple py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">1000+</div>
                <p>Aktif Kullanıcı</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">100+</div>
                <p>Kayıtlı Salon</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">5000+</div>
                <p>Tamamlanan Randevu</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">4.8</div>
                <p>Ortalama Değerlendirme</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">Ekibimiz</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  name: "Ahmet Yılmaz",
                  role: "Kurucu & CEO",
                  image: "/placeholder.svg?height=300&width=300&text=Ahmet",
                },
                { name: "Ayşe Demir", role: "Ürün Müdürü", image: "/placeholder.svg?height=300&width=300&text=Ayşe" },
                {
                  name: "Mehmet Kaya",
                  role: "Teknoloji Direktörü",
                  image: "/placeholder.svg?height=300&width=300&text=Mehmet",
                },
                {
                  name: "Zeynep Şahin",
                  role: "Pazarlama Müdürü",
                  image: "/placeholder.svg?height=300&width=300&text=Zeynep",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-800">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
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
                </Button>
              </Link>
              <Link href="/giris">
                <Button size="lg" variant="outline" className="border-gray-200 text-brand-purple hover:bg-gray-50">
                  Giriş Yap
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
