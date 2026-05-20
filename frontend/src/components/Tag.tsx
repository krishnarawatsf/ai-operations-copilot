import type { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-electric-400/30 bg-electric-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-electric-300">
      {children}
    </span>
  );
}
