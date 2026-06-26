import { C } from './slides/colors';

interface SlideHeaderProps {
  label: string;
  title: React.ReactNode;
}

export function SlideHeader({ label, title }: SlideHeaderProps) {
  return (
    <div style={{ marginBottom: '1.4em', borderBottom: `1px solid ${C.border}`, paddingBottom: '0.8em' }}>
      <p style={{ margin: 0, fontSize: '0.6em', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label}
      </p>
      <h2 style={{ margin: '0.2em 0 0', fontSize: '1.4em', fontWeight: 700, color: C.text }}>
        {title}
      </h2>
    </div>
  );
}
