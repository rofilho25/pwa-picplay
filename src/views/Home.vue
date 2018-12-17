<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Ranking.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Button
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

