import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

const left = [
  'Баланс и статус соединения с блокчейном',
  'Офлайн-режим: порядок предзагрузки нарушен',
  'Гости не могут инициировать голосования',
  'Голосование №48 не исполняется из UI',
  'Логика кворума: 1 за / 1 против — принимается',
];

const right = [
  'Медленный рендер и нечитаемый дизайн матрицы',
  'Неинформативные сообщения об ошибках',
  'Нет сокрытия карточек с уже отданным голосом',
  'Отсутствуют псевдонимы участников',
  'В истории не указывается целевая матрица',
];

export function SlideBugs() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 04 · Региональные тесты" title="Баги, выявленные по итогам тестирования" />
      <div className="r-stretch r-hstack">
        <Fragment asChild>
          <div>
            <ul>
              {left.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </Fragment>
        <Fragment asChild>
          <div>
            <ul>
              {right.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </Fragment>
      </div>
    </SlideWrapper>
  );
}
