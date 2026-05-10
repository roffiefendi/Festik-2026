# Festival Teknik 2026

Website profil acara premium sinematik yang dibangun dengan Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, dan Sanity CMS.

## Fitur

- Konten yang sepenuhnya dinamis dikelola melalui Sanity CMS
- Desain festival sinematik modern dengan tata letak editorial
- Antarmuka responsif mobile-first
- Timer hitung mundur dinamis dengan animasi realtime
- Kartu glassmorphism, efek glow, dan komposisi visual berlapis
- Sanity Studio terintegrasi di `/studio`
- Dukungan metadata SEO dan sitemap

## Struktur Proyek

- `app/` — halaman dan metadata Next.js App Router
- `components/` — komponen bagian yang dapat digunakan kembali
- `lib/` — klien Sanity, kueri, dan pembantu utilitas
- `studio/` — definisi skema Sanity Studio
- `public/` — aset statis

## Instalasi

1. Kloning repositori.
2. Instal dependensi:

```bash
npm install
```

3. Salin file lingkungan contoh:

```bash
copy .env.example .env.local
```

4. Atur variabel lingkungan Sanity Anda di `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2026-05-10
SANITY_STUDIO_API_TOKEN=yourWriteToken
```

## Pengaturan Sanity

1. Instal Sanity CLI secara global jika diperlukan:

```bash
npm install -g @sanity/cli
```

2. Inisialisasi atau hubungkan ke proyek Sanity Anda:

```bash
sanity init
```

3. Ganti konfigurasi Sanity yang dihasilkan atau gunakan `sanity.config.ts` yang ada.

4. Mulai Sanity Studio secara lokal:

```bash
npm run studio
```

5. Buka `http://localhost:3000/studio` untuk mengakses antarmuka Studio.

## Manajemen Konten CMS

### Mengedit Halaman Beranda

- `siteSettings` — judul situs, deskripsi, logo, favicon
- `seoSettings` — metadata OpenGraph, Twitter, judul SEO, deskripsi
- `heroSection` — teks hero, tombol CTA, branding header
- `countdownSettings` — tanggal acara, waktu acara, zona waktu, pesan mulai
- `aboutEvent` — konten identitas festival dan citra hero
- `eventDescription` — konten storytelling dan salinan editorial
- `eventHighlights` — nilai penghitung animasi untuk tamu, sponsor, jangkauan media
- `ticketSettings` — konten CTA tiket online dan pengenalan tiket offline
- `offlineTicketSellers` — kartu penjual dengan kontak WhatsApp dan status
- `guestStars` — kartu artis, genre, Instagram, tanggal pertunjukan
- `sponsors` — logo dan tautan sponsor
- `partners` — logo dan tautan mitra
- `gallery` — gambar festival yang dikurasi
- `faq` — item akordeon FAQ animasi
- `socialLinks` — tautan Instagram, TikTok, WhatsApp, Maps
- `contactInfo` — WhatsApp, email, alamat, Instagram, TikTok
- `footerSettings` — teks footer dan tautan media sosial
- `sectionSettings` — aktifkan/nonaktifkan bagian dan urutkan kembali

### Menambahkan Guest Stars

1. Buka skema `guestStars` di Sanity Studio.
2. Tambahkan dokumen baru dengan nama artis, genre, URL Instagram, tanggal pertunjukan, dan gambar poster.
3. Atur nomor pesanan untuk mengelola urutan lineup.

### Mengedit Hitung Mundur

1. Buka `countdownSettings` di Sanity Studio.
2. Perbarui tanggal dan waktu acara.
3. Pertahankan bidang zona waktu sebagai `Asia/Jakarta` atau tentukan offset yang valid.
4. Simpan dan hitung mundur halaman beranda diperbarui secara realtime.

### Mengelola Sponsor dan Mitra

- Tambahkan dokumen sponsor di skema `sponsors`.
- Tambahkan logo merek mitra di `partners`.
- Gunakan bidang `order` untuk mengontrol penempatan.

## Menjalankan Secara Lokal

```bash
npm run dev
```

Buka `http://localhost:3000`.

## Deployment

### Deployment Vercel

1. Hubungkan repositori ke Vercel.
2. Tambahkan variabel lingkungan di pengaturan Vercel:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_VERSION`
   - `SANITY_STUDIO_API_TOKEN`
3. Deployment aplikasi Next.js.
4. Gunakan rute `/studio` untuk Sanity Studio dalam produksi jika diinginkan.

### Deployment Sanity

1. Sebarkan Sanity Studio ke CDN hosting Sanity:

```bash
sanity deploy
```

2. Publikasikan dataset Anda dan verifikasi konten tersedia.

## Catatan

- Semua konten situs web bersumber dari Sanity CMS.
- Visibilitas dan urutan bagian sepenuhnya dikendalikan melalui `sectionSettings`.
- Proyek ini dioptimalkan untuk presentasi merek sinematik dan storytelling festival yang sempurna.
