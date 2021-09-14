import mutations from '../../store/mutations'

describe('Mutations', () => {
  let state;
  beforeEach(() => {
    state = {
      counter: 5,
      colorCode: 'blue'
    }
  })
  describe('IncreaseState', () => {
    it('Updates state of 5 to 6', () => {
      expect(mutations.increaseCounter(state, 1)).toBe(6)
    })
    it('Updates state of 5 to 10', () => {
      expect(mutations.increaseCounter(state, 5)).toBe(10)
    })
  })
  describe('DecreaseState', () => {
    it('Updates state from 5 to 3', () => {
      expect(mutations.decreaseCounter(state, 2))
    })
    it('Updates state from 5 to -1', () => {
      expect(mutations.decreaseCounter(state, 6))
    })
  })
  describe('ChangeColourCode', () => {
    it('changes from blue to pink', () => {
      expect(mutations.changeColourCode(state, 'pink')).toBe('pink')
    })
    it('changes from blue to #cacaca', () => {
      expect(mutations.changeColourCode(state, '#cacaca')).toBe('#cacaca')
    })
  })
})
