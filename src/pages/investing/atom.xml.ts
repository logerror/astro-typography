import type { APIContext } from 'astro'
import type { InvestmentAnalysis } from '~/types'
import rss from '@astrojs/rss'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { themeConfig } from '~/.config'
import { getInvestmentAnalyses, getInvestmentAnalysisUrl } from '~/utils'

const parser = new MarkdownIt()
const allowedTags = sanitizeHtml.defaults.allowedTags.concat(['img'])

export async function GET(_context: APIContext) {
  const analyses = await getInvestmentAnalyses()

  return rss({
    title: `${themeConfig.site.title} · 投资分析`,
    description: '围绕 AI Infra、科技产业与市场变化的持续观察、分析和展望。',
    site: new URL('/investing/', themeConfig.site.website),
    items: analyses.map(getAnalysisItem),
  })
}

function getAnalysisItem(analysis: InvestmentAnalysis) {
  return {
    title: analysis.data.title,
    link: getInvestmentAnalysisUrl(analysis),
    pubDate: analysis.data.pubDate,
    description: analysis.data.summary,
    categories: [...analysis.data.markets, ...analysis.data.symbols],
    content: sanitizeHtml(parser.render(analysis.body || ''), { allowedTags }),
  }
}
