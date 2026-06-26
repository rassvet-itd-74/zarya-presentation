import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideResults() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 06 · Итоги" title="Результаты на сегодняшний день" />
      <ul className="list-success">
        <Fragment asChild><li>База вопросов, подготовленная <T c="peach">специалистами-социологами</T></li></Fragment>
        <Fragment asChild><li>Установочный UI для работы с <T c="peach">«Зарей»</T> (Standalone UI v2)</li></Fragment>
        <Fragment asChild><li>Протестированные смарт-контракты на <T c="amber">Sepolia</T></li></Fragment>
        <Fragment asChild><li>Побочный продукт: <T c="peach">Расcвет.Смарты</T> — инструмент тестирования смарт-контрактов</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
