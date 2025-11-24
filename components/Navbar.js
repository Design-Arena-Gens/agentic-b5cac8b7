import Link from 'next/link';
import { ChevronLeft, Sparkles } from 'lucide-react';

export default function Navbar({ title, backHref }) {
  return (
    <div className="sticky top-0 z-20 px-4 pt-4 pb-3 bg-canvas/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-md mx-auto flex items-center gap-3">
        {backHref ? (
          <Link href={backHref} className="p-2 rounded-xl bg-white/5 border border-white/10 text-white">
            <ChevronLeft className="w-5 h-5" />
          </Link>
        ) : (
          <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white">
            <Sparkles className="w-5 h-5" />
          </div>
        )}
        <h2 className="text-white/90 text-lg font-semibold tracking-wide">{title}</h2>
      </div>
    </div>
  );
}
