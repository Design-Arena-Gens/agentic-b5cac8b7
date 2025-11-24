'use client';
import { motion } from 'framer-motion';

export default function ChatBubble({ from='ai', text }) {
  const isAI = from === 'ai';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-full flex ${isAI ? 'justify-start':'justify-end'}`}
    >
      <div className={`${isAI ? 'bg-white/6 border border-white/10':'bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30 border border-white/10'} max-w-[85%] rounded-2xl px-4 py-3 shadow-soft`}> 
        <p className="text-[15px] leading-relaxed text-white/90">{text}</p>
      </div>
    </motion.div>
  );
}
