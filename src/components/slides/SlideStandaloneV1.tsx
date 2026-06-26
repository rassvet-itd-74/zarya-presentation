import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideStandaloneV1() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="Standalone UI версия 1" />
      <ul>
        <Fragment asChild><li><T c="amber">11–12 мая 2026</T>: <T c="peach">Electron</T>-приложение, 6 фаз разработки</li></Fragment>
        <Fragment asChild><li>Крипто-ядро: <T c="sec">AES-256-GCM + scrypt</T></li></Fragment>
        <Fragment asChild><li>Монолитный рендерер; базовый функционал</li></Fragment>
        <Fragment asChild><li><T c="amber">15 мая</T>: монолитный index.html → <T c="peach">15 Vue 3 SFC</T>-компонентов</li></Fragment>
        <Fragment asChild><li>Добавлен сервисный слой и типизация</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
