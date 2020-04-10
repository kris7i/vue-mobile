<template>
  <grid-page>
    <div class="container">
      <div class="course-img" v-for="(item, index) in list" :key="index" @click="navigate(item.id)">
        <img class="img" v-lazy="item.url"/>
        <p class="info">{{item.desc}} {{item.id}}</p>
      </div>
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
            desc: '点我到详情页',
            id: 1,
          },
          {
            url: 'https://img.yzcdn.cn/vant/apple-2.jpg',
            desc: '点我到详情页',
            id: 2,
          },
          {
            url: 'https://img.yzcdn.cn/vant/apple-3.jpg',
            desc: '点我到详情页',
            id: 3,
          },
        ],
      }
    },
    methods: {
      navigate(id) {
        this.$router.push({path: `/course/detail/${id}`})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: #f7f8fa;
    padding: 0.2rem;
  }
  .course-img {
    position: relative;
    width: 100%;
    height: 5.9rem;
    margin-bottom: 0.5rem;
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
</style>