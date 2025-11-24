import Navbar from '../../components/Navbar';
import ArenaCard from '../../components/ArenaCard';
import { arenas } from '../../lib/data';

export const metadata = { title: 'Design Arena ? Hub' };

export default function ArenasPage() {
  return (
    <div>
      <Navbar title="Arena Hub" />
      <div className="px-4 pt-3 pb-8">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Pick your arena</h1>
          <p className="text-white/70 text-sm mt-1">Futuristic rooms with distinct AI personas.</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {arenas.map((arena, idx) => (
            <ArenaCard key={arena.slug} arena={arena} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
