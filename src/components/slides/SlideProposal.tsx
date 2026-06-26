import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideProposal() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 01 · Первый документ" title="Предпосылки проекта" />
      <ul className="r-stretch">
        <Fragment asChild><li>Отсутствие формализованной методологии внутрипартийной коммуникации</li></Fragment>
        <Fragment asChild><li>Идея: фиксировать позицию партии через децентрализованные технологии</li></Fragment>
        <Fragment asChild><li>Разработка концепции и подготовка документа (whitepaper)</li></Fragment>
        <Fragment asChild><li>Представление на Центральном совете</li></Fragment>
        <Fragment asChild><li>Проект получил название «Заря»</li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
