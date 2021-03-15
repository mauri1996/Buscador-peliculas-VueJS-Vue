<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand">                                      
                <h4 v-if="comprobarUser" >Bienvenido {{getUser}} </h4>                
                <h4 v-else>Bienvenido </h4>                
            </a>
            <form class="inline my-2 my-lg-0">
                <button v-if= "!comprobarUser" class="btn btn-dark" @click.prevent="changeUser()">Ingresar</button>                
                <button class="btn btn-dark" @click.prevent="changeUser()">Salir</button>
            </form>  
        </div>                      
    </nav>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name:'NavBar',
    data(){
        return{
            name:''
        }
    },
    methods:{
        ...mapMutations(['changeUserName']),    
        changeUser(){
            if(this.$store.state.userName != ''){
                this.changeUserName('')
            }else{
                this.changeUserName('Papu')
            }    
        }    
    },
    computed:{
        comprobarUser(){
            return this.$store.state.userName != ''
        },
        getUser(){
            return this.$store.state.userName
        },
        
    }

}
</script>

