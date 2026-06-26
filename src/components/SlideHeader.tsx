interface SlideHeaderProps {
  label: string;
  title: React.ReactNode;
}

export function SlideHeader({ label, title }: SlideHeaderProps) {
  return (
    <header className="slide-header">
      {label ? <p className="slide-label"><small>{label}</small></p> : null}
      <h4>{title}</h4>
    </header>
  );
}
