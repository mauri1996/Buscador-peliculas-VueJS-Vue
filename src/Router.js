import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history', // para que quite los #/
    routes:[
        {
            path: '/pelicula/:id',
            name: 'MovieDetails',
            component: () => import (/*webpackChunkName */ './views/MovieDetails.vue') // debe tener una variable en los componentes
        },  
        {
            path: '/',
            name: 'MovieApp',
            component: () => import (/*webpackChunkName */ './views/index.vue') // debe tener una variable en los componentes
        },
        
      ]
  })
