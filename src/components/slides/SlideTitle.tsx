import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideTitle() {
  return (
    <SlideWrapper>
      <p className="slide-label"><small>Текущее состояние и планы разработки</small></p>
      <h1 className="r-fit-text">Заря</h1>
      <p><T c="peach">Социологическая платформа</T></p>
      <p><small>Децентрализованная автономная внутрипартийная организация</small></p>
    </SlideWrapper>
  );
}
