import { createStore } from 'vuex'

export default createStore({
  state: {
    allMovies:[]
  },
  getters:{
    getAllMovies(state){
        return state.allMovies;
    },
    getAllGenres(state){
      let allGenres = []  
      state.allMovies.forEach(movie => {
        movie.genres.forEach(genre => {
          if(!allGenres.includes(genre)){
            allGenres.push(genre)
          }
        });
      });
      return allGenres.sort();
    },
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
