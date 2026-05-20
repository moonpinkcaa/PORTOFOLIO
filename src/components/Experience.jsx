const experiences = [
  {
    num: '01',
    title: 'Graphic Designer',
    org: 'Freelance',
    period: '2022 — Sekarang',
    desc: 'Membuat desain visual untuk berbagai kebutuhan klien mulai dari branding, poster, hingga konten media sosial dengan pendekatan kreatif dan estetis.',
  },
  {
    num: '02',
    title: 'UI/UX Designer',
    org: 'Proyek Akademik',
    period: '2023 — Sekarang',
    desc: 'Merancang antarmuka pengguna yang intuitif dan user-friendly untuk berbagai proyek kampus dan kompetisi.',
  },
  {
    num: '03',
    title: 'Content Creator',
    org: 'Media Sosial',
    period: '2023 — Sekarang',
    desc: 'Membuat konten kreatif untuk platform media sosial, menggabungkan desain visual dengan storytelling yang menarik.',
  },
  {
    num: '04',
    title: 'Staff Divisi Kreatif',
    org: 'Organisasi Kampus',
    period: '2023 — 2024',
    desc: 'Bertanggung jawab atas desain visual dan branding untuk kegiatan organisasi serta event kampus.',
  },
  {
    num: '05',
    title: 'Social Media Manager',
    org: 'Komunitas',
    period: '2023 — 2024',
    desc: 'Mengelola strategi konten dan meningkatkan engagement di berbagai platform media sosial komunitas.',
  },
  {
    num: '06',
    title: 'Event Organizer',
    org: 'Social Event',
    period: '2024',
    desc: 'Terlibat dalam perencanaan dan pelaksanaan event, mulai dari konsep kreatif hingga eksekusi visual.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden"
      style={{ background: '#0a0505' }}>

      {/* ── Decorative background elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blurred glow top-left */}
        <div className="absolute -top-32 -left-32 w-96 h-96"
          style={{
            background: 'radial-gradient(circle, rgba(255, 133, 122,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }} />
        {/* Large blurred glow bottom-right */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96"
          style={{
            background: 'radial-gradient(circle, rgba(211, 91, 79,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }} />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 133, 122,0.06) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">

        {/* ── Section header ── */}
        <div className="mb-12 md:mb-16 reveal">
          <p className="text-[11px] uppercase tracking-[0.35em] font-display font-medium mb-4"
            style={{ color: 'rgba(255, 133, 122,0.6)' }}>
            Pengalaman
          </p>
          <h2 className="font-display font-black leading-[1.05]"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              background: 'linear-gradient(135deg, #ffffff 0%, #ffe8e5 60%, #ffa89f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Pengalaman Saya
          </h2>
          <div className="mt-4" style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #ff857a, #d35b4f, transparent)' }} />
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {experiences.map((exp, i) => {
            // Alternate: even index = left (normal), odd index = right (offset)
            const isRight = i % 2 !== 0;

            return (
              <div
                key={exp.num}
                className={`reveal ${isRight ? 'md:translate-y-8' : ''}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="group relative rounded-2xl overflow-hidden p-5 md:p-6 transition-all duration-500 cursor-default"
                  style={{
                    background: 'linear-gradient(160deg, rgba(194, 83, 71,0.25) 0%, rgba(45, 18, 15,0.95) 50%, rgba(80, 32, 28,0.3) 100%)',
                    border: '1px solid rgba(255, 133, 122,0.15)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 133, 122,0.4)';
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(255, 133, 122,0.2)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 133, 122,0.15)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Inner dot pattern */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255, 133, 122,0.08) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }} />

                  {/* Subtle top glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 133, 122,0.3), transparent)',
                      opacity: 0,
                    }}
                    ref={null}
                  />

                  {/* ── Card content ── */}
                  <div className="relative z-10">

                    {/* Top row: number badge + period */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {/* Number badge */}
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: '#e8e8e8',
                            border: '1px solid rgba(255, 133, 122,0.35)',
                            boxShadow: '0 0 16px rgba(255, 133, 122,0.15)',
                          }}>
                          <span className="text-xs font-display font-black"
                            style={{ color: '#040100ff' }}>
                            {exp.num}
                          </span>
                        </div>
                        {/* Org tag */}
                        <span className="text-[10px] uppercase tracking-wider font-display font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: 'rgba(255, 133, 122,0.1)',
                            border: '1px solid rgba(255, 133, 122,0.2)',
                            color: '#e8e8e8',
                          }}>
                          {exp.org}
                        </span>
                      </div>
                      {/* Period */}
                      <span className="text-[10px] font-display font-medium"
                        style={{ color: 'rgba(255,180,180,0.4)' }}>
                        {exp.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-base md:text-lg text-white mb-2 leading-tight group-hover:text-[#ffe8e5] transition-colors duration-300">
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs leading-relaxed"
                      style={{ color: 'rgba(255,180,180,0.5)' }}>
                      {exp.desc}
                    </p>

                    {/* Bottom decorative line */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255, 133, 122,0.2), transparent)' }} />
                      <span className="text-[9px] font-display" style={{ color: 'rgba(255, 133, 122,0.3)' }}>✦</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom decorative row ── */}
        <div className="mt-12 flex items-center justify-center gap-3 reveal">
          {['#ff857a', '#d35b4f', '#e63946'].map((c, i) => (
            <span key={i} className="text-sm" style={{ color: c, opacity: 0.4 - i * 0.1 }}>✦</span>
          ))}
          <span className="text-[10px] font-display ml-1" style={{ color: 'rgba(255,123,123,0.3)' }}>
            terus bertumbuh & berkembang
          </span>
        </div>

      </div>

      {/* Separator */}
      <div className="w-full" style={{ height: '1px', background: 'rgba(255, 133, 122,0.1)' }} />
    </section>
  );
}
