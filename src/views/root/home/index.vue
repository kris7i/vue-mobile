<template>
  <grid-page>
    <div class="container">
      <h2>设计稿750px 1rem = 100px</h2>
      <h2>浏览器模拟器打开</h2>
      <div class="rem">我width是页面的3.75rem</div>
      <div class="percent">我width是页面的50%</div>
    </div>
  </grid-page>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: #f7f8fa;
  }
  .container h1, .container h2, .container div {
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .rem {
    width: 3.75rem;
    background-color: #42b983;
  }
  .percent {
    width: 50%;
    background-color: #7fffd4;
  }
</style>