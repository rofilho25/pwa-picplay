<template>
    <div>
        <div class="movie"> 
            <img :src="img" alt="">
        </div>
    </div>
</template>
<script>
export default {
     name: 'Movie',
     props:{
         img:String
     }
}
</script>

<style lang="scss" scoped>
.movie{
    height: 200px;
    width: 252px;
    margin-bottom: 2em;
    img{
        height: 100%;
    width: 100%;
    }
}
</style>
