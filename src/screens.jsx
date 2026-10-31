import React, { useEffect, useMemo, useState } from 'react'
import {
  Bell, Truck, ScanLine, BarChart3, BookOpen, ShoppingBag, Award, Lightbulb, Leaf, TreePine, Trophy, Phone, Clock, MapPin,
  CalendarDays, ChevronRight, ChevronLeft, Search, ShoppingCart, Plus, Minus, Heart, Star, Check, RotateCcw, Sparkles,
  Navigation, Copy, Instagram, Image as ImageIcon, Camera, ChevronDown, Settings, User, Lock, Globe, Shield, HelpCircle,
  LogOut, Pencil, Mail, Store, Car, Home, Download, Share2, MessageCircle, Megaphone, CircleCheck, Bike, Scale, Calendar, ArrowRight, Eye, EyeOff
} from 'lucide-react'
import { A, Header, Bars, MascotNote, ProductArt, Grounds, MapSvg } from './ui.jsx'

export const PRODUCTS = [
  { id: 'pupuk', name: 'Pupuk Organik', size: '5 kg', price: 45000, rating: 4.8, rev: 120, cat: 'Pupuk', desc: 'Dibuat dari ampas kopi pilihan yang diproses secara alami tanpa bahan kimia berbahaya. Cocok untuk tanaman hias, sayuran, dan tanaman buah.' },
  { id: 'media', name: 'Media Tanam', size: '1 kg', price: 20000, rating: 4.7, rev: 86, cat: 'Pupuk', desc: 'Campuran kompos ampas kopi dan sekam yang gembur, menjaga kelembapan, dan kaya bahan organik.' },
  { id: 'sabun', name: 'Sabun Kopi', size: '100 gr', price: 25000, rating: 4.9, rev: 64, cat: 'Kerajinan', desc: 'Sabun scrub alami dengan butiran ampas kopi untuk mengangkat sel kulit mati. Dibuat bersama UMKM mitra.' },
  { id: 'briket', name: 'Briket Bioarang', size: '1 kg', price: 30000, rating: 4.6, rev: 41, cat: 'Lainnya', desc: 'Bahan bakar alternatif dari ampas kopi yang dipadatkan. Nyala stabil dan minim asap.' },
]
const rp = (n) => 'Rp ' + n.toLocaleString('id-ID')
const MONTHS = [{ l: 'Mei', v: 38 }, { l: 'Jun', v: 52 }, { l: 'Jul', v: 61 }, { l: 'Agu', v: 70 }, { l: 'Sep', v: 79 }, { l: 'Okt', v: 100 }]

/* 1 ---------------------------------------------------------------- */
export function Onboarding({ go }) {
  const slides = [
    { pose: 'plant', t: <>Ampas kecil,<br /><em>dampak besar</em></>, d: 'Bersama Loopi, ampas kopi kedaimu bisa menjadi produk bernilai dan lingkungan yang lebih baik.' },
    { pose: 'clip', t: <>Diambil rutin,<br /><em>tercatat rapi</em></>, d: 'Atur jadwal, pantau petugas, dan lihat berat setiap setoran langsung dari aplikasi.' },
    { pose: 'celebrate', t: <>Dampakmu,<br /><em>terukur nyata</em></>, d: 'Dapatkan laporan CO₂e, sertifikat, dan caption AI untuk dibagikan ke pelanggan.' },
  ]
  const [i, setI] = useState(0)
  const s = slides[i]
  return (
    <div className="ob">
      <div className="between"><img src="/logo-mark.png" alt="Loopi" style={{ height: 34 }} /><button className="k" style={{ fontWeight: 700, fontSize: 14 }} onClick={() => go('login')}>Lewati</button></div>
      <div key={i} className="fade"><h1>{s.t}</h1><p>{s.d}</p></div>
      <div className="art"><img key={s.pose} className="fade" src={A(s.pose)} alt="Ampi" /></div>
      <div className="dots">{slides.map((_, k) => <i key={k} className={k === i ? 'on' : ''} />)}</div>
      <button className="btn pri" onClick={() => (i < 2 ? setI(i + 1) : go('register'))}>{i < 2 ? 'Lanjut' : 'Mulai Sekarang'} <ArrowRight size={18} /></button>
      <p style={{ textAlign: 'center', marginTop: 14, fontSize: 14 }}>Sudah punya akun? <button className="link" style={{ fontSize: 14 }} onClick={() => go('login')}>Masuk</button></p>
    </div>
  )
}

/* login (extra) */
export function Login({ go, home }) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: 10 }}><img src={A('happy')} alt="" style={{ width: 130 }} /></div>
      <h2 style={{ fontSize: 26, fontWeight: 800, textAlign: 'center', letterSpacing: -.6, marginTop: 6 }}>Selamat datang!</h2>
      <p className="sub" style={{ textAlign: 'center', margin: '6px 0 20px' }}>Masuk untuk melanjutkan perjalanan sirkularmu.</p>
      <div className="field"><label>Email</label><div className="inwrap"><Mail size={18} /><input className="input" defaultValue="senja@kedaicoffee.id" /></div></div>
      <div className="field"><label>Password</label><div className="inwrap"><Lock size={18} /><input className="input" type={show ? 'text' : 'password'} defaultValue="loopi2026" />
        <button onClick={() => setShow(!show)} style={{ position: 'absolute', right: 14, top: 15, color: 'var(--mu)' }}>{show ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></div>
      <div style={{ textAlign: 'right', marginBottom: 18 }}><button className="link" onClick={() => go('forgot')}>Lupa password?</button></div>
      <button className="btn pri" onClick={home}>Masuk</button>
      <p style={{ textAlign: 'center', marginTop: 16, fontSize: 14 }}>Belum punya akun? <button className="link" style={{ fontSize: 14 }} onClick={() => go('register')}>Daftarkan kedai</button></p>
    </div>
  )
}

