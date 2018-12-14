<template>
  <div class="rank">
    <div class="head">

    </div>
    <div class="body">
      <div class="scroll">
      <div class="panel">
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
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 $widthRank : 60px;
 $backgroundColor:transparent;

.rank{
  display: flex;
  flex-direction: column;
  position: relative;
  .head{
    width: $widthRank;
    background-color: $backgroundColor;
    border-radius: 50%;
    height: $widthRank;
    position: absolute;
    top: -35px;
    border: aliceblue;
    border-style: solid;
    border-top-left-radius: 191px;
    border-top-right-radius: 191px;
    border-bottom: 0;

  }
  .body{
    width: $widthRank;
    background-color: $backgroundColor;
    height: 300px;
    border: aliceblue;
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
    border-radius: 50%;
    background-color: $backgroundColor;
    position: absolute;
    bottom: -35px;
    border: aliceblue;
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
  
  }
  .scroll{
  overflow-y: auto;
    height: 359px;
    position: absolute;
    top: -34px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 31px;
    padding-top: 9px;
    -webkit-border-radius: 31px;
    z-index: 111111;
    border-radius: 31px;

  /* Firefox 1-3.6 */
  -moz-border-radius: 31px; 
  
  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: 31px; 
  }
::-webkit-scrollbar { 
    display: none; 
}
}
</style>
