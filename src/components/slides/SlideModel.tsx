import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideModel() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 01 · Первый документ" title="Математическая модель «Зари»" />
      <ul className="r-stretch">
        <Fragment asChild><li>Мнение партии = матрица выборок M = (Sx, Sy)</li></Fragment>
        <Fragment asChild><li>Обновление — только через DAO-голосования уставных органов</li></Fragment>
        <Fragment asChild><li>Ячейки привязаны к органам (МО, РО, Съезд) строго по Уставу</li></Fragment>
        <Fragment asChild><li>Агрегация off-chain: Python + шаблоны Jinja2 → человекочитаемый текст</li></Fragment>
        <Fragment asChild><li>Результат: статистически обоснованная позиция вместо ручных консультаций</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
