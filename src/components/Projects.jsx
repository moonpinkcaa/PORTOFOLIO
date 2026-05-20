import { useState } from 'react';

const projects_data = [
  {
    id: 1,
    title: 'Sistem Info Kampus Pintar',
    category: 'Aplikasi Web Fullstack',
    year: '2024',
    desc: 'Sistem informasi kampus komprehensif yang menghubungkan 2000+ mahasiswa. Dilengkapi pengumuman real-time, jadwal akademik, dan peta kampus interaktif.',
    tags: ['React', 'Node.js', 'Tailwind', 'PostgreSQL'],
    color: '#c1121f',
    stats: { pengguna: '2K+', uptime: '99.9%' },
    img: '🎓',
  },
  {
    id: 2,
    title: 'E-Commerce Merek Fashion',
    category: 'UI/UX & Frontend',
    year: '2024',
    desc: 'Platform e-commerce modern yang elegan untuk merek fashion lokal. Berfokus pada animasi halus, alur pembayaran tanpa hambatan, dan etalase produk bergaya editorial.',
    tags: ['Next.js', 'Framer Motion', 'Stripe API'],
    color: '#8b0000',
    stats: { konversi: '+45%', speed: '<1s' },
    img: '👗',
  },
  {
    id: 3,
    title: 'Dasbor Manajemen Jastip',
    category: 'Dasbor Admin',
    year: '2023',
    desc: 'Dasbor internal untuk mengelola pesanan jasa titip (jastip), pelacakan paket, dan pembuatan faktur otomatis dengan integrasi API WhatsApp.',
    tags: ['Vue.js', 'Express', 'WA-Baileys'],
    color: '#e63946',
    stats: { pesanan: '500+', dihemat: '10jam/mgg' },
    img: '🛍️',
  },
  {
    id: 4,
    title: 'Branding Organisasi Siswa',
    category: 'Identitas Visual',
    year: '2023',
    desc: 'Rebranding lengkap identitas visual organisasi siswa. Meliputi desain ulang logo, templat media sosial, dan materi promosi acara.',
    tags: ['Illustrator', 'Photoshop', 'Figma'],
    color: '#ff7b7b',
    stats: { interaksi: '+150%', aset: '50+' },
    img: '🎨',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden"
      style={{ background: '#060000' }}>

      {/* Decorative bg lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full"
        style={{ background: 'linear-gradient(180deg,transparent,rgba(193,18,31,0.1),transparent)' }} />
      <div className="absolute top-1/2 left-0 w-full h-[1px]"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(193,18,31,0.1),transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <p className="section-subtitle mb-4">karya pilihan</p>
          <h2 className="section-title text-4xl md:text-5xl mb-6">proyek unggulan</h2>
          <p className="text-sm" style={{ color: 'rgba(255,180,180,0.6)' }}>
            Kumpulan karya teknis dan upaya kreatif.
            Menyatukan logika dan estetika untuk memecahkan masalah dunia nyata.
          </p>
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

                    {/* Center Emoji/Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-8xl transition-transform duration-500"
                      style={{ transform: hoveredId === project.id ? 'scale(1.1)' : 'scale(1)' }}>
                      {project.img}
                    </div>

                    {/* Bottom Stat Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500"
                      style={{
                        background: 'linear-gradient(0deg, rgba(10,0,0,0.9), transparent)',
                        transform: hoveredId === project.id ? 'translateY(0)' : 'translateY(100%)',
                      }}>
                      <div className="flex justify-between items-center text-xs font-display">
                        {Object.entries(project.stats).map(([key, val]) => (
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
                    <span>lihat proyek</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
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
