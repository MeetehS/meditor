import { expect } from 'chai'

import { getyyyymmddhhMMss } from '../../src/utils/date'

describe('test util date', () => {
  it('getyyyymmddhhMMss(new Date("2016-08-01 14:46:00")) should be "2016-08-01 14:46:00"', () => {
    expect(getyyyymmddhhMMss(new Date('2016-08-01 14:46:00'))).to.be.equal('2016-08-01 14:46:00')
  })
})
