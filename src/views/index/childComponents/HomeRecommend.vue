<template>
    <div class="recommend">
      <div v-for="item in recommends" class="recommend-item" >
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
      props:{
        recommends:{
          type:Array,
          default(){return []}
        }
      }
    }
</script>

<style scoped>

  .recommend {
    display: flex;
    width:100%;
    text-align: center;
    font-size:12px;
    padding:12px 0px 30px;
    border-bottom:12px solid #efeaea;
  }
  .recommend-item {
    flex:1;
  }
  .recommend-item img {
    width: 50px;
    height: 50px;
    margin-bottom:10px;
  }
</style>
