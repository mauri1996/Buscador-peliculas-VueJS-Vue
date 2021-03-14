<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <button @click="Enviarpeliculas()">Enviar mensaje</button>
  </div>
</template>

<script>
import Eventbus from '../bus'

export default {
  name: 'HelloWorld',
  data() {
    return{
      msg: 'Hola'
    }
  },
  methods:{
    Enviarpeliculas(){
      console.log('leggo aqui')
      Eventbus.$emit('envioPeli',this.msg)
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
