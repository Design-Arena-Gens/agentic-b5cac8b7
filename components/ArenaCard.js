'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PersonaChip from './PersonaChip';
import { Users } from 'lucide-react';

export default function ArenaCard({ arena, index }) {
  const gradient = `linear-gradient(135deg, ${arena.colors[0]}44, ${arena.colors[1]}33)`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
    >
      <Link href={`/arena/${arena.slug}`} className="block">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
          <div className="absolute inset-0" style={{ background: gradient }} />
          <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full blur-2xl opacity-30" style={{ background: arena.colors[0] }} />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-25" style={{ background: arena.colors[1] }} />

          <div className="relative p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold tracking-wide text-white">
                {arena.title}
              </h3>
              <div className="flex items-center gap-1 text-white/70 text-sm">
                <Users className="w-4 h-4" />
                <span>{arena.personas.length}</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-3">{arena.mood}</p>
            <p className="text-white/90 text-sm mb-4 italic">{arena.hook}</p>
            <div className="flex gap-2 flex-wrap">
              {arena.personas.slice(0,3).map(p => (
                <PersonaChip key={p.id} name={p.name} color={p.color} small/>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
