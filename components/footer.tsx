import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Scissors, Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronRight, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-brand-purple to-purple-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-bold mb-2">Fırsatları Kaçırmayın</h3>
              <p className="text-white/80">Kampanyalar, indirimler ve özel teklifler için bültenimize abone olun.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto max-w-md">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-white/60 focus-visible:ring-brand-300 w-full"
                />
              </div>
              <Button className="bg-white text-brand-purple hover:bg-white/90 transition-colors">
                Abone Ol
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="rounded-full bg-white p-2">
                <Scissors size={18} className="text-brand-purple" />
              </div>
              <h2 className="text-xl font-bold text-white">Föndevu</h2>
            </div>
            <p className="text-white/80 mb-6">
              Föndevu, kuaför ve güzellik salonu randevularınızı kolayca yönetmenizi sağlayan modern bir platformdur.
              Hızlı, kolay ve güvenilir randevu sistemi ile zamanınızı değerli kılıyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hızlı Erişim</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="mr-2 h-3.5 w-3.5" />
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="mr-2 h-3.5 w-3.5" />
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hizmetlerimiz</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  href="/hizmetler/sac-kesimi"
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  <ChevronRight className="mr-2 h-3.5 w-3.5" />
                  Saç Kesimi
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/sac-boyama"
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  <ChevronRight className="mr-2 h-3.5 w-3.5" />
                  Saç Boyama
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/fon" className="hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="mr-2 h-3.5 w-3.5" />
                  Fön ve Şekillendirme
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/manikur" className="hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="mr-2 h-3.5 w-3.5" />
                  Manikür & Pedikür
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/makyaj" className="hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="mr-2 h-3.5 w-3.5" />
                  Makyaj
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">İletişim</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-300 flex-shrink-0 mt-0.5" />
                <span>
                  Caferağa Mah. Moda Cad. No:123
                  <br />
                  Kadıköy, İstanbul
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand-300 flex-shrink-0" />
                <span>+90 212 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-brand-300 flex-shrink-0" />
                <span>info@fondevu.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/iletisim">
                <Button className="bg-white/10 hover:bg-white/20 text-white">
                  Bize Ulaşın
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">&copy; {currentYear} Föndevu. Tüm hakları saklıdır.</p>
            <div className="flex space-x-6 text-sm text-white/70">
              <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/cerezler" className="hover:text-white transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
