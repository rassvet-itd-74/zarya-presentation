import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideModel() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 01 · Первый документ" title="Математическая модель «Зари»" />
      <ul>
        <Fragment asChild><li>Мнение партии = матрица выборок <T c="peach">M = (Sx, Sy)</T></li></Fragment>
        <Fragment asChild><li>Обновление — только через <T c="amber">DAO-голосования</T> уставных органов</li></Fragment>
        <Fragment asChild><li>Ячейки привязаны к органам (<T c="sec">МО, РО, Съезд</T>) строго по Уставу</li></Fragment>
        <Fragment asChild><li>Агрегация off-chain: <T c="amber">Python</T> + шаблоны <T c="sec">Jinja2</T> → человекочитаемый текст</li></Fragment>
        <Fragment asChild><li>Результат: <T c="green">статистически обоснованная позиция</T> вместо ручных консультаций</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
