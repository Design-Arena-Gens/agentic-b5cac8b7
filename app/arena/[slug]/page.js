'use client';
import { useMemo, useState } from 'react';
import Navbar from '../../../components/Navbar';
import PersonaChip from '../../../components/PersonaChip';
import ChatBubble from '../../../components/ChatBubble';
import VoiceButton from '../../../components/VoiceButton';
import { arenas } from '../../../lib/data';

export default function ArenaRoom({ params }) {
  const arena = useMemo(() => arenas.find(a => a.slug === params.slug) || arenas[0], [params.slug]);
  const [messages, setMessages] = useState([
    { id: 1, from: 'ai', text: `Welcome to ${arena.title}. ${arena.hook}`},
    { id: 2, from: 'user', text: 'Set the scene with rain and neon.'},
    { id: 3, from: 'ai', text: 'RONIN-4: Your wish slices the sky open.'},
  ]);
  const [input, setInput] = useState('');

  function sendMessage(text) {
    if (!text.trim()) return;
    setMessages(m => [...m, { id: Date.now(), from: 'user', text }]);
    setInput('');
    // Simulated AI typing
    setTimeout(() => {
      const reply = `${arena.personas[0].name}: Noted. What conflict defines you tonight?`;
      setMessages(m => [...m, { id: Date.now()+1, from: 'ai', text: reply }]);
    }, 600);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title={arena.title} backHref="/arenas" />
      <div className="px-4 pt-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {arena.personas.map(p => (
            <PersonaChip key={p.id} name={p.name} color={p.color} />
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 py-3 space-y-3">
        {messages.map(m => (
          <ChatBubble key={m.id} from={m.from} text={m.text} />
        ))}
      </div>

      <div className="px-4 pb-6">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-2">
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=>{ if(e.key==='Enter') sendMessage(input) }}
            placeholder="Write. Or hold to speak."
            className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-white/40 px-2 py-2"
          />
          <VoiceButton onPress={() => sendMessage('?? Voice note (mock)')} />
          <button
            onClick={() => sendMessage(input)}
            className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15"
          >
            Send
          </button>
        </div>
        <p className="text-[11px] text-white/40 mt-2 text-center">Avatars and voice are illustrative. This is a live concept UI.</p>
      </div>
    </div>
  );
}
