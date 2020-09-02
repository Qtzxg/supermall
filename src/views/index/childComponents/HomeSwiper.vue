<template>
  <div>
    <swiper >
    <swiper-item  v-for="item in banners">
      <!--因为要用变量（item）里的属性，所以要动态绑定-->
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
  </div>

</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper"
    export default {
        name: "HomeSwiper",
      props:{
          banners:{
            type:Array,
            default() {
              return [];
            }
          }
      },
      components:{
        Swiper,
        SwiperItem
      }
    }
</script>

<style scoped>
    /*.swiper{*/
    /*  margin-top: 44px;*/

    /*}*/
</style>
