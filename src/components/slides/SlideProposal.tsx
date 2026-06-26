import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideProposal() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 01 · Первый документ" title="Предпосылки проекта" />
      <ul>
        <Fragment asChild><li>Отсутствие формализованной методологии внутрипартийной коммуникации</li></Fragment>
        <Fragment asChild><li>Идея: фиксировать позицию партии через <T c="amber">децентрализованные технологии</T></li></Fragment>
        <Fragment asChild><li>Разработка концепции и подготовка документа (<T c="sec">whitepaper</T>)</li></Fragment>
        <Fragment asChild><li>Представление на <T c="peach">Центральном совете</T></li></Fragment>
        <Fragment asChild><li>Проект получил название <T c="peach">«Заря»</T></li></Fragment>
      </ul>
    </SlideWrapper>
  );
}
