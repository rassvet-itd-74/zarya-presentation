import type { ColorKey } from './colors';

export function T({ c, children }: { c: ColorKey; children: React.ReactNode }) {
  return <span className={`z-${c}`}>{children}</span>;
}
