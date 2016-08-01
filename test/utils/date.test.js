import { expect } from 'chai'

import { getyyyymmddhhMMss } from '../../src/utils/date'

describe('getyyyymmddhhMMss 函数测试', () => {
  it('getyyyymmddhhMMss(new Date("2016-08-01 14:46:00")) 应该得到字符串 2016-08-01 14:46:00', () => {
    expect(getyyyymmddhhMMss(new Date('2016-08-01 14:46:00'))).to.be.equal('2016-08-01 14:46:00')
  })
})
