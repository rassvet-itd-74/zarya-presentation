import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideWebUI1() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="Web UI версия 1" />
      <ul>
        <Fragment asChild><li>72 коммита · 3 подпроекта · <T c="amber">Solidity, TypeScript, Java</T></li></Fragment>
        <Fragment asChild><li>Смарт-контракты: <T c="sec">Foundry, OpenZeppelin, Sepolia</T>; 8 типов голосований</li></Fragment>
        <Fragment asChild><li>Фронтенд: <T c="peach">Vue 3 + Vite</T>, i18n (ru/en)</li></Fragment>
        <Fragment asChild><li>Бэкенд: <T c="peach">Spring Boot, GraphQL</T>, PDF-отчёты, PostgreSQL; устранена уязвимость CSRF</li></Fragment>
        <Fragment asChild><li><T c="amber">Окт 2025 → Янв 2026</T>: от старта до финализации всех типов голосований</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
