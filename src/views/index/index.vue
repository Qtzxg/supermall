<template>
  <div id="index">
<!--    利用封装的思想，每个子组件或者根组件只负责大的管理，至于里面运用的组件的插槽内容应该分离出去，便于管理-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
  //以下为组件引入
  import NavBar from "../../components/common/navbar/NavBar";
  //HomeSwiper是我们运用的组件Swiper和SwiperItem的组件
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";

  //以下为后端数据请求
  //index导出的时候没用default，导入的时候也要用{}
  import {getHomeMultidata} from "../../network";

  export default {
    name: "index",
    data(){
        return{
          banners:[],
          recommends:[],
        }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      },
    //用mouted生命周期函数也行，这里是异步操作，无所谓了
    created() {
        getHomeMultidata().then(res=>{
          // console.log(res);
          this.banners=res.data.data.banner.list
          this.recommends=res.data.data.recommend.list
        })
        }
  }
</script>

<style scoped>
.home-nav{
  background-color:#ff8198;
  color:#fff;
}
</style>
