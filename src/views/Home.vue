<template>
  <div class="home">
    <Ranking msg="Welcome to Your Vue.js App"/>
    <div>
     <Movie></Movie>
    <Button></Button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Ranking from '@/components/Ranking.vue'
import Button from '@/components/Button.vue'
import Movie from '@/components/Movie.vue'

export default {
  name: 'home',
  components: {
    Ranking,
    Button,
    Movie
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

