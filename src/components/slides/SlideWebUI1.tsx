import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideWebUI1() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="Web UI версия 1" />
      <ul className="r-stretch">
        <Fragment asChild><li>72 коммита · 3 подпроекта · Solidity, TypeScript, Java</li></Fragment>
        <Fragment asChild><li>Смарт-контракты: Foundry, OpenZeppelin, Sepolia; 8 типов голосований</li></Fragment>
        <Fragment asChild><li>Фронтенд: Vue 3 + Vite, i18n (ru/en)</li></Fragment>
        <Fragment asChild><li>Бэкенд: Spring Boot, GraphQL, PDF-отчёты, PostgreSQL; устранена уязвимость CSRF</li></Fragment>
        <Fragment asChild><li>Окт 2025 → Янв 2026: от старта до финализации всех типов голосований</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
