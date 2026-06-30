import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const BugHunter = () => {
  const [bugPos, setBugPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [caught, setCaught] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    // Randomly spawn the bug every 10-20 seconds if not caught
    if (caught) return;

    const spawnBug = () => {
      const randomX = Math.random() * (window.innerWidth - 50);
      const randomY = Math.random() * (window.innerHeight - 50);
      setBugPos({ x: randomX, y: randomY });
      setIsVisible(true);

      // Bug disappears after 3 seconds if not caught
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        spawnBug();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [caught]);

  const catchBug = () => {
    setCaught(true);
    setIsVisible(false);
    setTimeout(() => setCaught(false), 8000); // Reset after 8 seconds
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !caught && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: bugPos.x, y: bugPos.y }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: bugPos.x + (Math.random() * 100 - 50), // Jitter
              y: bugPos.y + (Math.random() * 100 - 50),
              rotate: Math.random() * 360
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 10 }}
            className="fixed z-[200] cursor-crosshair text-green-500 hover:text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
            onClick={catchBug}
            style={{ left: 0, top: 0 }}
          >
            <Bug size={32} />
          </motion.div>
        )}
      </AnimatePresence>

      {caught && (
        <div className="fixed inset-0 z-[300] pointer-events-none flex items-center justify-center">
          <Confetti width={width} height={height} recycle={false} numberOfPieces={500} colors={['#00f3ff', '#9d00ff', '#22c55e']} />
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="glass-panel p-8 rounded-2xl border-2 border-green-500 text-center shadow-[0_0_50px_rgba(34,197,94,0.3)] bg-navy-950/90"
          >
            <Bug size={64} className="mx-auto mb-4 text-green-500" />
            <h2 className="text-3xl font-bold text-white mb-2">BUG CAUGHT!</h2>
            <p className="text-slate-300">You squashed the rogue AI bug.</p>
            <p className="text-sm text-green-400 font-mono mt-4">+1000 Developer Points</p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default BugHunter;
