import React from 'react'
import { ChevronLeft, Info } from 'lucide-react'

export const A = (pose) => `/ampi/${pose}.png`

export function Header({ title, onBack, right, center }) {
  return (
    <div className={'hdr' + (center ? ' c' : '')}>
      {onBack ? <button className="iconbtn" onClick={onBack} aria-label="Kembali"><ChevronLeft size={20} /></button> : null}
      <h2>{title}</h2>
      {right === undefined ? (onBack ? <button className="iconbtn ghost" aria-label="Info"><Info size={20} /></button> : null) : right}
    </div>
  )
}

export function Bars({ data, active, max, height = 120, labels = true }) {
  const m = max || Math.max(...data.map((d) => d.v))
  return (
    <div className="bars" style={{ height }}>
      {data.map((d, i) => (
        <div key={d.l} className={i === active ? 'on' : ''}>
          <i style={{ height: `${(d.v / m) * 78}%` }} />
          {labels && d.l}
        </div>
      ))}
    </div>
  )
}

export function MascotNote({ pose = 'happy', title, text, green }) {
  return (
    <div className={'mascot-note' + (green ? ' g' : '')}>
      <img src={A(pose)} alt="" />
      <div>{title && <b>{title}</b>}<span>{text}</span></div>
    </div>
  )
}

/* ---- product illustrations (pure SVG, no photos) ---- */
export function ProductArt({ type, h = 118 }) {
  const bg = { pupuk: 'linear-gradient(160deg,#EAF3E1,#D6E7CC)', media: 'linear-gradient(160deg,#F3E7D7,#E6D2BA)', sabun: 'linear-gradient(160deg,#F6ECE0,#EBD8C2)', briket: 'linear-gradient(160deg,#E9E2DA,#D3C6B8)' }[type]
  return (
    <div className="pimg" style={{ background: bg, height: h }}>
      <svg viewBox="0 0 160 110" width="78%" height="88%">
        <ellipse cx="80" cy="100" rx="56" ry="7" fill="#3A2214" opacity=".14" />
        {type === 'pupuk' && (<g>
          <path d="M52 22h56l6 74H46z" fill="#C9A27A" /><path d="M52 22h56l2 12H50z" fill="#A9825C" />
          <rect x="60" y="44" width="40" height="34" rx="6" fill="#FFF8EE" />
          <text x="80" y="60" fontSize="11" fontWeight="800" textAnchor="middle" fill="#3A2214" fontFamily="Plus Jakarta Sans">Loopi</text>
          <text x="80" y="71" fontSize="6" textAnchor="middle" fill="#3E8B3A" fontFamily="Plus Jakarta Sans">Pupuk Organik</text>
          <path d="M112 60c14-16 30-12 32-6-8 12-22 14-32 6z" fill="#5E9B4F" /><path d="M118 70c10-6 22 0 22 6-10 4-18 2-22-6z" fill="#7DB86C" />
        </g>)}
        {type === 'media' && (<g>
          <path d="M30 56h100c-4 26-22 40-50 40S34 82 30 56z" fill="#EFE6DA" /><ellipse cx="80" cy="56" rx="50" ry="12" fill="#5A3820" />
          {[...Array(28)].map((_, i) => <circle key={i} cx={36 + (i * 37) % 88} cy={50 + (i * 13) % 12} r={1.6 + (i % 3)} fill={i % 2 ? '#7A5438' : '#3A2214'} />)}
          <path d="M80 50c-2-14 4-22 10-26" stroke="#3E8B3A" strokeWidth="3" fill="none" /><path d="M90 25c10-8 22-4 22 2-8 8-18 6-22-2z" fill="#5E9B4F" />
        </g>)}
        {type === 'sabun' && (<g>
          <rect x="36" y="44" width="56" height="40" rx="10" fill="#C98D5E" /><rect x="36" y="44" width="56" height="12" rx="6" fill="#DDA678" />
          <rect x="74" y="56" width="52" height="36" rx="10" fill="#8A5530" /><rect x="74" y="56" width="52" height="10" rx="5" fill="#A86C40" />
          {[...Array(12)].map((_, i) => <circle key={i} cx={80 + (i * 17) % 42} cy={70 + (i * 7) % 18} r="1.4" fill="#4A2C18" />)}
        </g>)}
        {type === 'briket' && (<g>
          {[[40, 52], [72, 52], [104, 52], [56, 30], [88, 30]].map(([x, y], i) => (<g key={i}><path d={`M${x} ${y + 10}l14-8 14 8v20l-14 8-14-8z`} fill="#2E2520" /><path d={`M${x} ${y + 10}l14-8 14 8-14 8z`} fill="#4A3E36" /><path d={`M${x + 14} ${y + 18}l14-8v20l-14 8z`} fill="#211A16" /></g>))}
        </g>)}
      </svg>
    </div>
  )
}

export function Grounds({ size = 56, r = 14 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: r, flex: 'none', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 50% 55%,#6B4A33,#3A2214 75%)' }}>
      <div className="grounds" style={{ maskImage: 'none', WebkitMaskImage: 'none', opacity: .85 }} />
    </div>
  )
}

export function MapSvg({ route = 'single', h = 260 }) {
  return (
    <svg width="100%" height={h} viewBox="0 0 350 260" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
      <rect width="350" height="260" fill="#F2EDE4" />
      <rect x="0" y="0" width="120" height="90" rx="14" fill="#E3EFDB" /><rect x="250" y="170" width="110" height="100" rx="14" fill="#E3EFDB" />
      <path d="M270 0c-10 30 10 60 40 70s40 10 40 10V0z" fill="#CFE3F3" />
      {['M-10 150 L360 120', 'M150 -10 L178 270', 'M-10 50 L360 80', 'M280 -10 L250 270', 'M40 270 L100 -10'].map((d, i) => <path key={i} d={d} stroke="#fff" strokeWidth={i < 2 ? 18 : 9} />)}
      <text x="190" y="190" fontSize="12" fill="#A89888" fontFamily="Plus Jakarta Sans" fontWeight="600">Bekasi</text>
      {route === 'single' ? (<>
        <path className="route" d="M60 62 C110 70 150 86 162 132 S230 190 262 214" stroke="#3E8B3A" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="60" cy="62" r="7" fill="#fff" stroke="#3E8B3A" strokeWidth="4" />
        <g transform="translate(162 132)"><circle r="18" fill="#3E8B3A" opacity=".25" className="pulse" /><circle r="11" fill="#3E8B3A" stroke="#fff" strokeWidth="3" /></g>
        <g transform="translate(262 200)"><path d="M0 16C-13 0-13-15 0-15S13 0 0 16z" fill="#3A2214" /><circle cy="-3" r="5" fill="#fff" /></g>
      </>) : (<>
        <path className="route" d="M70 70 C110 90 120 110 140 128 S190 150 210 180 S240 214 262 226" stroke="#3E8B3A" strokeWidth="5" fill="none" strokeLinecap="round" />
        {[[70, 70], [140, 128], [210, 180], [262, 226]].map(([x, y], i) => (<g key={i} transform={`translate(${x} ${y})`}><circle r="15" fill="#3E8B3A" stroke="#fff" strokeWidth="3" /><text y="5" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Plus Jakarta Sans">{i + 1}</text></g>))}
        <g transform="translate(40 100)"><rect x="-14" y="-12" width="28" height="22" rx="6" fill="#5C3620" /><circle cx="-7" cy="12" r="4" fill="#2B1A10" /><circle cx="8" cy="12" r="4" fill="#2B1A10" /></g>
      </>)}
    </svg>
  )
}
