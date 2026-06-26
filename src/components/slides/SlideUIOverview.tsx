import { Fragment } from '@revealjs/react';
import type { ReactNode } from 'react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

type UIEntry = [num: string, version: ReactNode, outcome: ReactNode];

const rows: UIEntry[] = [
  ['1', <T c="peach">MetaMask Snaps</T>, <T c="muted">Концепт, не реализован</T>],
  ['2', <T c="peach">Web UI v1</T>, <T c="sec">Реализован, архивирован</T>],
  ['3', <>Web UI v2 → <T c="peach">Расcвет.Смарты</T></>, <T c="amber">Переработан в отдельный инструмент</T>],
  ['4', <T c="peach">Standalone UI v1</T>, <T c="sec">Реализован, заменён</T>],
  ['5', <T c="peach">Standalone UI v2</T>, <T c="green">Текущая версия</T>],
];

function UIOverviewTable({ rows }: { rows: UIEntry[] }) {
  return (
    <table>
      <thead>
        <tr><th>#</th><th>Версия</th><th>Итог</th></tr>
      </thead>
      <tbody>
        {rows.map(([num, version, outcome]) => (
          <Fragment asChild key={num}>
            <tr><td>{num}</td><td>{version}</td><td>{outcome}</td></tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

export function SlideUIOverview1() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Глава 03 · Версии UI · 1/2"
        title={<>Пять версий <T c="peach">интерфейса</T></>}
      />
      <UIOverviewTable rows={rows.slice(0, 3)} />
    </SlideWrapper>
  );
}

export function SlideUIOverview2() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Глава 03 · Версии UI · 2/2"
        title={<>Пять версий <T c="peach">интерфейса</T></>}
      />
      <UIOverviewTable rows={rows.slice(3)} />
    </SlideWrapper>
  );
}
