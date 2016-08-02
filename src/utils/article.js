import { getyyyymmddhhMMss } from './date'
import { getFirstLine } from './string'

export const newArticle = (content = '# Enjoy...') => ({
  id: Math.round(Math.random() * 100),
  title: getFirstLine(content).replace(/#/g, '').trim(),
  content,
  created_at: getyyyymmddhhMMss(new Date()),
  updated_at: getyyyymmddhhMMss(new Date()),
})
