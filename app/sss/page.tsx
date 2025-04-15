import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Scissors, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Genel Sorular",
      questions: [
        {
          question: "Föndevu nedir?",
          answer:
            "Föndevu, kuaför randevularını kolaylaştıran bir online platformdur. Kullanıcılar, konumlarına göre kuaförleri keşfedebilir, değerlendirmeleri okuyabilir ve anında randevu alabilirler.",
        },
        {
          question: "Föndevu'yu kullanmak ücretli mi?",
          answer:
            "Hayır, Föndevu'yu kullanmak müşteriler için tamamen ücretsizdir. Kuaförler için ise farklı abonelik paketlerimiz bulunmaktadır.",
        },
        {
          question: "Föndevu'yu nasıl kullanabilirim?",
          answer:
            "Föndevu'yu kullanmak için öncelikle kayıt olmanız gerekiyor. Kayıt olduktan sonra konumunuzu belirterek size en yakın kuaförleri keşfedebilir ve randevu alabilirsiniz.",
        },
      ],
    },
    {
      title: "Müşteri Soruları",
      questions: [
        {
          question: "Randevumu nasıl iptal edebilirim?",
          answer:
            "Randevunuzu iptal etmek için hesabınıza giriş yapın, 'Randevularım' bölümünden ilgili randevuyu seçin ve 'İptal Et' butonuna tıklayın. Randevunuzu, kuaförün belirlediği iptal politikasına göre belirli bir süre öncesine kadar iptal edebilirsiniz.",
        },
        {
          question: "Randevumu değiştirebilir miyim?",
          answer:
            "Evet, randevunuzu değiştirebilirsiniz. Hesabınıza giriş yapın, 'Randevularım' bölümünden ilgili randevuyu seçin ve 'Düzenle' butonuna tıklayın. Kuaförün müsait olduğu başka bir zaman dilimini seçebilirsiniz.",
        },
        {
          question: "Kuaför hakkında nasıl değerlendirme yapabilirim?",
          answer:
            "Randevunuz tamamlandıktan sonra, 'Randevularım' bölümünden ilgili randevuyu seçin ve 'Değerlendirme Yap' butonuna tıklayın. Kuaförü puanlayabilir ve deneyiminiz hakkında yorum yapabilirsiniz.",
        },
      ],
    },
    {
      title: "Kuaför Soruları",
      questions: [
        {
          question: "Salonumu Föndevu'ya nasıl ekleyebilirim?",
          answer:
            "Salonunuzu eklemek için 'Kuaför Kaydı' bölümünden kayıt olmanız gerekiyor. Kayıt olduktan sonra salon bilgilerinizi, hizmetlerinizi ve çalışma saatlerinizi ekleyebilirsiniz.",
        },
        {
          question: "Föndevu'nun komisyon oranı nedir?",
          answer:
            "Föndevu, seçtiğiniz abonelik paketine göre değişen oranlarda komisyon almaktadır. Detaylı bilgi için 'Kuaför Paketleri' sayfamızı ziyaret edebilirsiniz.",
        },
        {
          question: "Çalışma saatlerimi nasıl düzenleyebilirim?",
          answer:
            "Kuaför panelinizde 'Ayarlar' bölümünden çalışma saatlerinizi düzenleyebilirsiniz. Günlük çalışma saatlerinizi, mola zamanlarınızı ve tatil günlerinizi belirleyebilirsiniz.",
        },
      ],
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
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">Sık Sorulan Sorular</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-800">
              Föndevu hakkında merak ettiğiniz tüm soruların cevaplarını burada bulabilirsiniz.
            </p>
            <div className="mx-auto max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-400" />
                <Input
                  type="text"
                  placeholder="Soru ara..."
                  className="pl-10 border-gray-200 focus-visible:ring-brand-purple"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left text-gray-800 hover:text-brand-purple">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-800">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Sorunuzu Bulamadınız mı?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-800">
              Aradığınız cevabı bulamadıysanız, bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
            </p>
            <Link href="/iletisim">
              <Button className="bg-brand-purple text-white hover:bg-brand-700">Bize Ulaşın</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
