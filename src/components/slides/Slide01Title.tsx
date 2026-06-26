import { SlideWrapper } from '../SlideWrapper';
import { C } from './colors';

export function Slide01Title() {
  return (
    <SlideWrapper>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        height: '100%', padding: '5% 8%', boxSizing: 'border-box',
        textAlign: 'center',
      }}>
        <div style={{ width: '4em', height: '0.25em', background: `linear-gradient(90deg, ${C.brand}, ${C.peach})`, borderRadius: '2px', marginBottom: '1.4em' }} />
        <div>
          <div style={{ fontSize: '0.65em', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8em' }}>
            Текущее состояние и планы разработки
          </div>
          <h1 style={{ margin: 0, fontSize: '3em', fontWeight: 700, lineHeight: 1.05, color: C.text }}>
            ДАВО <span style={{ color: C.brand }}>Заря</span>
          </h1>
          <p style={{ margin: '0.7em 0 0', fontSize: '1.05em', color: C.peach, fontWeight: 500 }}>
            Социологическая платформа
          </p>
          <p style={{ margin: '0.5em 0 0', fontSize: '0.7em', color: C.muted }}>
            Децентрализованная автономная внутрипартийная организация
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