/* 2 ---------------------------------------------------------------- */
export function Beranda({ go }) {
  const [w, setW] = useState(0)
  useEffect(() => { const t = setTimeout(() => setW(85), 150); return () => clearTimeout(t) }, [])
  const tiles = [
    ['Jadwal Pengambilan', Truck, '#FFF1DD', '#C26A1E', 'jadwal'], ['Scan Ampas', ScanLine, '#FDE8E1', '#D2552E', 'scan'], ['Laporan Dampak', BarChart3, '#EAF3E1', '#3E8B3A', 'dampak'],
    ['Edukasi', BookOpen, '#E6F2EC', '#2F7D5A', 'konten'], ['Produk Loopi', ShoppingBag, '#F6ECE0', '#8A5530', 'katalog'], ['Sertifikat', Award, '#EAF3E1', '#3E8B3A', 'laporan'],
  ]
  return (
    <div>
      <div className="between mb12">
        <div className="row"><div className="av">KS</div><div><div className="k">Halo,</div><div style={{ fontSize: 18, fontWeight: 800 }}>Kedai Senja! 👋</div></div></div>
        <button className="iconbtn badgedot" onClick={() => go('notif')} aria-label="Notifikasi"><Bell size={19} /></button>
      </div>
      <div className="hero">
        <div className="k">Total ampas terkumpul · Oktober 2026</div>
        <div className="big">128<small> kg</small></div>
        <div className="prog" style={{ width: '62%' }}><i style={{ width: w + '%' }} /></div>
        <div className="row mt8" style={{ gap: 8 }}><span className="pill" style={{ background: 'rgba(255,255,255,.16)', color: '#CFEFC4' }}>↑ 12%</span><span className="k">85% dari target</span></div>
        <img src={A('plant')} alt="" />
      </div>
      <div className="grid3 mt12">
        <div className="stat"><div className="ic"><Leaf size={16} /></div><div className="k">CO₂e dihindari</div><div className="v">258<small> kg</small></div></div>
        <div className="stat"><div className="ic"><TreePine size={16} /></div><div className="k">Setara</div><div className="v">29<small className="tg"> pohon</small></div></div>
        <div className="stat"><div className="ic" style={{ background: '#FFF1DD', color: '#C26A1E' }}><Trophy size={16} /></div><div className="k">Peringkat</div><div className="v">Top 10%</div></div>
      </div>
      <div className="sec">Menu Utama</div>
      <div className="tiles">
        {tiles.map(([t, I, bg, c, to]) => <button key={t} className="tile" onClick={() => go(to)}><span className="ti" style={{ background: bg, color: c }}><I size={22} /></span>{t}</button>)}
      </div>
      <div className="card green mt12 row" style={{ alignItems: 'flex-start' }}>
        <Sparkles size={18} color="#3E8B3A" style={{ flex: 'none', marginTop: 2 }} />
        <div style={{ fontSize: 13, lineHeight: 1.45 }}><b>Prediksi AI:</b> volume ampas akhir pekan diperkirakan naik 12%. <button className="link" onClick={() => go('prediksi')}>Lihat jadwal pintar →</button></div>
      </div>
      <div className="card soft mt12 row" style={{ alignItems: 'flex-start' }}>
        <Lightbulb size={18} color="#C26A1E" style={{ flex: 'none', marginTop: 2 }} />
        <div style={{ fontSize: 13, lineHeight: 1.45 }}><b>Tips hari ini</b><br />Pisahkan ampas dari tisu dan plastik agar hasil olahan maksimal.</div>
      </div>
    </div>
  )
}

/* 3 + 7 ----------------------------------------------------------- */
export function Scan({ go, back }) {
  const [done, setDone] = useState(false)
  useEffect(() => { const t = setTimeout(() => setDone(true), 2400); return () => clearTimeout(t) }, [])
  return (
    <div>
      <Header title="Scan Ampas" onBack={back} center />
      <p className="sub" style={{ textAlign: 'center' }}>Arahkan kamera ke wadah ampas</p>
      <div className="cam"><div className="bowl" /><div className="grounds" /><div className="frame"><i /><i /><i /><i /></div>{!done && <div className="scanline" />}
        <span className="ai"><Sparkles size={12} /> {done ? 'Analisis selesai' : 'AI menganalisis…'}</span></div>
      {done ? (
        <div className="fade">
          <div className="card mt12"><div className="between"><div className="row"><span className="stat" style={{ padding: 8, border: 0, background: 'var(--lg)' }}><Leaf size={20} color="#3E8B3A" /></span><div><div className="k">Kualitas</div><div style={{ fontWeight: 800, color: 'var(--grn)', fontSize: 17 }}>Baik</div></div></div>
            <div className="row"><div style={{ textAlign: 'right' }}><div className="k">Jenis</div><b style={{ fontSize: 14 }}>Ampas Kopi</b></div><Grounds size={48} /></div></div></div>
          <div className="grid2 mt12"><div className="stat"><div className="k">Berat terestimasi</div><div className="v">6,2<small> kg</small></div></div><div className="stat" style={{ background: 'var(--lg)' }}><div className="k">CO₂e dihindari</div><div className="v tg">3,3<small> kg</small></div></div></div>
          <button className="btn pri mt16" onClick={() => go('hasilscan')}>Lihat Detail Hasil</button>
          <button className="btn mt8" style={{ color: 'var(--brown)' }} onClick={() => setDone(false) || setTimeout(() => setDone(true), 2400)}><RotateCcw size={16} /> Ambil Ulang</button>
        </div>
      ) : <div className="card mt12" style={{ textAlign: 'center', color: 'var(--mu)', fontSize: 13 }}>Mendeteksi kontaminan dan memperkirakan berat…</div>}
    </div>
  )
}
export function HasilScan({ go, back, toast }) {
  return (
    <div>
      <Header title="Hasil Scan Ampas" onBack={back} />
      <div className="cam" style={{ height: 190 }}><div className="bowl" /><div className="grounds" /><span className="ai" style={{ background: 'linear-gradient(90deg,#3E8B3A,#2F6E2B)' }}><CircleCheck size={12} /> Kualitas Terbaik!</span>
        <div style={{ position: 'absolute', right: 12, bottom: 12, border: '3px solid #fff', borderRadius: 14 }}><Grounds size={62} r={11} /></div></div>
      <div className="card mt12 row"><span className="stat" style={{ padding: 10, border: 0, background: 'var(--lg)' }}><Leaf size={22} color="#3E8B3A" /></span><div><div className="k">Kualitas ampas</div><div style={{ fontWeight: 800, color: 'var(--grn)', fontSize: 18 }}>Baik · 97/100</div><div className="k">Aman untuk diolah</div></div></div>
      <div className="card mt12"><b style={{ fontSize: 14 }}>Deteksi Kontaminasi</b>
        {['Plastik', 'Tisu', 'Sisa makanan'].map((x) => <div key={x} className="between" style={{ padding: '10px 0', borderBottom: '1px dashed var(--line)', fontSize: 14 }}><span>{x}</span><span className="pill"><Check size={12} /> Tidak terdeteksi</span></div>)}
      </div>
      <div className="grid2 mt12"><div className="stat"><div className="k">Berat terestimasi</div><div className="v">6,2<small> kg</small></div></div><div className="stat" style={{ background: 'var(--lg)' }}><div className="k">CO₂e dihindari</div><div className="v tg">3,3<small> kg</small></div></div></div>
      <div className="mt12"><MascotNote green pose="happy" text="Ampas dalam kondisi baik! Terus jaga kualitasnya ya." /></div>
      <div className="row mt16"><button className="btn out" onClick={() => go('scan')}>Scan Ulang</button><button className="btn pri" onClick={() => { toast('Data setoran tersimpan'); go('konfirmasi') }}>Simpan Data</button></div>
    </div>
  )
}

