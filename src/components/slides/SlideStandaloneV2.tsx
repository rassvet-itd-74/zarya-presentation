import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

const rows: [string, string][] = [
  ['20 мая', 'Matrix Picker, экспорт заявлений, composable-расширения'],
  ['27 мая', '13 composables заменены на 13 Pinia stores'],
  ['28 мая', 'Form-Flow Factory: 11 FlowKind, 20 атомарных компонентов'],
  ['29 мая', '3-колоночный Shell; MatrixView как side-panel'],
  ['Итог', '3 архитектурных перехода от монолита к атомарной архитектуре'],
];

export function SlideStandaloneV2() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 03 · Версии UI" title="Standalone UI версия 2 (текущая)" />
      <table className="r-stretch">
        <tbody>
          {rows.map(([date, event]) => (
            <Fragment asChild key={date}>
              <tr>
                <td>{date}</td>
                <td>{event}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </SlideWrapper>
  );
}
