<template>
    <div class="btns">

        <a  v-for="item in opcoes" class="btn" :class="{clicked:item == selected}" @click="selected = item" :key="item">
            <span>{{item.name}}</span>
        </a>
    
    </div>
</template>

<script>
export default {
    props:{
        opcoes:Array
    },
    data(){
        return{
            clicked:null,
            items:[],
            selected:null,
        }
    },methods:{

    },mounted(){
      
      
    }
}
</script>
<style lang="scss" scoped>
.clicked{
        background-color: #3e0686 !important;
        color: white;
}
.btn{
    width: 250px;
    height: 44px;
    background-color:#082def4f;
    border-radius: 5px;
    border: 1px #F1A1A1;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #3e0686;
        color: white;
    }&:visited{
         background-color: #3e0686;
        color: white;
    }&:active{
          background-color: #3e0686;
        color: white;
    }
}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 290px;
}
span{
    color: #E2E2E2;
    display: flex;
    justify-content: center
}
</style>


