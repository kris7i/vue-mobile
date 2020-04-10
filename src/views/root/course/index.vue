<template>
  <grid-page hidden-nav>
    <div class="container">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in list" :key="index" @click="navigate(item.path)">
          <div class="course-img">
            <img class="img" v-lazy="item.url"/>
            <p class="info">{{item.desc}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </grid-page>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            url: 'https://img.yzcdn.cn/vant/apple-1.jpg',
            desc: '点我到首页',
            path: '/home',
          },
          {
            url: 'https://img.yzcdn.cn/vant/apple-2.jpg',
            desc: '点我列表页',
            path: '/course/list',
          },
        ],
      }
    },
    methods: {
      navigate(path) {
        this.$router.push(path)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
    background-color: #f7f8fa;
  }
  .course-img {
    position: relative;
    width: 7.5rem;
    height: 5.9rem;
  }
  .course-img .img {
    width: 100%;
    height: 100%;
  }
  .course-img .info {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: rgba(0,0,0,.6);
    color: #fff;
    padding: 0 0.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    box-sizing: border-box;
  }
  // 重新调整indicator位置
  /deep/ .van-swipe__indicators {
    left: auto;
    transform: translateX(0);
    right: 0.2rem;
    bottom: 0.32rem;

    .van-swipe__indicator {
      width: 0.16rem;
      height: 0.16rem;
    }
  }
</style>