/* ── Social Media Icon Components ── */
const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const socialLinks = [
  { href: 'https://www.instagram.com/aanisaftmz', label: 'IG', icon: <InstagramIcon />, color: '#ff857a' },
  { href: 'https://www.linkedin.com/in/anisa-fatiimatus-zahro-7114a5297', label: 'LI', icon: <LinkedInIcon />, color: '#d35b4f' },
  { href: 'https://github.com/moonpinkcaa', label: 'GH', icon: <GitHubIcon />, color: '#b24c40' },
  { href: 'https://www.tiktok.com/@xvggh9pamj8790', label: 'TT', icon: <TikTokIcon />, color: '#e63946' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden"
      style={{ background: '#0a0505' }}>

      {/* ── SECTION SEPARATOR LINE ── */}
      <div className="w-full" style={{ height: '2px', background: 'rgba(255, 133, 122,0.15)' }} />

      {/* ── BLOCK 2 — Like reference: large bold text left + big oval photo right ── */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* ── LEFT: Large text + bio + social thumbnails ── */}
          <div className="md:col-span-6 reveal-left">

            {/* Eyebrow */}
            <p className="text-[11px] uppercase tracking-[0.35em] font-display font-medium mb-4"
              style={{ color: 'rgba(255, 133, 122,0.6)' }}>
              About me
            </p>

            {/* Large bold headline — matches reference's "keep moving forward on a stable journey" */}
            <h2 className="font-display font-black leading-[1.05] mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                background: 'linear-gradient(135deg,#ffffff 0%,#ffe8e5 60%,#ffa89f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              hellow,<br />
              aku anisa<br />
            </h2>

            {/* Bio paragraph — matches reference paragraph text */}
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,180,180,0.55)' }}>
              Saat ini aku merupakan mahasiswa Sistem Informasi di Telkom University yang suka belajar dan berkembang melalui pengalaman baru. Aku tertarik pada bidang analisis proses bisnis, UI/UX, serta pengembangan sistem.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,180,180,0.55)' }}>
              Aku juga senang mengikuti kegiatan organisasi dan social event karena menjadi salah satu cara terbaik untuk bertumbuh, membangun relasi, dan belajar dari banyak orang.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,180,180,0.55)' }}>
              Selain itu, aku memiliki ketertarikan dalam dunia konten kreatif seperti desain dan media sosial, serta senang menggabungkan sisi kreatif dan teknologi dalam setiap proses yang aku jalani.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255, 255, 255, 1)' }}>
              Let's grow and create something meaningful together!
            </p>

            {/* Social profile thumbnails — matches reference's small avatar circles at bottom */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {socialLinks.map((s, i) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="relative -ml-2 first:ml-0 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:z-10"
                    style={{
                      background: `linear-gradient(135deg,${s.color},${s.color}99)`,
                      border: '2px solid #0a0505',
                      boxShadow: `0 0 10px ${s.color}50`,
                      zIndex: socialLinks.length - i,
                    }}>
                    {s.icon}
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* ── RIGHT: Large oval/rounded "photo" — matches reference's big round photo ── */}
          <div className="md:col-span-6 reveal-right flex justify-center">
            <div className="relative">
              {/* Main oval photo container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-[40%_60%_60%_40%_/_50%_50%_60%_40%] overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg,#2a0000 0%,#1a0000 40%,#0a0505 100%)',
                  border: '1px solid rgba(255, 133, 122,0.2)',
                  boxShadow: '0 0 60px rgba(255, 133, 122,0.2), inset 0 0 60px rgba(211, 91, 79,0.08)',
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
                    backgroundImage: 'radial-gradient(circle,rgba(255, 133, 122,0.15) 1px,transparent 1px)',
                    backgroundSize: '14px 14px',
                  }} />

                {/* Decorative spin ring */}
                <div className="absolute inset-4 rounded-[40%_60%_60%_40%_/_50%_50%_60%_40%]"
                  style={{ border: '1px dashed rgba(255, 133, 122,0.25)', animation: 'spin 20s linear infinite' }} />
              </div>

              {/* Floating badge top */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-display font-bold"
                style={{
                  background: 'linear-gradient(135deg,#ff857a,#d35b4f)',
                  boxShadow: '0 4px 16px rgba(255, 133, 122,0.5)',
                  color: '#fff',
                }}>
                ✦ Kreatif
              </div>

              {/* Floating badge bottom */}
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full text-[10px] font-display font-semibold"
                style={{
                  background: '#e8e8e8',
                  border: '1px solid rgba(255, 133, 122,0.3)',
                  color: '#b24c40',
                }}>
                Sistem Informasi '23
              </div>

              {/* Glow behind oval */}
              <div className="absolute inset-0 -z-10"
                style={{
                  background: 'radial-gradient(ellipse,rgba(255, 133, 122,0.15),transparent 70%)',
                  transform: 'scale(1.3)',
                  filter: 'blur(30px)',
                }} />
            </div>
          </div>

        </div>
      </div>

      {/* ── Separator ── */}
      <div className="w-full" style={{ height: '1px', background: 'rgba(255, 133, 122,0.1)' }} />
    </section>
  );
}
