import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlidePlans() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 06 · Планы" title="Направления развития" />
      <ul className="r-stretch">
        <Fragment asChild><li>Проведение региональных и федеральных тестирований</li></Fragment>
        <Fragment asChild><li>Популяризация: вебинары, Q&amp;A, техническая помощь с установкой</li></Fragment>
        <Fragment asChild><li>Внутренний PR: приглашения участникам, видеоматериалы</li></Fragment>
        <Fragment asChild><li>Доработка ПК-приложения до уровня полноценного офисного ПО</li></Fragment>
        <Fragment asChild><li>Разработка мобильного приложения</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
