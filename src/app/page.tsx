'use client';
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">RadarKabar</h1>
        <p className="text-lg text-gray-600 mb-8">Portal berita terkini, terpercaya, dan terupdate untuk Anda.</p>
        <Link
          href="/berita"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Lihat Berita
        </Link>
      </div>
    </main>
  );
}