import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideStandaloneV1() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="Standalone UI версия 1" />
      <ul className="r-stretch">
        <Fragment asChild><li>11–12 мая 2026: Electron-приложение, 6 фаз разработки</li></Fragment>
        <Fragment asChild><li>Крипто-ядро: AES-256-GCM + scrypt</li></Fragment>
        <Fragment asChild><li>Монолитный рендерер; базовый функционал</li></Fragment>
        <Fragment asChild><li>15 мая: монолитный index.html разбит на 15 Vue 3 SFC-компонентов</li></Fragment>
        <Fragment asChild><li>Добавлен сервисный слой и типизация</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
