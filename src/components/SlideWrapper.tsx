import type { CSSProperties } from 'react';
import { Slide } from '@revealjs/react';
import logoUrl from '../assets/logo.svg';
import { C, cssVars } from './slides/colors';

interface SlideWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export function SlideWrapper({ children, backgroundColor = C.bg }: SlideWrapperProps) {
  return (
    <Slide
      className="has-dark-background"
      style={cssVars as CSSProperties}
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
