import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


import MovieDetails from './components/MovieDetails.vue'
import MovieApp from './components/index.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false
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
let store= new Vuex.Store({
  state:{
      favMovies:[]
  },
  mutations:{
      toogleFavMovie(state,movie){
          let index= state.favMovies.findIndex(favmovie => movie.id === favmovie.id)
          if(index>=0){
              state.favMovies.splice(index,1)
              return
          }
          state.favMovies.push(movie)
      }
  }
})

let routes =[
  {
      path: '/pelicula/:id',
      name: 'pelicula',
      component: MovieDetails // debe tener una variable en los componentes
  },  
  {
      path: '/',
      name: 'home',
      component: MovieApp // debe tener una variable en los componentes
  },
  
]
let router =new VueRouter({
  mode: 'history', // para que quite los #/
  routes
})


new Vue({  
  render: h => h(App),
  store,
  router
}).$mount('#app')
