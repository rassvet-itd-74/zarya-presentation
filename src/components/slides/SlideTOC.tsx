import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideTOC() {
  return (
    <SlideWrapper>
      <SlideHeader
        label="Содержание"
        title="Хронология: от создания на ЦС до последнего теста"
      />
      <table className="r-stretch">
        <thead>
          <tr><th>#</th><th>Тема</th><th>Подробности</th></tr>
        </thead>
        <tbody>
          <Fragment asChild><tr><td>01</td><td>Первый документ с предложением</td><td>История создания и модель Зари</td></tr></Fragment>
          <Fragment asChild><tr><td>02</td><td>Смарт-контракты</td><td>Две версии контракта. Хронология авг 2025 — июн 2026</td></tr></Fragment>
          <Fragment asChild><tr><td>03</td><td>Версии UI</td><td>MetaMask Snaps, Web UI v1 и v2, Standalone UI v1 и v2</td></tr></Fragment>
          <Fragment asChild><tr><td>04</td><td>Региональные тесты</td><td>Два теста, успехи, выявленные баги</td></tr></Fragment>
          <Fragment asChild><tr><td>05</td><td>Почему так долго?</td><td>Дефицит ресурсов, сложность продукта</td></tr></Fragment>
          <Fragment asChild><tr><td>06</td><td>Итоги и планы</td><td>Что сделано, что дальше</td></tr></Fragment>
        </tbody>
      </table>
    </SlideWrapper>
  );
}
