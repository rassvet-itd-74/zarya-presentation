import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideWhySoLong1() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 05 · Контекст · 1/2" title="Факторы, влиявшие на сроки" />
      <ul>
        <Fragment asChild><li>Участники совмещают проект с <T c="sec">обучением и основной занятостью</T></li></Fragment>
        <Fragment asChild><li><T c="peach">«Заря»</T> — экосистема: приложение, статистическая модель, смарт-контракты</li></Fragment>
        <Fragment asChild><li>Ценность — в <T c="peach">математической модели</T>; <T c="sec">блокчейн</T> обеспечивает надёжность и устойчивость</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}

export function SlideWhySoLong2() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 05 · Контекст · 2/2" title="Факторы, влиявшие на сроки" />
      <ul>
        <Fragment asChild><li>Обучение модели требует <T c="amber">накопления данных</T> (наполнение ячеек матрицы)</li></Fragment>
        <Fragment asChild><li><T c="red">Дефицит специалистов</T> в узкой предметной области</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