/* 4 ---------------------------------------------------------------- */
export function Jadwal({ go, back, toast }) {
  const days = [['Sen', 21], ['Sel', 22], ['Rab', 23], ['Kam', 24], ['Jum', 25], ['Sab', 26], ['Min', 27]]
  const [sel, setSel] = useState(24)
  const ev = [24, 27]
  return (
    <div>
      <Header title="Jadwal Pengambilan" onBack={back} right={null} />
      <p className="sub">Atur jadwal sesuai kebutuhan kedai.</p>
      <div className="card"><div className="between mb8"><b>Oktober 2026</b><div className="row" style={{ gap: 4 }}><button className="iconbtn ghost" style={{ width: 30, height: 30 }}><ChevronLeft size={16} /></button><button className="iconbtn ghost" style={{ width: 30, height: 30 }}><ChevronRight size={16} /></button></div></div>
        <div className="cal">{days.map(([d]) => <span key={d}>{d}</span>)}{days.map(([, n]) => <button key={n} className={(n === sel ? 'on ' : '') + (ev.includes(n) ? 'ev' : '')} onClick={() => setSel(n)}>{n}</button>)}</div></div>
      <div key={sel} className="fade">
        <div className="between mt16 mb8"><b style={{ fontSize: 15 }}>{days.find((d) => d[1] === sel)[0] === 'Kam' ? 'Kamis' : 'Hari'}, {sel} Oktober 2026</b>{ev.includes(sel) ? <span className="pill">Terkonfirmasi</span> : <span className="pill br">Kosong</span>}</div>
        {ev.includes(sel) ? (<>
          <div className="card row"><div className="av g">DM</div><div style={{ flex: 1 }}><b>Dimas</b><div className="k">Tim Loopi</div></div><a className="call" href="tel:081234567890"><Phone size={18} /></a></div>
          <div className="card mt8 row"><Clock size={20} color="#5C3620" /><div><b>{sel === 24 ? '10.00 – 11.00' : '09.00 – 10.00'}</b><div className="k">Motor listrik roda tiga</div></div></div>
          <div className="card mt8 row" style={{ padding: 0, overflow: 'hidden' }}><div style={{ padding: 14, flex: 1 }}><div className="row" style={{ gap: 6 }}><MapPin size={16} color="#E0663E" /><b style={{ fontSize: 13 }}>Lokasi penjemputan</b></div><b style={{ display: 'block', marginTop: 8 }}>Kedai Senja</b><div className="k">Jl. Melati No. 12, Bekasi</div>
            <button className="btn out sm mt8" style={{ width: 'auto', padding: '0 16px' }} onClick={() => go('tracking')}>Lihat Rute</button></div><div style={{ width: 120 }}><MapSvg h={150} /></div></div>
        </>) : <div className="card" style={{ textAlign: 'center', padding: 22 }}><CalendarDays size={28} color="#B5A393" /><p className="k mt8">Belum ada pengambilan di tanggal ini.</p><button className="btn grn sm mt12" onClick={() => toast('Permintaan pengambilan dikirim')}>Minta Pengambilan</button></div>}
      </div>
      <button className="btn out mt16" onClick={() => go('prediksi')}><Sparkles size={16} /> Ubah dengan Jadwal Pintar</button>
    </div>
  )
}

/* 5 / 19 ----------------------------------------------------------- */
export function Dampak({ go, back }) {
  const [p, setP] = useState(1)
  const totals = ['112 kg', '486 kg', '1.284 kg']
  return (
    <div>
      <Header title="Dampak Kedai" onBack={back} right={<span className="pill br">Okt 2026 <ChevronDown size={12} /></span>} />
      <div className="seg">{['Minggu', 'Bulan', 'Tahun'].map((x, i) => <button key={x} className={p === i ? 'on' : ''} onClick={() => setP(i)}>{x}</button>)}</div>
      <div className="card green mt12"><div className="between"><div><div className="k">Total ampas terkumpul</div><div className="v" style={{ fontSize: 30 }}>{totals[p]}</div></div><span className="pill" style={{ background: '#fff' }}>↑ 18%</span></div><div className="mt12"><Bars data={MONTHS} active={5} /></div></div>
      <div className="grid3 mt12">
        <div className="stat"><div className="ic"><Leaf size={16} /></div><div className="k">CO₂e dihindari</div><div className="v">258<small> kg</small></div></div>
        <div className="stat"><div className="ic"><TreePine size={16} /></div><div className="k">Setara pohon</div><div className="v">29</div></div>
        <div className="stat"><div className="ic" style={{ background: '#FFF1DD', color: '#C26A1E' }}><Award size={16} /></div><div className="k">Level kedai</div><div className="v">Lv 2</div></div>
      </div>
      <div className="sec">Dampakmu setara dengan</div>
      <div className="grid2"><div className="card row"><Car size={26} color="#C0502B" /><div><b>1.200 km</b><div className="k">perjalanan mobil</div></div></div><div className="card row"><Home size={26} color="#8A5530" /><div><b>45 hari</b><div className="k">listrik rumah</div></div></div></div>
      <button className="card mt12 row" style={{ width: '100%', textAlign: 'left', background: 'linear-gradient(120deg,#EEF6E8,#E2EFD8)' }} onClick={() => go('laporan')}><Award size={30} color="#B97A4B" /><div style={{ flex: 1 }}><b>Sertifikat & Laporan Lengkap</b><div className="k">Unduh sertifikat bulanan kedaimu</div></div><ChevronRight size={18} /></button>
      <button className="btn pri mt12" onClick={() => go('konten')}><Sparkles size={16} /> Buat Konten Dampak dengan AI</button>
    </div>
  )
}
export function Laporan({ back, toast }) {
  const [t, setT] = useState(0)
  return (
    <div>
      <Header title="Laporan Dampak" onBack={back} right={<span className="pill br">Okt 2026</span>} />
      <div className="card green" style={{ position: 'relative', overflow: 'hidden' }}><div className="k">Total ampas terkumpul</div><div className="row"><div className="v" style={{ fontSize: 30 }}>486 kg</div><span className="pill" style={{ background: '#fff' }}>↑ 18%</span></div><img src={A('bean')} alt="" style={{ position: 'absolute', right: 6, bottom: -6, width: 80 }} /></div>
      <div className="grid3 mt12"><div className="stat"><div className="k">CO₂e</div><div className="v">258<small> kg</small></div></div><div className="stat"><div className="k">Pohon</div><div className="v">29</div></div><div className="stat"><div className="k">Level</div><div className="v">Lv 2</div></div></div>
      <div className="seg mt12">{['Ringkasan', 'Grafik', 'Sertifikat'].map((x, i) => <button key={x} className={t === i ? 'on' : ''} onClick={() => setT(i)}>{x}</button>)}</div>
      <div key={t} className="fade">
        {t === 0 && (<div className="card mt12"><b>Komposisi Hasil Olahan</b><div className="row mt12" style={{ gap: 18 }}>
          <div className="donut" style={{ background: 'conic-gradient(#3E8B3A 0 60%,#8CC37B 0 85%,#5C3620 0 95%,#E7B98F 0)' }} />
          <div className="leg">{[['Pupuk Organik', '60%', '#3E8B3A'], ['Media Tanam', '25%', '#8CC37B'], ['Briket Bioarang', '10%', '#5C3620'], ['Sabun Kopi', '5%', '#E7B98F']].map(([a, b, c]) => <div key={a}><i style={{ background: c }} />{a}<b>{b}</b></div>)}</div></div></div>)}
        {t === 1 && (<div className="card mt12"><b>Tren Setoran (kg)</b><div className="mt12"><Bars data={MONTHS.map((m) => ({ ...m, v: Math.round(m.v * 4.86) }))} active={5} height={150} /></div></div>)}
        {t === 2 && (<div className="hero mt12" style={{ padding: 20 }}><div className="k" style={{ letterSpacing: 2, fontWeight: 700 }}>SERTIFIKAT DAMPAK · OKT 2026</div><div style={{ fontSize: 18, fontWeight: 800, margin: '8px 0 4px', maxWidth: 220 }}>Kedai Senja menyelamatkan 128 kg ampas kopi</div><div className="k">Terverifikasi Loopi · ID LP-KS-1026</div><img src={A('proud')} alt="" style={{ width: 110 }} /></div>)}
      </div>
      <div className="row mt16"><button className="btn out" onClick={() => toast('Laporan PDF diunduh')}><Download size={16} /> Unduh PDF</button><button className="btn pri" onClick={() => toast('Tautan laporan disalin')}><Share2 size={16} /> Bagikan</button></div>
    </div>
  )
}

