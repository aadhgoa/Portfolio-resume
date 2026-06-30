import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TermIcon, X, Minus } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Aayush OS v2.0. Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'user', text: `guest@aayush-os:~$ ${input}` }];
      
      switch (cmd) {
        case 'help':
          newHistory.push({ type: 'system', text: 'Commands: whoami, skills, clear, sudo party, matrix, sudo rm -rf /' });
          break;
        case 'whoami':
          newHistory.push({ type: 'system', text: `User: ${resumeData.personalInfo.name} | Role: ${resumeData.personalInfo.title}` });
          break;
        case 'skills':
          newHistory.push({ type: 'system', text: `Languages: ${resumeData.skills.languages.join(', ')}` });
          newHistory.push({ type: 'system', text: `AI: ${resumeData.skills.ai.join(', ')}` });
          break;
        case 'matrix':
          newHistory.push({ type: 'system', text: 'Wake up, Neo... The Matrix has you.' });
          setTimeout(() => {
            document.body.style.filter = 'hue-rotate(90deg) contrast(1.5)';
            setTimeout(() => document.body.style.filter = '', 5000);
          }, 1000);
          break;
        case 'sudo party':
          newHistory.push({ type: 'system', text: 'Initiating party protocols... 🪩🕺' });
          const event = new KeyboardEvent('keydown', { key: 'a' });
          // Hacky way to trigger party mode if we just simulate the end of the code, 
          // or we can just tell them to use the code!
          newHistory.push({ type: 'system', text: 'Wait, I need the Konami code: ↑ ↑ ↓ ↓ ← → ← → b a' });
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'sudo rm -rf /':
          newHistory.push({ type: 'system', text: 'Nice try! But you don\'t have root privileges. 😉' });
          break;
        case '':
          break;
        default:
          newHistory.push({ type: 'system', text: `Command not found: ${cmd}. Type "help" for a list of commands.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <>
      {/* Floating Terminal Trigger Button */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-8 z-[90] p-4 rounded-full glass-panel text-cyan-400 hover:text-white hover:bg-cyan-500/20 shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all"
        >
          <TermIcon size={24} />
        </motion.button>
      )}

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, height: isMinimized ? '40px' : '350px' }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-[100] w-[350px] bg-[#0a0a0f]/95 border border-cyan-400/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.15)] backdrop-blur-md flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-900 px-4 py-2 flex items-center justify-between cursor-grab active:cursor-grabbing border-b border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <TermIcon size={14} />
                <span>guest@aayush-os</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setIsMinimized(!isMinimized)} className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 flex items-center justify-center group">
                  <Minus size={8} className="opacity-0 group-hover:opacity-100 text-yellow-900" />
                </button>
                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 flex items-center justify-center group">
                  <X size={8} className="opacity-0 group-hover:opacity-100 text-red-900" />
                </button>
              </div>
            </div>

            {/* Body */}
            {!isMinimized && (
              <div className="flex-1 p-4 font-mono text-sm overflow-y-auto text-slate-300" onClick={() => inputRef.current?.focus()}>
                {history.map((line, i) => (
                  <div key={i} className={`mb-1 ${line.type === 'user' ? 'text-cyan-400' : 'text-slate-300'}`}>
                    {line.text}
                  </div>
                ))}
                <div className="flex items-center mt-2">
                  <span className="text-cyan-400 mr-2">guest@aayush-os:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="flex-1 bg-transparent border-none outline-none text-white caret-cyan-400"
                    spellCheck="false"
                    autoComplete="off"
                  />
                </div>
                <div ref={endRef} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
