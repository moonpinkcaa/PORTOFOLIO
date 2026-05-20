import { useState, useEffect } from 'react';

const navLinks = [
  { id: 'home', label: 'BERANDA' },
  { id: 'about', label: 'TENTANG' },
  { id: 'experience', label: 'PENGALAMAN' },
  { id: 'projects', label: 'PROYEK' },
  { id: 'contact', label: 'KONTAK' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scrollspy
      const sections = navLinks.map(link => document.getElementById(link.id));
      let current = 'home';

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
          }
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div
        className="relative flex items-center justify-center px-4 py-2 w-auto rounded-full"
        style={{
          background: scrolled ? 'rgba(26,0,0,0.9)' : 'rgba(26,0,0,0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(193,18,31,0.2)',
          boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        {/* Glow effect around navbar */}
        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{ boxShadow: 'inset 0 0 20px rgba(193,18,31,0.05)' }} />

        {/* Links */}
        <div className="flex items-center gap-1 relative z-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className="relative px-5 py-2 rounded-full text-xs font-display font-bold tracking-[0.1em] transition-all duration-300"
              style={{
                color: active === link.id ? '#ffffff' : 'rgba(255,214,214,0.6)',
              }}
            >
              {active === link.id && (
                <span
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(193,18,31,0.25), rgba(139,0,0,0.15))',
                    border: '1px solid rgba(193,18,31,0.4)',
                    boxShadow: '0 0 15px rgba(193,18,31,0.3)',
                  }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
