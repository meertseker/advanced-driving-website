"use client";

import Image from "next/image";
import { useState } from "react";
import { trackFormComplete, trackFormError } from "@/lib/analytics";

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

        {/* Başvuru Formu */}
        <section className="mx-auto w-full max-w-7xl px-6 py-20">
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
        <footer className="bg-gradient-to-br from-muted to-primary py-12">
          <div className="mx-auto w-full max-w-7xl px-6 text-center">
            <p className="text-white/80 text-sm">
              © 2025 İleri ve Güvenli Sürüş Eğitimi. Tüm hakları saklıdır.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

