import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { resumeData } from '../data/resumeData';
import { Mail, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-neon/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-neon/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-cyan-400 tracking-wide"
          >
            Available for new opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-gradient">{resumeData.personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-400 mb-8 max-w-3xl font-light h-20 md:h-12"
          >
            I architect <span className="text-white font-medium">
              <Typewriter
                words={[
                  'intelligent multi-agent systems.',
                  'scalable backend platforms.',
                  'enterprise AI automation.',
                  'robust microservices.'
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center items-center mb-16"
          >
            <MagneticButton href="#projects" className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-colors inline-block text-center">
              View Work
            </MagneticButton>
            <MagneticButton href="#contact" className="px-8 py-3 rounded-lg glass-panel font-semibold hover:bg-white/10 transition-colors inline-block text-center">
              Contact Me
            </MagneticButton>
            <MagneticButton href="/resume.pdf" target="_blank" className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all inline-block text-center">
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-6 items-center"
          >
            <SocialLink href={`https://${resumeData.personalInfo.github}`} icon={<FaGithub size={24} />} />
            <SocialLink href={`https://${resumeData.personalInfo.linkedin}`} icon={<FaLinkedin size={24} />} />
            <SocialLink href={`https://${resumeData.personalInfo.instagram}`} icon={<FaInstagram size={24} />} />
            <SocialLink href={`mailto:${resumeData.personalInfo.email}`} icon={<Mail size={24} />} />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <MagneticButton 
    href={href} 
    target="_blank" 
    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:neon-glow-cyan transition-colors"
  >
    {icon}
  </MagneticButton>
);

export default Hero;
