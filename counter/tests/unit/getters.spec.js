import getters from '../../store/getters'

describe('getters.js', () => {
  it('getSquared returns 16 when passed 4', () => {
    const state = {
      counter: 4
    }
    const result = getters.getSquared(state) // error that this is not a function
    expect(result).toEqual(16)
  })
})