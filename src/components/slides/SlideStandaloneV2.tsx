import { Fragment as RevealFragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

type TimelineRow = [date: string, event: React.ReactNode];

const rows: TimelineRow[] = [
  ['20 мая', <><T c="peach">Matrix Picker</T>, экспорт заявлений, composable-расширения</>],
  ['27 мая', <>13 composables → <T c="amber">13 Pinia stores</T></>],
  ['28 мая', <><T c="peach">Form-Flow Factory</T>: 11 FlowKind, 20 атомарных компонентов</>],
  ['29 мая', <>3-колоночный Shell; <T c="sec">MatrixView</T> как side-panel</>],
  ['Итог', <><T c="green">3 архитектурных перехода</T> от монолита к атомарной архитектуре</>],
];

function StandaloneV2Table({ rows }: { rows: TimelineRow[] }) {
  return (
    <table>
      <tbody>
        {rows.map(([date, event]) => (
          <RevealFragment asChild key={date}>
            <tr>
              <td>{date}</td>
              <td>{event}</td>
            </tr>
          </RevealFragment>
        ))}
      </tbody>
    </table>
  );
}

export function SlideStandaloneV2_1() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI · 1/2" title={<>Standalone UI v2 <T c="green">(текущая)</T></>} />
      <StandaloneV2Table rows={rows.slice(0, 3)} />
    </SlideWrapper>
  );
}

export function SlideStandaloneV2_2() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI · 2/2" title={<>Standalone UI v2 <T c="green">(текущая)</T></>} />
      <StandaloneV2Table rows={rows.slice(3)} />
    </SlideWrapper>
  );
}
