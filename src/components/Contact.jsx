import { useState } from 'react';

const socials = [
  { name: 'Instagram', link: 'https://www.instagram.com/aanisaftmz', icon: 'IG', color: '#c1121f' },
  { name: 'LinkedIn',  link: 'https://www.linkedin.com/in/anisa-fatiimatus-zahro-7114a5297', icon: 'IN', color: '#8b0000' },
  { name: 'GitHub',    link: 'https://github.com/moonpinkcaa', icon: 'GH', color: '#6b0000' },
  { name: 'TikTok',    link: 'https://www.tiktok.com/@xvggh9pamj8790', icon: 'TK', color: '#e63946' },
];

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <section id="contact" className="relative py-24 overflow-hidden"
      style={{ background: '#060000' }}>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(193,18,31,0.2), transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[60vh]">

          {/* ════ LEFT — Contact "Chat" Card ════ */}
          <div className="md:col-span-5 reveal-left">
            <div className="rounded-3xl overflow-hidden relative"
              style={{
                background: 'rgba(26,0,0,0.95)',
                border: '1px solid rgba(193,18,31,0.25)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
              }}>

              {/* Chat Header */}
              <div className="px-6 py-4 flex items-center gap-4"
                style={{
                  background: 'linear-gradient(180deg, rgba(193,18,31,0.1), transparent)',
                  borderBottom: '1px solid rgba(193,18,31,0.1)',
                }}>
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0"
                  style={{ border: '2px solid #c1121f' }}>
                  <img src="/FOTO_DIRI.jpeg" alt="AFZ" className="w-full h-full object-cover object-top" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border border-[#060000]"
                    style={{ background: '#c1121f' }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white leading-tight">Anisa Fatimamatus Z.</h3>
                  <p className="text-[10px] text-red-400/80 mt-0.5">● online • siap berkolaborasi</p>
                </div>
              </div>

              {/* Chat Body (Contact Links) */}
              <div className="p-6 space-y-4">
                <div className="text-xs text-center font-display mb-6" style={{ color: 'rgba(255,180,180,0.4)' }}>
                  hari ini 08:00
                </div>

                {/* Email bubble */}
                <div className="flex gap-2 items-end">
                  <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[8px] text-white"
                    style={{ background: 'rgba(193,18,31,0.3)' }}>A</div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                    <p className="text-xs text-white/80 mb-1">kirim email ke saya di</p>
                    <a href="mailto:anisafatimamatuszahro@gmail.com"
                      className="text-sm font-display font-bold text-white hover:text-red-400 transition-colors">
                      anisafatimamatuszahro@gmail.com
                    </a>
                  </div>
                </div>

                {/* WA bubble */}
                <div className="flex gap-2 items-end">
                  <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[8px] text-white"
                    style={{ background: 'rgba(193,18,31,0.3)' }}>A</div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                    <p className="text-xs text-white/80 mb-1">atau chat saya di whatsapp</p>
                    <a href="https://wa.me/6281358700201" target="_blank" rel="noopener noreferrer"
                      className="text-sm font-display font-bold text-white hover:text-red-400 transition-colors">
                      +62 813-5870-0201
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-4 bg-black/40 border-t border-red-900/30 flex items-center justify-between">
                <p className="text-xs font-display text-white/50">menunggu pesan Anda...</p>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(193,18,31,0.2)' }}>
                    <span className="text-red-400 text-sm">↑</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ════ RIGHT — Socials & Footer Quote ════ */}
          <div className="md:col-span-7 reveal-right flex flex-col justify-center">

            {/* Social Links Row */}
            <div className="flex flex-wrap gap-4 mb-16">
              {socials.map((s, i) => (
                <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer"
                  className="group relative px-6 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: 'rgba(26,0,0,0.5)',
                    border: '1px solid rgba(193,18,31,0.2)',
                  }}
                  onMouseEnter={() => setHoveredSocial(s.name)}
                  onMouseLeave={() => setHoveredSocial(null)}>

                  {/* Hover bg */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${s.color}40, transparent)` }} />

                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-2xl font-black font-display opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: s.color }}>
                      {s.icon}
                    </span>
                    <span className="text-sm font-display font-bold text-white/70 group-hover:text-white transition-colors">
                      {s.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quote block */}
            <div className="relative pl-8 border-l-2" style={{ borderColor: 'rgba(193,18,31,0.3)' }}>
              <span className="absolute -left-3 top-0 text-4xl" style={{ color: 'rgba(193,18,31,0.2)' }}>"</span>
              <h2 className="text-3xl md:text-5xl font-display font-black leading-tight mb-4"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #ffc8c8 50%, #ff7b7b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                mari ciptakan<br />sesuatu yang luar biasa
              </h2>
              <p className="text-sm text-white/50 max-w-sm">
                Terbuka untuk peluang, kolaborasi, atau sekadar obrolan santai tentang teknologi dan desain.
              </p>
            </div>

            {/* Footer Bottom */}
            <div className="mt-20 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ borderColor: 'rgba(193,18,31,0.1)' }}>
              <div className="flex items-center gap-2">
                <span className="text-xl" style={{ color: '#c1121f' }}>✿</span>
                <span className="text-[10px] uppercase tracking-widest font-display text-white/40">
                  © 2026 Anisa Fatimamatus Z.
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-display" style={{ color: 'rgba(193,18,31,0.6)' }}>
                dibangun dengan renjana
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
