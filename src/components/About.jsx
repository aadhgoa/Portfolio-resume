import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              {resumeData.summary}
            </p>
            
            <div className="flex gap-4 mt-8">
              <div className="glass-panel p-6 rounded-2xl flex-1 flex flex-col items-center justify-center text-center">
                <Briefcase className="text-cyan-400 mb-3" size={32} />
                <h4 className="text-2xl font-bold text-white mb-1">2.5+</h4>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex-1 flex flex-col items-center justify-center text-center">
                <Award className="text-violet-400 mb-3" size={32} />
                <h4 className="text-xl font-bold text-white mb-1">2</h4>
                <p className="text-sm text-slate-400">Certifications</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-[40px] -mr-10 -mt-10 transition-transform group-hover:scale-150" />
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-cyan-400" />
                Education
              </h3>
              {resumeData.education.map(edu => (
                <div key={edu.id} className="mb-4 last:mb-0">
                  <h4 className="font-medium text-white">{edu.institution}</h4>
                  <p className="text-sm text-slate-400 mt-1">{edu.degree}</p>
                  <p className="text-xs text-cyan-400/80 mt-1 font-mono">{edu.period}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-violet-400/10 rounded-full blur-[40px] -mr-10 -mb-10 transition-transform group-hover:scale-150" />
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="text-violet-400" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group mt-6">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-400/10 rounded-full blur-[40px] -mr-10 -mb-10 transition-transform group-hover:scale-150" />
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="text-pink-400" />
                Community & Leadership
              </h3>
              {resumeData.volunteering.map(vol => (
                <div key={vol.id} className="mb-4 last:mb-0">
                  <h4 className="font-medium text-white">{vol.organization}</h4>
                  <p className="text-sm text-slate-300 mt-1">{vol.role}</p>
                  <p className="text-xs text-pink-400/80 mt-1 font-mono">{vol.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
