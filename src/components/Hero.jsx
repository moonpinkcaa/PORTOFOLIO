export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#0a0000' }}>

      {/* Global top red line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 z-20"
        style={{ background: 'linear-gradient(90deg, #ff857a 40%, #d35b4f 100%)' }} />

      {/* ── MAIN SPLIT BLOCK ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[85vh] items-stretch">

          {/* ════ LEFT PANEL — Profile Card ════ */}
          <div className="md:col-span-4 flex flex-col gap-3">

            {/* ── CARD UTAMA (Light Background) ── */}
            <div className="rounded-[2rem] overflow-hidden flex-1 flex flex-col p-2"
              style={{
                background: '#e8e8e8',
                border: '1px solid rgba(255, 133, 122,0.2)',
                boxShadow: '0 12px 50px rgba(0,0,0,0.6)',
              }}>

              {/* ── TOP SECTION (Light background, Red text) ── */}
              <div className="relative flex items-start justify-between p-3 pb-4">
                {/* Kiri: Icon & Teks */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Phone icon from reference */}
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-6"
                    style={{ background: '#b24c40', color: '#fff' }}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-display font-bold text-sm leading-tight"
                      style={{ color: '#b24c40' }}>
                      Anisa Fatiimatus Zahro
                    </p>
                    <p className="text-[11px] mt-1 font-display font-semibold"
                      style={{ color: '#b24c40', opacity: 0.8 }}>
                      Desain Grafis
                    </p>
                  </div>
                </div>

                {/* Kanan: Foto portrait (Rounded rectangle with border) */}
                <div className="relative w-24 h-28 shrink-0 rounded-2xl overflow-hidden"
                  style={{ border: '2px solid #b24c40' }}>
                  <img
                    src="/me3.jpg"
                    alt="Anisa Fatiimatus Zahro"
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
                  { label: '21 years old', value: 'Graphic Designer & UI/UX', hasBar: false },
                  { label: 'Based in', value: 'Bandung & Samarinda', hasBar: false },
                  { label: 'S1 Sistem Informasi', value: 'Telkom University', hasBar: false, year: '2023 - Sekarang' },
                  { label: 'SMK Negeri 1', value: 'Tenggarong', hasBar: false, year: '2020 - 2023' },
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
                    {/* Year subtitle */}
                    {row.year && (
                      <div className="-mt-2 pb-2">
                        <span className="text-[10px] font-display font-medium italic"
                          style={{ color: 'rgba(255,180,180,0.55)' }}>
                          {row.year}
                        </span>
                      </div>
                    )}
                    {/* Divider */}
                    {i < 3 && (
                      <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>



            {/* ── CTA BUTTON (Dark transparent) ── */}
            <a href="#about"
              className="block w-full text-center py-3.5 rounded-[1.2rem] text-xs font-display font-bold transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, rgba(160,13,24,0.2) 0%, rgba(80, 32, 28,0.6) 100%)',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(160,13,24,0.4) 0%, rgba(194, 83, 71,0.8) 100%)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(160,13,24,0.2) 0%, rgba(80, 32, 28,0.6) 100%)';
              }}>
              Lihat Tentang Saya
            </a>
          </div>

          {/* ════ RIGHT PANEL — Background foto blur + text overlay ════ */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[400px]"
            style={{
              border: '1px solid rgba(255, 133, 122,0.15)',
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
                backgroundImage: 'radial-gradient(circle,rgba(255, 133, 122,0.08) 1px,transparent 1px)',
                backgroundSize: '22px 22px',
              }} />

            {/* Decorative stars */}
            <span className="absolute top-6 left-8 text-xl opacity-60 animate-float"
              style={{ color: '#ffd166', filter: 'drop-shadow(0 0 6px #ffd166)' }}>✦</span>
            <span className="absolute top-14 right-24 text-sm opacity-40 animate-float animation-delay-600"
              style={{ color: '#ffa89f' }}>★</span>
            <span className="absolute bottom-20 right-10 text-2xl opacity-50 animate-float animation-delay-200"
              style={{ color: '#ffd166' }}>✿</span>
            <span className="absolute bottom-12 left-16 text-sm opacity-30 animate-float animation-delay-800"
              style={{ color: '#d35b4f' }}>◆</span>

            {/* ── TOP-RIGHT: teks overlay ── */}
            <div className="absolute top-8 right-8 max-w-[52%] text-right">
              <h1 className="font-display font-black leading-tight mb-3"
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                  background: 'linear-gradient(135deg,#ffa89f,#ff857a,#d35b4f)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(255, 133, 122,0.4))',
                }}>
                it's fine to fake it till you make it, till you Do. till it's True
              </h1>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,180,180,0.55)' }}>
                Taylor Swift
              </p>

              {/* Avatar + badge */}
              <div className="flex items-center justify-end gap-2 mt-4">
                <div className="w-7 h-7 rounded-full overflow-hidden"
                  style={{ border: '1.5px solid rgba(255, 133, 122,0.5)' }}>
                  <img src="/me3.jpg" alt="A"
                    className="w-full h-full object-cover object-center" />
                </div>
                <div className="px-3 py-1 rounded-full text-[10px] font-display font-semibold text-white"
                  style={{
                    background: 'rgba(255, 133, 122,0.45)',
                    border: '1px solid rgba(255, 133, 122,0.6)',
                  }}>
                  ● letsgo
                </div>
              </div>
            </div>



            {/* ── BOTTOM-LEFT: big faint name ── */}
            <div className="absolute bottom-0 left-0 p-8 pointer-events-none">

              <div className="font-display font-black leading-none select-none"
                style={{
                  fontSize: 'clamp(3rem,7vw,6rem)',
                  background: 'linear-gradient(135deg,rgba(255,180,180,0.1),rgba(211, 91, 79,0.06))',
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
                  style={{ border: '1px dashed rgba(255, 133, 122,0.12)' }} />
                <div className="absolute inset-4 rounded-full"
                  style={{ border: '1px solid rgba(211, 91, 79,0.08)' }} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
