<template>
  <div id="app" class="app-style">
    <router-view></router-view>
      <MainTabbar class="tabbar"></MainTabbar>
  </div>
</template>

<script>
  import MainTabbar from './components/content/mainTabbar/MainTabbar'
  export default{
    name:'app',
    components:{
      MainTabbar
    }
  }
</script>

<style>
@import "./assets/css/base.css";
  .app-style{
    padding-bottom: 49px;
  }
.tabbar{
  z-index:9;
}
</style>

