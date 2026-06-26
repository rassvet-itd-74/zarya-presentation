# ДАВО Заря — Презентация

Презентация на Reveal.js + React о текущем состоянии и планах разработки социологической платформы ДАВО «Заря».

## Слайды

| # | Файл | Тема |
|---|------|------|
| 01 | `SlideTitle` | Титульный слайд |
| 01b | `SlideParticipants` 1/2 | Участники проекта |
| 01b | `SlideParticipants` 2/2 | Участники проекта |
| 02 | `SlideTOC` 1/2 | Содержание — хронология |
| 02 | `SlideTOC` 2/2 | Содержание — хронология |
| 03 | `SlideProposal` | Первый документ — предпосылки |
| 03 | `SlideModel` | Математическая модель «Зари» |
| 04 | `SlideContractTimeline` 1/2 | Смарт-контракты — хронология |
| 04 | `SlideContractTimeline` 2/2 | Смарт-контракты — хронология |
| 04 | `SlideContractVersions` | Две версии контракта |
| 05 | `SlideUIOverview` 1/2 | Пять версий интерфейса |
| 05 | `SlideUIOverview` 2/2 | Пять версий интерфейса |
| 05 | `SlideSnaps` | MetaMask Snaps |
| 05 | `SlideWebUI1` | Web UI v1 |
| 05 | `SlideWebUI2` | Web UI v2 → Расcвет.Смарты |
| 05 | `SlideStandaloneV1` | Standalone UI v1 |
| 05 | `SlideStandaloneV2` 1/2 | Standalone UI v2 (текущая) |
| 05 | `SlideStandaloneV2` 2/2 | Standalone UI v2 (текущая) |
| 06 | `SlideTestsOverview` 1/2 | Региональные тесты — тест 1 |
| 06 | `SlideTestsOverview` 2/2 | Региональные тесты — тест 2 |
| 06 | `SlideBugs` 1/2 | Выявленные баги |
| 06 | `SlideBugs` 2/2 | Выявленные баги |
| 07 | `SlideWhySoLong` 1/2 | Почему так долго? |
| 07 | `SlideWhySoLong` 2/2 | Почему так долго? |
| 08 | `SlideResults` | Итоги |
| 08 | `SlidePlans` | Планы |
| 09 | `SlideClosing` | Завершение |

Порядок слайдов задаётся в `src/components/Presentation.tsx`.

## Стек

- **Runtime:** Bun
- **Frontend:** React 19 + Reveal.js 6 (`@revealjs/react`)
- **Плагины:** Mermaid (`reveal.js-mermaid-plugin`), боковое меню (`reveal.js-menu`)
- **Язык:** TypeScript

## Структура проекта

```
src/
├── index.ts              # Bun-сервер (dev + prod)
├── index.html
├── frontend.tsx          # Точка входа React
├── presentation.css      # Типографика и стили слайдов
├── assets/               # logo.svg, zarya.png, ich.jpg
└── components/
    ├── Presentation.tsx  # Deck и порядок слайдов
    ├── SlideWrapper.tsx  # Обёртка слайда (фон, watermark)
    ├── SlideHeader.tsx   # Заголовок главы
    └── slides/
        ├── colors.ts     # Палитра и CSS-переменные
        ├── T.tsx         # <T c="peach"> — цветной акцент в тексте
        └── Slide*.tsx    # Отдельные слайды
```

## Оформление

Палитра описана в `src/components/slides/colors.ts` и прокидывается через CSS-переменные (`--z-peach`, `--z-brand`, …) из `SlideWrapper`.

Для акцентов в тексте используется компонент `T`:

```tsx
<T c="peach">Заря</T>
<T c="green">Текущая версия</T>
<T c="red">выявленные баги</T>
```

Списки с семантическими маркерами: `list-success`, `list-danger`, `list-muted`. Таблицы участников — класс `table-people`.

## Разработка

```bash
bun install
bun start
```

Открыть [http://localhost:3000](http://localhost:3000).

Навигация: стрелки / пробел, `Esc` — обзор слайдов, `M` — меню (в том числе ссылка на PDF-экспорт).

## Сборка

```bash
bun run build
```

Результат — статика в папке `dist/`.

## Экспорт в PDF

1. Открыть презентацию с параметром `?print-pdf`:
   ```
   http://localhost:3000/?print-pdf
   ```
   Или через пункт **PDF Export** в боковом меню.
2. Открыть диалог печати (`Ctrl`/`Cmd` + `P`).
3. **Назначение** → _Сохранить как PDF_.
4. **Ориентация** → _Альбомная_.
5. **Поля** → _Нет_.
6. Включить **Фоновая графика**.
7. Нажать **Сохранить**.

> Проверено только в Google Chrome / Chromium.

## Источник материала

Текст слайдов основан на документе `ДАВО Заря - Текущее состояние и планы разработки.txt`.
