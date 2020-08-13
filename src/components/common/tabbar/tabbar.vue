<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>

  /*.和#的区别是前者是定义class标识的div,而后者是id标识的div*/
  #tab-bar{
    display: flex;
    background-color: #d7dedb;

    /*设置完position后才能设置top,bottom,left,right等等*/
    position:fixed;
    right:0px;
    left:0px;
    bottom:0px;

    /*0和-3是盒子的阴影相对于x,y的偏移量,5是模糊程度,后面的rgba是设置阴影颜色,0.3是透明度*/
    box-shadow:0px  -3px 5px rgba(100,100,100,0.3);
  }

</style>
