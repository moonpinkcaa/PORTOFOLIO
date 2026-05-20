const experiences = [
  {
    title: 'Intern IT — Tech Solutions Corp',
    org: 'Tech Solutions Corp',
    period: '2025 — Sekarang',
    desc: 'Mengembangkan aplikasi web internal, manajemen basis data & integrasi API.',
    time: '2:49',
    isMe: false,
  },
  {
    title: 'Kepala Divisi IT',
    org: 'BEM / OSIS',
    period: '2024 — 2025',
    desc: 'Memimpin tim 12 orang mengelola infrastruktur digital. Membangun sistem untuk 2K+ siswa.',
    time: '2:49',
    isMe: true,
  },
  {
    title: 'Sistem Kampus Pintar',
    org: 'Proyek Akademik',
    period: '2024',
    desc: 'Merancang sistem info kampus lengkap dengan sinkronisasi data real-time & UI responsif.',
    time: '5:00',
    isMe: false,
  },
  {
    title: 'Direktur Kreatif',
    org: 'Komunitas Teknologi',
    period: '2023 — 2024',
    desc: 'Mengelola branding visual & strategi konten. Meningkatkan interaksi sebesar 150%.',
    time: '6:00',
    isMe: true,
  },
];

const projects = [
  { title: 'Merek Fashion',    emoji: '👗', color: '#c1121f', count: null },
  { title: 'Layanan Jastip',   emoji: '🛍️', color: '#8b0000', count: null },
  { title: 'Platform Kampus',  emoji: '🎪', color: '#6b0000', count: null },
  { title: 'Identitas Merek',   emoji: '🎨', color: '#e63946', count: '10+' },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden"
      style={{ background: '#060000' }}>

      {/* ── BLOCK 3 — Like reference: chat interface left + stats/thumbnails right ── */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

          {/* ════ LEFT — Chat-style experience interface ════ */}
          <div className="md:col-span-5 reveal-left">
            {/* Chat window */}
            <div className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(26,0,0,0.98)',
                border: '1px solid rgba(193,18,31,0.2)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              }}>

              {/* Chat header */}
              <div className="px-4 py-3 flex items-center justify-between"
                style={{
                  background: 'rgba(26,0,0,0.9)',
                  borderBottom: '1px solid rgba(193,18,31,0.12)',
                }}>
                <div className="flex items-center gap-3">
                  <button className="text-white/40 text-sm">←</button>
                  <div>
                    <p className="text-xs font-display font-bold text-white">linimasa pengalaman</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c1121f' }} />
                      <p className="text-[10px]" style={{ color: '#c1121f' }}>● aktif</p>
                    </div>
                  </div>
                </div>
                <button className="text-white/30 text-lg">···</button>
              </div>

              {/* Two-column photo preview — like reference's image grid in chat */}
              <div className="grid grid-cols-2 gap-1 p-1">
                {[
                  { label: 'teknologi & kode',    color: 'from-red-900/60 to-orange-900/60',  emoji: '💻', sub: 'pengembangan web' },
                  { label: 'desain & merek', color: 'from-orange-900/60 to-red-900/60',  emoji: '🎨', sub: 'ui/ux' },
                ].map((box) => (
                  <div key={box.label} className={`relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br ${box.color} flex flex-col items-center justify-center gap-1`}
                    style={{ border: '1px solid rgba(193,18,31,0.1)' }}>
                    <div className="absolute inset-0"
                      style={{
                        backgroundImage: 'radial-gradient(circle,rgba(193,18,31,0.06) 1px,transparent 1px)',
                        backgroundSize: '12px 12px',
                      }} />
                    <span className="text-2xl relative z-10">{box.emoji}</span>
                    <span className="text-[10px] font-display font-semibold relative z-10"
                      style={{ color: 'rgba(255,180,180,0.7)' }}>{box.label}</span>
                    <span className="text-[9px] font-display relative z-10"
                      style={{ color: 'rgba(255,180,180,0.35)' }}>{box.sub}</span>
                  </div>
                ))}
              </div>

              {/* Caption below photos — like reference */}
              <div className="px-4 py-2">
                <p className="text-[11px] font-display font-semibold text-white/70">terus membangun keterampilan di perjalanan yang stabil</p>
                <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,123,123,0.35)' }}>
                  setiap pengalaman membentuk diri Anda
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(193,18,31,0.08)' }} />

              {/* Chat messages — experience entries */}
              <div className="px-4 py-3 space-y-3 max-h-72 overflow-y-auto"
                style={{ scrollbarWidth: 'none' }}>
                {experiences.map((exp, i) => (
                  <div key={i} className={`flex items-end gap-2 ${exp.isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[9px] font-bold text-white"
                      style={{
                        background: exp.isMe
                          ? 'linear-gradient(135deg,#c1121f,#8b0000)'
                          : 'rgba(255,255,255,0.1)',
                      }}>
                      {exp.isMe ? 'A' : '✦'}
                    </div>

                    {/* Bubble */}
                    <div className={`max-w-[78%] ${exp.isMe ? 'items-end' : 'items-start'} flex flex-col gap-0.5`}>
                      <div className="px-3 py-2 rounded-2xl"
                        style={exp.isMe ? {
                          background: 'linear-gradient(135deg,rgba(193,18,31,0.25),rgba(139,0,0,0.2))',
                          border: '1px solid rgba(193,18,31,0.3)',
                          borderBottomRightRadius: '4px',
                        } : {
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderBottomLeftRadius: '4px',
                        }}>
                        <p className="text-[11px] font-display font-semibold text-white mb-0.5">
                          {exp.title}
                        </p>
                        <p className="text-[10px] leading-relaxed" style={{ color: 'rgba(255,180,180,0.55)' }}>
                          {exp.desc}
                        </p>
                      </div>
                      {/* Time stamp */}
                      <span className="text-[9px] px-1" style={{ color: 'rgba(255,123,123,0.3)' }}>
                        {exp.period} · {exp.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ════ RIGHT — Stats + Project thumbnail grid ════ */}
          <div className="md:col-span-7 reveal-right space-y-6">

            {/* "N friends like" row — adapted as "achievements" */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Mini avatar cluster */}
                <div className="flex items-center">
                  {['#c1121f','#8b0000','#e63946'].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                      style={{
                        background: c,
                        border: '2px solid #060000',
                        marginLeft: i === 0 ? 0 : '-8px',
                        zIndex: 3 - i,
                      }}>
                      {['A','✦','◆'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-display font-medium" style={{ color: 'rgba(255,180,180,0.6)' }}>
                  15+ proyek diselesaikan
                </span>
              </div>
              <span className="text-[10px] font-display" style={{ color: 'rgba(193,18,31,0.5)' }}>✦</span>
            </div>

            {/* Large bold CTA text — like reference "Out of the box can be more than that" */}
            <div>
              <h2 className="font-display font-black leading-tight mb-4"
                style={{
                  fontSize: 'clamp(1.6rem,4vw,2.8rem)',
                  background: 'linear-gradient(135deg,#ffffff 0%,#ffc8c8 50%,#ff7b7b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                melampaui batas *<br />lakukan dengan renjana
              </h2>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,180,180,0.45)' }}>
                Mewujudkan ide menjadi kenyataan digital — dari proyek kampus hingga dampak dunia nyata.
                Setiap baris kode, setiap piksel dibuat dengan tujuan.
              </p>
            </div>

            {/* Project thumbnail grid — like reference "10+" photo grid */}
            <div className="grid grid-cols-2 gap-3">
              {projects.map((p, i) => (
                <div key={i}
                  className="relative rounded-2xl overflow-hidden aspect-video flex flex-col justify-between p-4 group cursor-default transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${p.color}20,${p.color}10)`,
                    border: `1px solid ${p.color}25`,
                    boxShadow: `0 4px 20px ${p.color}15`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 8px 30px ${p.color}35`;
                    e.currentTarget.style.borderColor = `${p.color}50`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = `0 4px 20px ${p.color}15`;
                    e.currentTarget.style.borderColor = `${p.color}25`;
                  }}>

                  {/* Pattern */}
                  <div className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)',
                      backgroundSize: '14px 14px',
                    }} />

                  {/* Category badge */}
                  <span className="relative z-10 self-start text-[9px] uppercase tracking-wider font-display font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${p.color}20`,
                      border: `1px solid ${p.color}40`,
                      color: p.color,
                    }}>
                    proyek
                  </span>

                  {/* Bottom: emoji + title + count overlay */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <span className="text-xl block mb-1">{p.emoji}</span>
                      <p className="text-xs font-display font-bold text-white leading-tight">{p.title}</p>
                    </div>
                    {p.count && (
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(0,0,0,0.5)',
                          border: `1px solid ${p.color}40`,
                        }}>
                        <span className="text-[10px] font-display font-bold" style={{ color: p.color }}>
                          {p.count}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative hearts — like reference */}
            <div className="flex items-center gap-2">
              {['#c1121f','#8b0000','#e63946'].map((c, i) => (
                <span key={i} className="text-sm" style={{ color: c, opacity: 0.4 - i * 0.1 }}>♥</span>
              ))}
              <span className="text-[10px] font-display ml-1" style={{ color: 'rgba(255,123,123,0.3)' }}>
                dibuat dengan cinta
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Separator */}
      <div className="w-full" style={{ height: '1px', background: 'rgba(193,18,31,0.1)' }} />
    </section>
  );
}
