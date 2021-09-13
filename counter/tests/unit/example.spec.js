import { shallowMount } from '@vue/test-utils'
import Buttons from '@/components/Buttons.vue'

describe('Buttons.vue', () => {
  let button;
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Buttons) // does not bring in child components
    button = wrapper.find('button')
  })
  it('contains a button', () => {
    expect(button).toBeDefined()
  })
  // it('fires a dispatch method when clicked', async () => {
  //   await button.trigger('click')
  //   console.log('button', button)
  // })
})

