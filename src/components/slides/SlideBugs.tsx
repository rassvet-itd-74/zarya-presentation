import { Fragment as RevealFragment } from '@revealjs/react';
import type { ReactNode } from 'react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

const bugsPart1 = [
  <>Баланс и статус соединения с <T c="amber">блокчейном</T></>,
  <>Офлайн-режим: порядок предзагрузки нарушен</>,
  <>Гости не могут инициировать голосования</>,
  <>Голосование <T c="red">№48</T> не исполняется из UI</>,
  <>Логика кворума: <T c="red">1 за / 1 против — принимается</T></>,
];

const bugsPart2 = [
  <>Медленный рендер и нечитаемый дизайн <T c="peach">матрицы</T></>,
  <>Неинформативные сообщения об ошибках</>,
  <>Нет сокрытия карточек с уже отданным голосом</>,
  <>Отсутствуют <T c="amber">псевдонимы</T> участников</>,
  <>В истории не указывается целевая матрица</>,
];

function BugList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-danger">
      {items.map((item, i) => (
        <RevealFragment asChild key={i}>
          <li>{item}</li>
        </RevealFragment>
      ))}
    </ul>
  );
}

export function SlideBugs1() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Глава 04 · Региональные тесты · 1/2"
        title={<>Баги: <T c="red">сеть, офлайн, голосования</T></>}
      />
      <BugList items={bugsPart1} />
    </SlideWrapper>
  );
}

export function SlideBugs2() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Глава 04 · Региональные тесты · 2/2"
        title={<>Баги: <T c="red">UI, матрица, история</T></>}
      />
      <BugList items={bugsPart2} />
    </SlideWrapper>
  );
}
