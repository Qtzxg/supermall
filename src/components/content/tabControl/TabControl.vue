<template>
<!--    本组件是一个选项卡控件-->
<div class="tabcontrol">
<!--因为这个选项卡组件在用的时候，只是文字的不同，所以不需要用slot-->
<!--在块级作用域里遍历，会遍历出三个div，里面再设置各种显示风格-->
  <div v-for="(item,index) in titles" class="tabcontrol-item" @click="itemClick(index)" :class="{itemClick:currentIndex==index}">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
    export default {
      name: "TabControl",
      data(){
        return{
          currentIndex:0
        }
      },
      props:{
        titles:{
          type:Array,
          default(){
            return []
          }
        }
      },
      methods:{
        itemClick(index){
          this.currentIndex=index;
          //将点击时候的index发送给父组件，用于显示特定一页的商品数据
          this.$emit('tabClick',index)
        }
      },
    }
</script>

<style scoped>
  .tabcontrol{
    display: flex;
    text-align: center;
    width: 100%;
}
  .tabcontrol-item{
    flex: 1;
    line-height: 50px;
    font-size:16px;
  }
  .itemClick{
    color:var(--color-tint);

  }
  .itemClick span{
    border-bottom:4px solid pink;
    padding:5px;
  }
</style>
