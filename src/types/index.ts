import type { CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'posts'>
export type InvestmentAnalysis = CollectionEntry<'investing'>
export * from './themeConfig.ts'
