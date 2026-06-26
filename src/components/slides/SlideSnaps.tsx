import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideSnaps() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="MetaMask Snaps" />
      <ul className="r-stretch">
        <Fragment asChild><li>Включён в первоначальное предложение как один из вариантов UI</li></Fragment>
        <Fragment asChild><li>MetaMask Snaps — расширение браузерного кошелька MetaMask</li></Fragment>
        <Fragment asChild><li>В разработку не вошёл, остался на стадии концепта</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
