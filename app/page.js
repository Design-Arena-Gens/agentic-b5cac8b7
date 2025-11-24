import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Page() {
  return (
    <div className="px-5 pt-14 pb-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
        <div className="absolute -top-24 -left-10 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: '#9a6cff' }} />
        <div className="absolute -bottom-24 -right-10 w-72 h-72 rounded-full blur-3xl opacity-25" style={{ background: '#66e0ff' }} />

        <div className="relative flex flex-col items-center text-center gap-6">
          <div className="w-28 h-28 rounded-full neon-ring bg-white/5 grid place-items-center animate-float">
            <Sparkles className="w-8 h-8 text-white/90" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Onboarding</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight">
              <span className="text-gradient">Enter the Arena.</span>
              <br />
              <span className="text-white/90">Create your narrative.</span>
            </h1>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            Step into themed rooms with living AI personas. Craft stories, test ideas
            and design emotions in a premium chat experience.
          </p>
          <Link href="/arenas" className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-white/10 bg-white/10 text-white shadow-neon hover:bg-white/15 transition">
            Enter the Arena
          </Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        {new Array(6).fill(0).map((_,i)=> (
          <div key={i} className="aspect-square rounded-2xl border border-white/10 bg-white/5 animate-glow" />
        ))}
      </div>
    </div>
  );
}
