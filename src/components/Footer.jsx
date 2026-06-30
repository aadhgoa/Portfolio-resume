import React from 'react';
import { resumeData } from '../data/resumeData';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 relative border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href={`https://${resumeData.personalInfo.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:neon-glow-cyan transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href={`https://${resumeData.personalInfo.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-violet-400 hover:neon-glow-cyan transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href={`https://${resumeData.personalInfo.instagram}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-pink-400 hover:neon-glow-cyan transition-all duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href={`mailto:${resumeData.personalInfo.email}`}
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:neon-glow-cyan transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {resumeData.personalInfo.name}. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
