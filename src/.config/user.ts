import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    title: '澄明之境',
    subtitle: 'Kairos',
    author: 'Kairos',
    description: 'Kairos 的个人网站：专注 Infra、研发效能与智能驾驶，记录 AI Infra 实践和投资研究。',
    website: 'https://qq.welights.net/',
    socialLinks: [
      { name: 'github', href: 'https://github.com/logerror/' },
      { name: 'twitter', href: 'https://x.com/RazeKairos' },
      { name: 'rss', href: '/atom.xml' },
    ],
    navLinks: [
      { name: 'Posts', href: '/' },
      { name: 'Investing', href: '/investing' },
      { name: 'Archive', href: '/archive' },
      { name: 'Categories', href: '/categories' },
      { name: 'About', href: '/about' },
    ],
  },
  seo: {
    twitter: '@RazeKairos',
  },
}
