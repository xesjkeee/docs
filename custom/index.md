# Кастомизация

Slidev полностью кастомизируем, начиная от стилей, заканчивая инструментами конфигурации. Это позволяет вам сконфигурировать инструменты под ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), и т.д.)

## Frontmatter Configures

Вы можете настроить Slidev в frontmatter блоке вашего первого слайда, ниже показаны значения по умолчанию для каждого параметра.

```yaml
---
# id темы или название пакета
theme: 'default'
# заголовок слайда, если не указан, то будет автоматически подставлен из первого найденного заголовка
title: ''

# загрузка pdf в SPA сборке, также может содержать кастомный URL
download: true
# подсветка синтаксиса, может быть 'prism' или 'shiki'
highlighter: 'prism'
# включение Monaco редактора, по умолчанию только в дев режиме
monaco: 'dev'

# цветовая схема для слайдов, может быть 'auto', 'light', или 'dark'
colorSchema: 'auto'
# режим роутера для vue-router, может быть 'history' или 'hash'
routerMode: 'history'
# соотношение сторон слайдов
aspectRatio: '16/9'
# реальная ширина canvas, единица измерения в пикселях
canvasWidth: 980

# шрифты будут автоматически импортированы из Google fonts
# Подробнее: https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# дефолтные настройки frontmatter для всех слайдов
defaults:
  layout: 'default'
  # ...

# информация для слайдов, может быть markdown-строкой
info: |
  ## Slidev
  My first [Slidev](http://sli.dev/) presentations!
---
```

Подробнее в [определении типов](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29).

## Структура каталогов

Slidev использует структуру каталогов для минимальной и поверхностной конфигурации, и делает расширения гибкими и интуитивными в функциональности.

Подробнее в [Структура каталогов](/custom/directory-structure).

## Конфигурация инструментов

- [Highlighters](/custom/highlighters)
- [Configure Vue](/custom/config-vue)
- [Configure Vite](/custom/config-vite)
- [Configure Windi CSS](/custom/config-windicss)
- [Configure Monaco](/custom/config-monaco)
- [Configure KaTeX](/custom/config-katex)
- [Configure Mermaid](/custom/config-mermaid)
