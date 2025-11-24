'use client';
import { Mic } from 'lucide-react';

export default function VoiceButton({ onPress }) {
  return (
    <button
      aria-label="Record voice note"
      onClick={onPress}
      className="relative isolate rounded-full p-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition shadow-soft"
    >
      <span className="absolute inset-0 rounded-full animate-pulseRing" style={{ boxShadow: '0 0 0 0 rgba(154,108,255,0.45)' }} />
      <Mic className="w-5 h-5" />
    </button>
  );
}
