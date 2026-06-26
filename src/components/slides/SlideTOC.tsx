import { Fragment } from '@revealjs/react';
import type { ReactNode } from 'react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

type TOCEntry = [num: string, topic: ReactNode, details: ReactNode];

const tocRows: TOCEntry[] = [
  ['1', 'Первый документ с предложением', <>История создания и <T c="peach">модель Зари</T></>],
  ['2', <T c="peach">Смарт-контракты</T>, <>Две версии контракта. Хронология <T c="amber">авг 2025 — июн 2026</T></>],
  ['3', 'Версии UI', <>MetaMask Snaps, Web UI v1 и v2, <T c="green">Standalone UI v2</T></>],
  ['4', 'Региональные тесты', <>Два теста, <T c="green">успехи</T>, <T c="red">выявленные баги</T></>],
  ['5', 'Почему так долго?', <><T c="red">Дефицит ресурсов</T>, сложность продукта</>],
  ['6', 'Итоги и планы', <>Что сделано, <T c="amber">что дальше</T></>],
];

function TOCTable({ rows }: { rows: TOCEntry[] }) {
  return (
    <table>
      <thead>
        <tr><th>#</th><th>Тема</th><th>Подробности</th></tr>
      </thead>
      <tbody>
        {rows.map(([num, topic, details]) => (
          <Fragment asChild key={num}>
            <tr><td>{num}</td><td>{topic}</td><td>{details}</td></tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

export function SlideTOC1() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Содержание · 1/2"
        title={<>Хронология: от <T c="peach">ЦС</T> до последнего теста</>}
      />
      <TOCTable rows={tocRows.slice(0, 3)} />
    </SlideWrapper>
  );
}

export function SlideTOC2() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Содержание · 2/2"
        title={<>Хронология: от <T c="peach">ЦС</T> до последнего теста</>}
      />
      <TOCTable rows={tocRows.slice(3)} />
    </SlideWrapper>
  );
}
