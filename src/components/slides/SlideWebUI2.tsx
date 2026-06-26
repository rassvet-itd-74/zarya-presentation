import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideWebUI2() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title={<>Web UI v2 → <T c="peach">Расcвет.Смарты</T></>} />
      <ul>
        <Fragment asChild><li>Стек: <T c="amber">Next.js 14, wagmi v2, RainbowKit</T>, Tailwind + DaisyUI</li></Fragment>
        <Fragment asChild><li><T c="amber">Мар 2026</T>: ребрендинг, i18n (ru/en, 268 строк), перевод UI на русский</li></Fragment>
        <Fragment asChild><li>Мар 2026: BooleanInput; деплой <T c="sec">AWS Amplify</T></li></Fragment>
        <Fragment asChild><li>Переориентирован: <T c="green">тестирование любых смарт-контрактов</T></li></Fragment>
        <Fragment asChild><li><T c="amber">Май 2026</T>: добавлены инструкции для агентов (AGENTS.md, CLAUDE.md)</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
