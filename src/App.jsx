import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Home, CalendarDays, ScanLine, BarChart3, User, Signal, Wifi, BatteryFull, CircleCheck } from 'lucide-react'
import * as S from './screens.jsx'

/* id: [title, component, tab, showTabbar] */
export const ROUTES = {
  onboarding: ['Onboarding', S.Onboarding, null, false, 'full'],
  beranda: ['Beranda', S.Beranda, 'beranda', true],
  scan: ['Scan AI', S.Scan, 'scan', true],
  jadwal: ['Jadwal Pengambilan', S.Jadwal, 'jadwal', true],
  dampak: ['Laporan Dampak', S.Dampak, 'dampak', true],
  katalog: ['Katalog Produk', S.Katalog, 'beranda', true],
  hasilscan: ['Scan Kualitas (Detail)', S.HasilScan, 'scan', false],
  prediksi: ['Jadwal Pintar (Prediksi)', S.Prediksi, 'jadwal', false],
  rute: ['Optimasi Rute', S.Rute, 'jadwal', false],
  konten: ['Caption & Laporan AI', S.Konten, 'dampak', false],
  riwayat: ['Riwayat Setoran', S.Riwayat, 'dampak', true],
  register: ['Pendaftaran Kedai', S.Register, null, false],
  notif: ['Notifikasi', S.Notif, 'beranda', true],
  pengaturan: ['Pengaturan', S.Pengaturan, 'profil', true],
  profil: ['Profil Kedai', S.Profil, 'profil', true],
  produk: ['Detail Produk', S.Produk, 'beranda', false],
  konfirmasi: ['Konfirmasi Setoran', S.Konfirmasi, 'scan', false],
  tracking: ['Tracking Pengambilan', S.Tracking, 'jadwal', false],
  laporan: ['Detail Laporan Dampak', S.Laporan, 'dampak', false],
  forgot: ['Lupa Password', S.Forgot, null, false],
  login: ['Masuk', S.Login, null, false],
}
const ORDER = ['onboarding', 'beranda', 'scan', 'jadwal', 'dampak', 'katalog', 'hasilscan', 'prediksi', 'rute', 'konten', 'riwayat', 'register', 'notif', 'pengaturan', 'profil', 'produk', 'konfirmasi', 'tracking', 'laporan', 'forgot']
const TABS = [['beranda', 'Beranda', Home], ['jadwal', 'Jadwal', CalendarDays], ['scan', '', ScanLine], ['dampak', 'Laporan', BarChart3], ['profil', 'Profil', User]]

function parseHash() {
  const [id, param] = window.location.hash.replace(/^#\/?/, '').split('/')
  return ROUTES[id] ? { id, param } : { id: 'onboarding' }
}

export default function App() {
  const [stack, setStack] = useState(() => [parseHash()])
  const [dir, setDir] = useState('f')
  const [toast, setToast] = useState(null)
  const [cart, setCart] = useState(0)
  const scrollRef = useRef(null)
  const cur = stack[stack.length - 1]
  const [, Comp, tab, bar, mode] = ROUTES[cur.id]

  useEffect(() => { const h = '#/' + cur.id + (cur.param ? '/' + cur.param : ''); if (window.location.hash !== h) window.history.replaceState(null, '', h); scrollRef.current && (scrollRef.current.scrollTop = 0) }, [cur])
  useEffect(() => { const f = () => setStack([parseHash()]); window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f) }, [])

  const go = useCallback((id, param) => { setDir('f'); setStack((s) => [...s, { id, param }]) }, [])
  const back = useCallback(() => { setDir('b'); setStack((s) => (s.length > 1 ? s.slice(0, -1) : [{ id: 'beranda' }])) }, [])
  const home = useCallback(() => { setDir('f'); setStack([{ id: 'beranda' }]) }, [])
  const jump = (id) => { setDir('f'); setStack(id === 'beranda' || id === 'onboarding' ? [{ id }] : [{ id: 'beranda' }, { id }]) }
  const showToast = useCallback((t) => { setToast(t); clearTimeout(window.__tt); window.__tt = setTimeout(() => setToast(null), 2200) }, [])
  const addCart = (n, name) => { setCart((c) => c + n); showToast(`${n} × ${name} masuk keranjang`) }

  const props = { go, back, home, toast: showToast, param: cur.param, cart, addCart, logout: () => { setStack([{ id: 'onboarding' }]) } }

  return (
    <div className="stage">
      <aside className="side">
        <img src="/logo.png" alt="Loopi" />
        <h1>Aplikasi Loopi</h1>
        <p>Ekosistem sirkular ampas kopi berbasis AI. Klik layar di bawah atau jelajahi langsung di ponsel.</p>
        <div className="chips"><span>Clean</span><span>Circular</span><span>Measurable Impact</span></div>
        <div className="list">{ORDER.map((id, i) => <button key={id} className={cur.id === id ? 'on' : ''} onClick={() => jump(id)}><b>{i + 1}</b>{ROUTES[id][0]}</button>)}</div>
      </aside>
      <div className="phone">
        <div className="screenwrap">
          <div className="island" />
          {mode === 'full' ? <Comp {...props} /> : (
            <div className="app">
              <div className="statusbar"><span>9:41</span><span className="ic"><Signal size={15} /><Wifi size={15} /><BatteryFull size={20} /></span></div>
              <div className="scroll" ref={scrollRef}><div key={stack.length + cur.id + (cur.param || '')} className={'screen' + (dir === 'b' ? ' back' : '')}><Comp {...props} /></div></div>
              {bar && (
                <nav className="tabbar">{TABS.map(([id, l, I]) => id === 'scan'
                  ? <button key={id} className="fab" onClick={() => jump('scan')} aria-label="Scan"><ScanLine size={26} /></button>
                  : <button key={id} className={'tab' + (tab === id ? ' on' : '')} onClick={() => jump(id)}><I size={22} />{l}<span className="dot" /></button>)}</nav>
              )}
            </div>
          )}
          {toast && <div className="toast"><CircleCheck size={18} color="#9FD18E" /> {toast}</div>}
        </div>
      </div>
    </div>
  )
}
