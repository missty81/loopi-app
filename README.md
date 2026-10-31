# Loopi · Dari Ampas, Kembali Berputar

Aplikasi web (mobile-first) Loopi: ekosistem sirkular ampas kopi berbasis AI untuk kedai kopi.
Dibuat oleh **Tim EUREKA** untuk BPC E-DAY 2026.

## Fitur (20 layar)
Onboarding · Beranda · Scan AI · Jadwal Pengambilan · Laporan Dampak · Katalog Produk · Hasil Scan (detail) ·
Jadwal Pintar (prediksi) · Optimasi Rute · Caption & Laporan AI · Riwayat Setoran · Pendaftaran Kedai ·
Notifikasi · Pengaturan · Profil Kedai · Detail Produk · Konfirmasi Setoran · Tracking Pengambilan ·
Detail Laporan Dampak · Lupa Password (+ Masuk)

Semua data masih contoh (dummy) dan fitur AI disimulasikan di sisi tampilan.
Tiap layar bisa dibuka langsung lewat URL, misalnya `/#/scan`, `/#/rute`, `/#/produk/pupuk`.

## Jalankan di komputer
```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # hasil produksi di folder dist/
```

## Upload ke GitHub
```bash
git init
git add .
git commit -m "Loopi app"
git branch -M main
git remote add origin https://github.com/USERNAME/loopi-app.git
git push -u origin main
```

## Deploy ke Vercel
1. Masuk ke vercel.com → **Add New → Project** → pilih repo `loopi-app`.
2. Framework Preset otomatis terbaca **Vite** (Build: `npm run build`, Output: `dist`).
3. Klik **Deploy**. Selesai, aplikasi bisa dibuka dari ponsel dan dipasang ke layar utama (PWA).

## Struktur
```
public/ampi/     pose maskot Ampi
public/logo.png  logo Loopi
src/App.jsx      navigasi & bingkai ponsel (desktop)
src/screens.jsx  semua layar
src/ui.jsx       komponen & ilustrasi
src/styles.css   desain (warna, kartu, animasi)
```
