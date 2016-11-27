import { v4 } from 'uuid'

import { getyyyymmddhhMMss } from './date'
import { getFirstLine } from './string'

export const newArticle = (content = '# ') => ({
  id: v4(),
  title: getFirstLine(content).replace(/#/g, '').trim(),
  content,
  created_at: getyyyymmddhhMMss(new Date()),
  updated_at: getyyyymmddhhMMss(new Date()),
})
