<template>
  <grid-page :title="title">
    <div class="container">
      <div class="item" v-for="(item, index) in list" :key="index" @click="navigate(item.path)">{{item.name}} <van-icon name="arrow" /></div>
      <div class="item" style="justify-content: center; margin-top: 10px" @click="logout">退出登录</div>
    </div>
  </grid-page>
</template>

<script>
  export default {
    name: 'mine',
    data() {
      return {
        list: [
          {
            name: '个人信息',
            path: '/mine/user',
          },
          {
            name: '关于我们',
            path: '/mine/about',
          },
          {
            name: '重定向到404',
            path: '/xxx',
          },
        ],
      };
    },
    computed: {
      title() {
        return  this.$store.getters.token ? `欢迎您 ${this.$store.getters.userInfoName}` : '个人中心';
      },
    },
    methods: {
      navigate(path) {
        this.$router.push(path)
      },
      logout() {
        if (!this.$store.getters.token) {
          return;
        }
        this.$store.dispatch('logout').then(() => {
          this.$toast('您已退出登录');
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: #f7f8fa;
    width: 100%;
    height: 100%;
    padding-top: 0.2rem;
    box-sizing: border-box;
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.8rem;
    padding: 0 0.2rem;
    background-color: #fff;
    border-bottom: 1px solid #f7f8fa;
    &:active {
      opacity: 0.2;
    }
  }
</style>