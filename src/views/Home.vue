<template>
  <div class="home">
    <Ranking msg="Welcome to Your Vue.js App"/>
    <div>
     <Movie :img="img"></Movie>
    <Button :opcoes="opcoes"></Button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Ranking from '@/components/Ranking.vue'
import Button from '@/components/Button.vue'
import Movie from '@/components/Movie.vue'
import io from 'socket.io-client';

export default {
  name: 'home',
  data(){
    return{
      socket : io('localhost:4200'),
      img:null,
      opcoes : [],
    }
  },
  components: {
    Ranking,
    Button,
    Movie
  },
  created(){
    this.socket.emit('join', 'connectado');
  },mounted(){
      this.socket.on('desafio', (data) => {
        this.img = data.image;
        this.opcoes = data.opcoes;

      });
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
}
</style>

