import { Fragment } from '@revealjs/react';
import { SlideWrapper } from '../SlideWrapper';

export function SlideClosing() {
  return (
    <SlideWrapper>
      <h2 className="r-fit-text">Спасибо за внимание</h2>
      <Fragment asChild><p>Вступайте в рабочую группу по разработке «Зари»</p></Fragment>
    </SlideWrapper>
  );
}
