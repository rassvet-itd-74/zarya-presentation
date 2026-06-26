import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

type TOCEntry = [num: string, topic: string, details: string];

const tocRows: TOCEntry[] = [
  ['1', 'Первый документ с предложением', 'История создания и модель Зари'],
  ['2', 'Смарт-контракты', 'Две версии контракта. Хронология авг 2025 — июн 2026'],
  ['3', 'Версии UI', 'MetaMask Snaps, Web UI v1 и v2, Standalone UI v1 и v2'],
  ['4', 'Региональные тесты', 'Два теста, успехи, выявленные баги'],
  ['5', 'Почему так долго?', 'Дефицит ресурсов, сложность продукта'],
  ['6', 'Итоги и планы', 'Что сделано, что дальше'],
];

function TOCTable({ rows }: { rows: TOCEntry[] }) {
  return (
    <table className="r-stretch">
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
        title="Хронология: от создания на ЦС до последнего теста"
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
        title="Хронология: от создания на ЦС до последнего теста"
      />
      <TOCTable rows={tocRows.slice(3)} />
    </SlideWrapper>
  );
}
