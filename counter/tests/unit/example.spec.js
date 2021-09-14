import { shallowMount } from '@vue/test-utils'
import Buttons from '@/components/Buttons.vue'
import Actions from '../../store/actions'

describe('Buttons.vue', () => {
  let button;
  let wrapper;
  let actions;
  beforeEach(() => {
    actions = {
      increaseCounter: jest.fn(),
      decreaseCounter: jest.fn()
    }
    wrapper = shallowMount(Buttons) // does not bring in child components
 
    button = wrapper.find('#btn-1')
  })
  it('contains a button', async() => {
    button.trigger('click')

    expect(actions.decreaseCounter).toHaveBeenCalled()
  })
  // it('fires a dispatch method when clicked', async () => {
  //   await button.trigger('click')
  //   console.log('button', button)
  // })
})

