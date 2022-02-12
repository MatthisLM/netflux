import { createStore } from 'vuex'

export default createStore({
  state: {
    allMovies:[]
  },
  getters:{
    getAllMovies(state){
        return state.allMovies;
    }
  },
  mutations: {
    updateAllMovies(state, newList){
      state.allMovies = newList;
    }
  },
  actions: {
    updateAllMovies({commit},newList){
      commit('updateAllMovies',newList);
    },
  },
  modules: {
  }
})
