import type { ReactNode } from 'react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

type Participant = [name: ReactNode, role: ReactNode];

const participants: Participant[] = [
  ['Бедрин Олег', 'куратор по продуктовой работе'],
  ['Бурцев Даниил', 'куратор по организационной работе'],
  ['Скриптунова Елена', 'специалист-социолог'],
  ['Ивашко Роман', 'специалист-социолог'],
  ['Вертушкин Георгий', <>специалист по <T c="amber">Data Science</T></>],
  ['Самодуров Александр', <T c="peach">Frontend разработчик</T>],
];

function ParticipantsTable({ rows }: { rows: Participant[] }) {
  return (
    <table className="table-people">
      <thead>
        <tr><th>Имя</th><th>Роль</th></tr>
      </thead>
      <tbody>
        {rows.map(([name, role], i) => (
          <tr key={i}>
            <td>{name}</td>
            <td>{role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function SlideParticipants1() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Участники · 1/2"
        title={<>Участники <T c="peach">проекта</T></>}
      />
      <ParticipantsTable rows={participants.slice(0, 3)} />
    </SlideWrapper>
  );
}

export function SlideParticipants2() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Участники · 2/2"
        title={<>Участники <T c="peach">проекта</T></>}
      />
      <ParticipantsTable rows={participants.slice(3)} />
    </SlideWrapper>
  );
}
