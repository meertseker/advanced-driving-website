"use client";

import Image from "next/image";
import { useState } from "react";
import { trackFormComplete, trackFormError, trackPhoneCall } from "@/lib/analytics";
import { SITE_CONFIG } from "@/lib/config";

export default function Home() {
  const [formData, setFormData] = useState({
    motosiklet: "",
    ehliyet: "",
    kullanimSuresi: "",
    ad: "",
    telefon: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Form gönderimi burada yapılacak
      trackFormComplete("basvuru_formu");
      alert("Başvurunuz alınmıştır. En kısa sürede sizinle iletişime geçilecektir.");
      // Form'u temizle
      setFormData({
        motosiklet: "",
        ehliyet: "",
        kullanimSuresi: "",
        ad: "",
        telefon: "",
        email: "",
      });
    } catch (error) {
      trackFormError("basvuru_formu", "submit_error");
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { number: "500+", label: "Mezun Sürücü", icon: "🏆" },
    { number: "%95", label: "Başarı Oranı", icon: "✅" },
    { number: "10+", label: "Yıllık Deneyim", icon: "⭐" },
    { number: "15+", label: "Profesyonel Eğitmen", icon: "👨‍🏫" },
  ];

  const whyChooseUs = [
    {
      icon: "🎯",
      title: "Kişiye Özel Program",
      description: "Her öğrencinin seviyesine ve ihtiyacına göre özelleştirilmiş eğitim programı",
    },
    {
      icon: "🛡️",
      title: "Güvenli Eğitim",
      description: "Tam donanımlı eğitim alanları ve güvenlik ekipmanları ile güvenli öğrenme ortamı",
    },
    {
      icon: "📜",
      title: "Sertifikalı Eğitim",
      description: "Eğitimi tamamlayan öğrencilerimize resmi sertifika verilmektedir",
    },
    {
      icon: "⏰",
      title: "Esnek Program",
      description: "Hafta içi ve hafta sonu seçenekleri ile size uygun zaman dilimini seçebilirsiniz",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Başvuru",
      description: "Online formu doldurun veya bizimle iletişime geçin",
    },
    {
      step: "2",
      title: "Değerlendirme",
      description: "Eğitmenimiz sizinle görüşerek uygun programı belirler",
    },
    {
      step: "3",
      title: "Eğitim",
      description: "Teorik, kapalı alan ve yol eğitimlerini tamamlayın",
    },
    {
      step: "4",
      title: "Sertifika",
      description: "Eğitimi başarıyla tamamlayarak sertifikanızı alın",
    },
  ];

  const testimonials = [
    {
      name: "Mehmet Y.",
      role: "Motosiklet Tutkunu",
      quote: "İleri sürüş tekniklerini öğrenmek hayatımı değiştirdi. Artık çok daha güvenli ve bilinçli sürüyorum.",
      rating: 5,
    },
    {
      name: "Ayşe K.",
      role: "Yeni Başlayan",
      quote: "Başlangıçta çok korkuyordum ama eğitmenlerin sabırlı ve profesyonel yaklaşımı sayesinde kendime güvenim geldi.",
      rating: 5,
    },
    {
      name: "Can D.",
      role: "Deneyimli Sürücü",
      quote: "Yıllardır motosiklet kullanıyordum ama bu eğitimle ne kadar eksik olduğumu fark ettim. Kesinlikle tavsiye ederim.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Eğitim süresi ne kadar?",
      answer: "Toplam eğitim süresi 10 saattir. Teorik ders 2 saat, kapalı alan eğitimi 4 saat ve yol eğitimi 4 saattir.",
    },
    {
      question: "Hangi ehliyet sınıfına sahip olmam gerekiyor?",
      answer: "A1, A2 veya A sınıfı motosiklet ehliyetine sahip olmanız gerekmektedir. Eğitim sırasında ehliyetinizi yanınızda bulundurmanız gerekmektedir.",
    },
    {
      question: "Kendi motosikletimle gelebilir miyim?",
      answer: "Evet, kendi motosikletinizle eğitime katılabilirsiniz. Ancak motosikletinizin teknik olarak uygun durumda olması gerekmektedir.",
    },
    {
      question: "Eğitim sonunda sertifika alacak mıyım?",
      answer: "Evet, eğitimi başarıyla tamamlayan tüm öğrencilerimize resmi sertifika verilmektedir.",
    },
    {
      question: "Eğitim ücreti ne kadar?",
      answer: "Standart ücret 25.000 TL'dir. Şu anda özel kampanya ile 18.000 TL'ye eğitim alabilirsiniz.",
    },
    {
      question: "Eğitim programı nasıl belirleniyor?",
      answer: "Eğitim programı, eğitmenimizle yapacağınız birebir görüşme sonrasında sizin seviyenize ve ihtiyacınıza göre özelleştirilir.",
    },
  ];

  return (
    <div className="relative min-h-screen text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(235,138,76,0.15)_0%,_transparent_50%),_radial-gradient(circle_at_bottom_left,_rgba(226,51,51,0.12)_0%,_transparent_50%)]" />

      <div className="relative z-10 mx-auto flex w-full flex-col">
        {/* Hero Section */}
        <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-16 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-red px-4 py-2 text-white shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  Özel Fiyat Kampanyası
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
                🏍 İleri ve Güvenli Sürüş Eğitimi
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/90">
                Teorik Eğitim + Kapalı Alan Hakimiyet Eğitimi + Yol Eğitimi ile profesyonel sürüş teknikleri öğrenin.
              </p>
              
              {/* Fiyat Kartları */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/95 backdrop-blur-sm p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,_rgba(235,100,46,0.2)_0%,_rgba(235,100,46,0)_70%)]" />
                  <div className="relative">
                    <p className="text-xs font-medium text-gray-600 mb-2">Standart Ücret</p>
                    <p className="text-3xl font-bold text-accent-red line-through">25.000 TL</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border-2 border-accent-red bg-gradient-to-br from-accent-red to-accent-dark p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_70%)]" />
                  <div className="relative">
                    <p className="text-xs font-medium text-white/90 mb-2">Kısa Süreliğine Özel Fiyat</p>
                    <p className="text-3xl font-bold text-white">18.000 TL</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
                <p className="text-sm text-white/90">
                  <strong className="text-white">Önemli:</strong> Eğitim detaylarının netleştirilmesi ve uygunluk durumunun değerlendirilmesi için eğitmen ile randevu oluşturularak birebir görüşme yapılması gerekmektedir.
                </p>
              </div>

              {/* İletişim Butonları */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\s/g, '').replace('+', '')}?text=Merhaba, ileri sürüş eğitimi hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                  <span>💬</span>
                  WhatsApp ile İletişim
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  onClick={() => trackPhoneCall()}
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                  <span>📞</span>
                  Hemen Ara
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                  <span>✉️</span>
                  E-posta Gönder
                </a>
              </div>
            </div>

            {/* Hero Görsel */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-red via-accent to-accent-dark rounded-[40px] opacity-60 blur-xl group-hover:opacity-80 transition duration-500" />
                <div className="relative overflow-hidden rounded-[40px] border-4 border-white shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop&q=80"
                    alt="İleri Sürüş Eğitimi - Motosiklet"
                    width={800}
                    height={600}
                    className="w-full h-[500px] object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İstatistikler */}
        <section className="bg-gradient-to-br from-blue-50/30 to-transparent py-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/90 backdrop-blur-sm p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl text-center"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-accent-red mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eğitim İçeriği Detayları */}
        <section id="egitim" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Eğitim İçeriği
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Kapsamlı Eğitim Programı
            </h2>
            <p className="mt-2 text-white/80 max-w-2xl mx-auto">
              3 aşamalı profesyonel eğitim programı ile güvenli ve deneyimli sürüş tekniklerini öğrenin
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Teorik Ders */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/30 bg-white/90 backdrop-blur-sm shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80"
                  alt="Teorik Ders"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-4xl">📘</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg mb-1">1. Teorik Ders</h3>
                  <p className="text-sm drop-shadow-lg">2 Saat (Sınıf Eğitimi)</p>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Motosikletin trafikteki yeri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Ekipmanın önemi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Gözlem ve risk analiz teknikleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Güvenlik sistemlerinin doğru kullanımı</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kapalı Alan Hakimiyet */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/30 bg-white/90 backdrop-blur-sm shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558980664-1db506751c6c?w=600&h=400&fit=crop&q=80"
                  alt="Kapalı Alan Eğitimi"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-4xl">🛞</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg mb-1">2. Kapalı Alan Hakimiyet</h3>
                  <p className="text-sm drop-shadow-lg">4 Saat</p>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Frenleme teknikleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Engelden kaçış</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Yavaş sürüş ve denge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Bakış tekniği ve doğru konumlanma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Acil durum manevraları</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Yol Eğitimi */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/30 bg-white/90 backdrop-blur-sm shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop&q=80"
                  alt="Yol Eğitimi"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-4xl">🛣</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg mb-1">3. Yol Eğitimi</h3>
                  <p className="text-sm drop-shadow-lg">4 Saat</p>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Viraj teknikleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Gözlem ve farkındalık</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Güvenlik alanı oluşturma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Konumlanma ve çizgi seçimi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Farklı yol tiplerinde uygulamalı sürüş</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neden Bizi Seçmelisiniz */}
        <section className="bg-gradient-to-br from-blue-50/30 to-transparent py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Avantajlarımız
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Neden Bizi Seçmelisiniz?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/90 backdrop-blur-sm p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eğitim Süreci */}
        <section id="surec" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Süreç
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Eğitim Süreciniz
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent-red hidden md:block mx-[10%]" />
            
            <div className="grid gap-8 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="relative mb-6 z-10">
                    <div className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-dark opacity-50 blur-lg group-hover:opacity-80 transition rounded-full" />
                    <div className="relative w-24 h-24 rounded-full border-4 border-white bg-gradient-to-br from-accent-red to-accent-dark shadow-2xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-white/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Başarı Hikayeleri */}
        <section className="bg-gradient-to-br from-blue-50/30 to-transparent py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Başarı Hikayeleri
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Öğrencilerimiz Ne Diyor?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/90 backdrop-blur-sm p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SSS / FAQ */}
        <section id="sss" className="mx-auto w-full max-w-4xl px-6 py-20">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Sık Sorulan Sorular
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Merak Ettikleriniz
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/30 bg-white/90 backdrop-blur-sm shadow-lg transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-accent/20 rounded-2xl"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className="text-accent text-xl transition-transform duration-300 flex-shrink-0">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Başvuru Formu */}
        <section id="basvuru" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            {/* Form */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-white/90 backdrop-blur-sm shadow-xl p-8">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Başvuru Formu
                </span>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  Eğitime Başvurun
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Lütfen aşağıdaki bilgileri doldurun. Eğitmenimiz sizinle en kısa sürede iletişime geçecektir.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="ad" className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="ad"
                    name="ad"
                    required
                    value={formData.ad}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label htmlFor="motosiklet" className="block text-sm font-medium text-gray-700 mb-1">
                    Kullandığınız Motosiklet *
                  </label>
                  <input
                    type="text"
                    id="motosiklet"
                    name="motosiklet"
                    required
                    value={formData.motosiklet}
                    onChange={handleChange}
                    placeholder="Örn: Honda CBR 600"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label htmlFor="ehliyet" className="block text-sm font-medium text-gray-700 mb-1">
                    Ehliyet Sınıfınız *
                  </label>
                  <select
                    id="ehliyet"
                    name="ehliyet"
                    required
                    value={formData.ehliyet}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Seçiniz</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="kullanimSuresi" className="block text-sm font-medium text-gray-700 mb-1">
                    Motosiklet Kullanım Süreniz *
                  </label>
                  <select
                    id="kullanimSuresi"
                    name="kullanimSuresi"
                    required
                    value={formData.kullanimSuresi}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Seçiniz</option>
                    <option value="0-1">0-1 yıl</option>
                    <option value="1-3">1-3 yıl</option>
                    <option value="3-5">3-5 yıl</option>
                    <option value="5+">5+ yıl</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-accent-red to-accent-dark px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:shadow-xl"
                >
                  Başvuruyu Gönder
                </button>
              </form>
            </div>

            {/* Görseller Galerisi */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-dark to-accent-red rounded-[30px] opacity-50 blur-lg group-hover:opacity-70 transition" />
                <div className="relative overflow-hidden rounded-[30px] border-3 border-white shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&h=400&fit=crop&q=80"
                    alt="Motosiklet İleri Sürüş Eğitimi"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-[25px] border-2 border-accent shadow-xl transform hover:scale-105 transition duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1558980664-1db506751c6c?w=300&h=200&fit=crop&q=80"
                    alt="Kapalı Alan Motosiklet Eğitimi"
                    width={300}
                    height={200}
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-[25px] border-2 border-primary shadow-xl transform hover:scale-105 transition duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=300&h=200&fit=crop&q=80"
                    alt="Yol Sürüş Eğitimi"
                    width={300}
                    height={200}
                    className="w-full h-[180px] object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Eğitim Hakkında</h3>
                <ul className="space-y-3 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Profesyonel ve deneyimli eğitmenler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Güvenli eğitim ortamı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Kişiye özel eğitim programı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Sertifika ile tamamlanma</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-muted to-primary py-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">İleri ve Güvenli Sürüş Eğitimi</h3>
                <p className="text-white/80 text-sm mb-4">
                  Profesyonel motosiklet ileri sürüş eğitimi ile güvenli ve deneyimli sürüş tekniklerini öğrenin.
                </p>
                {/* Footer İletişim Butonları */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\s/g, '').replace('+', '')}?text=Merhaba, ileri sürüş eğitimi hakkında bilgi almak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-green-500 hover:bg-green-600 px-4 py-2 text-xs font-semibold text-white transition"
                  >
                    <span>💬</span>
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                    onClick={() => trackPhoneCall()}
                    className="inline-flex items-center gap-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-xs font-semibold text-white transition"
                  >
                    <span>📞</span>
                    Ara
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="inline-flex items-center gap-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-xs font-semibold text-white transition"
                  >
                    <span>✉️</span>
                    E-posta
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Hızlı Linkler</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#egitim" className="text-white/80 hover:text-white transition">Eğitim İçeriği</a></li>
                  <li><a href="#surec" className="text-white/80 hover:text-white transition">Eğitim Süreci</a></li>
                  <li><a href="#sss" className="text-white/80 hover:text-white transition">Sık Sorulan Sorular</a></li>
                  <li><a href="#basvuru" className="text-white/80 hover:text-white transition">Başvuru Formu</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
                <ul className="space-y-3 text-sm text-white/80 mb-4">
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} onClick={() => trackPhoneCall()} className="hover:text-white transition">
                      {SITE_CONFIG.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✉️</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition">
                      {SITE_CONFIG.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{SITE_CONFIG.address.city}, Türkiye</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-white/80 text-sm">
                © 2025 İleri ve Güvenli Sürüş Eğitimi. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\s/g, '').replace('+', '')}?text=Merhaba, ileri sürüş eğitimi hakkında bilgi almak istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transition-all hover:scale-110 animate-pulse"
          aria-label="WhatsApp ile iletişime geç"
        >
          💬
        </a>
      </div>
    </div>
  );
}

