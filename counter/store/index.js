import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default createStore({
    actions,
    mutations,
    getters,
    state: { // where we store our data
    counter: 0,
    colorCode: 'blue'
  },
})
