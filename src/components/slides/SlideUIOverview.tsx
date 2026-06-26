import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideUIOverview() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="Пять версий интерфейса" />
      <table className="r-stretch">
        <thead>
          <tr><th>#</th><th>Версия</th><th>Итог</th></tr>
        </thead>
        <tbody>
          <Fragment asChild><tr><td>1</td><td>MetaMask Snaps</td><td>Концепт, не реализован</td></tr></Fragment>
          <Fragment asChild><tr><td>2</td><td>Web UI v1</td><td>Реализован, архивирован</td></tr></Fragment>
          <Fragment asChild><tr><td>3</td><td>Web UI v2 → Рассвет.Смарты</td><td>Переработан в отдельный инструмент</td></tr></Fragment>
          <Fragment asChild><tr><td>4</td><td>Standalone UI v1</td><td>Реализован, заменён</td></tr></Fragment>
          <Fragment asChild><tr><td>5</td><td>Standalone UI v2</td><td>Текущая версия</td></tr></Fragment>
        </tbody>
      </table>
    </SlideWrapper>
  );
}
