<template>
  <van-tabbar class="padding34" v-model="active" :fixed="false" v-show="visible" active-color="#07c160" inactive-color="#000">
    <van-tabbar-item to="/home">
      <template #icon>
        <svg-icon name="home"/>
      </template>
      <span>首页</span>
    </van-tabbar-item>
    <van-tabbar-item to="/course" icon="description">课程</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        visible: true,
      }
    },
    watch: {
      $route: {
        handler: function(to) {
          // 判断显隐对应tabbar
          // 子页面需要显示tabbar，在下方对应的数组中添加路由
          let path = to.path;
          let homeActive = ['/home'].includes(path);
          let courseActive = ['/course', '/course/list'].includes(path);
          let mineActive = ['/mine'].includes(path);

          if (homeActive) {
            this.active = 0;
            this.visible = true;
          } else if (courseActive) {
            this.active = 1;
            this.visible = true;
          } else if (mineActive) {
            this.active = 2;
            this.visible = true;
          } else {
            this.visible = false;
          }
        },
        immediate:true
      }
    },
  }
</script>

<style>
  /* 适配iphoneX iphoneXS */
  @media screen and (device-width:375px) and (device-height:812px){
    .padding34 {
      padding-bottom: 34px;
    }
  }
  /* 适配iphoneXR iphoneXSMax */
  @media screen and (device-width:414px) and (device-height:896px){
    .padding34 {
      padding-bottom: 34px;
    }
  }
</style>