import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

const rows: [string, string][] = [
  ['Авг 2025', 'Zarya.sol, библиотеки (Matricies, Votings, Regions), CI/CD'],
  ['Дек 2025–Янв 2026', 'Spring Boot API, Vue.js фронтенд, Web3j, PostgreSQL'],
  ['Мар 2026', 'ZaryaUI.sol; офф-чейн слой архивирован'],
  ['Апр 2026', 'Упрощение сигнатур; версия без упрощённого кодирования'],
  ['Май 2026', 'Права председателя; тестовые деплои на Sepolia; whitepaper'],
  ['Июн 2026', 'Управление кворумом и пороговыми процентами'],
];

export function SlideContractTimeline() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 02 · Смарт-контракты" title="Хронология: авг 2025 — июн 2026" />
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
    </SlideWrapper>
  );
}
