import { Fragment } from '@revealjs/react';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';
import zaryaUrl from '../../assets/zarya.png';
import ichUrl from '../../assets/ich.jpg';

export function SlideClosing() {
  return (
    <SlideWrapper>
      <h2 className="r-fit-text">Спасибо за внимание</h2>
      <img src={zaryaUrl} alt="Заря" style={{ maxHeight: '28vh' }} />
      <p>Вступайте в рабочую группу по разработке <T c="peach">«Зари»</T></p>
      <Fragment asChild>
        <div>
          <img src={ichUrl} alt="Oleg Bedrin" style={{ maxHeight: '20vh', borderRadius: '8px' }} />
          <p><small><T c="peach">Пожалуйста :3</T></small></p>
        </div>
      </Fragment>
    </SlideWrapper>
  );
}
