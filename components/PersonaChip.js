'use client';
import { motion } from 'framer-motion';

export default function PersonaChip({ name, color, small=false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`flex items-center gap-2 px-3 ${small? 'py-1.5 rounded-xl':'py-2 rounded-2xl'} bg-white/5 border border-white/10`}
      style={{ boxShadow: `0 0 22px ${color}33` }}
    >
      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-sm text-white/90">{name}</span>
    </motion.div>
  );
}
