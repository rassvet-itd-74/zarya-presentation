import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';
import { T } from './T';

export function SlideContractVersions() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 02 · Смарт-контракты" title="Две версии контракта" />
      <div className="slide-columns">
        <Fragment asChild>
          <div>
            <h3>Версия 1 — с упрощённым кодированием</h3>
            <ul>
              <li><T c="peach">Zarya.sol</T> (монолит + библиотеки)</li>
              <li>Параметры передаются в упрощённом кодированном виде</li>
            </ul>
          </div>
        </Fragment>
        <Fragment asChild>
          <div>
            <h3>Версия 2 — без упрощённого кодирования</h3>
            <ul>
              <li><T c="peach">ZaryaUI.sol</T> (<T c="amber">мар–апр 2026</T>)</li>
              <li>Прямые параметры; оптимизировано под фронтенд</li>
            </ul>
          </div>
        </Fragment>
      </div>
    </SlideWrapper>
  );
}
