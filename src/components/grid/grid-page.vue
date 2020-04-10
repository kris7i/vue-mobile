<template>
  <div class="grid-nav-container">
    <div class="grid-nav-bar" v-if="!hiddenNav">
      <slot name="header">
        <van-nav-bar :title="title || $route.name" :left-text="leftText" :right-text="rightText" :left-arrow="leftArrow" :border="border" @click-left="onClickLeft" @click-right="onClickRight" />
      </slot>
    </div>
    <div class="grid-nav-main">
      <div class="grid-nav-main-scroll">
        <slot></slot>
        <layout-footer v-if="footer"/>
      </div>
    </div>
  </div>
</template>

<script>
  import LayoutFooter from '../layout/layout-footer';
  export default {
    name: 'grid-nav',
    props: {
      title: String,
      leftText: String,
      rightText: String,
      leftArrow: Boolean,
      border: {
        type: Boolean,
        default: true
      },
      hiddenNav: {
        type: Boolean,
        default: false,
      },
      footer: {
        type: Boolean,
        default: false
      },
    },
    components: {
      LayoutFooter
    },
    methods: {
      onClickLeft() {
        if (this.leftArrow) {
          this.$router.go(-1);
        }
        this.$emit('click-left');
      },
      onClickRight() {
        this.$emit('click-right');
      }
    },
  };
</script>

<style scoped>
  .grid-nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .grid-nav-bar {
    width: 100%;
    flex: none;
  }
  .grid-nav-main {
    flex: 1;
    position: relative;
  }
  .grid-nav-main-scroll {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    z-index: 1;
  }
  /deep/ .van-icon {
    color: #969799;
  }
</style>