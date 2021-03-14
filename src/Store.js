import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const APIKEY= '65d3997f2a8fd92380287a83ee521ad6'
const BASEURL='https://api.themoviedb.org/3/'

Vue.mixin({
  data(){
      return{
          apiConfig:`?api_key=${APIKEY}&language=es-MX`,  // se llama desde cuelqueir lado ${this.apiConfig}
          apiBaseURl: BASEURL,
          APIKEY: '65d3997f2a8fd92380287a83ee521ad6'
      }
  },
  filters:{
      completarPoster(str){
          return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${str}`
      }
  }
})

 //Vuex -> Store
export let store= new Vuex.Store({
  state:{
      favMovies:[],
      userName: ''
  },
  mutations:{
      toogleFavMovie(state,movie){
          let index= state.favMovies.findIndex(favmovie => movie.id === favmovie.id)
          if(index>=0){
              state.favMovies.splice(index,1)
              return
          }
          state.favMovies.push(movie)
      },
      changeUserName(state,name){
        state.userName=name
      }
  }
})