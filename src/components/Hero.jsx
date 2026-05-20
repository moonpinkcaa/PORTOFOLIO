export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#0a0000' }}>

      {/* Global top red line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 z-20"
        style={{ background: 'linear-gradient(90deg, #c1121f 40%, #8b0000 100%)' }} />

      {/* ── MAIN SPLIT BLOCK ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[85vh] items-stretch">

          {/* ════ LEFT PANEL — Profile Card ════ */}
          <div className="md:col-span-4 flex flex-col gap-3">

            {/* ── CARD UTAMA (Light Background) ── */}
            <div className="rounded-[2rem] overflow-hidden flex-1 flex flex-col p-2"
              style={{
                background: '#e8e8e8',
                border: '1px solid rgba(193,18,31,0.2)',
                boxShadow: '0 12px 50px rgba(0,0,0,0.6)',
              }}>

              {/* ── TOP SECTION (Light background, Red text) ── */}
              <div className="relative flex items-start justify-between p-3 pb-4">
                {/* Kiri: Icon & Teks */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Phone icon from reference */}
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-6"
                    style={{ background: '#a00d18', color: '#fff' }}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-display font-bold text-sm leading-tight"
                      style={{ color: '#a00d18' }}>
                      Anisa Fatimamatus Z.
                    </p>
                    <p className="text-[11px] mt-1 font-display font-semibold"
                      style={{ color: '#a00d18', opacity: 0.8 }}>
                      Desain Grafis
                    </p>
                  </div>
                </div>

                {/* Kanan: Foto portrait (Rounded rectangle with border) */}
                <div className="relative w-24 h-28 shrink-0 rounded-2xl overflow-hidden"
                  style={{ border: '2px solid #a00d18' }}>
                  <img
                    src="/FOTO_DIRI.jpeg"
                    alt="Anisa Fatimamatus Zahro"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Red overlay gradient */}
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg,transparent 60%,rgba(160,13,24,0.3))' }} />


                </div>
              </div>

              {/* ── DATA ROWS (Dark Red Inner Box) ── */}
              <div className="flex-1 rounded-[1.5rem] p-5 flex flex-col justify-center"
                style={{
                  background: 'linear-gradient(180deg, #7a0000 0%, #300000 100%)',
                  boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.5)',
                }}>
                {[
                  { label: 'pengalaman', value: '3+ tahun', hasBar: false },
                  { label: 'mulai', value: '2024', hasBar: false },
                  { label: 'selesai', value: '2026', hasBar: false },
                  { label: 'jadwal kerja\nmingguan', value: null, hasBar: true },
                ].map((row, i) => (
                  <div key={i}>
                    {/* Row */}
                    <div className="flex items-center justify-between py-3.5">
                      <span className="text-xs font-display font-bold leading-tight text-white"
                        style={{ whiteSpace: 'pre-line' }}>
                        {row.label}
                      </span>

                      {row.hasBar ? (
                        /* Progress bar */
                        <div className="flex flex-col gap-1.5 items-end">
                          <div className="h-1.5 w-16 rounded-full bg-white" />
                          <div className="h-1.5 w-24 rounded-full bg-white" />
                        </div>
                      ) : (
                        <span className="text-xs font-display font-bold text-white">
                          {row.value}
                        </span>
                      )}
                    </div>
                    {/* Divider */}
                    {i < 3 && (
                      <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── MINI CARD (Light Background) ── */}
            <div className="rounded-[1.5rem] overflow-hidden"
              style={{
                background: '#e8e8e8',
                border: '1px solid rgba(193,18,31,0.2)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}>
              <div className="flex items-center justify-between px-3 py-2.5">
                {/* Kiri: mini foto + teks */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0"
                    style={{ border: '1.5px solid #a00d18' }}>
                    <img src="/FOTO_DIRI.jpeg" alt="AFZ"
                      className="w-full h-full object-cover object-center" />
                  </div>
                  <div>
                    <p className="text-xs font-display font-bold leading-tight"
                      style={{ color: '#a00d18' }}>
                      Anisa Fatimamatus Z.
                    </p>
                    <p className="text-[10px] font-display mt-0.5"
                      style={{ color: '#a00d18', opacity: 0.8 }}>
                      Desain Grafis
                    </p>
                  </div>
                </div>

                {/* Kanan: tombol "+" */}
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{
                    background: '#a00d18',
                    boxShadow: '0 4px 10px rgba(160,13,24,0.4)',
                  }}>
                  +
                </button>
              </div>
            </div>

            {/* ── CTA BUTTON (Dark transparent) ── */}
            <a href="#about"
              className="block w-full text-center py-3.5 rounded-[1.2rem] text-xs font-display font-bold transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, rgba(160,13,24,0.2) 0%, rgba(48,0,0,0.6) 100%)',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(160,13,24,0.4) 0%, rgba(122,0,0,0.8) 100%)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(160,13,24,0.2) 0%, rgba(48,0,0,0.6) 100%)';
              }}>
              Lihat Tentang Saya
            </a>
          </div>

          {/* ════ RIGHT PANEL — Background foto blur + text overlay ════ */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[400px]"
            style={{
              border: '1px solid rgba(193,18,31,0.15)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            }}>

            {/* Background foto blur dari public */}
            <img
              src="/BG_BLUR_PORTO.jpeg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ filter: 'brightness(0.35) saturate(0.8)' }}
            />

            {/* Overlay gradient di atas foto */}
            <div className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg,rgba(20,0,0,0.6) 0%,rgba(10,0,0,0.3) 50%,rgba(30,0,0,0.7) 100%)',
              }} />

            {/* Red vignette edges */}
            <div className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center,transparent 40%,rgba(10,0,0,0.7) 100%)',
              }} />

            {/* Dot pattern overlay */}
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle,rgba(193,18,31,0.08) 1px,transparent 1px)',
                backgroundSize: '22px 22px',
              }} />

            {/* Decorative stars */}
            <span className="absolute top-6 left-8 text-xl opacity-60 animate-float"
              style={{ color: '#ffd166', filter: 'drop-shadow(0 0 6px #ffd166)' }}>✦</span>
            <span className="absolute top-14 right-24 text-sm opacity-40 animate-float animation-delay-600"
              style={{ color: '#ff7b7b' }}>★</span>
            <span className="absolute bottom-20 right-10 text-2xl opacity-50 animate-float animation-delay-200"
              style={{ color: '#ffd166' }}>✿</span>
            <span className="absolute bottom-12 left-16 text-sm opacity-30 animate-float animation-delay-800"
              style={{ color: '#8b0000' }}>◆</span>

            {/* ── TOP-RIGHT: teks overlay ── */}
            <div className="absolute top-8 right-8 max-w-[52%] text-right">
              <h1 className="font-display font-black leading-tight mb-3"
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                  background: 'linear-gradient(135deg,#ff7b7b,#c1121f,#8b0000)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(193,18,31,0.4))',
                }}>
                terus bangun<br />mimpimu
              </h1>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,180,180,0.55)' }}>
                jangan berhenti berkarya karena tantangan<br />terus berkembang, terus bersinar
              </p>

              {/* Avatar + badge */}
              <div className="flex items-center justify-end gap-2 mt-4">
                <div className="w-7 h-7 rounded-full overflow-hidden"
                  style={{ border: '1.5px solid rgba(193,18,31,0.5)' }}>
                  <img src="/FOTO_DIRI.jpeg" alt="A"
                    className="w-full h-full object-cover object-center" />
                </div>
                <div className="px-3 py-1 rounded-full text-[10px] font-display font-semibold text-white"
                  style={{
                    background: 'rgba(193,18,31,0.45)',
                    border: '1px solid rgba(193,18,31,0.6)',
                  }}>
                  ● siap bekerja
                </div>
              </div>
            </div>

            {/* ── BOTTOM-RIGHT: quote ── */}
            <div className="absolute bottom-8 right-8 max-w-[52%] text-right">
              <p className="font-serif text-sm italic leading-relaxed mb-2"
                style={{ color: 'rgba(255,180,180,0.65)' }}>
                "mimpi besar dengan jiwa kreatif ini,<br />
                bagaimanapun kita memulai — ada<br />
                hal-hal indah menanti kita"
              </p>
              <p className="text-[10px] tracking-widest font-display"
                style={{ color: 'rgba(193,18,31,0.5)' }}>
                anisa.portfolio.com
              </p>
            </div>

            {/* ── BOTTOM-LEFT: big faint name ── */}
            <div className="absolute bottom-0 left-0 p-8 pointer-events-none">
              <p className="text-[10px] uppercase tracking-[0.3em] font-display mb-1"
                style={{ color: 'rgba(193,18,31,0.4)' }}>
                — est. 2026
              </p>
              <div className="font-display font-black leading-none select-none"
                style={{
                  fontSize: 'clamp(3rem,7vw,6rem)',
                  background: 'linear-gradient(135deg,rgba(255,180,180,0.1),rgba(139,0,0,0.06))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                ANISA
              </div>
            </div>

            {/* ── CENTER: spinning ring ── */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative w-28 h-28" style={{ animation: 'spin 25s linear infinite' }}>
                <div className="absolute inset-0 rounded-full"
                  style={{ border: '1px dashed rgba(193,18,31,0.12)' }} />
                <div className="absolute inset-4 rounded-full"
                  style={{ border: '1px solid rgba(139,0,0,0.08)' }} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
