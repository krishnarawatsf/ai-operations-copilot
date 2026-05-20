import type { ReactNode } from 'react';

type ShellProps = {
  title: string;
  eyebrow: string;
  children: ReactNode;
};

export function Shell({ title, eyebrow, children }: ShellProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 shadow-glow backdrop-blur-xl">
        <div className="border-b border-white/10 px-6 py-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric-400">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
        </div>
        <div className="px-6 py-6 sm:px-8">{children}</div>
      </div>
    </div>
  );
}
