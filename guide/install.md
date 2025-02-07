# Установка

## Стартовый шаблон

> Для Slidev требуется [**Node.js >=14.0**](https://nodejs.org/)

Наилучшим способом начать, будет использование нашего официального стартового шаблона.

Через NPM:

```bash
$ npm init slidev@latest
```

Через Yarn:

```bash
$ yarn create slidev
```

Следуйте подсказкам и презентация автоматически откроется на http://localhost:3030/

Шаблон также содержит базовую настройку и короткую демонстрацию с инструкциями о том, как начать работу со Slidev.

## Ручная установка

Если вы по-прежнему хотите установить Slidev вручную или хотите интегрировать его в свои существующие проекты, вы можете сделать:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Обратите внимание, если вы используете [pnpm](https://pnpm.io), вам нужно включить [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) опцию для корректной работы Slidev:
>
> ```bash
> echo 'shamefully-flatten=true' >> .npmrc
> ```

## Глобальная установка

> Доступно с версии v0.14

Вы можете установить Slidev глобально с помощью следующей команды

```bash
$ npm i -g @slidev/cli
```

И далее использовать `slidev` в любом месте, без создания проекта каждый раз.

```bash
$ slidev
```

Эта команда также попытается использовать локальный `@slidev/cli`, если найдет его в `node_modules`.

## Установка на Docker

Если вам нужен быстрый способ запуска презентации в контейнерах, вы можете использовать предварительно созданный [docker](https://hub.docker.com/r/stig124/slidev) образ, поддерживаемый [stig124](https://github.com/Stig124), либо создать свой собственный.

Более подробно в [slidevjs/container repo](https://github.com/slidevjs/container).
