import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlidePlans() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 06 · Планы" title="Направления развития" />
      <ul>
        <Fragment asChild><li><T c="peach">Региональные и федеральные</T> тестирования</li></Fragment>
        <Fragment asChild><li>Популяризация: вебинары, Q&amp;A, техническая помощь с установкой</li></Fragment>
        <Fragment asChild><li>Внутренний PR: приглашения участникам, <T c="sec">видеоматериалы</T></li></Fragment>
        <Fragment asChild><li>Доработка <T c="amber">ПК-приложения</T> до уровня полноценного офисного ПО</li></Fragment>
        <Fragment asChild><li>Разработка <T c="amber">мобильного приложения</T></li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
