import { Markdown } from '@revealjs/react';
import { SlideWrapper } from '../SlideWrapper';

const md = `
## Участники проекта

| Имя | Роль |
|---|---|
| Бедрин Олег | куратор по продуктовой работе |
| Бурцев Даниил | куратор по организационной работе |
| Скриптунова Елена | специалист-социолог |
| Ивашко Роман | специалист-социолог |
| Вертушкин Георгий | специалист по Data Science |
| Самодуров Александр | специалист по Frontend Development |
`;

export function Slide01bParticipants() {
  return (
    <SlideWrapper>
      <div style={{ fontSize: '0.8em', textAlign: 'center' }}>
        <Markdown>{md}</Markdown>
      </div>
    </SlideWrapper>
  );
}
