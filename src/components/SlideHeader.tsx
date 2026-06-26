interface SlideHeaderProps {
  label: string;
  title: React.ReactNode;
}

export function SlideHeader({ label, title }: SlideHeaderProps) {
  return (
    <>
      <p><small>{label}</small></p>
      <h4>{title}</h4>
    </>
  );
}
