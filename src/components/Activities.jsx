import CircularGallery from './CircularGallery';

export default function Activities() {
  const galleryItems = [
    {
      image: '/pengalaman1.jpeg',
      text: 'Creative Process'
    },
    {
      image: '/pengalaman2.jpeg',
      text: 'Digital Art'
    },
    {
      image: '/pengalaman3.jpeg',
      text: 'Visual Design'
    },
    {
      image: '/pengalaman4.jpeg',
      text: 'Branding & UI/UX'
    },
    {
      image: 'pengalaman5.jpeg',
      text: 'Brainstorming'
    },
    {
      image: 'pengalaman6.jpeg',
      text: 'Web Development'
    },
    {
      image: 'pengalaman7.jpeg',
      text: 'Interface Layout'
    },
    {
      image: 'pengalaman8.jpeg',
      text: 'Creative Arts'
    },
    {
      image: 'pengalaman9.jpeg',
      text: 'UI/UX &Web Design'
    }
  ];

  return (
    <section id="activities" className="relative overflow-hidden py-24" style={{ background: '#0a0505' }}>

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 133, 122,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }} />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="text-[11px] uppercase tracking-[0.35em] font-display font-medium mb-4"
            style={{ color: 'rgba(255, 133, 122,0.6)' }}>
            Galeri Kegiatan
          </p>
          <h2 className="font-display font-black leading-[1.05]"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              background: 'linear-gradient(135deg, #ffffff 0%, #ffe8e5 60%, #ffa89f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Foto Kegiatan
          </h2>
          <div className="mx-auto mt-4" style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, #ff857a, transparent)' }} />

        </div>

        {/* Circular Gallery Container */}
        <div className="w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, rgba(45, 18, 15,0.2) 0%, rgba(10,0,0,0.4) 100%)',
            border: '1px solid rgba(255, 133, 122,0.12)',
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)'
          }}>

          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffe8e5"
            borderRadius={0.06}
            font="bold 16px Outfit"
            scrollSpeed={2.5}
            scrollEase={0.06}
          />

        </div>

        {/* Hint indicator */}
        <div className="text-center mt-6 text-[10px] font-display uppercase tracking-widest" style={{ color: 'rgba(255, 133, 122,0.4)' }}>
          ← Tarik Kiri / Kanan atau Scroll untuk memutar →
        </div>

      </div>

      {/* Bottom section divider */}
      <div className="w-full mt-24" style={{ height: '1px', background: 'rgba(255, 133, 122,0.1)' }} />
    </section>
  );
}
