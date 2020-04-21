import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [5, 20, 36, 7, 4, 50]
  },
  getters :{
    messArray_get:state=>state.data,
  },
  mutations: {
    rest(state) {
        var new_arr=state.data
      for (var i = 0; i < new_arr.length - 1; i++) {
        for (var j = 0; j < new_arr.length - 1 - i; j++) {
          if (new_arr[j] > new_arr[j + 1]) {
            var temp = new_arr[j];
            new_arr[j] = new_arr[j + 1];
            new_arr[j + 1] = temp;
          }
        }
      }
      
      
    }
    
  },
  actions: {
    increment(state) {
      state.commit('rest')
    }
  },
  modules: {
  }
})


