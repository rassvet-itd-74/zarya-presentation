import { Slide } from '@revealjs/react';
import logoUrl from '../assets/logo.svg';

interface SlideWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export function SlideWrapper({ children, backgroundColor = '#0f172a' }: SlideWrapperProps) {
  return (
    <Slide
      backgroundColor={backgroundColor}
      backgroundImage={logoUrl}
      backgroundSize="contain"
      backgroundPosition="center"
      backgroundOpacity={0.05}
    >
      {children}
    </Slide>
  );
}
