<!--本组件是首页-->
<template>
  <div id="index">
<!--  利用封装的思想，每个子组件或者根组件只负责大的管理，至于里面运用的组件的插槽内容应该分离出去，便于管理-->
<!--    首页导航栏-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
<!--    首页轮播图-->
    <home-swiper :banners="banners" class="home-swiper"></home-swiper>
<!--    首页推荐-->
    <home-recommend :recommends="recommends"></home-recommend>
<!--    首页特性-->
    <Homefeature/>
<!--    首页选项卡及商品-->
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="listChange"></tab-control>
    <goods-list :goodslist="goods[tabType].list"></goods-list>

    <ul>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
    </ul>
  </div>
</template>

<script>
  //以下为首页独享组件的引入
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";
  import Homefeature from "./childComponents/Homefeature";

  //以下为公共组件的引入
  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/homeGoods/GoodsList";


  //以下为后端数据请求,index导出的时候没用default，导入的时候也要用{}
  import {getHomeMultidata,getHomeGoods} from "../../network";

  export default {
    name: "index",
    data(){
      // 存放了从服务端请求来的数据，方便用于展示
        return{
          //banners是首页轮播图数据，recommends是首页推荐数据
          banners:[],
          recommends:[],
          // goods用于存储从后端请求来的首页的商品,pop,news和sell,分别是流行，新品和精选的商品数据
          goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]},
          },
          //tabType默认是首页点击的商品列表，默认是流行‘pop’，可通过listChange方法来改变
          tabType:'pop'
        }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      Homefeature,
      TabControl,
      GoodsList,
      },

    //用mouted生命周期函数也行，这里是异步操作，无所谓了，且一般来说，钩子函数只负责回调，不负责具体的回调函数的具体内容，具体内容交给methods实现
    created() {
      //请求首页轮播图、推荐和featureView的数据
       this.getHomeMultidata()
      //请求首页的商品数据，
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

        },
    methods:{
      //以下为事件监听
      listChange(index){
        switch (index) {
          case 0:
            this.tabType='pop';
            break;
           case 1:
             this.tabType='new';
             break;
            case 2:
              this.tabType='sell';
              break;
        }
      },

      //以下为网络请求
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          // console.log(res);
          this.banners=res.data.data.banner.list
          this.recommends=res.data.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          //push方法的es6语法扩展：...  传入多个参数
            this.goods[type].list.push(...res.data.data.list)
          // 已经请求到了第一页的数据，当滑倒最底端，代表请求到的数据已经被用户浏览完毕，开始请求下一页，并且要用到下一页的page值，所以这里要加1
            this.page+=1;
        })
      }
    }
  }
</script>

<style scoped>
.home-nav{
  background-color:#ff8198;
  color:#fff;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  z-index: 8;
}
.tab-control{
  /*给选项卡组件设置一个sticky定位，在距离父组件上方的距离大于44px之前，都是static定位，不会脱离正常的文本流，在小于这个44px后，变为fixed定位，这个44px就是navbar的高度*/
  /*但是sticky在电脑上的浏览器上兼容性不好（日常鞭尸IE），手机上是全兼容*/
  position: sticky;
  top:44px;
  background-color: #fff;
  z-index: 8;
}

</style>
