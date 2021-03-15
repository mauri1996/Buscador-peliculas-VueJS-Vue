<template>
        <div v-if="Object.keys(movieDetails).length" class="home">
            <div class="heroMovie text-white py-5" :style="{
                'background':'linear-gradient(rgba(59,168,119,0.45), rgba(59,168,119,1)),url(https://image.tmdb.org/t/p/w1400_and_h450_face'+movieDetails.backdrop_path+')',
                'background-size':'cover'
            }">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-4 col-lg-3">
                            <img :src="movieDetails.poster_path | completarPoster" class=" w-100"/>
                        </div>
                        <div class="col-12 col-md-8 col-lg-9">
                            <h2>Detalles: {{movieDetails.title}}</h2>
                            <p v-text="movieDetails.overview"></p>
                            <p><b>Duración:</b> {{movieDetails.runtime}} min</p>
                            <p><b>Valoración:</b> {{movieDetails.vote_average}} </p>
                            <p><b>Pagina Oficial:</b> {{movieDetails.homepage}} </p>
                            <div class="container">
                                <router-link class="btn btn-primary"  :to="{name:'home'}"> 
                                    <i class="fas fa-arrow-left"></i>
                                    Regresar
                                </router-link>  

                            </div>
                                              
                        </div>
                        
                    </div>

                </div>

            </div>
            <div class="container">
                <div class="title">
                    <h2>Peliculas Relacionadas</h2>
                </div>
                
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 py-3 col-xl-4" :ref="'movie-'+item.id" v-for="(item,key) in similarMovies" :key="key">
                                <MovieComponent  
                                    :id="item.id" 
                                    :title="item.title" 
                                    :cover="item.poster_path" 
                                    :synopsis="item.overview" 
                                    :key="key"
                                    message="hola"
                                    :like="item.like"
                                    :showLike=false 
                                    @changeLike="onToogleLike"                                 
                                                       
                                />

                    </div>
                </div>    

            </div>
        </div>

</template>

<script>
import MovieComponent from '../components/MovieComponent'
//<button class="btn btn-link"> {{movieDetails.homepage}} </button>
export default {
    name:'MovieDetails',
    watch:{
        '$route.params.id' (){
            this.getMoviesRelation()
        }
    },
    data(){
        return{
            movieDetails:{

            },
            similarMovies:[]
        }
    },
    methods:{
        onToogleLike (data){            
            if(Object.keys(this.similarMovies).length){
                //console.log(this.searchMovies.results)
                let movieLike = this.similarMovies.find(movie => movie.id === data.id)            
                movieLike.like = data.like
                this.showLike = data.like            
                this.$store.commit('toogleFavMovie',movieLike) // lamada al Vuex
            }            
        },
        getmovie(){
            let url= `${this.apiBaseURl}movie/${this.$route.params.id}${this.apiConfig}`            
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                //console.log(data)
                this.movieDetails= data
            })
            //console.log(movieDetails.backdrop_path)
        },
        getMoviesRelation(){
            let url= `${this.apiBaseURl}movie/${this.$route.params.id}/similar${this.apiConfig}`            
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                //console.log(data)
                this.similarMovies= data.results
            })
        }
    },
    mounted(){    
        this.getmovie()
        this.getMoviesRelation()
        
    },
    components:{
        MovieComponent
    }

}
</script>

<style>
    .home {
            background-image: url('../assets/back.jpg');            
        }
    .title{
        margin-top: 15px;
        margin-bottom: 30px;
    }
</style>