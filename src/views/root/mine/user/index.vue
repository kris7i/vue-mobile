<template>
  <grid-page left-arrow>
    <div class="container">
      <p>欢迎您：{{$store.getters.userInfoName}}</p>
      <p>电话：{{$store.state.userInfo.phone}}</p>
    </div>
  </grid-page>
</template>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f7f8fa;
  }
</style>