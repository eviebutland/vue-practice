import { Store } from 'vuex'
import store from '../../store/index'

describe('getters.js', () => {
  it('getSquared returns 16 when passed 4', () => {
    const state = {
      counter: 4
    }
    const result = store.getters.getSquared(state) // error that this is not a function
    expect(result).toEqual(16)
  })
})