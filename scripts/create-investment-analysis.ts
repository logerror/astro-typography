import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import consola from 'consola'
import dayjs from 'dayjs'

const title = await consola.prompt('分析标题：', { type: 'text' })
const filename = `${dayjs().format('YYYY-MM-DD')}-${toSafeFilename(title)}.md`
const targetPath = path.join('src/content/investing', filename)

if (fs.existsSync(targetPath)) {
  consola.error(`文件已存在：${targetPath}`)
  process.exitCode = 1
}
else {
  const content = `---
title: ${JSON.stringify(title)}
pubDate: ${dayjs().format('YYYY-MM-DD')}
summary: 待补充本期分析的核心结论。
thesis: 待补充一句话核心判断。
type: daily
status: tracking
confidence: medium
markets: []
symbols: []
horizon: 待补充
stance: neutral
invalidations: []
sources: []
updateNote: 首次发布
draft: true
---

## 今日变化

记录已经确认的事实与数据。

## 核心判断

区分市场共识、个人假设与最终判断。

## 关键变量

记录后续需要持续跟踪的信号。

## 风险与证伪条件

明确什么情况出现时，需要修正或放弃当前判断。
`

  fs.writeFileSync(targetPath, content)
  consola.success(`已创建：${targetPath}`)
}

function toSafeFilename(value: string) {
  return value
    .trim()
    .replaceAll('/', '-')
    .replace(/[:*?"<>|\\]/g, '-')
    .replace(/\s+/g, '-')
}
