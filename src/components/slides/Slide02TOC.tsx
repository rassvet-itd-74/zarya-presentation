import { Markdown } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { C } from './colors';

const tablemd = `
| # | Тема | Подробности |
|---|---|---|
| 01 | Первый документ с предложением | История создания и модель Зари |
| 02 | Смарт-контракты | Две версии контракта. Хронология авг 2025 - июн 2026 |
| 03 | Версии UI | MetaMask Snaps, Web UI v1 и v2, Standalone UI v1 и v2 |
| 04 | Региональные тесты | Два теста, успехи, выявленные баги |
| 05 | Почему так долго? | Дефицит ресурсов, сложность продукта |
| 06 | Итоги и планы | Что сделано, что дальше |
`;

export function Slide02TOC() {
  return (
    <SlideWrapper>
      <div style={{
        display: 'flex', flexDirection: 'column',
        padding: '5% 8%', boxSizing: 'border-box', fontSize: '0.8em',
      }}>
        {/* Header */}
        <SlideHeader
          label="Содержание"
          title={<>Хронология: от создания на ЦС до <span style={{ color: C.peach }}>последнего теста</span></>}
        />

        {/* Chapters table */}
        <div style={{ fontSize: '0.75em' }}>
          <Markdown>{tablemd}</Markdown>
        </div>
      </div>
    </SlideWrapper>
  );
}
