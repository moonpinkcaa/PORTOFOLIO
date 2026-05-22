import { useState } from 'react';

const projects_data = [
  {
    id: 1,
    title: 'U-Voice',
    category: 'Web Development',
    year: '2025',
    desc: 'Platfor sistem aspirasi & forum diskusi mahasiswa.',
    tags: ['css', 'Node.js', 'Laravel'],
    color: '#ff857a',
    stats: {},
    img: "/logo_u-voice.png",
  },
  {
    id: 2,
    title: 'Work4Village',
    category: 'Web Development',
    year: '2026',
    desc: 'Platfrom digital manajemen pemberdayaan masyarakat desa.',
    tags: ['node.js', 'laravel'],
    color: '#d35b4f',
    stats: {},
    img: '/logo_wor4.png',
  },
  {
    id: 3,
    title: 'Laundr app',
    category: 'UI/UX Design',
    year: '2025',
    desc: 'Portotipe aplikasi mobile sistem operasional dan efiseiensi layanan Laundry.',
    tags: ['Figma', 'UI/UX Design', 'Prototyping'],
    color: '#e63946',
    stats: {},
    img: '/logo_laundryapp.jpeg',
  },
  {
    id: 4,
    title: 'Five Finace',
    category: 'UI/UX Design',
    year: '2024',
    desc: 'Portotipe aplikasi mobile pengelolaan keuangan untuk pelaku UMKM.',
    tags: ['Figma', 'UI/UX Design', 'Prototyping'],
    color: '#ffa89f',
    stats: {},
    img: '/logo_Five Finace.png',
  },
  {
    id: 5,
    title: 'Aplikasi Apotik',
    category: 'Web Development',
    year: '2024',
    desc: 'Sistem otomatisasi pencatatan data obat dan transaksi apotik.',
    tags: ['java', 'java GUI', 'mysql'],
    color: '#ffa89f',
    stats: {},
    img: '/logo_apotik.png',
  },
  {
    id: 6,
    title: 'Yapprece_MarketPlace',
    category: 'Web Development',
    year: '2025',
    desc: 'Sistem market place berbasis microservice.',
    tags: ['Docker', 'node.js', 'javaScript'],
    color: '#ffa89f',
    stats: {},
    img: '/logo_yaparace.png',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden"
      style={{ background: '#0a0505' }}>

      {/* Decorative bg lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full"
        style={{ background: 'linear-gradient(180deg,transparent,rgba(255, 133, 122,0.1),transparent)' }} />
      <div className="absolute top-1/2 left-0 w-full h-[1px]"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(255, 133, 122,0.1),transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">

          <h2 className="section-title text-4xl md:text-5xl mb-6">Work Archive</h2>

        </div>

        {/* Project List */}
        <div className="space-y-32">
          {projects_data.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.id}
                className="group flex flex-col md:flex-row items-center gap-10 md:gap-16 reveal"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}>

                {/* ── IMAGE / VISUAL SIDE ── */}
                <div className={`w-full md:w-1/2 relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  {/* Visual Container */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden transition-all duration-700 ease-out"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}15, transparent)`,
                      border: `1px solid ${project.color}30`,
                      boxShadow: hoveredId === project.id
                        ? `0 20px 60px ${project.color}25`
                        : `0 10px 30px rgba(0,0,0,0.5)`,
                      transform: hoveredId === project.id ? (isEven ? 'rotate(1deg) scale(1.02)' : 'rotate(-1deg) scale(1.02)') : 'rotate(0) scale(1)',
                    }}>

                    {/* Dot grid bg */}
                    <div className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage: `radial-gradient(circle, ${project.color}40 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                      }} />

                    {/* Glow blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[60px] opacity-30 transition-opacity duration-500"
                      style={{
                        background: project.color,
                        opacity: hoveredId === project.id ? 0.6 : 0.3,
                      }} />

                    {/* Center Emoji/Icon / Image */}
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
                      style={{ transform: hoveredId === project.id ? 'scale(1.1)' : 'scale(1)' }}>
                      {project.img && (project.img.startsWith('/') || project.img.includes('.')) ? (
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-7xl md:text-8xl">{project.img}</span>
                      )}
                    </div>

                    {/* Bottom Stat Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500"
                      style={{
                        background: 'linear-gradient(0deg, rgba(10,0,0,0.9), transparent)',
                        transform: hoveredId === project.id ? 'translateY(0)' : 'translateY(100%)',
                      }}>
                      <div className="flex justify-between items-center text-xs font-display">
                        {Object.entries(project.stats || {}).map(([key, val]) => (
                          <div key={key} className="flex flex-col">
                            <span style={{ color: 'rgba(255,255,255,0.4)' }}>{key}</span>
                            <span className="font-bold" style={{ color: project.color }}>{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── TEXT / INFO SIDE ── */}
                <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:order-2 md:items-start' : 'md:order-1 md:items-end md:text-right'}`}>

                  {/* Header info */}
                  <div className={`flex items-center gap-3 mb-4 ${isEven ? '' : 'flex-row-reverse'}`}>
                    <span className="text-[10px] uppercase tracking-widest font-display font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}40`,
                        color: project.color,
                      }}>
                      {project.category}
                    </span>
                    <span className="text-[10px] font-display" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-display font-black mb-4 transition-colors duration-300"
                    style={{ color: hoveredId === project.id ? project.color : '#fff' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-6 max-w-md"
                    style={{ color: 'rgba(255,180,180,0.6)' }}>
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 mb-8 ${isEven ? '' : 'justify-end'}`}>
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-display px-3 py-1 rounded border transition-colors duration-300"
                        style={{
                          borderColor: hoveredId === project.id ? `${project.color}50` : 'rgba(255,255,255,0.1)',
                          color: hoveredId === project.id ? '#fff' : 'rgba(255,255,255,0.5)',
                          background: hoveredId === project.id ? `${project.color}10` : 'transparent',
                        }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider group/btn"
                    style={{ color: project.color }}>


                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
