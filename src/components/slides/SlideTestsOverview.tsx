import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideTestsOverview1() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 04 · Региональные тесты · 1/2" title={<>Тест 1 — <T c="sec">Web UI v2</T></>} />
      <ul className="list-danger">
        <Fragment asChild><li>Сложные многошаговые сценарии</li></Fragment>
        <Fragment asChild><li>Ручной ввод бинарных данных в формах голосования</li></Fragment>
        <Fragment asChild><li><T c="red">Результат: операции не были завершены участниками</T></li></Fragment>
      </ul>
    </SlideWrapper>
  );
}

export function SlideTestsOverview2() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 04 · Региональные тесты · 2/2" title={<>Тест 2 — <T c="green">Standalone UI v2</T></>} />
      <ul className="list-success">
        <Fragment asChild><li><T c="peach">Form-Flow</T> упростил выполнение операций</li></Fragment>
        <Fragment asChild><li>Закрыты 2 вопроса: <T c="amber">категориальная и цифровая матрицы</T></li></Fragment>
        <Fragment asChild><li><T c="green">Сгенерирован первый отчёт</T>; получена обратная связь</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
