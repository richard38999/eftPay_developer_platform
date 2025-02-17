import { defineConfig } from 'vitepress'
import { sharedConfig } from './config/share.mjs'
import { zhConfig } from './config/zh.mjs'
import { enConfig } from './config/en.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  locales: { // 多语言
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      ...enConfig
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      ...zhConfig
    }
  },
})