/* 6 / 16 ----------------------------------------------------------- */
export function Katalog({ go, back, cart }) {
  const [c, setC] = useState('Semua'); const [q, setQ] = useState('')
  const list = PRODUCTS.filter((p) => (c === 'Semua' || p.cat === c) && p.name.toLowerCase().includes(q.toLowerCase()))
  return (
    <div>
      <Header title="Produk Loopi" onBack={back} right={<button className="iconbtn badgedot" aria-label="Keranjang"><ShoppingCart size={18} />{cart > 0 && <span style={{ position: 'absolute', top: -6, right: -6, background: '#E0663E', color: '#fff', fontSize: 10, fontWeight: 800, borderRadius: 10, padding: '2px 6px' }}>{cart}</span>}</button>} />
      <p className="sub">Produk hasil olahan ampas kopi untuk kehidupan yang lebih berkelanjutan.</p>
      <div className="inwrap mb12"><Search size={18} /><input className="input" placeholder="Cari produk…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      <div className="chips mb12">{['Semua', 'Pupuk', 'Kerajinan', 'Lainnya'].map((x) => <button key={x} className={'chip' + (c === x ? ' on' : '')} onClick={() => setC(x)}>{x}</button>)}</div>
      <div className="hero" style={{ background: 'linear-gradient(120deg,#E9C9A4,#D9A876)', color: 'var(--esp)', minHeight: 140 }}><div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.15, maxWidth: 180, letterSpacing: -.5 }}>Dari ampas jadi peluang lebih besar.</div><div style={{ fontSize: 12, marginTop: 6, maxWidth: 170 }}>Dukung produk sirkular dari kedai ke masyarakat.</div><img src={A('plant')} alt="" style={{ width: 130 }} /></div>
      <div className="sec">Produk Terlaris <a>Lihat semua ›</a></div>
      <div className="grid2">{list.map((p) => (
        <button key={p.id} className="pcard" onClick={() => go('produk', p.id)}><ProductArt type={p.id} /><h4>{p.name}</h4><div className="k">{p.size}</div><div className="pr">{rp(p.price)}<span className="plus"><Plus size={16} /></span></div></button>
      ))}</div>
      {!list.length && <p className="k" style={{ textAlign: 'center', padding: 20 }}>Produk tidak ditemukan.</p>}
    </div>
  )
}
export function Produk({ back, param, addCart }) {
  const p = PRODUCTS.find((x) => x.id === param) || PRODUCTS[0]
  const [n, setN] = useState(1); const [fav, setFav] = useState(false)
  return (
    <div>
      <Header title="" onBack={back} right={<button className="iconbtn" onClick={() => setFav(!fav)} aria-label="Favorit"><Heart size={18} fill={fav ? '#E0663E' : 'none'} color={fav ? '#E0663E' : 'currentColor'} /></button>} />
      <div style={{ position: 'relative' }}><ProductArt type={p.id} h={230} /><img src={A('plant')} alt="" style={{ position: 'absolute', right: 6, bottom: 4, width: 96 }} /></div>
      <div className="between mt16"><h2 style={{ fontSize: 22, fontWeight: 800 }}>{p.name}</h2><span className="pill br">{p.size}</span></div>
      <div className="row mt8"><b style={{ fontSize: 22, color: '#C0502B' }}>{rp(p.price)}</b><span className="k row" style={{ gap: 4, marginLeft: 'auto' }}><Star size={14} fill="#E0A63E" color="#E0A63E" /> {p.rating} ({p.rev} ulasan)</span></div>
      <div className="grid3 mt12">{[['100% alami', Leaf], ['Menyuburkan tanah', TreePine], ['Ramah lingkungan', Globe]].map(([t, I]) => <div key={t} className="stat" style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 700 }}><I size={18} color="#3E8B3A" /><div className="mt8">{t}</div></div>)}</div>
      <div className="sec">Tentang Produk</div><p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--brown2)' }}>{p.desc}</p>
      <div className="between mt16"><b>Jumlah</b><div className="qty"><button onClick={() => setN(Math.max(1, n - 1))}><Minus size={16} /></button><b>{n}</b><button onClick={() => setN(n + 1)}><Plus size={16} /></button></div></div>
      <button className="btn pri mt16" onClick={() => addCart(n, p.name)}><ShoppingCart size={18} /> Tambah ke Keranjang · {rp(p.price * n)}</button>
    </div>
  )
}

