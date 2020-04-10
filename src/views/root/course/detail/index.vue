<template>
  <grid-page :title="title" left-arrow footer>
    <div class="container">
      <h1>课程详情ID: {{$route.params.id}}</h1>
    </div>
  </grid-page>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        title: '课程详情页' + this.$route.params.id
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d7f3e6;
  }
</style>