import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#0c0707' }}>

      {/* Global pink top line */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-0.5 z-40"
        style={{ background: 'linear-gradient(90deg,transparent,#e8189a 30%,#b524c2 70%,transparent)' }} />

      <Navbar />

      <main>
        {/* Block 1 — Profile card + dark photo bg (reference top section) */}
        <Hero />

        {/* Block 2 — Large text + oval photo (reference middle section) */}
        <About />

        {/* Block 3 — Chat interface + stats/thumbnails (reference bottom section) */}
        <Experience />

        {/* Foto Kegiatan — Circular Gallery */}
        <Activities />

        {/* Projects — alternating split layout */}
        <Projects />

        {/* Contact — chat card + quote/hearts */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