/* 8 ---------------------------------------------------------------- */
export function Prediksi({ back, toast }) {
  const [ok, setOk] = useState(false)
  const W = [{ l: 'Sen', v: 9 }, { l: 'Sel', v: 10 }, { l: 'Rab', v: 11 }, { l: 'Kam', v: 15 }, { l: 'Jum', v: 12 }, { l: 'Sab', v: 13 }, { l: 'Min', v: 11 }]
  return (
    <div>
      <Header title="Prediksi Volume Ampas" onBack={back} />
      <div className="card"><div className="k">Prediksi minggu depan</div><div className="between"><div className="v" style={{ fontSize: 30 }}>14 – 16 kg</div><span className="pill">↑ 12%</span></div><div className="mt12"><Bars data={W} active={3} height={110} /></div></div>
      <div className="mt12"><MascotNote pose="thinking" text="Berdasarkan riwayat setoran 3 bulan terakhir, volume ampas di kedaimu cenderung meningkat di hari Kamis." /></div>
      <div className="sec">Rekomendasi Jadwal</div>
      <div className="card green"><div className="between"><div className="row"><CalendarDays size={22} color="#3E8B3A" /><div><b>Kamis, 31 Oktober 2026</b><div className="k">10.00 – 11.00</div></div></div><span className="ai"><Sparkles size={11} /> AI</span></div>
        <p style={{ fontSize: 13, margin: '10px 0 12px', lineHeight: 1.45 }}>Volume diperkirakan mencapai 15 kg, waktu terbaik untuk dijemput.</p>
        <button className={'btn ' + (ok ? 'grn' : 'pri') + ' sm'} onClick={() => { setOk(true); toast('Jadwal pintar diterima') }}>{ok ? <><Check size={16} /> Jadwal Diterima</> : 'Terima Jadwal'}</button></div>
      <div className="sec">Riwayat Prediksi</div>
      <div className="card" style={{ padding: '4px 14px' }}>{[['Minggu ini', '12,4 kg', '12,1 kg'], ['Minggu lalu', '10,2 kg', '10,5 kg'], ['2 minggu lalu', '8,6 kg', '8,7 kg']].map(([a, b, c]) => <div key={a} className="kv"><span className="grow">{a}</span><b>{b}</b><span className="k" style={{ width: 92, textAlign: 'right' }}>Aktual {c}</span></div>)}</div>
      <p className="k mt8" style={{ textAlign: 'center' }}>Akurasi prediksi rata-rata 97%</p>
    </div>
  )
}

/* 9 ---------------------------------------------------------------- */
export function Rute({ back, toast }) {
  const stops = [['Kedai Senja', 'Jl. Melati No. 12', '10.00 – 10.30'], ['Kopi Kita', 'Jl. Anggrek No. 5', '10.45 – 11.15'], ['Rasa Kopi', 'Jl. Kenanga No. 8', '11.30 – 12.00'], ['Pusat Olahan Loopi', 'Titik akhir', '12.30']]
  return (
    <div>
      <Header title="Rute Pengambilan" onBack={back} right={null} />
      <div className="between mb12"><span className="pill br">Kamis, 31 Okt 2026</span><span className="ai"><Sparkles size={11} /> Dioptimasi AI</span></div>
      <div className="map"><MapSvg route="multi" />
        <div className="card" style={{ position: 'absolute', right: 10, top: 10, padding: '8px 12px' }}><div className="k">Total jarak</div><b style={{ fontSize: 17 }}>12,4 km</b><div className="tg" style={{ fontSize: 11, fontWeight: 700 }}>↓ 28% lebih efisien</div></div></div>
      <div className="sec">Urutan Kunjungan</div>
      <div className="card" style={{ padding: '4px 14px' }}>{stops.map(([a, b, c], i) => (
        <div key={a} className="kv"><span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--grn)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flex: 'none' }}>{i + 1}</span>
          <div style={{ flex: 1 }}><b style={{ fontSize: 14 }}>{a}</b><div className="k">{b}, Bekasi</div></div><span className="k" style={{ fontWeight: 700, color: 'var(--brown)' }}>{c}</span></div>))}</div>
      <button className="btn pri mt16" onClick={() => toast('Navigasi dimulai')}><Navigation size={17} /> Lihat Navigasi</button>
    </div>
  )
}

/* 10 --------------------------------------------------------------- */
const CAPS = {
  Inspiratif: 'Setiap cangkir kopi punya cerita lanjutan ☕💚 Bulan ini Kedai Senja menyelamatkan 128 kg ampas kopi dari TPA bersama Loopi. Karena kopi enak juga bisa berdampak baik! 🌱✨',
  Edukasi: 'Tahukah kamu? Ampas kopi di TPA menghasilkan metana 🌍 Bulan ini 128 kg ampas dari Kedai Senja diolah jadi kompos, setara menghindari 68 kg CO₂e. #NgopiSirkular',
  Santai: 'Ngopi santai, bumi tetap aman 😎☕ 128 kg ampas kopi kami sudah "pulang" jadi pupuk bareng Loopi. Makasih udah ngopi di sini ya! 🌿',
  Profesional: 'Kedai Senja berkomitmen pada operasional berkelanjutan. Pada Oktober 2026, 128 kg ampas kopi berhasil dialihkan dari TPA dan diolah bersama Loopi, terverifikasi melalui laporan dampak.',
}
export function Konten({ back, toast }) {
  const [tab, setTab] = useState(0); const [g, setG] = useState('Inspiratif'); const [txt, setTxt] = useState(''); const [busy, setBusy] = useState(false)
  useEffect(() => { setBusy(true); setTxt(''); const full = CAPS[g]; let i = 0; const t = setInterval(() => { i += 3; setTxt(full.slice(0, i)); if (i >= full.length) { clearInterval(t); setBusy(false) } }, 18); return () => clearInterval(t) }, [g])
  return (
    <div>
      <Header title="Buat Konten Dampak" onBack={back} right={null} />
      <div className="seg">{['Caption', 'Laporan'].map((x, i) => <button key={x} className={tab === i ? 'on' : ''} onClick={() => setTab(i)}>{x}</button>)}</div>
      <div className="mt12" style={{ borderRadius: 22, overflow: 'hidden', position: 'relative', height: 200, background: 'linear-gradient(150deg,#C98D5E,#6B3F22 70%)' }}>
        <img src={A('plant')} alt="" style={{ position: 'absolute', left: 8, bottom: -8, width: 150 }} />
        <div style={{ position: 'absolute', right: 18, top: 34, color: '#fff', fontWeight: 800, fontSize: 22, lineHeight: 1.15, textAlign: 'right', transform: 'rotate(-6deg)', textShadow: '0 2px 8px rgba(0,0,0,.3)' }}>Dari Kopi<br />untuk Bumi<br />yang Lebih Baik</div>
        <img src="/logo.png" alt="" style={{ position: 'absolute', right: 12, top: 10, height: 24, background: '#fff', borderRadius: 8, padding: '2px 6px' }} />
        <button className="pill" style={{ position: 'absolute', right: 12, bottom: 12, background: '#fff', color: 'var(--brown)' }}><ImageIcon size={12} /> Ubah Gambar</button>
      </div>
      {tab === 0 ? (<>
        <div className="sec">Caption AI <span className="ai"><Sparkles size={11} /> {busy ? 'Menulis…' : 'Siap'}</span></div>
        <div className="card" style={{ minHeight: 120, fontSize: 14, lineHeight: 1.55 }}>{txt}<span style={{ opacity: busy ? 1 : 0 }}>▍</span>
          <div style={{ textAlign: 'right' }}><button className="pill br mt8" onClick={() => { navigator.clipboard?.writeText(CAPS[g]); toast('Caption disalin') }}><Copy size={12} /> Salin Caption</button></div></div>
        <div className="sec">Pilih Gaya Caption</div>
        <div className="chips">{Object.keys(CAPS).map((x) => <button key={x} className={'chip' + (g === x ? ' on' : '')} onClick={() => setG(x)}>{x}</button>)}</div>
      </>) : (<div className="card mt12 fade"><b>Ringkasan Laporan Oktober</b>{[['Ampas dialihkan', '128 kg'], ['CO₂e dihindari', '68 kg'], ['Setoran', '22 kali'], ['Skor kualitas rata-rata', '96/100']].map(([a, b]) => <div key={a} className="kv"><span className="grow">{a}</span><b>{b}</b></div>)}</div>)}
      <button className="btn pri mt16" onClick={() => toast('Membuka Instagram…')}><Instagram size={18} /> Bagikan ke Instagram</button>
    </div>
  )
}

