<template>
<!--  由于我们再多个地方都会用到导航栏组件，所以不建议使用id，这点和tabbar有区别，所以用class-->
  <div class="nav-bar">
<!-- slot是抽象的，不建议使用html属性，所以需要用div包起来，再使用样式，其次，-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>

</template>

<script>
    export default {
        name: "NavBar",
    }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    box-shadow:0px 3px 3px rgba(100,100,100,0.05);

  }
  .left,.right{
    width:60px;
  }
  .center{
    /*flex=1,代表父组件的空间被上述的left和right用剩下的全给center;*/
    flex:1;
    text-align: center;
  }
</style>
