import { Fragment as RevealFragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import type { ReactNode } from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

type TimelineRow = [date: string, event: React.ReactNode];

const rows: TimelineRow[] = [
  ['Авг 2025', <> <T c="peach">Zarya.sol</T>, библиотеки (Matricies, Votings, Regions), CI/CD</>],
  ['Дек 2025–Янв 2026', <><T c="peach">Spring Boot</T> API, Vue.js фронтенд, Web3j, PostgreSQL</>],
  ['Мар 2026', <><T c="peach">ZaryaUI.sol</T>; <T c="muted">офф-чейн слой архивирован</T></>],
  ['Апр 2026', <>Упрощение сигнатур; <T c="muted">версия без упрощённого кодирования</T></>],
  ['Май 2026', <>Права председателя; деплои на <T c="amber">Sepolia</T>; whitepaper</>],
  ['Июн 2026', <>Управление <T c="peach">кворумом</T> и пороговыми процентами</>],
];

function TimelineTable({ rows }: { rows: TimelineRow[] }) {
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

export function SlideContractTimeline1() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Глава 02 · Смарт-контракты · 1/2"
        title={<>Хронология: <T c="amber">авг 2025 — июн 2026</T></>}
      />
      <TimelineTable rows={rows.slice(0, 3)} />
    </SlideWrapper>
  );
}

export function SlideContractTimeline2() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Глава 02 · Смарт-контракты · 2/2"
        title={<>Хронология: <T c="amber">авг 2025 — июн 2026</T></>}
      />
      <TimelineTable rows={rows.slice(3)} />
    </SlideWrapper>
  );
}