/* 11 --------------------------------------------------------------- */
export function Riwayat({ back, go }) {
  const [f, setF] = useState('Semua')
  const data = [['31 Oktober 2026', 12.4, 'Dijadwalkan', 0], ['24 Oktober 2026', 12.4, 'Berhasil', 6.7], ['17 Oktober 2026', 8.6, 'Berhasil', 4.8], ['10 Oktober 2026', 10.2, 'Berhasil', 5.6], ['3 Oktober 2026', 9.8, 'Berhasil', 5.1], ['26 September 2026', 11.1, 'Berhasil', 6.2]]
  const list = data.filter((d) => f === 'Semua' || d[2] === f)
  return (
    <div>
      <Header title="Riwayat Setoran" onBack={back} right={null} />
      <div className="seg mb12">{['Semua', 'Berhasil', 'Dijadwalkan'].map((x) => <button key={x} className={f === x ? 'on' : ''} onClick={() => setF(x)}>{x}</button>)}</div>
      {list.map(([d, kg, st, co]) => (
        <div key={d} className="fade"><div className="k mt8 mb8" style={{ fontWeight: 700 }}>{d}</div>
          <button className="card row" style={{ width: '100%', textAlign: 'left' }} onClick={() => go(st === 'Berhasil' ? 'konfirmasi' : 'tracking')}>
            <Grounds size={60} /><div style={{ flex: 1 }}><div className="between"><b style={{ fontSize: 19 }}>{kg.toString().replace('.', ',')} kg</b><span className={'pill' + (st === 'Berhasil' ? '' : ' warn')}>{st}</span></div>
              <div className="row mt8" style={{ gap: 14, fontSize: 12 }}><span className="row" style={{ gap: 4 }}><Leaf size={13} color="#3E8B3A" /> Kualitas baik</span>{co > 0 && <span className="k">CO₂e {co.toString().replace('.', ',')} kg</span>}</div></div><ChevronRight size={18} color="#B5A393" /></button></div>
      ))}
    </div>
  )
}

