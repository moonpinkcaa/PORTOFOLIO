const socialLinks = [
  { href: 'https://www.instagram.com/aanisaftmz', label: 'IG', color: '#c1121f' },
  { href: 'https://www.linkedin.com/in/anisa-fatiimatus-zahro-7114a5297', label: 'LI', color: '#8b0000' },
  { href: 'https://github.com/moonpinkcaa', label: 'GH', color: '#6b0000' },
  { href: 'https://www.tiktok.com/@xvggh9pamj8790', label: 'TT', color: '#e63946' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden"
      style={{ background: '#060000' }}>

      {/* ── SECTION SEPARATOR LINE ── */}
      <div className="w-full" style={{ height: '2px', background: 'rgba(193,18,31,0.15)' }} />

      {/* ── BLOCK 2 — Like reference: large bold text left + big oval photo right ── */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* ── LEFT: Large text + bio + social thumbnails ── */}
          <div className="md:col-span-6 reveal-left">

            {/* Eyebrow */}
            <p className="text-[11px] uppercase tracking-[0.35em] font-display font-medium mb-4"
              style={{ color: 'rgba(193,18,31,0.6)' }}>
              — kenali saya lebih jauh
            </p>

            {/* Large bold headline — matches reference's "keep moving forward on a stable journey" */}
            <h2 className="font-display font-black leading-[1.05] mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                background: 'linear-gradient(135deg,#ffffff 0%,#ffc8c8 60%,#ff7b7b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              tetap positif,<br />
              terus kreatif<br />
            </h2>

            {/* Bio paragraph — matches reference paragraph text */}
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,180,180,0.55)' }}>
              Saya Anisa Fatimamatus Zahro, mahasiswa Sistem Informasi yang sangat menyukai teknologi dan desain.
              Karya saya menggabungkan keterampilan teknis dengan visi kreatif —
              jangan menyerah pada karyamu karena tantangan. Teruslah berkembang.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,180,180,0.4)' }}>
              Jika Anda mencari seseorang yang menjembatani kode dan kreativitas,
              silakan hubungi saya dan mari membangun sesuatu yang hebat bersama.
            </p>

            {/* Social profile thumbnails — matches reference's small avatar circles at bottom */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {socialLinks.map((s, i) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="relative -ml-2 first:ml-0 w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-display font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:z-10"
                    style={{
                      background: `linear-gradient(135deg,${s.color},${s.color}99)`,
                      border: '2px solid #060000',
                      boxShadow: `0 0 10px ${s.color}50`,
                      zIndex: socialLinks.length - i,
                    }}>
                    {s.label}
                  </a>
                ))}
              </div>
              <span className="text-xs font-display font-medium" style={{ color: 'rgba(255,123,123,0.5)' }}>
                & media sosial lainnya
              </span>
            </div>
          </div>

          {/* ── RIGHT: Large oval/rounded "photo" — matches reference's big round photo ── */}
          <div className="md:col-span-6 reveal-right flex justify-center">
            <div className="relative">
              {/* Main oval photo container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-[40%_60%_60%_40%_/_50%_50%_60%_40%] overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg,#2a0000 0%,#1a0000 40%,#060000 100%)',
                  border: '1px solid rgba(193,18,31,0.2)',
                  boxShadow: '0 0 60px rgba(193,18,31,0.2), inset 0 0 60px rgba(139,0,0,0.08)',
                }}>

                {/* Actual photo */}
                <img
                  src="/FOTO_DIRI.jpeg"
                  alt="Anisa Fatimamatus Zahro"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />

                {/* Red gradient overlay on top of photo */}
                <div className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg,transparent 40%,rgba(10,0,0,0.6) 100%)',
                  }} />

                {/* Dot texture overlay */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle,rgba(193,18,31,0.15) 1px,transparent 1px)',
                    backgroundSize: '14px 14px',
                  }} />

                {/* Decorative spin ring */}
                <div className="absolute inset-4 rounded-[40%_60%_60%_40%_/_50%_50%_60%_40%]"
                  style={{ border: '1px dashed rgba(193,18,31,0.25)', animation: 'spin 20s linear infinite' }} />
              </div>

              {/* Floating badge top */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-display font-bold"
                style={{
                  background: 'linear-gradient(135deg,#c1121f,#8b0000)',
                  boxShadow: '0 4px 16px rgba(193,18,31,0.5)',
                  color: '#fff',
                }}>
                ✦ Kreatif
              </div>

              {/* Floating badge bottom */}
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full text-[10px] font-display font-semibold"
                style={{
                  background: 'rgba(26,0,0,0.95)',
                  border: '1px solid rgba(193,18,31,0.3)',
                  color: '#ff7b7b',
                }}>
                Sistem Informasi '26
              </div>

              {/* Glow behind oval */}
              <div className="absolute inset-0 -z-10"
                style={{
                  background: 'radial-gradient(ellipse,rgba(193,18,31,0.15),transparent 70%)',
                  transform: 'scale(1.3)',
                  filter: 'blur(30px)',
                }} />
            </div>
          </div>

        </div>
      </div>

      {/* ── Separator ── */}
      <div className="w-full" style={{ height: '1px', background: 'rgba(193,18,31,0.1)' }} />
    </section>
  );
}
