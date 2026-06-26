import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideParticipants() {
  return (
    <SlideWrapper>
      <SlideHeader label="" title="Участники проекта" />
      <table className="r-stretch">
        <thead>
          <tr><th>Имя</th><th>Роль</th></tr>
        </thead>
        <tbody>
          <tr><td>Бедрин Олег</td><td>куратор по продуктовой работе</td></tr>
          <tr><td>Бурцев Даниил</td><td>куратор по организационной работе</td></tr>
          <tr><td>Скриптунова Елена</td><td>специалист-социолог</td></tr>
          <tr><td>Ивашко Роман</td><td>специалист-социолог</td></tr>
          <tr><td>Вертушкин Георгий</td><td>специалист по Data Science</td></tr>
          <tr><td>Самодуров Александр</td><td>Frontend разработчик</td></tr>
        </tbody>
      </table>
    </SlideWrapper>
  );
}