/* 12 --------------------------------------------------------------- */
export function Register({ back, home }) {
  const [s, setS] = useState(0)
  const steps = ['Informasi Kedai', 'Lokasi', 'Operasional', 'Selesai']
  return (
    <div>
      <Header title="" onBack={s ? () => setS(s - 1) : back} right={null} />
      <h2 style={{ fontSize: 23, fontWeight: 800, textAlign: 'center', letterSpacing: -.5 }}>Pendaftaran Kedai</h2>
      <p className="sub" style={{ textAlign: 'center', margin: '6px 0 16px' }}>Lengkapi informasi kedai untuk mulai berkolaborasi dengan Loopi.</p>
      <div className="steps">{steps.map((t, i) => <div key={t} className={i < s ? 'ok' : i === s ? 'cur' : ''}><i>{i < s ? <Check size={15} /> : i + 1}</i>{t}</div>)}</div>
      <div key={s} className="fade">
        {s === 0 && (<><div className="field"><label>Nama Kedai</label><input className="input" defaultValue="Kedai Senja" /></div>
          <div className="field"><label>Jenis Usaha</label><select className="input" defaultValue="Kedai Kopi"><option>Kedai Kopi</option><option>Kafe & Resto</option><option>Hotel</option><option>Kantin</option></select></div>
          <div className="field"><label>Deskripsi Singkat</label><textarea className="input" defaultValue="Kedai kopi dengan konsep ramah lingkungan dan menggunakan bahan lokal." /></div>
          <div className="field"><label>Foto Kedai</label><div className="row">{[0, 1].map((k) => <div key={k} style={{ width: 92, height: 76, borderRadius: 14, background: k ? 'linear-gradient(150deg,#8A5A35,#3A2214)' : 'linear-gradient(150deg,#C98D5E,#6B3F22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Store size={26} color="#fff" /></div>)}
            <button style={{ width: 92, height: 76, borderRadius: 14, border: '2px dashed var(--line)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, fontSize: 11, color: 'var(--mu)' }}><Camera size={20} />Tambah</button></div></div></>)}
        {s === 1 && (<><div className="field"><label>Alamat</label><input className="input" defaultValue="Jl. Melati No. 12, Bekasi" /></div><div className="map" style={{ height: 200 }}><MapSvg h={200} /></div><p className="k mt8">Geser pin untuk menyesuaikan titik penjemputan.</p></>)}
        {s === 2 && (<><div className="field"><label>Jam Operasional</label><input className="input" defaultValue="08.00 – 22.00" /></div><div className="field"><label>Perkiraan cangkir per hari</label><input className="input" defaultValue="200" /></div>
          <div className="card green row"><Sparkles size={18} color="#3E8B3A" /><div style={{ fontSize: 13 }}>Perkiraan ampas: <b>±150 kg/bulan</b>. Rekomendasi pengambilan 2× seminggu.</div></div>
          <div className="field mt12"><label>Paket Langganan</label><div className="grid2"><div className="card"><b>Basic</b><div className="k">Rp150.000/bln</div></div><div className="card green" style={{ borderColor: 'var(--grn2)' }}><b>Pro ✦</b><div className="k">Rp250.000/bln</div></div></div></div></>)}
        {s === 3 && (<div style={{ textAlign: 'center' }}><img src={A('celebrate')} alt="" style={{ width: 170 }} /><h3 style={{ fontSize: 20, marginTop: 8 }}>Kedai Senja terdaftar! 🎉</h3><p className="sub" style={{ margin: '8px 0 0' }}>Wadah ampas dan panduan pemilahan akan diantar dalam 2 hari kerja. Nikmati 3 bulan pertama gratis.</p></div>)}
      </div>
      <button className="btn pri mt16" onClick={() => (s < 3 ? setS(s + 1) : home())}>{s < 3 ? 'Lanjut' : 'Masuk ke Beranda'}</button>
    </div>
  )
}

/* 13 --------------------------------------------------------------- */
export function Notif({ back, go }) {
  const [f, setF] = useState('Semua')
  const N = [['Jadwal', CalendarDays, '#EAF3E1', '#3E8B3A', 'Jadwal pengambilan dikonfirmasi', 'Kamis, 31 Okt · 10.00 – 11.00', '2 jam lalu', 'jadwal'], ['Jadwal', Truck, '#FDE8E1', '#D2552E', 'Petugas sedang dalam perjalanan', 'Estimasi tiba 10 menit lagi', '3 jam lalu', 'tracking'],
    ['Setoran', CircleCheck, '#EAF3E1', '#3E8B3A', 'Setoran berhasil dicatat', '12,4 kg ampas · CO₂e dihindari 6,7 kg', '1 hari lalu', 'riwayat'], ['Setoran', Leaf, '#EAF3E1', '#3E8B3A', 'Laporan dampak bulanan siap', 'Lihat ringkasan kontribusi Oktober', '1 hari lalu', 'laporan'],
    ['Promo', Megaphone, '#FFF1DD', '#C26A1E', 'Produk baru tersedia!', 'Sabun kopi & briket bioarang', '2 hari lalu', 'katalog'], ['Promo', Award, '#FFF1DD', '#C26A1E', 'Selamat! Level 2 Eco Partner 🎉', 'Kedaimu naik level', '3 hari lalu', 'profil']]
  return (
    <div>
      <Header title="Notifikasi" onBack={back} right={null} />
      <div className="chips mb12">{['Semua', 'Jadwal', 'Setoran', 'Promo'].map((x) => <button key={x} className={'chip' + (f === x ? ' on' : '')} onClick={() => setF(x)}>{x}</button>)}</div>
      <div className="col gap8">{N.filter((n) => f === 'Semua' || n[0] === f).map(([, I, bg, c, t, d, w, to]) => (
        <button key={t} className="card row fade" style={{ textAlign: 'left', width: '100%' }} onClick={() => go(to)}><span className="tile" style={{ padding: 0, border: 0, background: bg, width: 46, height: 46, justifyContent: 'center', color: c, borderRadius: 14 }}><I size={20} /></span>
          <div style={{ flex: 1 }}><b style={{ fontSize: 13.5 }}>{t}</b><div className="k">{d}</div><div className="k" style={{ fontSize: 11, marginTop: 3 }}>{w}</div></div><ChevronRight size={16} color="#B5A393" /></button>))}</div>
    </div>
  )
}

/* 14 / 15 ---------------------------------------------------------- */
export function Pengaturan({ back, go, logout }) {
  const items = [['Informasi Kedai', Store, 'profil'], ['Lokasi & Jam Operasional', Clock], ['Metode Pengambilan', Truck], ['Notifikasi', Bell, 'notif'], ['Ubah Password', Lock, 'forgot'], ['Bahasa', Globe, null, 'Indonesia'], ['Keamanan & Privasi', Shield], ['Pusat Bantuan', HelpCircle], ['Tentang Loopi', Leaf]]
  return (
    <div>
      <Header title="Pengaturan" onBack={back} right={null} />
      <button className="card row" style={{ width: '100%', textAlign: 'left' }} onClick={() => go('profil')}><div className="av g" style={{ width: 54, height: 54, fontSize: 18 }}>KS</div><div style={{ flex: 1 }}><b style={{ fontSize: 16 }}>Kedai Senja</b><div className="k">Kedai Kopi · Lv 2 Eco Partner</div></div><ChevronRight size={18} /></button>
      <div className="card mt12" style={{ padding: '2px 14px' }}>{items.map(([t, I, to, r]) => <button key={t} className="listitem" style={{ width: '100%', textAlign: 'left' }} onClick={() => to && go(to)}><I size={19} className="li" /><span className="grow">{t}</span>{r && <span className="k">{r}</span>}<ChevronRight size={16} color="#B5A393" /></button>)}</div>
      <button className="card mt12 row" style={{ width: '100%', color: '#D2552E', fontWeight: 700 }} onClick={logout}><LogOut size={19} /> Keluar</button>
      <p className="k mt12" style={{ textAlign: 'center' }}>Loopi v1.0 · Tim EUREKA</p>
    </div>
  )
}
export function Profil({ go }) {
  return (
    <div>
      <div className="cover"><svg width="100%" height="100%" viewBox="0 0 390 150" preserveAspectRatio="xMidYMid slice"><g opacity=".22" fill="#fff">{[...Array(9)].map((_, i) => <rect key={i} x={i * 46 + 6} y={30 + (i % 3) * 8} width="34" height="60" rx="6" />)}</g><circle cx="320" cy="20" r="60" fill="#E7B98F" opacity=".25" /></svg>
        <button className="pill" style={{ position: 'absolute', right: 16, top: 14, background: '#fff', color: 'var(--brown)' }} onClick={() => go('pengaturan')}><Pencil size={12} /> Edit</button></div>
      <div className="av g" style={{ width: 86, height: 86, fontSize: 28, marginTop: -44, border: '4px solid #fff', position: 'relative' }}>KS</div>
      <div className="between mt8"><h2 style={{ fontSize: 22, fontWeight: 800 }}>Kedai Senja</h2><span className="pill">Lv 2 Eco Partner</span></div>
      <div className="grid3 mt12"><div className="stat"><div className="k">Total setoran</div><div className="v">128<small> kg</small></div></div><div className="stat"><div className="k">CO₂e dihindari</div><div className="v">258<small> kg</small></div></div><div className="stat"><div className="k">Setara pohon</div><div className="v">29</div></div></div>
      <div className="card mt12" style={{ padding: '2px 14px' }}>{[[Store, 'Jenis usaha', 'Kedai Kopi'], [MapPin, 'Alamat', 'Jl. Melati No. 12, Bekasi'], [Clock, 'Jam operasional', '08.00 – 22.00'], [Phone, 'Kontak', '0812 3456 7890'], [Mail, 'Email', 'senja@kedaicoffee.id']].map(([I, a, b]) => <div key={a} className="listitem"><I size={18} className="li" /><div className="grow"><div className="k">{a}</div><b style={{ fontSize: 14 }}>{b}</b></div></div>)}</div>
      <div className="mt12"><MascotNote pose="plant" title="Terima kasih!" text="Kedaimu telah berkontribusi untuk lingkungan yang lebih baik." /></div>
      <button className="btn out mt12" onClick={() => go('pengaturan')}><Settings size={17} /> Pengaturan</button>
    </div>
  )
}

/* 17 --------------------------------------------------------------- */
export function Konfirmasi({ back, home, toast }) {
  const [ok, setOk] = useState(false)
  return (
    <div>
      <Header title="Konfirmasi Setoran" onBack={back} right={null} />
      <p className="sub">Pastikan informasi setoran sudah benar.</p>
      <div className="row"><div className="cam" style={{ width: 120, height: 110, borderRadius: 18 }}><div className="bowl" /><div className="grounds" /></div>
        <div className="col gap8" style={{ flex: 1 }}><div className="card green row" style={{ padding: 10 }}><Leaf size={18} color="#3E8B3A" /><div><div className="k">Kualitas ampas</div><b className="tg">Baik</b></div></div><button className="btn out sm"><Camera size={15} /> Ubah Foto</button></div></div>
      <div className="card mt12" style={{ padding: '2px 14px' }}>{[[Scale, 'Berat aktual', '12,4 kg'], [Leaf, 'CO₂e dihindari', '6,7 kg'], [Clock, 'Tanggal & waktu', '24 Okt 2026 · 10.15'], [MapPin, 'Lokasi', 'Kedai Senja'], [User, 'Petugas', 'Dimas · Tim Loopi']].map(([I, a, b]) => <div key={a} className="kv"><I size={18} color="#5C3620" /><span className="grow">{a}</span><b className={a === 'CO₂e dihindari' ? 'tg' : ''}>{b}</b></div>)}</div>
      <div className="mt12"><MascotNote pose="plant" title="Terima kasih!" text="Setoranmu membantu mengurangi emisi dan mendukung lingkungan yang lebih baik. 🌱" /></div>
      <button className={'btn mt16 ' + (ok ? 'grn' : 'pri')} onClick={() => { if (ok) return home(); setOk(true); toast('Setoran dikonfirmasi') }}>{ok ? <><Check size={18} /> Terkonfirmasi · Ke Beranda</> : 'Konfirmasi Setoran'}</button>
    </div>
  )
}

/* 18 --------------------------------------------------------------- */
export function Tracking({ back, toast }) {
  const [step, setStep] = useState(2)
  useEffect(() => { const t = setInterval(() => setStep((s) => (s < 4 ? s + 1 : s)), 4000); return () => clearInterval(t) }, [])
  const S = [['Penjadwalan dikonfirmasi', '24 Okt 2026, 08.00'], ['Petugas menuju lokasi', '24 Okt 2026, 09.45'], ['Tiba di kedai', '24 Okt 2026, 10.00'], ['Proses penimbangan', 'Ampas ditimbang & difoto'], ['Pengambilan selesai', 'Data tercatat otomatis']]
  return (
    <div>
      <Header title="Proses Pengambilan" onBack={back} right={null} />
      <p className="sub">Pantau proses pengambilan ampas dari tim Loopi secara langsung.</p>
      <div className="card tl" style={{ padding: '4px 14px' }}>{S.map(([a, b], i) => <div key={a} className={'st ' + (i < step ? 'done' : i === step ? 'now' : 'pend')}><span className="d">{i < step ? <Check size={16} /> : i === step ? <Bike size={15} /> : <span style={{ width: 8, height: 8, borderRadius: 4, background: 'currentColor' }} />}</span><div><b>{a}</b><small>{b}</small></div></div>)}</div>
      <div className="map mt12" style={{ height: 200 }}><MapSvg h={200} /><div className="card" style={{ position: 'absolute', right: 10, top: 10, padding: '8px 12px', fontSize: 12, fontWeight: 700 }}>{step >= 2 ? 'Tim Loopi sudah tiba ✓' : 'Tiba 5 menit lagi'}</div></div>
      <div className="card mt12 row"><div className="av g">DM</div><div style={{ flex: 1 }}><b>Dimas</b><div className="k">Tim Loopi · Motor listrik</div></div><button className="iconbtn" onClick={() => toast('Membuka chat…')}><MessageCircle size={18} /></button><a className="call" href="tel:081234567890"><Phone size={18} /></a></div>
    </div>
  )
}

/* 20 --------------------------------------------------------------- */
export function Forgot({ back, toast }) {
  const [sent, setSent] = useState(false)
  return (
    <div>
      <Header title="" onBack={back} right={null} />
      <div style={{ textAlign: 'center' }}><h2 style={{ fontSize: 25, fontWeight: 800, letterSpacing: -.5 }}>Lupa Password</h2><p className="sub" style={{ margin: '8px 0 0' }}>Jangan khawatir, kami bantu mengatur ulang password-mu.</p><img src={A('wink')} alt="" style={{ width: 150, margin: '10px 0' }} /></div>
      {!sent ? (<div className="fade">
        <div className="field"><label>Masukkan email kamu</label><div className="inwrap"><Mail size={18} /><input className="input" placeholder="contoh@kedai.com" /></div></div>
        <button className="btn pri" onClick={() => { setSent(true); toast('Kode verifikasi dikirim') }}>Kirim Kode Verifikasi</button>
        <div className="row mt12" style={{ gap: 10 }}><i style={{ flex: 1, height: 1, background: 'var(--line)' }} /><span className="k">atau</span><i style={{ flex: 1, height: 1, background: 'var(--line)' }} /></div>
        <div className="field mt12"><label>Masukkan nomor telepon</label><div className="inwrap"><Phone size={18} /><input className="input" placeholder="0812 3456 7890" /></div></div>
        <button className="btn pri" onClick={() => { setSent(true); toast('Kode dikirim via SMS') }}>Kirim Kode Verifikasi</button>
      </div>) : (<div className="fade"><label className="k" style={{ fontWeight: 700 }}>Masukkan 4 digit kode</label>
        <div className="row mt8" style={{ justifyContent: 'space-between' }}>{[0, 1, 2, 3].map((i) => <input key={i} maxLength={1} className="input" style={{ width: 66, height: 64, textAlign: 'center', fontSize: 24, fontWeight: 800 }} />)}</div>
        <button className="btn pri mt16" onClick={() => { toast('Password berhasil diatur ulang'); back() }}>Verifikasi</button><p className="k mt12" style={{ textAlign: 'center' }}>Tidak menerima kode? <button className="link" onClick={() => toast('Kode dikirim ulang')}>Kirim ulang</button></p></div>)}
      <div className="mt16"><MascotNote pose="happy" text="Kami akan mengirimkan kode verifikasi untuk mengatur ulang password akunmu." /></div>
    </div>
  )
}
