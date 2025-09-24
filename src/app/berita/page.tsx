import Image from "next/image";

export default function BeritaPage() {
	return (
		<main className="max-w-3xl mx-auto py-10 px-4">
			<article className="bg-white rounded-lg shadow-md p-6">
				<h1 className="text-3xl font-bold mb-2 text-gray-900">Judul Berita Utama</h1>
				<p className="text-sm text-gray-500 mb-4">24 September 2025</p>
				<div className="mb-6">
					<Image
						src="/berita-sample.jpg"
						alt="Gambar Berita"
						width={800}
						height={400}
						className="rounded-md object-cover w-full h-64"
					/>
				</div>
				<div className="prose max-w-none text-gray-800">
					<p>
						Ini adalah isi berita utama. Anda dapat menambahkan paragraf, gambar, atau elemen lain sesuai kebutuhan. Halaman ini menggunakan Tailwind CSS untuk styling yang modern dan responsif.
					</p>
					<p>
						Contoh paragraf kedua untuk memperlihatkan layout berita yang rapi dan mudah dibaca. Silakan sesuaikan konten sesuai kebutuhan aplikasi Anda.
					</p>
				</div>
			</article>
		</main>
	);
}
