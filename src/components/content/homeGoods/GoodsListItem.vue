<template>
<!--商品图片-->
    <div class="goods-item">
      <img :src="listitem.show.img" alt="">
<!--商品文字，包括标题、价格、收藏-->
      <div class="goods-info">
        <p>{{listitem.title}}</p>
        <span class="price">{{listitem.orgPrice}}</span>
        <span class="collect">{{listitem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GoodsListItem",
      props:{
        listitem:{
          type:Object,
          default(){
            return {}
          }
        }
      },
    }
</script>

<style scoped>
  /*字绝父相，子元素的绝对定位会相对于最近的设置了相对定位的父元素进行定位，如果父组件不设置relative，文字和图片等子元素会相对于窗口定位*/
  .goods-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius:5px
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    /*文字溢出时用...代替，且不换行，搭配使用*/
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-top: 3px;
  }
  .goods-info .price{
    color:var(--color-tint);
    margin-right: 20px;
  }
  。goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left:100px;
    /*left: -15px;*/
    /*top: -1px;*/
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
