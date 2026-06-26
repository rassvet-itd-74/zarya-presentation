import { Fragment } from '@revealjs/react';
import { SlideHeader } from '../SlideHeader';
import { SlideWrapper } from '../SlideWrapper';

export function SlideTestsOverview() {
  return (
    <SlideWrapper>
      <SlideHeader label="Глава 04 · Региональные тесты" title="Два тестирования" />
      <div className="r-stretch r-hstack">
        <Fragment asChild>
          <div>
            <h3>Тест 1 — Web UI v2</h3>
            <ul>
              <li>Сложные многошаговые сценарии</li>
              <li>Ручной ввод бинарных данных в формах голосования</li>
              <li>Результат: операции не были завершены участниками</li>
            </ul>
          </div>
        </Fragment>
        <Fragment asChild>
          <div>
            <h3>Тест 2 — Standalone UI v2</h3>
            <ul>
              <li>Форм-флоу упростил выполнение операций</li>
              <li>Закрыты 2 вопроса: категориальная и цифровая матрицы</li>
              <li>Сгенерирован первый отчёт; получена обратная связь</li>
            </ul>
          </div>
        </Fragment>
      </div>
    </SlideWrapper>
  );
}
