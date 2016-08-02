import { expect } from 'chai'

import { getFirstLine } from '../../src/utils/string'

describe('test util string', () => {
  it('getFirstLine("title\ncontent") should be "title"', () => {
    expect(getFirstLine('title\ncontent')).to.be.equal('title')
  })
})
