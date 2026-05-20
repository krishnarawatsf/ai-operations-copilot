type StatCardProps = {
  label: string;
  value: string;
  trend?: string;
};

export function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-1">
      <p className="text-sm text-slate-400">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <span className="text-3xl font-semibold tracking-tight text-white">{value}</span>
        {trend ? <span className="rounded-full bg-electric-500/15 px-3 py-1 text-xs font-semibold text-electric-300">{trend}</span> : null}
      </div>
    </article>
  );
}
