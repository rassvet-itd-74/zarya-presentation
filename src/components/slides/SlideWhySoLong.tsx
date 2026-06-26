import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideWhySoLong() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 05 · Контекст" title="Факторы, влиявшие на сроки" />
      <ul className="r-stretch">
        <Fragment asChild><li>Участники совмещают проект с обучением и основной занятостью</li></Fragment>
        <Fragment asChild><li>«Заря» — экосистема: приложение, статистическая модель, смарт-контракты</li></Fragment>
        <Fragment asChild><li>Ценность — в математической модели; блокчейн обеспечивает надёжность и устойчивость</li></Fragment>
        <Fragment asChild><li>Обучение модели требует накопления данных (наполнение ячеек матрицы)</li></Fragment>
        <Fragment asChild><li>Дефицит специалистов в узкой предметной области</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
