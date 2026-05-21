import { useState } from 'react';

const socials = [
  { name: 'Instagram', link: 'https://www.instagram.com/aanisaftmz', icon: 'IG', color: '#ff857a' },
  { name: 'LinkedIn',  link: 'https://www.linkedin.com/in/anisa-fatiimatus-zahro-7114a5297', icon: 'IN', color: '#d35b4f' },
  { name: 'GitHub',    link: 'https://github.com/moonpinkcaa', icon: 'GH', color: '#b24c40' },
  { name: 'TikTok',    link: 'https://www.tiktok.com/@xvggh9pamj8790', icon: 'TK', color: '#e63946' },
];

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <section id="contact" className="relative py-24 overflow-hidden"
      style={{ background: '#0a0505' }}>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 133, 122,0.2), transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Contact Business Card Layout (Image 2 Style) ── */}
        <div className="reveal flex justify-center py-8">
          <div 
            className="w-full max-w-4xl p-4 md:p-6 rounded-[2rem] transition-all duration-500 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #ffa89f 0%, #ff857a 100%)',
              boxShadow: '0 25px 50px -12px rgba(255, 133, 122, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Inner White/Beige Card */}
            <div 
              className="w-full rounded-[1.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
              style={{
                background: '#faf5f5',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              
              {/* Left Side: Let's Work Together + Icons + Email */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                
                {/* Title */}
                <h2 className="font-display font-black tracking-tight text-3xl md:text-5xl uppercase mb-8"
                  style={{
                    color: '#d35b4f',
                    lineHeight: '1.1',
                  }}>
                  Let's Work<br className="hidden md:block"/> Together
                </h2>

                {/* Social Icons (Instagram, TikTok, LinkedIn, GitHub, Email) */}
                <div className="flex items-center gap-3.5 mb-8">
                  {[
                    { name: 'Instagram', link: 'https://www.instagram.com/aanisaftmz', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ) },
                    { name: 'TikTok', link: 'https://www.tiktok.com/@xvggh9pamj8790', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    ) },
                    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/anisa-fatiimatus-zahro-7114a5297', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ) },
                    { name: 'GitHub', link: 'https://github.com/moonpinkcaa', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    ) },
                    { name: 'Email', link: 'mailto:anisafatimamatuszahro@gmail.com', icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) }
                  ].map(s => (
                    <a 
                      key={s.name} 
                      href={s.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: 'transparent',
                        border: '1.5px solid rgba(211, 91, 79, 0.4)',
                        color: '#d35b4f',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#d35b4f';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#d35b4f';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Email address text below */}
                <a 
                  href="mailto:anisafatimamatuszahro@gmail.com" 
                  className="font-display font-medium text-xs md:text-sm tracking-wider hover:underline"
                  style={{ color: '#d35b4f' }}
                >
                  anisafatimamatuszahro@gmail.com
                </a>

              </div>

              {/* Right Side: Square Framed Portrait */}
              <div className="relative shrink-0 flex justify-center items-center">
                <div 
                  className="w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-2xl flex items-center justify-center p-1.5"
                  style={{
                    background: '#e59a9c',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  }}
                >
                  <img 
                    src="/FOTO_DIRI.jpeg" 
                    alt="Anisa Fatimamatus Z." 
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255, 133, 122,0.1)' }}>
          <div className="flex items-center gap-2">
            <span className="text-xl" style={{ color: '#ff857a' }}>✿</span>
            <span className="text-[10px] uppercase tracking-widest font-display text-white/40">
              © 2026 Anisa Fatimamatus Z.
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-widest font-display" style={{ color: 'rgba(255, 133, 122,0.6)' }}>
            dibangun dengan renjana
          </p>
        </div>

      </div>
    </section>
  );
}
