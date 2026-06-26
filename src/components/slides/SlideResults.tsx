import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideResults() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 06 · Итоги" title="Результаты на сегодняшний день" />
      <ul className="r-stretch">
        <Fragment asChild><li>База вопросов, подготовленная специалистами-социологами</li></Fragment>
        <Fragment asChild><li>Установочный UI для работы с «Зарей» (Standalone UI v2)</li></Fragment>
        <Fragment asChild><li>Протестированные смарт-контракты на Sepolia</li></Fragment>
        <Fragment asChild><li>Побочный продукт: Расcвет.Смарты — инструмент тестирования смарт-контрактов</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
