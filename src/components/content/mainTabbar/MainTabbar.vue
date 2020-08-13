<template>
  <tabbar>
<!--    在TabbarItem里面动态绑定了一个设置文字颜色的style,其颜色由使用该组件的用户传入设置,即下列的activecolor，@是已经配饰好的src的别名-->
    <tabbar-item link="/home" activecolor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/首页.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/首页active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>

    <tabbar-item link="/categroy">
      <img slot="item-icon" src="@/assets/img/tabbar/分类.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/分类active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbar-item>

    <tabbar-item link="/shopcard">
      <img slot="item-icon" src="@/assets/img/tabbar/购物车.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/购物车active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbar-item>

    <tabbar-item link="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/我的.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/我的active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>

</template>

<script>

  import tabbar from '../../common/tabbar/tabbar'
  import TabbarItem from '../../common/tabbar/TabbarItem'
    export default {
        name: "MainTabbar",
      components:{
        tabbar,
        TabbarItem
      }
    }
</script>

<style scoped>

</style>
