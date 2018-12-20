<template>
  <div class="rank">
    <div class="head">

    </div>
    <div class="body">
      <div class="scroll">
      <div class="panel">
      <div class="player">
        <span>200pts</span>
        <span>Beto</span>
      </div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      </div>
    </div>
      </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 $widthRank : 74px;
 $backgroundColor:transparent;
 $borderColor: 2px #F1A1A1;
 $heightRank:470px;

.rank{
  display: flex;
  flex-direction: column;
  position: relative;
  .head{
    width: $widthRank;
    background-color: $backgroundColor;
    height: $widthRank;
    position: absolute;
    top: -41px;
    border: $borderColor;
    border-style: solid;
    border-top-left-radius: 191px;
    border-top-right-radius: 191px;
    border-bottom: 0;

  }
  .body{
    width: $widthRank;
    background-color: $backgroundColor;
    height: $heightRank;
    border: $borderColor;
    border-style: solid;
    z-index: 1000;
    border-top: transparent;
    border-bottom: transparent;
    position: relative;

  }
  .panel{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    :first-child{
    height: 49px;
    width: 49px;
    border-radius: 50%;
    
  }
  }
  .footer{
    width: $widthRank;
    height: $widthRank;
    background-color: $backgroundColor;
    position: absolute;
    bottom: -32px;
    border: $borderColor;
    border-style: solid;
    border-bottom-left-radius: 191px;
    border-bottom-right-radius: 191px;
    border-top: 0;

  }.player{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: white;
    margin-bottom: 5px;
    border: $borderColor;
    border-style: solid;
  
  }
  .scroll{
  overflow-y: auto;
    height: $heightRank +62;
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 31px;
    padding-top: 9px;
    -webkit-border-radius: 31px;
    z-index: 111111;
    border-radius: 38px;
  }
::-webkit-scrollbar { 
    display: none; 
}
}
</style>
