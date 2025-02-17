import { enNav } from '../navbar/en.mjs'
import { enSidebar } from '../sidebar/en.mjs'
import dayjs from 'dayjs'

export const enConfig = {
  themeConfig: { // 主题设置
    nav: enNav,
    sidebar: enSidebar, // 侧边栏
    footer: { // 页脚
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${dayjs().format("YYYY")} eft Payments (Asia) Limited`
    },
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
    }
  }
}