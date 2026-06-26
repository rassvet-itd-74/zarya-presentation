import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideSnaps() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="MetaMask Snaps" />
      <ul className="list-muted">
        <Fragment asChild><li>Включён в первоначальное предложение как один из вариантов UI</li></Fragment>
        <Fragment asChild><li><T c="peach">MetaMask Snaps</T> — расширение браузерного кошелька MetaMask</li></Fragment>
        <Fragment asChild><li><T c="red">В разработку не вошёл</T>, остался на стадии концепта</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
