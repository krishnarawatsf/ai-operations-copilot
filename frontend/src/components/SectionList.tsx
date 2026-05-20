type SectionListProps = {
  items: string[];
};

export function SectionList({ items }: SectionListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aurora-400 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
