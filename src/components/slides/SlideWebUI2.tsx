import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideWebUI2() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="Web UI v2 → Расcвет.Смарты" />
      <ul className="r-stretch">
        <Fragment asChild><li>Стек: Next.js 14, wagmi v2, RainbowKit, Tailwind + DaisyUI</li></Fragment>
        <Fragment asChild><li>Мар 2026: ребрендинг, i18n (ru/en, 268 строк), перевод UI на русский</li></Fragment>
        <Fragment asChild><li>Мар 2026: BooleanInput; деплой AWS Amplify</li></Fragment>
        <Fragment asChild><li>Переориентирован: тестирование любых смарт-контрактов</li></Fragment>
        <Fragment asChild><li>Май 2026: добавлены инструкции для агентов (AGENTS.md, CLAUDE.md)</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
