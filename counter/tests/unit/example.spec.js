import { shallowMount, createLocalVue } from '@vue/test-utils'
import getSquared from '../../store/getters'
import Vuex from 'vuex'
import Buttons from '@/components/Buttons.vue'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('HelloWorld.vue', () => {
  let button;
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Buttons) // does not bring in child components
    button = wrapper.find('button')
  })
  it('contains a button', () => {
    expect(button).toBeDefined()
  })
  it('fires a dispatch method when clicked', async () => {
    await button.trigger('click')
    console.log('button', button)
  })
})
