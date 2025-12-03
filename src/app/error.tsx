'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">Bir hata oluştu!</h2>
        <p className="text-white/80 mb-8">{error.message || "Beklenmeyen bir hata oluştu."}</p>
        <button
          onClick={reset}
          className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}


