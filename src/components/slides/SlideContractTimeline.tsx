import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

type TimelineRow = [date: string, event: string];

const rows: TimelineRow[] = [
  ['Авг 2025', 'Zarya.sol, библиотеки (Matricies, Votings, Regions), CI/CD'],
  ['Дек 2025–Янв 2026', 'Spring Boot API, Vue.js фронтенд, Web3j, PostgreSQL'],
  ['Мар 2026', 'ZaryaUI.sol; офф-чейн слой архивирован'],
  ['Апр 2026', 'Упрощение сигнатур; версия без упрощённого кодирования'],
  ['Май 2026', 'Права председателя; тестовые деплои на Sepolia; whitepaper'],
  ['Июн 2026', 'Управление кворумом и пороговыми процентами'],
];

function TimelineTable({ rows }: { rows: TimelineRow[] }) {
  return (
    <table className="r-stretch">
      <tbody>
        {rows.map(([date, event]) => (
          <Fragment asChild key={date}>
            <tr>
              <td>{date}</td>
              <td>{event}</td>
            </tr>
          </Fragment>
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
        title="Хронология: авг 2025 — июн 2026"
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
        title="Хронология: авг 2025 — июн 2026"
      />
      <TimelineTable rows={rows.slice(3)} />
    </SlideWrapper>
  );
}
