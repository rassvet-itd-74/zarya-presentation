import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

const bugsPart1 = [
  'Баланс и статус соединения с блокчейном',
  'Офлайн-режим: порядок предзагрузки нарушен',
  'Гости не могут инициировать голосования',
  'Голосование №48 не исполняется из UI',
  'Логика кворума: 1 за / 1 против — принимается',
];

const bugsPart2 = [
  'Медленный рендер и нечитаемый дизайн матрицы',
  'Неинформативные сообщения об ошибках',
  'Нет сокрытия карточек с уже отданным голосом',
  'Отсутствуют псевдонимы участников',
  'В истории не указывается целевая матрица',
];

function BugList({ items }: { items: string[] }) {
  return (
    <ul className="r-stretch">
      {items.map(item => (
        <Fragment asChild key={item}>
          <li>{item}</li>
        </Fragment>
      ))}
    </ul>
  );
}

export function SlideBugs1() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Глава 04 · Региональные тесты · 1/2"
        title="Баги: сеть, офлайн, голосования"
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
        title="Баги: UI, матрица, история"
      />
      <BugList items={bugsPart2} />
    </SlideWrapper>
  );
}
