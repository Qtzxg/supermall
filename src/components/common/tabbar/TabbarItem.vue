<template>
  <div id="tab-bar-item" v-on:click="btnClick()">
   <div v-if="!Active"><slot name="item-icon"></slot></div>
   <div v-else><slot name="item-icon-active"></slot></div>
<!--    动态绑定一个style,用于决定文字颜色-->
    <div :style="cheColor"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
    export default {
        name: "TabbarItem",
      props:{
        link:{
          String,
        },
        activecolor:{
          type:String,
          default:'red',
        }
      },
      computed:{
          Active(){
            return this.$route.path.indexOf(this.link)!==-1;
          },
          cheColor(){
            return this.Active?{color:this.activecolor}:{}
          },
      },
      // data(){
      //     return{Active:true}
      // },
      methods:{
        btnClick(){
          this.$router.push(this.link);
        }
      },
    }
</script>

<style scoped>
  #tab-bar-item{
    /*flex设置在子元素时有三个属性,flex-grow,flex-shrink和flex-basis,分别代表是否等比放大,等比缩小和设置项目默认宽度*/
    /*当flex:1时,作用有两个,其一是设置了div的flex:1的项目得到剩下的宽度,其二是所有设置了flex:1的div平分父组件宽度*/
    flex:1;
    text-align: center;
    height: 49px;
    font-size:14px;
  }

  /*设置icon图片大小*/
  #tab-bar-item img{
    width:24px;
    height: 24px;
    /*用于去掉图片到文字下方的3px的间隔大小*/
    vertical-align: middle;
  /*  野可以通过这样来设置图片到文字的间隔*/
    margin-bottom: 1px;
  }
  /*.isActive{*/
  /*  color:activecolor;*/
  /*}*/
</style>
