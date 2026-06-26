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
          <Fragment asChild><tr><td>Бедрин Олег</td><td>куратор по продуктовой работе</td></tr></Fragment>
          <Fragment asChild><tr><td>Бурцев Даниил</td><td>куратор по организационной работе</td></tr></Fragment>
          <Fragment asChild><tr><td>Скриптунова Елена</td><td>специалист-социолог</td></tr></Fragment>
          <Fragment asChild><tr><td>Ивашко Роман</td><td>специалист-социолог</td></tr></Fragment>
          <Fragment asChild><tr><td>Вертушкин Георгий</td><td>специалист по Data Science</td></tr></Fragment>
          <Fragment asChild><tr><td>Самодуров Александр</td><td>специалист по Frontend Development</td></tr></Fragment>
        </tbody>
      </table>
    </SlideWrapper>
  );
}
