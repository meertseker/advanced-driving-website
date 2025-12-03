import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="text-center text-white px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Sayfa Bulunamadı</h2>
        <p className="text-white/80 mb-8">Aradığınız sayfa mevcut değil.</p>
        <Link
          href="/"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}


