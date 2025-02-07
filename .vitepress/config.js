// @ts-check

const Guide = [
  {
    text: 'Почему Slidev',
    link: '/guide/why',
  },
  {
    text: 'Руководство',
    link: '/guide/',
  },
  {
    text: 'Установка',
    link: '/guide/install',
  },
  {
    text: 'Markdown синтаксис',
    link: '/guide/syntax',
  },
  {
    text: 'Навигация',
    link: '/guide/navigation',
  },
  {
    text: 'Анимация',
    link: '/guide/animations',
  },
  {
    text: 'Экспорт',
    link: '/guide/exporting',
  },
  {
    text: 'Запись презентации',
    link: '/guide/recording',
  },
  {
    text: 'Режим докладчика',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Интеграции редакторов',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const Theme = [
  {
    text: 'Использование тем',
    link: '/themes/use',
  },
  {
    text: 'Галерея тем',
    link: '/themes/gallery',
  },
  {
    text: 'Создание темы',
    link: '/themes/write-a-theme',
  },
]

const Translations = [
  {
    text: 'Русский',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
]

const Customizations = [
  {
    text: 'Кастомизация',
    link: '/custom/',
  },
  {
    text: 'Структура каталогов',
    link: '/custom/directory-structure',
  },
  {
    text: 'Шрифты',
    link: '/custom/fonts',
  },
  {
    text: 'Подсветка',
    link: '/custom/highlighters',
  },
  {
    text: 'Конфигурация Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Конфигурация Vite',
    link: '/custom/config-vite',
  },
  {
    text: 'Конфигурация Windi CSS',
    link: '/custom/config-windicss',
  },
  {
    text: 'Конфигурация Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'Конфигурация KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Конфигурация Mermaid',
    link: '/custom/config-mermaid',
  },
  {
    text: 'Глобальный контекст Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Глобальные слои',
    link: '/custom/global-layers',
  }
]

const Resources = [
  {
    text: 'Примеры',
    link: '/showcases',
  },
  {
    text: 'Модерируемые обложки',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
    text: 'Руководство',
    children: Guide,
  },
  {
    text: 'Темы',
    children: Theme,
  },
  {
    text: 'Кастомизация',
    children: Customizations,
  },
  {
    text: 'Встроенное',
    children: [
      {
        text: 'Компоненты',
        link: '/builtin/components',
      },
      {
        text: 'Шаблоны',
        link: '/builtin/layouts',
      },
    ],
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Slidev',
  description: 'Presentation slides for developers',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentation slides for developers' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Редактировать страницу',

    nav: [
      {
        text: 'Руководство',
        items: Guide,
      },
      {
        text: 'Темы',
        items: Theme,
      },
      {
        text: 'Кастомизация',
        items: Customizations,
      },
      {
        text: 'Ресурсы',
        items: Resources,
      },
      {
        text: 'Русский',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
