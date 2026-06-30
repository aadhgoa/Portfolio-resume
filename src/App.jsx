import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import ParticleBackground from './components/ParticleBackground';
import Terminal from './components/Terminal';
import BugHunter from './components/BugHunter';

function App() {
  const { scrollYProgress } = useScroll();
  const { width, height } = useWindowSize();
  const [partyMode, setPartyMode] = useState(false);
  const [konamiIdx, setKonamiIdx] = useState(0);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIdx]) {
        if (konamiIdx === konamiCode.length - 1) {
          setPartyMode(true);
          setTimeout(() => setPartyMode(false), 8000);
          setKonamiIdx(0);
        } else {
          setKonamiIdx(k => k + 1);
        }
      } else {
        setKonamiIdx(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIdx, konamiCode]);

  return (
    <div className={`min-h-screen text-slate-200 selection:bg-cyan-900/30 overflow-x-hidden relative transition-colors duration-1000 ${partyMode ? 'animate-pulse drop-shadow-[0_0_100px_rgba(255,0,255,0.8)]' : ''}`}>
      {partyMode && <Confetti width={width} height={height} numberOfPieces={800} recycle={false} />}
      <BugHunter />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <BackToTop />
      <Terminal />
    </div>
  );
}

export default App;
